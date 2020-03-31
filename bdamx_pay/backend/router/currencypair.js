const express      = require('express')
var mongoose       = require('mongoose');
const router       = express.Router();
const pairsDB = mongoose.model('pairs');
var async          = require('async');
let common = require('../helpers/common');

let apiresponse = {
  status: 200,
  message: "",
  data: [],
  cmscount: 0
};

router.post('/getallpairs', (req, res) => {
  try{
    var skip  = req.body.page.pageNumber * req.body.page.size;
    var limit = req.body.page.size;
    let prop1 = req.body.sorting.prop;
    var dir   = req.body.sorting['dir'];
    var srt   = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    if(req.body.search != ""){
      cnt = {$or:[{'pair': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }

    async.parallel({
      bannerTotalCount:function(cb) {      
        pairsDB.find( cnt ).countDocuments().exec(cb);
      },
      bannerData:function(cb) {
        pairsDB.find( cnt ).limit(limit).skip(skip).sort( srt ).exec(cb);
      },
    },function(err,results){
      if (err) return res.status(500).send(err);
      apiresponse.value     = [];
      apiresponse.status   = true;
      apiresponse.value     = results.bannerData;
      apiresponse.count = results.bannerTotalCount;
      apiresponse.message  = "";
      res.json(apiresponse);
     

    })
  }
  catch(e){
    console.log("getfaqlist",e);
  }
});


router.post('/getallpairss', (req, res) => {
  try{
    var skip  = req.body.page.pageNumber * req.body.page.size;
    var limit = req.body.page.size;
    let prop1 = req.body.sorting.prop;
    var dir   = req.body.sorting['dir'];
    var srt   = {}
    srt[prop1] = dir == 'desc' ? -1 : 1;

    var cnt;
    var search = req.body.search;
    console.log("searchhhhhhhhhhhhhhhhh",search);
    if(req.body.search != ""){
      cnt = {$or:[{'frompair_name': { $regex: '.*' + search + '.*',$options: 'i' }},{'topair_name': { $regex: '.*' + search + '.*',$options: 'i' }}]};
    }
    else{
      cnt = {};
    }

    async.parallel({
      bannerTotalCount:function(cb) {      
        pairsDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'fromCurrency',
              foreignField: '_id',
              as: 'frompair'
            }
          },
          {
            $lookup:
            {
              from: 'currency',
              localField: 'toCurrency',
              foreignField: '_id',
              as: 'topair'
            }
          },
          {
            $project: {
              "from_symbol_id": "$fromCurrency",
              "to_symbol_id": "$toCurrency",
              "min_trade_amount": "$minTrade",
              "fees": "$fee",
              "calculate_market_price":"$calculate_market_price",
              "percentage":"$percentage",
              "percentage_amount":"$percentage_amount",
              "feeType":"$feeType",
              "marketPrice": "$marketPrice",
              "takerFee": "$takerFee",
              "makerFee": "$makerFee",
              "status": "$status",
              "_id": "$_id",
              "option":"$option",
              "topair": "$topair",
              "frompair": "$frompair",
              "frompair_name": { $arrayElemAt: ["$frompair.currencySymbol", 0] } ,
              "topair_name": { $arrayElemAt: ["$topair.currencySymbol", 0] } ,
              "fromcurrency": { $arrayElemAt: ["$frompair._id", 0] },
              "tocurrency": { $arrayElemAt: ["$topair._id", 0] },
            }
          },
          { $match : cnt},
          ]).exec(cb);
      },
      bannerData:function(cb) {
          pairsDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'fromCurrency',
              foreignField: '_id',
              as: 'frompair'
            }
          },
          {
            $lookup:
            {
              from: 'currency',
              localField: 'toCurrency',
              foreignField: '_id',
              as: 'topair'
            }
          },
          {
            $project: {
              "from_symbol_id": "$fromCurrency",
              "to_symbol_id": "$toCurrency",
              "min_trade_amount": "$minTrade",
              "fees": "$fee",
              "calculate_market_price":"$calculate_market_price",
              "percentage":"$percentage",
              "percentage_amount":"$percentage_amount",
              "marketPrice": "$marketPrice",
              "takerFee": "$takerFee",
              "feeType":"$feeType",
              "makerFee": "$makerFee",
              "status": "$status",
              "_id": "$_id",
              "option":"$option",
              "topair": "$topair",
              "frompair": "$frompair",
              "frompair_name": { $arrayElemAt: ["$frompair.currencySymbol", 0] } ,
              "topair_name": { $arrayElemAt: ["$topair.currencySymbol", 0] } ,
              "fromcurrency": { $arrayElemAt: ["$frompair._id", 0] },
              "tocurrency": { $arrayElemAt: ["$topair._id", 0] },
            }
          },
          { $match : cnt},
          { "$sort": srt },
          { "$skip" : skip },
          { "$limit" : limit },         
          ]).exec(cb);        
      }
    },function(err,results){
            if(results.bannerData.length > 0)
            {
                var pairsData = [];
                for (var i = 0; i < results.bannerData.length; i++) {
                    var pair_details = results.bannerData[i];
                    pair_details.frompair = pair_details.frompair[0];
                    pair_details.topair = pair_details.topair[0];
                    pair_details.pair = pair_details.frompair.currencySymbol+'_'+pair_details.topair.currencySymbol;
                    pairsData[i] = pair_details;
                }
               res.json({
                    status: true,
                    value: pairsData,
                    count: results.bannerTotalCount.length
               })
            }
            else
            {
                 res.json({status: false,"Message": "No pair found"})
            }
    })
  }
  catch(e){
    console.log("getallpairs",e);
  }
});

router.post('/pairupdate', function(req, res) {
    let getdet = req.body;

    try {
        const getid = getdet.id;
        delete getdet.id;
       
        PairDB.update({ "_id": mongoose.Types.ObjectId(getid) }, req.body).exec(function (upErr, upRes) {

            if(upErr)
            {
                res.json({ "status": false, "Message": "Something went wrong" });
            }
            else{
common.updateCurrencyPair();
  PairDB.aggregate([
          {
            $lookup:
            {
              from: 'currency',
              localField: 'fromCurrency',
              foreignField: '_id',
              as: 'frompair'
            }
          },
          {
            $lookup:
            {
              from: 'currency',
              localField: 'toCurrency',
              foreignField: '_id',
              as: 'topair'
            }
          },
          {
            $project: {
              "from_symbol_id": "$fromCurrency",
              "to_symbol_id": "$toCurrency",
              "min_trade_amount": "$minTrade",
              "fees": "$fee",
              "takerFee": "$takerFee",
              "makerFee": "$makerFee",
              "status": "$status",
              "_id": "$_id",
              "topair": "$topair",
              "frompair": "$frompair",
              "fromcurrency": { $arrayElemAt: ["$frompair._id", 0] },
              "tocurrency": { $arrayElemAt: ["$topair._id", 0] },
            }
          },
         
          ]).exec(function (err, PairRes) {

                       res.json({ "status": true, "Message": "Pair details updated successfully","PairRes":PairRes });

                   })
                  
           }

       });
    }
    catch (e) {
        res.json({
            status: false,
            "Message": "Error occured",
        })
    }
});

router.post('/update_currency', (req, res) => {
  var inData = req.body

  console.log("fasdf",inData)
  pairsDB.updateOne({ _id: inData._id },{ $set:{
    minTrade : inData.min_trade_amount,
    makerFee : inData.makerFee,
    takerFee : inData.takerFee,
    marketPrice : inData.marketPrice,
    min_amt : inData.min_amt,
    max_amt : inData.max_amt,
    fee :  inData.fees,
    percentage:inData.percentage,
    percentage_amount:inData.percentage_amount,
    option:inData.option,
    feeType : inData.feeType,
    calculate_market_price : inData.calculate_market_price,
    }}).exec(function(err, resUpdate){
    common.updateCurrencyPair();      
    try
    {
      if(err) {
        res.status(500).send(err);
      } 
      else {
        pairsDB.find({ "_id": req.body._id }).exec(function(err,resData){
          if (err) return res.status(500).send(err);
          apiresponse.data = [];
          apiresponse.data = resData;
          apiresponse.message = "currency  Updated Successfully";
          res.json(apiresponse);
        });
      }
    }
    catch (err){
      console.info("update_currency", err)
    }
  });
});

router.post('/currencystatus', (req,res) => {
  try{
    pairsDB.updateOne({ "_id": req.body._id },{ "$set": { "status": req.body.status}}).exec(function(err,resData){
      res.json({ status:true, data:resData})
    })
  }
  catch(e){
    console.log("currencystatus",e);
  }
})

router.get('/getpair', (req,res) => {
  try{
    pairsDB.findOne({},{pair:1}).exec(function(err,resData){
      res.json(resData)
    })
  }
  catch(e){
    console.log("currencystatus",e);
  }
})

module.exports = router;
const PushNotification = require('push-notification');
const DeviceType = PushNotification.DeviceType;

const pn = PushNotification({
    // apn: {
    //     cert: path.resolve('./cert/cert.pem'),
    //     key: path.resolve('./cert/key.pem'),
    //     production: false,
    // },
    gcm: {
        apiKey: 'gcm-api-key'
    }
});

module.exports = {
	pushNotification : function(msg){
		const data = {
			title: msg.title,
			message: msg.message,
			// payload: {
			//     param1: 'additional data',
			//     param2: 'another data'
			// }
		};
		return {pushNotify:pn, msg:data,deviceType:DeviceType};
	}
}
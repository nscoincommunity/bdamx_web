module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Bdam_pay_server',
      script    : 'app.js',
      watch     : false,
      ignore_watch : ["Highchart/*","logs/*","dump.rdb"],
      output: 'logs/pm2/out.log',
      error: 'logs/pm2/error.log',
      log: 'logs/pm2/combined.outerr.log',
      env: {
        NODE_ENV: 'devel',
        PORT: 2087
      },
      env_production : {
        NODE_ENV: 'prod',
        PORT: 8443
      }
    }

  ]
};

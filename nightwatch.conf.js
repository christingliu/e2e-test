module.exports={
  "src_folders":["tests"],
  "output_folder":"reports",
  "custom_commands_path":"",
  "custom_assertions_path":"",
  "page_objects_path":"",
  "globals_path":"",
  "test_workers":true,

  "selenium":{
    "start_process" :true,
    "server_path" : "bin/selenium-server-standalone-3.8.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "bin/chromedriver.exe",
      "webdriver.gecko.driver" : "bin/geckodriver.exe",
      "webdriver.edge.driver" : ""
    }
  },
 
  "test_settings":{
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : true,
        "path" : ""
      },
      "desiredCapabilities": {
         "browserName":"chrome",
         "marionette":true
      }
    },
    "chrome":{
      "desiredCapabilities": {
         "browserName": "firefox"
       }
    }
  }
}
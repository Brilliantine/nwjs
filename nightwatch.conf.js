// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  src_folders: ['test'],
  page_objects_path: ['pages'],
  custom_commands_path: ['commands'],
  custom_assertions_path: ['assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],

  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
    default: {
      globals: {
        "searchText" : "Lego",
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--headless',
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: ''
      },
    },
    firefox: {
      "globals": {
        "searchText" : "ABC",
      },
      desiredCapabilities: {
        browserName: 'firefox',
      },
      webdriver: {
        start_process: true,
        server_path: ''
      }
    },
  },

};

var util = require('util');
exports.assertion = function (selector, msg) {

  const localMsg = `Testing if element ${selector} not empty.`;

  this.message = msg || localMsg;

  this.expected = function () {
    return 'Not empty';
  };

  this.pass = function (value) {
    return value !== '';
  };

  this.failure = function (result) {
    var failed = result === false || result && result.status === -1;
    if (failed) {
      this.message = msg || localMsg+' Element could not be located.';
    }

    return failed;
  };

  this.value = function (result) {
    return result.value;
  };

  this.command = function (callback) {
    return this.api.getText(selector, callback);
  };
}

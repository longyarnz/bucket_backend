'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    label = _winston.format.label,
    printf = _winston.format.printf;

/**
 * @constant {string} Format - This is the format fo logs piped into info.log
 */
/**
 * @fileoverview Logger Utility monitors and logs all output to info.log
 * for debugging and app control
 */

var myFormat = printf(function (info) {
  return '\n  ' + info.timestamp + ' [' + info.label + '] ' + info.level + ': ' + info.message + '\n';
});

/**
 * @description
 * Export the logger object to log outputs to `${info.log}
 * @exports Logger.createLogger
 */
exports.default = (0, _winston.createLogger)({
  format: combine(label({ label: 'Log to File' }), timestamp(), myFormat),
  transports: [new _winston.transports.File({ filename: 'info.log' })]
});
//# sourceMappingURL=logger.js.map
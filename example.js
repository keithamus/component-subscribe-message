'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/* eslint-disable id-match */
/* eslint-disable  react/display-name */

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

var _reactI13n = require('react-i13n');

if (typeof navigator !== 'undefined') require('svg4everybody')();
require('babel-core/polyfill');

var I13nSubscribeLink = _reactI13n.createI13nNode(_economistComponentLinkButton2['default'], {
  isLeafNode: true,
  bindClickEvent: true,
  follow: true
});
exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement('br', { style: { marginTop: 100 } }),
  _react2['default'].createElement(_index2['default'], { href: 'https://subscriptions.economist.com' }),
  _react2['default'].createElement('br', { style: { marginTop: 100 } }),
  _react2['default'].createElement(_index2['default'], { counter: '1/3', target: '_top',
    renderSubscribeLink: function (props) {
      return _react2['default'].createElement(I13nSubscribeLink, _extends({ i13nModel: {
          action: 'click',
          element: 'Subscribe link'
        }
      }, props));
    }
  }),
  _react2['default'].createElement('br', null)
);
module.exports = exports['default'];
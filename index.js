'use strict';

exports.__esModule = true;
exports['default'] = SubscribeMessage;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentBarWrapper = require('@economist/component-bar-wrapper');

var _economistComponentBarWrapper2 = _interopRequireDefault(_economistComponentBarWrapper);

var _economistComponentLinkButton = require('@economist/component-link-button');

var _economistComponentLinkButton2 = _interopRequireDefault(_economistComponentLinkButton);

function SubscribeMessage(_ref) {
  var renderSubscribeLink = _ref.renderSubscribeLink;
  var renderCloseButton = _ref.renderCloseButton;
  var onClose = _ref.onClose;
  var _ref$productImage = _ref.productImage;
  var productImage = _ref$productImage === undefined ? '/assets/product-image.png' : _ref$productImage;
  var _ref$href = _ref.href;
  var href = _ref$href === undefined ? 'https://subscriptions.economist.com' : _ref$href;

  var SubscribeLinkComponent = renderSubscribeLink || _economistComponentLinkButton2['default'];
  return _react2['default'].createElement(
    _economistComponentBarWrapper2['default'],
    {
      className: 'subscribe-message',
      classNamePrefix: 'subscribe-message',
      renderCloseButton: renderCloseButton,
      onClose: onClose
    },
    _react2['default'].createElement('img', { className: 'subscribe-message__image', src: productImage }),
    _react2['default'].createElement(
      'div',
      { className: 'subscribe-message__secondary-cta' },
      'Unlock the bigger picture every week with ',
      _react2['default'].createElement(
        'em',
        null,
        'The Economist'
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: 'subscribe-message__main-cta' },
      'Subscribe now and enjoy great savings'
    ),
    _react2['default'].createElement(
      SubscribeLinkComponent,
      { className: 'subscribe-message__subscribe-link', href: href, target: '_blank' },
      'Subscription offers'
    )
  );
}

module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMDXComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$createContext = _react2.default.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var withMDXComponents = exports.withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    return _react2.default.createElement(
      Consumer,
      null,
      function (contextComponents) {
        return _react2.default.createElement(Component, _extends({}, props, {
          components: props.components || contextComponents
        }));
      }
    );
  };
};

var MDXProvider = function MDXProvider(props) {
  return _react2.default.createElement(
    Provider,
    { value: props.components },
    props.children
  );
};

exports.default = MDXProvider;
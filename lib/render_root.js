"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
require("../style/index.css");
const react_cytoscape_1 = require("react-cytoscape");
const Buttons_1 = __importDefault(require("./Components/Buttons"));
/**
 * A component that renders JSON data as a collapsible tree.
 */
class Component extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { filter: '' };
        this.input = null;
        this.timer = 0;
    }
    componentDidMount() {
        /**
         * Stop propagation of keyboard events to JupyterLab
         */
        ReactDOM.findDOMNode(this.input).addEventListener('keydown', (event) => {
            event.stopPropagation();
        }, false);
    }
    componentWillUnmount() {
        ReactDOM.findDOMNode(this.input).removeEventListener('keydown', (event) => {
            event.stopPropagation();
        }, false);
    }
    render() {
        const { elements, style } = this.props.data;
        console.log(elements);
        return (
        //画面を分けるもの
        React.createElement("div", { style: { width: '67%', height: '100%', background: 'green' } },
            React.createElement("input", { ref: ref => (this.input = ref), onChange: event => {
                    if (this.timer) {
                        window.clearTimeout(this.timer);
                    }
                    const filter = event.target.value;
                    this.timer = window.setTimeout(() => {
                        this.setState({ filter });
                        this.timer = 0;
                    }, 300);
                }, style: {
                    position: 'absolute',
                    right: 0,
                    width: '33%',
                    maxWidth: 150,
                    zIndex: 10,
                    fontSize: 13,
                    padding: '4px 2px'
                }, type: "text", placeholder: "Filter..." }),
            React.createElement(react_cytoscape_1.ReactCytoscape, { containerID: "cy", elements: elements, style: style, layout: { name: 'cose' } }),
            React.createElement("div", { style: { width: '33%', height: '100%', position: 'absolute', right: 0, top: 0 } },
                React.createElement("div", { style: { width: '100%', height: '50%', background: 'blue' } }),
                React.createElement("div", { style: { width: '100%', height: '50%' } },
                    React.createElement(Buttons_1.default, null)))));
    }
}
exports.Component = Component;
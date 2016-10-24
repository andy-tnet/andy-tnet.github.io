import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "btn-default": {
        "textShadow": "0 1px 0 #fff",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #ffffff 0%, #e6e6e6 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#ccc",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0)"
    },
    "btn-primary": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #3071a9 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#2d6ca2",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff3071a9', GradientType=0)"
    },
    "btn-success": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #5cb85c 0%, #449d44 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#419641",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff449d44', GradientType=0)"
    },
    "btn-info": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#2aabd2",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff31b0d5', GradientType=0)"
    },
    "btn-warning": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #f0ad4e 0%, #ec971f 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#eb9316",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffec971f', GradientType=0)"
    },
    "btn-danger": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)",
        "backgroundImage": "linear-gradient(to bottom, #d9534f 0%, #c9302c 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#c12e2a",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc9302c', GradientType=0)"
    },
    "btn-default:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#e0e0e0"
    },
    "btn-primary:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#3071a9",
        "borderColor": "#2d6ca2"
    },
    "btn-success:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#449d44",
        "borderColor": "#419641"
    },
    "btn-info:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#31b0d5",
        "borderColor": "#2aabd2"
    },
    "btn-warning:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#ec971f",
        "borderColor": "#eb9316"
    },
    "btn-danger:active": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#c9302c",
        "borderColor": "#c12e2a"
    },
    "btn-defaultactive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#e0e0e0"
    },
    "btn-primaryactive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#3071a9",
        "borderColor": "#2d6ca2"
    },
    "btn-successactive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#449d44",
        "borderColor": "#419641"
    },
    "btn-infoactive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#31b0d5",
        "borderColor": "#2aabd2"
    },
    "btn-warningactive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#ec971f",
        "borderColor": "#eb9316"
    },
    "btn-dangeractive": {
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#c9302c",
        "borderColor": "#c12e2a"
    },
    "btn:active": {
        "backgroundImage": "none"
    },
    "btnactive": {
        "backgroundImage": "none"
    },
    "thumbnail": {
        "WebkitBoxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)",
        "boxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)"
    },
    "img-thumbnail": {
        "WebkitBoxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)",
        "boxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)"
    },
    "dropdown-menu > li > a:hover": {
        "backgroundColor": "#357ebd",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "dropdown-menu > li > a:focus": {
        "backgroundColor": "#357ebd",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "dropdown-menu > active > a": {
        "backgroundColor": "#357ebd",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "dropdown-menu > active > a:hover": {
        "backgroundColor": "#357ebd",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "dropdown-menu > active > a:focus": {
        "backgroundColor": "#357ebd",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "navbar": {
        "backgroundImage": "linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)",
        "backgroundRepeat": "repeat-x",
        "borderRadius": 4,
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff8f8f8', GradientType=0)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 5px rgba(0, 0, 0, 0.075)"
    },
    "navbar navbar-nav > active > a": {
        "backgroundColor": "#f8f8f8"
    },
    "navbar-brand": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.25)"
    },
    "navbar-nav > li > a": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.25)"
    },
    "navbar-inverse": {
        "backgroundImage": "linear-gradient(to bottom, #3c3c3c 0%, #222222 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0)"
    },
    "navbar-inverse navbar-nav > active > a": {
        "backgroundColor": "#222222"
    },
    "navbar-inverse navbar-brand": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "navbar-inverse navbar-nav > li > a": {
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "navbar-static-top": {
        "borderRadius": 0
    },
    "navbar-fixed-top": {
        "borderRadius": 0
    },
    "navbar-fixed-bottom": {
        "borderRadius": 0
    },
    "alert": {
        "textShadow": "0 1px 0 rgba(255, 255, 255, 0.2)",
        "WebkitBoxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05)",
        "boxShadow": "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 1px 2px rgba(0, 0, 0, 0.05)"
    },
    "alert-success": {
        "backgroundImage": "linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#b2dba1",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffc8e5bc', GradientType=0)"
    },
    "alert-info": {
        "backgroundImage": "linear-gradient(to bottom, #d9edf7 0%, #b9def0 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#9acfea",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffb9def0', GradientType=0)"
    },
    "alert-warning": {
        "backgroundImage": "linear-gradient(to bottom, #fcf8e3 0%, #f8efc0 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#f5e79e",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fff8efc0', GradientType=0)"
    },
    "alert-danger": {
        "backgroundImage": "linear-gradient(to bottom, #f2dede 0%, #e7c3c3 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#dca7a7",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffe7c3c3', GradientType=0)"
    },
    "progress": {
        "backgroundImage": "linear-gradient(to bottom, #ebebeb 0%, #f5f5f5 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffebebeb', endColorstr='#fff5f5f5', GradientType=0)"
    },
    "progress-bar": {
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #3071a9 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff3071a9', GradientType=0)"
    },
    "progress-bar-success": {
        "backgroundImage": "linear-gradient(to bottom, #5cb85c 0%, #449d44 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff449d44', GradientType=0)"
    },
    "progress-bar-info": {
        "backgroundImage": "linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff31b0d5', GradientType=0)"
    },
    "progress-bar-warning": {
        "backgroundImage": "linear-gradient(to bottom, #f0ad4e 0%, #ec971f 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffec971f', GradientType=0)"
    },
    "progress-bar-danger": {
        "backgroundImage": "linear-gradient(to bottom, #d9534f 0%, #c9302c 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc9302c', GradientType=0)"
    },
    "list-group": {
        "borderRadius": 4,
        "WebkitBoxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)",
        "boxShadow": "0 1px 2px rgba(0, 0, 0, 0.075)"
    },
    "list-group-itemactive": {
        "textShadow": "0 -1px 0 #3071a9",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #3278b3 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#3278b3",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff3278b3', GradientType=0)"
    },
    "list-group-itemactive:hover": {
        "textShadow": "0 -1px 0 #3071a9",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #3278b3 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#3278b3",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff3278b3', GradientType=0)"
    },
    "list-group-itemactive:focus": {
        "textShadow": "0 -1px 0 #3071a9",
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #3278b3 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#3278b3",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff3278b3', GradientType=0)"
    },
    "panel": {
        "WebkitBoxShadow": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "boxShadow": "0 1px 2px rgba(0, 0, 0, 0.05)"
    },
    "panel-default > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0)"
    },
    "panel-primary > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #428bca 0%, #357ebd 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff428bca', endColorstr='#ff357ebd', GradientType=0)"
    },
    "panel-success > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #dff0d8 0%, #d0e9c6 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffd0e9c6', GradientType=0)"
    },
    "panel-info > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #d9edf7 0%, #c4e3f3 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffc4e3f3', GradientType=0)"
    },
    "panel-warning > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #fcf8e3 0%, #faf2cc 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fffaf2cc', GradientType=0)"
    },
    "panel-danger > panel-heading": {
        "backgroundImage": "linear-gradient(to bottom, #f2dede 0%, #ebcccc 100%)",
        "backgroundRepeat": "repeat-x",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffebcccc', GradientType=0)"
    },
    "well": {
        "backgroundImage": "linear-gradient(to bottom, #e8e8e8 0%, #f5f5f5 100%)",
        "backgroundRepeat": "repeat-x",
        "borderColor": "#dcdcdc",
        "filter": "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0)",
        "WebkitBoxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1)",
        "boxShadow": "inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1)"
    }
});

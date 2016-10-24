import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block"
    },
    "canvas": {
        "display": "inline-block"
    },
    "video": {
        "display": "inline-block"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "html": {
        "fontFamily": "sans-serif",
        "WebkitTextSizeAdjust": "100%",
        "MsTextSizeAdjust": "100%",
        "fontSize": "62.5%",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Roboto\", Helvetica, Arial, sans-serif",
        "fontSize": 14,
        "lineHeight": 1.428571429,
        "color": "#202122",
        "backgroundColor": "#4C4D4E",
        "fontWeight": "100"
    },
    "a:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "color": "#2a6496",
        "textDecoration": "underline",
        "outlineOffset": -2
    },
    "a:active": {
        "outline": 0
    },
    "a:hover": {
        "outline": 0,
        "color": "#2a6496",
        "textDecoration": "underline"
    },
    "h1": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 36,
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #999999",
        "cursor": "help"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "hr": {
        "height": 0,
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "marginTop": 20,
        "marginBottom": 20,
        "border": 0,
        "borderTop": "1px solid #eeeeee"
    },
    "mark": {
        "color": "#000",
        "background": "#ff0"
    },
    "code": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#c7254e",
        "whiteSpace": "nowrap",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4
    },
    "kbd": {
        "fontFamily": "monospace, serif",
        "fontSize": 1
    },
    "pre": {
        "fontFamily": "Monaco, Menlo, Consolas, \"Courier New\", monospace",
        "fontSize": 13,
        "whiteSpace": "pre-wrap",
        "display": "block",
        "paddingTop": 9.5,
        "paddingRight": 9.5,
        "paddingBottom": 9.5,
        "paddingLeft": 9.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.428571429,
        "color": "#202122",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #cccccc",
        "borderRadius": 4
    },
    "samp": {
        "fontFamily": "monospace, serif",
        "fontSize": 1
    },
    "q": {
        "quotes": "\\201C\" \"\\201D\" \"\\2018\" \"\\2019"
    },
    "small": {
        "fontSize": "85%"
    },
    "sub": {
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "position": "relative",
        "fontSize": "75%",
        "lineHeight": 0,
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "fieldset": {
        "paddingTop": 0.35,
        "paddingRight": 0.625,
        "paddingBottom": 0.75,
        "paddingLeft": 0.625,
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "border": "5px solid #c0c0c0"
    },
    "legend": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "button": {
        "lineHeight": "inherit",
        "textTransform": "none",
        "borderWidth": "thick",
        "borderColor": "#DAD3CB",
        "cursor": "pointer",
        "WebkitAppearance": "button",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "backgroundImage": "none"
    },
    "input": {
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "backgroundImage": "none"
    },
    "select": {
        "lineHeight": "inherit",
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit"
    },
    "textare  margin: 0;  font-family: inherit;  font-size: 100%;}button": {
        "lineHeight": "normal"
    },
    "html input[type=\"button\"]": {
        "borderWidth": "thick",
        "borderColor": "#DAD3CB",
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=\"reset\"]": {
        "borderWidth": "thick",
        "borderColor": "#DAD3CB",
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=\"submit\"]": {
        "borderWidth": "thick",
        "borderColor": "#DAD3CB",
        "cursor": "pointer",
        "WebkitAppearance": "button"
    },
    "input[type=\"name\"]": {
        "borderWidth": "medium",
        "borderColor": "#DAD3CB"
    },
    "input[type=\"email\"]": {
        "borderWidth": "medium",
        "borderColor": "#DAD3CB"
    },
    "input[type=\"company\"]": {
        "borderWidth": "medium",
        "borderColor": "#DAD3CB"
    },
    "input[type=\"phone\"]": {
        "borderWidth": "medium",
        "borderColor": "#DAD3CB"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "input[type=\"checkbox\"]": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "boxSizing": "border-box"
    },
    "input[type=\"radio\"]": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "boxSizing": "border-box"
    },
    "input[type=\"search\"]": {
        "WebkitBoxSizing": "content-box",
        "MozBoxSizing": "content-box",
        "boxSizing": "content-box",
        "WebkitAppearance": "textfield"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "button::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "input::-moz-focus-inner": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "textarea": {
        "outline": "none",
        "resize": "none",
        "overflow": "auto",
        "verticalAlign": "top",
        "borderRadius": 6,
        "borderWidth": "medium",
        "borderColor": "#DAD3CB",
        "backgroundColor": "#faf9f8",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit",
        "backgroundImage": "none"
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "*": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "select[multiple]": {
        "backgroundImage": "none"
    },
    "a": {
        "color": "#2B3743",
        "textDecoration": "none"
    },
    "img-responsive": {
        "display": "block",
        "height": "auto",
        "maxWidth": "100%"
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "display": "inline-block",
        "height": "auto",
        "maxWidth": "100%",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.428571429,
        "backgroundColor": "#F7F9F9",
        "border": "1px solid #6F7B85",
        "borderRadius": 4,
        "WebkitTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "overflow": "hidden",
        "clip": "rect(0 0 0 0)",
        "border": 0
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "lead": {
        "marginBottom": 20,
        "fontSize": 16.099999999999998,
        "fontWeight": "200",
        "lineHeight": 1.4
    },
    "cite": {
        "fontStyle": "normal"
    },
    "text-muted": {
        "color": "#999999"
    },
    "text-primary": {
        "color": "#428bca"
    },
    "text-warning": {
        "color": "#c09853"
    },
    "text-danger": {
        "color": "#b94a48"
    },
    "text-success": {
        "color": "#468847"
    },
    "text-info": {
        "color": "#3a87ad"
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "h2": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 30
    },
    "h3": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 24
    },
    "h4": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "color": "#CA4247",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 18
    },
    "h5": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 14
    },
    "h6": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "fontWeight": "500",
        "lineHeight": 1.1,
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 12
    },
    "h4smooth": {
        "color": "#DAD3CB"
    },
    "hrstyle5": {
        "backgroundColor": "#fff",
        "borderTop": "2px dashed #8c8b8b"
    },
    "brstyled": {
        "backgroundColor": "#fff",
        "borderBottom": "2px dashed #8c8b8b"
    },
    "h1 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999",
        "fontSize": 24
    },
    "h2 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999",
        "fontSize": 18
    },
    "h3 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999",
        "fontSize": 14
    },
    "h4 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999",
        "fontSize": 14
    },
    "h5 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999"
    },
    "h6 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#999999"
    },
    "page-header": {
        "paddingBottom": 9,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderBottom": "1px solid #eeeeee"
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ol": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ul ul": {
        "marginLeft": 25,
        "marginBottom": 0
    },
    "ol ul": {
        "marginLeft": 25,
        "marginBottom": 0
    },
    "ul ol": {
        "marginLeft": 25,
        "marginBottom": 0
    },
    "ol ol": {
        "marginLeft": 25,
        "marginBottom": 0
    },
    "list-unstyled": {
        "paddingLeft": 15,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 15,
        "listStyle": "none"
    },
    "list-inline > li": {
        "display": "inline-block",
        "paddingRight": 5,
        "paddingLeft": 5
    },
    "dl": {
        "marginBottom": 20
    },
    "dt": {
        "lineHeight": 1.428571429,
        "fontWeight": "bold"
    },
    "dd": {
        "lineHeight": 1.428571429,
        "marginLeft": 0
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #999999"
    },
    "abbrinitialism": {
        "fontSize": "90%",
        "textTransform": "uppercase"
    },
    "blockquote": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderLeft": "5px solid #eeeeee"
    },
    "blockquote p": {
        "fontSize": 17.5,
        "fontWeight": "300",
        "lineHeight": 1.25
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote small": {
        "display": "block",
        "lineHeight": 1.428571429,
        "color": "#999999"
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquotepull-right": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eeeeee",
        "borderLeft": 0
    },
    "blockquotepull-right p": {
        "textAlign": "right"
    },
    "blockquotepull-right small": {
        "textAlign": "right"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "q:before": {
        "content": ""
    },
    "q:after": {
        "content": ""
    },
    "blockquote:before": {
        "content": ""
    },
    "blockquote:after": {
        "content": ""
    },
    "address": {
        "display": "block",
        "marginBottom": 20,
        "fontStyle": "normal",
        "lineHeight": 1.428571429
    },
    "preprettyprint": {
        "marginBottom": 20
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "inherit",
        "color": "inherit",
        "whiteSpace": "pre-wrap",
        "backgroundColor": "transparent",
        "border": 0
    },
    "headImage": {
        "width": 1445,
        "overflow": "hidden",
        "marginLeft": "auto",
        "marginRight": "auto",
        "marginTop": 0,
        "marginBottom": 0,
        "backgroundColor": "#202122"
    },
    "headContainer": {
        "backgroundColor": "#202122",
        "overflow": "hidden",
        "marginLeft": 15,
        "marginRight": 15,
        "marginBottom": 0
    },
    "banner": {
        "width": 1000,
        "borderRadius": 6,
        "overflow": "hidden",
        "marginTop": 60,
        "marginRight": "auto",
        "marginBottom": 60,
        "marginLeft": "auto",
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "WebkitFontSmoothing": "antialiased",
        "MozFontSmoothing": "antialiased",
        "OFontSmoothing": "antialiased",
        "fontSmoothing": "antialiased",
        "backgroundColor": "white",
        "textRendering": "optimizeLegibility",
        "boxShadow": "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    "reel": {
        "width": 1200,
        "borderRadius": 6,
        "overflow": "hidden",
        "marginTop": 60,
        "marginRight": "auto",
        "marginBottom": 60,
        "marginLeft": "auto",
        "background": "#DAD3CB",
        "boxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "WebkitFontSmoothing": "antialiased",
        "MozFontSmoothing": "antialiased",
        "OFontSmoothing": "antialiased",
        "fontSmoothing": "antialiased",
        "textRendering": "optimizeLegibility",
        "boxShadow": "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
    },
    "photobanner": {
        "height": 233,
        "width": 2490,
        "marginBottom": 0
    },
    "photoreel": {
        "height": 477,
        "width": 10176,
        "marginBottom": 0
    },
    "photoreel img": {
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "MsTransition": "all 0.5s ease",
        "transition": "all 0.5s ease"
    },
    "photoreel img:hover": {
        "WebkitTransform": "scale(0.9)",
        "MozTransform": "scale(0.9)",
        "OTransform": "scale(0.9)",
        "MsTransform": "scale(0.9)",
        "transform": "scale(0.9)",
        "cursor": "pointer",
        "WebkitBoxShadow": "0px 3px 5px rgba(0,0,0,0.2)",
        "MozBoxShadow": "0px 3px 5px rgba(0,0,0,0.2)",
        "boxShadow": "0px 3px 5px rgba(0,0,0,0.2)"
    },
    "photobanner img": {
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "MsTransition": "all 0.5s ease",
        "transition": "all 0.5s ease"
    },
    "photobanner img:hover": {
        "WebkitTransform": "scale(0.9)",
        "MozTransform": "scale(0.9)",
        "OTransform": "scale(0.9)",
        "MsTransform": "scale(0.9)",
        "transform": "scale(0.9)",
        "cursor": "pointer",
        "WebkitBoxShadow": "0px 3px 5px rgba(0,0,0,0.2)",
        "MozBoxShadow": "0px 3px 5px rgba(0,0,0,0.2)",
        "boxShadow": "0px 3px 5px rgba(0,0,0,0.2)"
    }
});
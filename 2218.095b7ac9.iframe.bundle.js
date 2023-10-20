"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2218],{"./packages/components/build-module/select-control/chevron-down.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/icons/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/icons/build-module/library/chevron-down.js"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js");const SelectControlChevronDown=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__.j,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__.fE,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__.Z,size:_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_1__.Vx})));SelectControlChevronDown.__docgenInfo={description:"",methods:[],displayName:"SelectControlChevronDown"},__webpack_exports__.Z=SelectControlChevronDown},"./packages/components/build-module/select-control/styles/select-control-styles.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{fE:function(){return DownArrowWrapper},j:function(){return InputControlSuffixWrapperWithClickThrough},Ph:function(){return Select},Vx:function(){return chevronIconSize}});var emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),rtl=__webpack_require__("./packages/components/build-module/utils/rtl.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js"),react=__webpack_require__("./node_modules/react/index.js"),component=__webpack_require__("./packages/components/build-module/spacer/component.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js");function UnconnectedInputControlSuffixWrapper(props,forwardedRef){const derivedProps=(0,use_context_system.y)(props,"InputControlSuffixWrapper");return(0,react.createElement)(component.Z,{marginBottom:0,...derivedProps,ref:forwardedRef})}var input_suffix_wrapper=(0,__webpack_require__("./packages/components/build-module/context/context-connect.js").Iq)(UnconnectedInputControlSuffixWrapper,"InputControlSuffixWrapper");UnconnectedInputControlSuffixWrapper.__docgenInfo={description:"",methods:[],displayName:"UnconnectedInputControlSuffixWrapper"};const chevronIconSize=18,Select=(0,emotion_styled_base_browser_esm.Z)("select",{target:"e1mv6sxx2"})("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:",colors_values.D.gray[900],";display:block;font-family:inherit;margin:0;width:100%;max-width:none;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;",(({disabled:disabled})=>disabled?(0,emotion_react_browser_esm.iv)({color:colors_values.D.ui.textDisabled},"","","",""):""),";",(({selectSize:selectSize="default"})=>{const fontSize={default:"13px",small:"11px","__unstable-large":"13px"}[selectSize];return fontSize?(0,emotion_react_browser_esm.iv)("font-size:","16px",";@media ( min-width: 600px ){font-size:",fontSize,";}","","",""):""}),";",(({__next40pxDefaultSize:__next40pxDefaultSize,multiple:multiple,selectSize:selectSize="default"})=>{if(multiple)return;const sizes={default:{height:40,minHeight:40,paddingTop:0,paddingBottom:0},small:{height:24,minHeight:24,paddingTop:0,paddingBottom:0},"__unstable-large":{height:40,minHeight:40,paddingTop:0,paddingBottom:0}};__next40pxDefaultSize||(sizes.default={height:30,minHeight:30,paddingTop:0,paddingBottom:0});const style=sizes[selectSize]||sizes.default;return(0,emotion_react_browser_esm.iv)(style,"","","","")}),";",(({__next40pxDefaultSize:__next40pxDefaultSize,multiple:multiple,selectSize:selectSize="default"})=>{const padding={default:16,small:8,"__unstable-large":16};__next40pxDefaultSize||(padding.default=8);const selectedPadding=padding[selectSize]||padding.default;return(0,rtl.b)({paddingLeft:selectedPadding,paddingRight:selectedPadding+chevronIconSize,...multiple?{paddingTop:selectedPadding,paddingBottom:selectedPadding}:{}})}),";",(({multiple:multiple})=>({overflow:multiple?"auto":"hidden"})),";}"),DownArrowWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"e1mv6sxx1"})("margin-inline-end:",(0,space.D)(-1),";line-height:0;"),InputControlSuffixWrapperWithClickThrough=(0,emotion_styled_base_browser_esm.Z)(input_suffix_wrapper,{target:"e1mv6sxx0"})("position:absolute;pointer-events:none;",(0,rtl.b)({right:0}),";")},"./packages/icons/build-module/icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function Icon({icon:icon,size:size=24,...props},ref){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon,{width:size,height:size,...props,ref:ref})}))},"./packages/icons/build-module/library/chevron-down.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const chevronDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}));__webpack_exports__.Z=chevronDown}}]);
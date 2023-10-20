"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5175],{"./packages/components/src/custom-gradient-picker/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/CustomGradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/custom-gradient-picker",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};__webpack_exports__.default=meta;const CustomGradientPickerWithState=({onChange:onChange,...props})=>{const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:newGradient=>{setGradient(newGradient),onChange(newGradient)}})};CustomGradientPickerWithState.displayName="CustomGradientPickerWithState";const Default=CustomGradientPickerWithState.bind({});Default.args={__nextHasNoMargin:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<string>();\n  return <CustomGradientPicker {...props} value={gradient} onChange={newGradient => {\n    setGradient(newGradient);\n    onChange(newGradient);\n  }} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4972],{"./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return AspectRatioTool}});__webpack_require__("./node_modules/react/index.js");var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/select-control/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_ASPECT_RATIO_OPTIONS=[{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Original","Aspect ratio option for dimensions control"),value:"auto"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Square - 1:1","Aspect ratio option for dimensions control"),value:"1"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Standard - 4:3","Aspect ratio option for dimensions control"),value:"4/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Portrait - 3:4","Aspect ratio option for dimensions control"),value:"3/4"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Classic - 3:2","Aspect ratio option for dimensions control"),value:"3/2"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Classic Portrait - 2:3","Aspect ratio option for dimensions control"),value:"2/3"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Wide - 16:9","Aspect ratio option for dimensions control"),value:"16/9"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Tall - 9:16","Aspect ratio option for dimensions control"),value:"9/16"},{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)("Custom","Aspect ratio option for dimensions control"),value:"custom",disabled:!0,hidden:!0}];function AspectRatioTool({panelId:panelId,value:value,onChange:onChange=(()=>{}),options:options=DEFAULT_ASPECT_RATIO_OPTIONS,defaultValue:defaultValue=DEFAULT_ASPECT_RATIO_OPTIONS[0].value,isShownByDefault:isShownByDefault=!0}){const displayValue=null!=value?value:"auto";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{hasValue:()=>displayValue!==defaultValue,label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio"),onDeselect:()=>onChange(void 0),isShownByDefault:isShownByDefault,panelId:panelId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Aspect ratio"),value:displayValue,options:options,onChange:onChange,size:"__unstable-large",__nextHasNoMarginBottom:!0})})}AspectRatioTool.displayName="AspectRatioTool",AspectRatioTool.__docgenInfo={description:"@typedef {Object} AspectRatioToolProps\n@property {string}                       [panelId]          ID of the panel this tool is associated with.\n@property {string}                       [value]            Current aspect ratio value.\n@property {AspectRatioToolPropsOnChange} [onChange]         Callback to update the aspect ratio value.\n@property {SelectControlProps[]}         [options]          Aspect ratio options.\n@property {string}                       [defaultValue]     Default aspect ratio value.\n@property {boolean}                      [isShownByDefault] Whether the tool is shown by default.",methods:[],displayName:"AspectRatioTool",props:{onChange:{defaultValue:{value:"() => {}",computed:!1},required:!1},options:{defaultValue:{value:"[\n\t{\n\t\tlabel: _x( 'Original', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'auto',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Square - 1:1',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '1',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Standard - 4:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '4/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Portrait - 3:4',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/4',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic - 3:2',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '3/2',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Classic Portrait - 2:3',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '2/3',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Wide - 16:9',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '16/9',\n\t},\n\t{\n\t\tlabel: _x(\n\t\t\t'Tall - 9:16',\n\t\t\t'Aspect ratio option for dimensions control'\n\t\t),\n\t\tvalue: '9/16',\n\t},\n\t{\n\t\tlabel: _x( 'Custom', 'Aspect ratio option for dimensions control' ),\n\t\tvalue: 'custom',\n\t\tdisabled: true,\n\t\thidden: true,\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_ASPECT_RATIO_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}}},"./packages/components/build-module/panel/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return panel}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function PanelHeader({label:label,children:children}){return(0,react.createElement)("div",{className:"components-panel__header"},label&&(0,react.createElement)("h2",null,label),children)}PanelHeader.__docgenInfo={description:"`PanelHeader` renders the header for the `Panel`.\nThis is used by the `Panel` component under the hood,\nso it does not typically need to be used.",methods:[],displayName:"PanelHeader"};var panel_header=PanelHeader;function UnforwardedPanel({header:header,className:className,children:children},ref){const classNames=classnames_default()(className,"components-panel");return(0,react.createElement)("div",{className:classNames,ref:ref},header&&(0,react.createElement)(panel_header,{label:header}),children)}var panel=(0,react.forwardRef)(UnforwardedPanel);UnforwardedPanel.__docgenInfo={description:"",methods:[],displayName:"UnforwardedPanel"}},"./packages/components/build-module/select-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Y:function(){return SelectControl}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/input-control/input-base.js"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js"),_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js");const noop=()=>{};function UnforwardedSelectControl(props,ref){const{className:className,disabled:disabled=!1,help:help,hideLabelFromVision:hideLabelFromVision,id:idProp,label:label,multiple:multiple=!1,onBlur:onBlur=noop,onChange:onChange,onFocus:onFocus=noop,options:options=[],size:size="default",value:valueProp,labelPosition:labelPosition="top",children:children,prefix:prefix,suffix:suffix,__next40pxDefaultSize:__next40pxDefaultSize=!1,__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,...restProps}=(0,_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_3__.s)(props,"wp.components.SelectControl","6.4"),[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("components-select-control",className);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_base_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{help:help,id:id,__nextHasNoMarginBottom:__nextHasNoMarginBottom},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__.Z,{className:classes,disabled:disabled,hideLabelFromVision:hideLabelFromVision,id:id,isFocused:isFocused,label:label,size:size,suffix:suffix||!multiple&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,null),prefix:prefix,labelPosition:labelPosition,__next40pxDefaultSize:__next40pxDefaultSize},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_7__.Ph,{...restProps,__next40pxDefaultSize:__next40pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled:disabled,id:id,multiple:multiple,onBlur:event=>{onBlur(event),setIsFocused(!1)},onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected:selected})=>selected)).map((({value:value})=>value));props.onChange?.(newValues,{event:event})}else props.onChange?.(event.target.value,{event:event})},onFocus:event=>{onFocus(event),setIsFocused(!0)},ref:ref,selectSize:size,value:valueProp},children||options.map(((option,index)=>{const key=option.id||`${option.label}-${option.value}-${index}`;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option",{key:key,value:option.value,disabled:option.disabled,hidden:option.hidden},option.label)})))))}const SelectControl=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(UnforwardedSelectControl);__webpack_exports__.Z=SelectControl,UnforwardedSelectControl.__docgenInfo={description:"",methods:[],displayName:"UnforwardedSelectControl"}},"./node_modules/highlight-words-core/dist/index.js":function(module){module.exports=function(modules){var installedModules={};function __nested_webpack_require_187__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_187__),module.loaded=!0,module.exports}return __nested_webpack_require_187__.m=modules,__nested_webpack_require_187__.c=installedModules,__nested_webpack_require_187__.p="",__nested_webpack_require_187__(0)}([function(module,exports,__nested_webpack_require_1468__){module.exports=__nested_webpack_require_1468__(1)},function(module,exports,__nested_webpack_require_1587__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _utils=__nested_webpack_require_1587__(2);Object.defineProperty(exports,"combineChunks",{enumerable:!0,get:function get(){return _utils.combineChunks}}),Object.defineProperty(exports,"fillInChunks",{enumerable:!0,get:function get(){return _utils.fillInChunks}}),Object.defineProperty(exports,"findAll",{enumerable:!0,get:function get(){return _utils.findAll}}),Object.defineProperty(exports,"findChunks",{enumerable:!0,get:function get(){return _utils.findChunks}})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.findAll=function findAll(_ref){var autoEscape=_ref.autoEscape,_ref$caseSensitive=_ref.caseSensitive,caseSensitive=void 0!==_ref$caseSensitive&&_ref$caseSensitive,_ref$findChunks=_ref.findChunks,findChunks=void 0===_ref$findChunks?defaultFindChunks:_ref$findChunks,sanitize=_ref.sanitize,searchWords=_ref.searchWords,textToHighlight=_ref.textToHighlight;return fillInChunks({chunksToHighlight:combineChunks({chunks:findChunks({autoEscape:autoEscape,caseSensitive:caseSensitive,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight})}),totalLength:textToHighlight?textToHighlight.length:0})};var combineChunks=exports.combineChunks=function combineChunks(_ref2){var chunks=_ref2.chunks;return chunks=chunks.sort((function(first,second){return first.start-second.start})).reduce((function(processedChunks,nextChunk){if(0===processedChunks.length)return[nextChunk];var prevChunk=processedChunks.pop();if(nextChunk.start<=prevChunk.end){var endIndex=Math.max(prevChunk.end,nextChunk.end);processedChunks.push({highlight:!1,start:prevChunk.start,end:endIndex})}else processedChunks.push(prevChunk,nextChunk);return processedChunks}),[])},defaultFindChunks=function defaultFindChunks(_ref3){var autoEscape=_ref3.autoEscape,caseSensitive=_ref3.caseSensitive,_ref3$sanitize=_ref3.sanitize,sanitize=void 0===_ref3$sanitize?defaultSanitize:_ref3$sanitize,searchWords=_ref3.searchWords,textToHighlight=_ref3.textToHighlight;return textToHighlight=sanitize(textToHighlight),searchWords.filter((function(searchWord){return searchWord})).reduce((function(chunks,searchWord){searchWord=sanitize(searchWord),autoEscape&&(searchWord=function escapeRegExpFn(string){return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(searchWord));for(var regex=new RegExp(searchWord,caseSensitive?"g":"gi"),match=void 0;match=regex.exec(textToHighlight);){var _start=match.index,_end=regex.lastIndex;_end>_start&&chunks.push({highlight:!1,start:_start,end:_end}),match.index===regex.lastIndex&&regex.lastIndex++}return chunks}),[])};exports.findChunks=defaultFindChunks;var fillInChunks=exports.fillInChunks=function fillInChunks(_ref4){var chunksToHighlight=_ref4.chunksToHighlight,totalLength=_ref4.totalLength,allChunks=[],append=function append(start,end,highlight){end-start>0&&allChunks.push({start:start,end:end,highlight:highlight})};if(0===chunksToHighlight.length)append(0,totalLength,!1);else{var lastIndex=0;chunksToHighlight.forEach((function(chunk){append(lastIndex,chunk.start,!1),append(chunk.start,chunk.end,!0),lastIndex=chunk.end})),append(lastIndex,totalLength,!1)}return allChunks};function defaultSanitize(string){return string}}])},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{YF:function(){return useFloating},x7:function(){return arrow}});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options:options,fn(state){const{element:element,padding:padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding:padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element,padding:padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement:placement="bottom",strategy:strategy="absolute",middleware:middleware=[],platform:platform,elements:{reference:externalReference,floating:externalFloating}={},transform:transform=!0,whileElementsMounted:whileElementsMounted,open:open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy:strategy,placement:placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement:placement,strategy:strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference:setReference,setFloating:setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update:update,refs:refs,elements:elements,floatingStyles:floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}},"./packages/block-editor/src/components/dimensions-tool/stories/aspect-ratio-tool.story.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/panel/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),_aspect_ratio_tool__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/block-editor/src/components/dimensions-tool/aspect-ratio-tool.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"BlockEditor (Private APIs)/DimensionsTool/AspectRatioTool",component:_aspect_ratio_tool__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{panelId:{control:{type:null}},onChange:{action:"changed"}},parameters:{sourceLink:"packages/block-editor/src/components/dimensions-tool"}};const Default=({panelId:panelId,onChange:onChangeProp,...props})=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Aspect Ratio",panelId:panelId,resetAll:()=>{setValue(void 0),onChangeProp(void 0)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_aspect_ratio_tool__WEBPACK_IMPORTED_MODULE_2__.Z,{panelId:panelId,onChange:nextValue=>{setValue(nextValue),onChangeProp(nextValue)},value:value,...props})})})};Default.displayName="Default",Default.args={panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [value, setValue] = useState(undefined);\n  const resetAll = () => {\n    setValue(undefined);\n    onChangeProp(undefined);\n  };\n  return <Panel>\n            <ToolsPanel label="Aspect Ratio" panelId={panelId} resetAll={resetAll}>\n                <AspectRatioTool panelId={panelId} onChange={nextValue => {\n        setValue(nextValue);\n        onChangeProp(nextValue);\n      }} value={value} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"];Default.__docgenInfo={description:"",methods:[],displayName:"Default"}}}]);
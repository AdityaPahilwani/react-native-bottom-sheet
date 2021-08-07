(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(16),r=n(101);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,o)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},101:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},103:function(e,t,n){"use strict";var o=n(0),r=n(104);t.a=function(){const e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)(void 0);t.a=r},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n.n(o);var a=({title:e,url:t})=>r.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:e,width:"100%"},r.a.createElement("source",{src:t,type:"video/mp4"}))},107:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(103),i=n(98),c=n(57),u=n.n(c);const s=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:d,groupId:m,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(a.a)(),[g,v]=Object(o.useState)(c),y=o.Children.toArray(e.children),h=[];if(null!=m){const e=b[m];null!=e&&e!==g&&d.some((t=>t.value===e))&&v(e)}const O=e=>{const t=e.target,n=h.indexOf(t),o=y[n].props.value;v(o),null!=m&&(f(m,o),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:o,right:r}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&r<=i&&o<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u.a.tabItemActive),setTimeout((()=>t.classList.remove(u.a.tabItemActive)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case l:{const t=h.indexOf(e.target)+1;n=h[t]||h[0];break}case s:{const t=h.indexOf(e.target)-1;n=h[t]||h[h.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>h.push(e),onKeyDown:k,onFocus:O,onClick:O},t)))),t?Object(o.cloneElement)(y.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},108:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(8),a=(n(0),n(97)),i=n(107),c=n(108),u=n(100),s=n(105),l={id:"custom-background",title:"Custom Background",description:"Bottom Sheet custom background.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/custom-background"},d={unversionedId:"guides/custom-background",id:"guides/custom-background",isDocsHomePage:!1,title:"Custom Background",description:"Bottom Sheet custom background.",source:"@site/docs/guides/custom-background.mdx",slug:"/custom-background",permalink:"/react-native-bottom-sheet/custom-background",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/v2/website/docs/guides/custom-background.mdx",version:"current",sidebar:"packages",previous:{title:"Custom Backdrop",permalink:"/react-native-bottom-sheet/custom-backdrop"},next:{title:"Adding Shadow",permalink:"/react-native-bottom-sheet/adding-shadow"}},m=[{value:"Example",id:"example",children:[]}],p={toc:m};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To override the default background, you will need to pass the prop ",Object(a.b)("inlineCode",{parentName:"p"},"backgroundComponent")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheet")," component."),Object(a.b)("p",null,"When you provide your own background component, it will receive these animated props ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," that indicates the position and the index of the sheet."),Object(a.b)("p",null,"You can extend your custom background props interface with the provided ",Object(a.b)("inlineCode",{parentName:"p"},"BottomSheetBackgroundProps")," interface to expose ",Object(a.b)("inlineCode",{parentName:"p"},"animatedIndex")," & ",Object(a.b)("inlineCode",{parentName:"p"},"animatedPosition")," into your own interface."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)(s.a,{title:"React Native Bottom Sheet Custom Background",url:Object(u.a)("video/bottom-sheet-custom-background-preview.mp4"),mdxType:"Video"}),Object(a.b)("p",null,"Here is an example of a custom background component:"),Object(a.b)(i.a,{defaultValue:"v3",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import React, { useMemo } from 'react';\nimport { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';\nimport Animated, {\n  Extrapolate,\n  interpolate,\n  interpolateColors,\n} from 'react-native-reanimated';\n\nconst CustomBackground = ({\n  animatedIndex,\n  style,\n}: BottomSheetBackgroundProps) => {\n  // animated variables\n  const animatedBackground = useMemo(\n    () =>\n      interpolateColors(animatedIndex, {\n        inputRange: [0, 1],\n        outputColorRange: ['#fff', '#a8b5eb'],\n      }),\n    [animatedIndex]\n  );\n\n  // styles\n  const containerStyle = useMemo(\n    () => [\n      style,\n      {\n        backgroundColor: animatedBackground,\n      },\n    ],\n    [style, animatedBackground]\n  );\n\n  return <Animated.View style={containerStyle} />;\n};\n\nexport default CustomBackground;\n"))),Object(a.b)(c.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"import React, { useMemo } from 'react';\nimport { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';\nimport Animated, {\n  useAnimatedStyle,\n  interpolateColor,\n} from 'react-native-reanimated';\n\nconst CustomBackground: React.FC<BottomSheetBackgroundProps> = ({\n  style,\n  animatedIndex,\n}) => {\n  //#region styles\n  const containerAnimatedStyle = useAnimatedStyle(() => ({\n    // @ts-ignore\n    backgroundColor: interpolateColor(\n      animatedIndex.value,\n      [0, 1],\n      ['#ffffff', '#a8b5eb']\n    ),\n  }));\n  const containerStyle = useMemo(\n    () => [style, containerAnimatedStyle],\n    [style, containerAnimatedStyle]\n  );\n  //#endregion\n\n  // render\n  return <Animated.View pointerEvents=\"none\" style={containerStyle} />;\n};\n\nexport default CustomBackground;\n")))))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}}}]);
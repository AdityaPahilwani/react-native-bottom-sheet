(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(97)),i={id:"react-navigation-integration",title:"React Navigation Integration",description:"Bottom Sheet React Navigation integration.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/react-navigation-integration"},c={unversionedId:"guides/react-navigation-integration",id:"guides/react-navigation-integration",isDocsHomePage:!1,title:"React Navigation Integration",description:"Bottom Sheet React Navigation integration.",source:"@site/docs/guides/react-navigation.md",slug:"/react-navigation-integration",permalink:"/react-native-bottom-sheet/react-navigation-integration",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/v2/website/docs/guides/react-navigation.md",version:"current",sidebar:"packages",previous:{title:"Adding Shadow",permalink:"/react-native-bottom-sheet/adding-shadow"},next:{title:"Troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the main goal of this library, is to allow user to fully integrate a stack navigator in the bottom sheet. This integration allow lots of opportunities for a native-like experience in your app \ud83d\ude07"),Object(a.b)("p",null,"However, there are some tricks has to be follow to enable both libraries to work together seamlessly."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You need to override ",Object(a.b)("inlineCode",{parentName:"li"},"safeAreaInsets"),", by default ",Object(a.b)("inlineCode",{parentName:"li"},"React Navigation")," add the safe area insets to all its navigators, but since your navigator will properly won't cover full screen, you will need to override it and set it to ",Object(a.b)("inlineCode",{parentName:"li"},"0"),".")),Object(a.b)("p",null,"For more details regarding the implementation, please have a look at the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/example/src/screens/integrations/NavigatorExample.tsx"},"Navigator Example"),"."))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
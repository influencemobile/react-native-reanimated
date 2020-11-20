(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{260:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),l=(t(0),t(269)),o={id:"useAnimatedScrollHandler",title:"useAnimatedScrollHandler",sidebar_label:"useAnimatedScrollHandler"},i={id:"version-2.0.0-alpha.8/api/useAnimatedScrollHandler",title:"useAnimatedScrollHandler",description:"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components.",source:"@site/versioned_docs/version-2.0.0-alpha.8/api/useAnimatedScrollHandler.md",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/useAnimatedScrollHandler",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0-alpha.8/api/useAnimatedScrollHandler.md",version:"2.0.0-alpha.8",sidebar_label:"useAnimatedScrollHandler",sidebar:"version-2.0.0-alpha.8/docs",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/useDerivedValue"},next:{title:"useAnimatedGestureHandler",permalink:"/react-native-reanimated/docs/2.0.0-alpha.8/api/useAnimatedGestureHandler"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This is a convenience hook that returns an event handler reference which can be used with React Native's scrollable components."),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("h4",{id:"scrollhandlerorhandlersobject-object-with-worklets"},Object(l.b)("inlineCode",{parentName:"h4"},"scrollHandlerOrHandlersObject")," ","[object with worklets]"),Object(l.b)("p",null,"Object containing any of the following keys: ",Object(l.b)("inlineCode",{parentName:"p"},"onScroll"),", ",Object(l.b)("inlineCode",{parentName:"p"},"onBeginDrag"),", ",Object(l.b)("inlineCode",{parentName:"p"},"onEndDrag"),", ",Object(l.b)("inlineCode",{parentName:"p"},"onMomentumBegin"),", ",Object(l.b)("inlineCode",{parentName:"p"},"onMomentumEnd"),".\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected Scrollable component."),Object(l.b)("p",null,"Each of the event worklets will receive the following parameters when called:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object carrying the information about the scroll.\nThe payload can differ depending on the type of the event (",Object(l.b)("inlineCode",{parentName:"p"},"onScroll"),", ",Object(l.b)("inlineCode",{parentName:"p"},"onBeginDrag"),", etc.).\nPlease consult ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/docs/scrollview"}),"React Native's ScrollView documentation")," to learn about scroll event structure.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between scroll event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",Object(l.b)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),Object(l.b)("h4",{id:"dependencies-array"},Object(l.b)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),Object(l.b)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{11}","{11}":!0}),"const App = () => {\n  const [state, setState] = useState(0);\n  const sv = useSharedValue(0);\n\n  const handler = useAnimatedScrollHandler(\n    {\n      onEndDrag: (e) => {\n        sv.value = state;\n      },\n    },\n    dependencies\n  );\n  //...\n  return <></>\n}\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),Object(l.b)("li",{parentName:"ul"},"empty array(",Object(l.b)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),Object(l.b)("li",{parentName:"ul"},"array of values(",Object(l.b)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),Object(l.b)("h3",{id:"returns"},"Returns"),Object(l.b)("p",null,"The hook returns a handler object that can be hooked into a scrollable container.\nNote that in order for the handler to be properly triggered, you should use containers that are wrapped with ",Object(l.b)("inlineCode",{parentName:"p"},"Animated")," (e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.ScrollView")," and not just ",Object(l.b)("inlineCode",{parentName:"p"},"ScrollView"),").\nThe handler should be passed under ",Object(l.b)("inlineCode",{parentName:"p"},"onScroll")," parameter regardless of whether it is configured to receive only scroll or also momentum or drag events."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("p",null,"In the below example we define a scroll handler by passing a single worklet handler.\nThe worklet handler is triggered for each of the scroll events dispatched to the ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.ScrollView")," component to which we attach the handler."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{10-12,29}","{10-12,29}":!0}),"import Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  useAnimatedScrollHandler,\n} from 'react-native-reanimated';\n\nfunction ScrollExample() {\n  const translationY = useSharedValue(0);\n\n  const scrollHandler = useAnimatedScrollHandler((event) => {\n    translationY.value = event.contentOffset.y;\n  });\n\n  const stylez = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateY: translationY.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, stylez]} />\n      <Animated.ScrollView\n        style={styles.scroll}\n        onScroll={scrollHandler}\n        scrollEventThrottle={16}>\n        <Content />\n      </Animated.ScrollView>\n    </View>\n  );\n}\n")),Object(l.b)("p",null,"If we are interested in receiving drag or momentum events instead of passing a single worklet object we can pass an object of worklets.\nBelow for convenience, we only show how the ",Object(l.b)("inlineCode",{parentName:"p"},"scrollHandler")," should be defined in such a case.\nThe place where we attach handler to a scrollable component remains unchanged regardless of the event types we want to receive:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const isScrolling = useSharedValue(false);\n\nconst scrollHandler = useAnimatedScrollHandler({\n  onScroll: (event) => {\n    translationY.value = event.contentOffset.y;\n  },\n  onBeginDrag: (e) => {\n    isScrolling.value = true;\n  },\n  onEndDrag: (e) => {\n    isScrolling.value = false;\n  },\n});\n")))}d.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||l;return t?r.a.createElement(m,i(i({ref:n},s),{},{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
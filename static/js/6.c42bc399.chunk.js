(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[6],{61:function(e,t,n){var r={"./ja.json":[68,9],"./zh-Hans.json":[69,10]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n.t(c,3)}))}c.keys=function(){return Object.keys(r)},c.id=61,e.exports=c},78:function(e,t,n){"use strict";n.r(t);var r,c,o,a,s,i=n(7),u=n(15),l=n.n(u),j=n(21),b=n(20),d=n(49),f=n(0),h=n.n(f),O=n(75),x=n(79),m=n(5),p=n(19),v=n(51),k=n(1),g=function(e){return Object(k.jsx)("svg",Object(v.a)(Object(v.a)({width:"1em",height:"1em",viewBox:"0 0 48 48"},e),{},{children:Object(k.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"4",children:[Object(k.jsx)("path",{d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20z"}),Object(k.jsx)("path",{d:"M6 30.986c2.632 1.055 4.527 1.055 5.684 0c1.736-1.584.238-6.388 2.67-7.713c2.43-1.325 6.135 4.548 9.597 2.616c3.462-1.933-.326-7.087 2.076-9.176c2.403-2.09 5.527.267 6.073-3.227c.546-3.493-2.548-1.978-3.142-5.28c-.395-2.2-.395-3.357 0-3.47",strokeLinecap:"round"}),Object(k.jsx)("path",{d:"M29.021 43.35c-1.874-1.918-2.549-3.7-2.024-5.348c.787-2.472 2.086-2.326 2.652-3.854c.566-1.528-1.033-3.705 2.515-5.565c2.366-1.24 5.62.196 9.759 4.311",strokeLinecap:"round"})]})}))};!function(e){e.ZH_HANS="zh-Hans",e.JA="ja",e.EN="en"}(s||(s={}));var w=(r={},Object(d.a)(r,s.EN,"English"),Object(d.a)(r,s.JA,"\u65e5\u672c\u8a9e"),Object(d.a)(r,s.ZH_HANS,"\u7b80\u4f53\u4e2d\u6587"),r),y=s.EN,E={helloWorld:"Hello World!"},C=h.a.createContext({locale:y,setLocale:function(){}}),H=C.Provider,L=function(e){var t=e.children,r=Object(f.useState)(y),c=Object(b.a)(r,2),o=c[0],a=c[1],s=Object(f.useState)(E),i=Object(b.a)(s,2),u=i[0],d=i[1];return Object(f.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o===y){e.next=7;break}return e.next=3,n(61)("./".concat(o,".json"));case 3:t=e.sent,d(t.default),e.next=8;break;case 7:d(E);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(k.jsx)(O.a,{defaultLocale:y,locale:o,messages:u,onError:function(e){console.error(e)},children:Object(k.jsx)(H,{value:{locale:o,setLocale:a},children:t})},o)},N=m.b.div(c||(c=Object(i.a)(["\n  font-size: 5em;\n  margin-bottom: 1rem;\n  color: ",";\n"])),(function(e){return e.theme.primary.color})),S=m.b.select(o||(o=Object(i.a)(["\n  font-size: 0.6em;\n  color: ",";\n  background-color: ",";\n  border-radius: 0.2rem;\n"])),(function(e){return e.theme.primary.color}),(function(e){return e.theme.primary.backgroundColor})),z=m.b.option(a||(a=Object(i.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.primary.backgroundColor})),A=function(){var e=Object(f.useContext)(C),t=e.setLocale,n=e.locale;return Object(k.jsxs)(p.b,{children:[Object(k.jsx)(N,{children:Object(k.jsx)(g,{})}),Object(k.jsx)(S,{value:n,onChange:function(e){var n=e.target.value;t(n)},children:Object.keys(w).map((function(e){var t=e;return Object(k.jsx)(z,{value:e,children:w[t]},e)}))}),Object(k.jsx)("p",{children:Object(k.jsx)(x.a,{id:"helloWorld"})})]})};t.default=function(){return Object(k.jsx)(L,{children:Object(k.jsx)(A,{})})}}}]);
//# sourceMappingURL=6.c42bc399.chunk.js.map
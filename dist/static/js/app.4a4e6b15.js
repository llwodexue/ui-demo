(function(t){function n(n){for(var r,u,i=n[0],l=n[1],c=n[2],s=0,y=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&y.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(n);while(y.length)y.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(r=!1)}r&&(a.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={app:0},a=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var p=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("b0c0");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("l-button",[t._v("默认按钮")]),e("l-button",{attrs:{type:"primary"}},[t._v("主要按钮")]),e("l-button",{attrs:{type:"success"}},[t._v("成功按钮")]),e("l-button",{attrs:{type:"info"}},[t._v("信息按钮")]),e("l-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),e("l-button",{attrs:{type:"danger"}},[t._v("危险按钮")])],1),e("div",[e("l-button",{attrs:{plain:""}},[t._v("朴素按钮")]),e("l-button",{attrs:{plain:"",type:"primary"}},[t._v("主要按钮")]),e("l-button",{attrs:{plain:"",type:"success"}},[t._v("成功按钮")]),e("l-button",{attrs:{plain:"",type:"info"}},[t._v("信息按钮")]),e("l-button",{attrs:{plain:"",type:"warning"}},[t._v("警告按钮")]),e("l-button",{attrs:{plain:"",type:"danger"}},[t._v("危险按钮")])],1),e("div",[e("l-button",{attrs:{mimicry:""}},[t._v("拟态按钮")]),e("l-button",{attrs:{mimicry:"",type:"primary"}},[t._v("主要按钮")]),e("l-button",{attrs:{mimicry:"",type:"success"}},[t._v("成功按钮")]),e("l-button",{attrs:{mimicry:"",type:"info"}},[t._v("信息按钮")]),e("l-button",{attrs:{mimicry:"",type:"warning"}},[t._v("警告按钮")]),e("l-button",{attrs:{mimicry:"",type:"danger"}},[t._v("危险按钮")])],1),e("div",[e("l-button",{attrs:{round:""}},[t._v("默认按钮")]),e("l-button",{attrs:{round:"",type:"primary"}},[t._v("主要按钮")]),e("l-button",{attrs:{round:"",type:"success"}},[t._v("成功按钮")]),e("l-button",{attrs:{round:"",type:"info"}},[t._v("信息按钮")]),e("l-button",{attrs:{round:"",type:"warning"}},[t._v("警告按钮")]),e("l-button",{attrs:{round:"",type:"danger"}},[t._v("危险按钮")])],1),e("div",[e("l-button",{attrs:{circle:""}},[t._v("1")]),e("l-button",{attrs:{circle:"",type:"primary"}},[t._v("2")]),e("l-button",{attrs:{circle:"",type:"success"}},[t._v("3")]),e("l-button",{attrs:{circle:"",type:"info"}},[t._v("4")]),e("l-button",{attrs:{circle:"",type:"warning"}},[t._v("5")]),e("l-button",{attrs:{circle:"",type:"danger"}},[t._v("6")])],1)])},a=[],u={name:"App"},i=u,l=(e("5c0b"),e("2877")),c=Object(l["a"])(i,o,a,!1,null,null,null),p=c.exports,s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"l-button",class:["l-button--"+t.type,{"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle,"is-mimicry":t.mimicry}]},[e("span",[t._t("default")],2)])},y=[],f=(e("caad"),{name:"LButton",props:{type:{type:String,default:"default",validator:function(t){return["default","primary","info","success","warning","danger"].includes(t)}},plain:{type:Boolean,default:!1},mimicry:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}}}),b=f,d=(e("ebc6"),Object(l["a"])(b,s,y,!1,null,"08774348",null)),v=d.exports;r["a"].config.productionTip=!1,r["a"].component(v.name,v),new r["a"]({render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";e("9c0c")},"9c0c":function(t,n,e){},ae94:function(t,n,e){},ebc6:function(t,n,e){"use strict";e("ae94")}});
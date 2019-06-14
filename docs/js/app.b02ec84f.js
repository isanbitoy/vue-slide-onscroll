(function(t){function e(e){for(var s,r,l=e[0],o=e[1],u=e[2],p=0,m=[];p<l.length;p++)r=l[p],a[r]&&m.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var o=i[l];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"app__header"},[s("div",{staticClass:"header__first-child"},[s("a",{attrs:{href:t.github_link,target:"_blank"}},[s("span",{attrs:{title:t.github_link}},[s("i",{staticClass:"fa fa-github"})])]),s("h1",[t._v("vue-slide-onscroll")])]),t._m(0),t._m(1),s("nav",[s("a",{attrs:{href:t.github_link,target:"_blank"}},[s("img",{attrs:{src:t.github_star}})]),s("a",{attrs:{href:t.npm_link,target:"_blank"}},[s("img",{attrs:{src:t.npm_version}}),s("img",{attrs:{src:t.npm_download}})]),s("a",{attrs:{href:t.vue_link}},[s("img",{attrs:{src:t.vue_svg}})])])]),s("main",{staticClass:"app__content"},[s("section",{staticClass:"content__box top"},[s("h1",[t._v("Usage")]),s("code",{staticClass:"code--usage A"},[s("pre",[t._v(t._s(t.usageCodeA))])]),s("h3",[t._v("or")]),s("code",{staticClass:"code--usage B"},[s("pre",[t._v(t._s(t.usageCodeB))])])]),s("h1",[t._v("Example")]),s("section",{staticClass:"content__box bottom"},[s("div",{staticClass:"sample--horizontal"},[s("div",[s("v-slide",{attrs:{initPos:"left-to-right"}},[s("figure",[s("img",{attrs:{src:i("e9d6")}})])])],1),s("v-slide",{attrs:{initPos:"right-to-left"}},[s("p",{staticClass:"sample__paragraph--A"},[t._v("    \n                        "+t._s(t.sampleParagraphA)+"\n                    ")])])],1),s("div",{staticClass:"sample--vertical"},[s("div",{staticClass:"sample__paragraph--C"},[s("v-slide",{attrs:{initPos:"bottom-to-top"}},[s("h3",[t._v("slide transition from bottom to top")]),s("p",[t._v("\n                            "+t._s(t.sampleParagraphC)+"\n                        ")])])],1),s("div",{staticClass:"sample__paragraph--D"},[s("v-slide",{attrs:{initPos:"top-to-bottom"}},[s("h3",[t._v("slide transition from top to bottom")]),s("p",[t._v("\n                            "+t._s(t.sampleParagraphD)+"\n                        ")])])],1),s("div",{staticClass:"sample__paragraph--E"},[s("v-slide",{attrs:{initPos:"bottom-to-top"}},[s("h3",[t._v("slide transition from bottom to top")]),s("p",[t._v("\n                            "+t._s(t.sampleParagraphE)+"\n                        ")])])],1)]),s("div",{staticClass:"sample--horizontal"},[s("v-slide",{attrs:{initPos:"left-to-right"}},[s("p",{staticClass:"sample__paragraph--B"},[t._v("\n                        "+t._s(t.sampleParagraphB)+"\n                    ")])]),s("div",[s("v-slide",{attrs:{initPos:"top-to-bottom"}},[s("figure",[s("img",{attrs:{src:i("a0a4")}})])])],1)],1)])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("simple slide transition on scroll for vue")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header__last-child"},[i("h3",{staticClass:"install--command"},[t._v("npm install --save vue-slide-onscroll")])])}],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-onscroll",style:t.slide_style},[t._t("default")],2)},l=[],o=i("9aa5"),u=o["a"],c=(i("fc28"),i("2877")),p=Object(c["a"])(u,r,l,!1,null,null,null),m=p.exports,d={name:"app",components:{"v-slide":m},data:function(){return{github_link:"https://github.com/isanbitoy/vue-slide-onscroll",npm_link:"https://www.npmjs.com/package/vue-slide-onscroll",vue_link:"https://vuejs.org/",install_code:"npm install --save vue-slide-onscroll",github_star:"https://img.shields.io/github/stars/isanbitoy/vue-slide-onscroll.svg?style=social&label=Star",npm_version:"https://img.shields.io/npm/v/vue-slide-onscroll.svg",npm_download:"https://img.shields.io/npm/dm/vue-slide-onscroll.svg",vue_svg:"https://img.shields.io/badge/vue-3.0-green.svg",usageCodeA:"import Vue from 'vue' \nimport SlideOnScroll from 'vue-slide-onscroll' \n\nVue.component('v-slide', SlideOnScroll)",usageCodeB:"<template>\n    <div class=\"app\">\n        <v-slide initPos=\"left-to-right\">\n            <div>...</div>\n        </v-slide>\n    </div>\n</template>\n\n<script>\nimport { SlideOnScroll } from 'vue-slide-onscroll'\n\nexport default {\n    el: '#app',\n    components: {\n        'v-slide': SlideOnScroll\n    },\n    data: function() {\n        return {\n            ...\n        }\n    }\n}\n<script>",usageCodeC:'v-slide initPos="right-to-left">\n    <p>...</p>\n</v-slide>',sampleParagraphA:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum pellentesque metus quis sollicitudin. Mauris id sodales elit, in tempus justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam dui tortor, sollicitudin eget orci quis, vehicula facilisis tortor. Phasellus ipsum nisl, maximus quis ex a, pretium tincidunt mauris. Sed quis urna non quam rhoncus tempor sit amet at ex. Duis sit amet risus lorem. Cras nunc sapien, consectetur vitae placerat non, venenatis a mauris. Suspendisse sollicitudin vitae nibh a vehicula. Aenean iaculis erat sed enim bibendum porttitor. Quisque cursus rhoncus lorem, et vehicula odio malesuada et. Duis in nulla iaculis, cursus mauris sit amet, tempus turpis. Aenean vulputate vestibulum nunc. Suspendisse viverra vulputate ex at venenatis. Nulla nec cursus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus",sampleParagraphB:"Vestibulum fermentum eu erat porta sollicitudin. Cras in lectus nec nulla porta hendrerit nec ullamcorper nisi. Ut vel neque sit amet tortor scelerisque scelerisque. Morbi ullamcorper leo quis tortor auctor, in porta justo condimentum. Quisque maximus nisi diam, ut rhoncus ligula elementum ac. Vestibulum vitae velit vitae augue ornare consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat vel lorem a viverra. Vestibulum at suscipit purus. Etiam ligula felis, tempus sit amet tempus eget, sodales sed sem. Curabitur porttitor sapien vulputate, faucibus diam nec, blandit tellus. Mauris porttitor neque in urna aliquet vulputate. Praesent felis dolor, ornare quis libero et, dapibus tincidunt mauris. Etiam nec libero arcu.",sampleParagraphC:"Nunc quis quam ante. Integer vel ipsum in lorem fermentum eleifend sit amet a nibh. Phasellus aliquam ac enim id ullamcorper. In tellus nunc, sodales auctor molestie sit amet, malesuada id diam. Proin et eros vitae libero malesuada finibus. Nulla ac ullamcorper erat, at bibendum libero. Curabitur laoreet risus quis arcu malesuada fringilla.",sampleParagraphD:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis imperdiet urna, eget auctor nulla. Vivamus semper bibendum sem, vel mattis elit commodo sagittis. Sed quis augue ultrices, tristique nunc non, gravida sapien. Vestibulum sed maximus velit. Vivamus facilisis ultrices commodo.",sampleParagraphE:"Integer interdum purus vitae nibh molestie, viverra laoreet libero ullamcorper. Quisque eros eros, scelerisque et tempor ut, consequat vitae lacus. Aliquam vel ornare leo, nec iaculis risus. Integer nulla ex, interdum eu porttitor sit amet, scelerisque eu libero. In et vulputate tortor. Sed id magna a velit interdum cursus in nec lorem."}}},v=d,f=(i("5c0b"),Object(c["a"])(v,a,n,!1,null,null,null)),h=f.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("5e27"),a=i.n(s);a.a},"5e27":function(t,e,i){},"9aa5":function(t,e,i){"use strict";(function(t){i("ac6a");var s=i("59ad"),a=i.n(s),n=function(t){return!isNaN(a()(t))&&isFinite(t)};e["a"]={name:"SlideOnScroll",props:{initPos:{type:String,default:""},posValue:{default:12},duration:{type:String,default:"0.5"}},computed:{slide_style:function(){var t={"--tx":this.set_X+"px","--ty":this.set_Y+"px"};return t},set_X:function(){switch(this.initPos){case"right-to-left":return this.posValue;case"left-to-right":return-this.posValue}return n(this.initPos)?this.initPos:0},set_Y:function(){switch(this.initPos){case"top-to-bottom":return-this.posValue;case"bottom-to-top":return this.posValue}return n(this.initPos)?this.initPos:0}},methods:{onScroll:function(){var t=document.querySelectorAll(".slide-onscroll");t.forEach(function(t){var e=t.getBoundingClientRect().top,i=window.innerHeight/1.5;e-i<=0?t.classList.add("active"):t.classList.remove("active")})}},created:function(){t.browser&&window.addEventListener("scroll",this.onScroll)},destroyed:function(){t.browser&&window.removeEventListener("scroll",this.onScroll)}}}).call(this,i("4362"))},a0a4:function(t,e,i){t.exports=i.p+"img/going_up.b73e087e.svg"},df2d:function(t,e,i){},e9d6:function(t,e,i){t.exports=i.p+"img/moving_forward.bee9fd9b.svg"},fc28:function(t,e,i){"use strict";var s=i("df2d"),a=i.n(s);a.a}});
//# sourceMappingURL=app.b02ec84f.js.map
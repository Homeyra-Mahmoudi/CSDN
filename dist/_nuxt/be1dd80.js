(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(t,o,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("655d962d",content,!0,{sourceMap:!1})},303:function(t,o,n){"use strict";n(283)},304:function(t,o,n){var e=n(60)((function(i){return i[1]}));e.push([t.i,".breadcrump-link{margin-bottom:10px;margin-left:20px}.single-breadcrump-link:hover{-webkit-text-decoration:underline;text-decoration:underline}.orientation-info{background:#c4caec;box-shadow:0 0 0 0 transparent,0 2px 4px 0 rgba(0,0,0,.15);box-sizing:border-box;color:#fff;font-weight:700;left:0;margin-top:6px;padding:10px 0;position:relative;top:-6px;width:100vw;z-index:10}",""]),e.locals={},t.exports=e},312:function(t,o,n){"use strict";n.r(o);var e={props:{pathsList:{type:Array,default:function(){return[]}},breadcrumpClass:{type:String,default:function(){return""}}},data:function(){return{myPathList:this.pathsList}},mounted:function(){this.myPathList===[]?(this.$root.$emit("location-from-breadcrump","Home"),console.log("Emit home")):(console.log("Emit "),console.log(this.myPathList),this.$root.$emit("location-from-breadcrump",this.myPathList[0].pathName))}},r=(n(303),n(25)),component=Object(r.a)(e,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"orientation-info",class:t.breadcrumpClass},[o("div",{staticClass:"container"},t._l(t.myPathList,(function(n,e){return o("span",{key:"breadcrump-link-"+e},[o("a",{staticClass:"font-Roboto text-white text-base text-pink-800 sm:pl-10 text-normal"},[o("nuxt-link",{attrs:{to:n.path}},[t._v(" > "+t._s(n.pathName)+" ")])],1)])})),0)])}),[],!1,null,null,null);o.default=component.exports}}]);
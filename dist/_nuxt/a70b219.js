(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{186:function(t,e,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("e3f8f93e",content,!0,{sourceMap:!1})},187:function(t,e,o){var content=o(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("4f7cb178",content,!0,{sourceMap:!1})},195:function(t,e,o){"use strict";var n=o(196),r=o(197),l={components:{Headers:n.default,Footers:r.default}},d=(o(275),o(25)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("Headers",{attrs:{navLinks:[{name:"Home",link:"/",dropdown:!1},{name:"Chi Siamo",link:"/ChiSiamo",dropdown:!1},{name:"Eventi Passati",link:"/EventiPassati",dropdown:!0,dropdownLinks:[{name:"Current Event",link:"/CurrentEvent",dropdown:!1}]}]}}),t._v(" "),e("Nuxt"),t._v(" "),e("Footers")],1)}),[],!1,null,null,null);e.a=component.exports},196:function(t,e,o){"use strict";o.r(e);o(270),o(29),o(18),o(36),o(58);var n={props:["name","logoImg","navLinks"],methods:{openMobileNav:function(){var t=document.getElementById("fademenu"),nav=document.querySelector(".nav-links"),e=document.querySelectorAll(".nav-links li");nav.classList.toggle("nav-active"),t.classList.toggle("toggle"),e.forEach((function(link,t){link.style.animation||link.style.webkitAnimation?(link.style.animation="",link.style.webkitAnimation=""):(link.style.webkitAnimation="navLinkFade 0.5s ease forwards ".concat(t/7,"s"),link.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7,"s"))}))},openDropdownNav:function(){document.querySelectorAll(".dropdown-link").forEach((function(t){t.addEventListener("mouseover",(function(){t.children[1].style.display="block"})),t.addEventListener("mouseleave",(function(){t.children[1].style.display="none"}))}))},countClicksOnMobileDropdown:function(){document.querySelectorAll(".dropdown-link").forEach((function(t){var e=t.clicks||0;t.addEventListener("click",(function(){++e%2==0?window.location.href=t.children[0].getAttribute("href"):(event.preventDefault(),t.children[1].style.display="block",setTimeout((function(){t.children[1].style.display="none"}),5e3))})),setTimeout((function(){e=0}),8e3)}))}},mounted:function(){this.openDropdownNav(),window.innerWidth<768&&this.countClicksOnMobileDropdown()}},r=(o(273),o(25)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("nav",[e("div",{attrs:{id:"logo"}},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/logo-tresized.png",alt:"Logo"}})])],1),t._v(" "),e("ul",{staticClass:"nav-links"},t._l(t.navLinks,(function(o){return e("li",{key:o.key},[!1===o.dropdown?e("a",{attrs:{href:o.link}},[t._v(t._s(o.name))]):e("div",{staticClass:"dropdown-link"},[e("a",{attrs:{href:o.link}},[t._v("\n         "+t._s(o.name)+"\n         "),e("span",{staticStyle:{position:"absolute"}},[t._v("﹀")])]),t._v(" "),e("ul",{staticClass:"dropdown-menu"},t._l(o.dropdownLinks,(function(o){return e("li",{key:o.key},[e("a",{attrs:{href:o.link}},[t._v(t._s(o.name))])])})),0)])])})),0),t._v(" "),e("div",{attrs:{id:"fademenu"},on:{click:function(e){return t.openMobileNav()}}},[e("div",{staticClass:"line1"}),t._v(" "),e("div",{staticClass:"line2"}),t._v(" "),e("div",{staticClass:"line3"})])])}),[],!1,null,null,null);e.default=component.exports},197:function(t,e,o){"use strict";o.r(e);var n={},r=o(25),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid sm:grid-cols-3 sm:gap-cols-4 realtive bg-footer-blue-dark md:pl-44 md:pr-44 pl-4 pr-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"col-span-1 sm:pt-10 pb-4"},[e("p",{staticClass:"font-Roboto lg:text-2xl text-white text-extrabold pb-4"},[t._v("Quick Links")]),t._v(" "),e("ul",{staticClass:"list-none"},[e("li",[e("nuxt-link",{staticClass:"font-Roboto lg:text-l text-white text-light",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"font-Roboto lg:text-l text-white text-light",attrs:{to:"/ChiSiamo"}},[t._v("Chi Siamo")])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"font-Roboto lg:text-l text-white text-light",attrs:{to:"/EventiPassati"}},[t._v("Eventi Passati")])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"invisible lg:visible col-span-1 lg:pt-10 lg:pb-10"},[t("img",{attrs:{src:"/Logo-new-CSDN.png",alt:"Logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-span-1 sm:pt-10 pb-4"},[e("p",{staticClass:"font-Roboto lg:text-2xl text-white text-extrabold pb-4"},[t._v("Conttati")]),t._v(" "),e("p",{staticClass:"font-Roboto lg:text-l text-white text-light"},[t._v("Segreteria del Centro Studi, Via San Pio  V n. 20-10125 TORINO Tel. 011/669.28.48-650.81.97 Fax 011/74.32.141")]),t._v(" "),e("a",{staticClass:"font-Roboto lg:text-l text-white text-light underline",attrs:{href:"mailto:rcarapelle@carapelle-clivio.it"}},[t._v("rcarapelle@carapelle-clivio.it")])])}],!1,null,null,null);e.default=component.exports},198:function(t,e,o){o(199),t.exports=o(200)},268:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(61).default)("17bc9ac2",content,!0,{sourceMap:!1})},269:function(t,e,o){var n=o(60)((function(i){return i[1]}));n.push([t.i,'/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.invisible{visibility:hidden}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{bottom:0;left:0;right:0;top:0}.col-span-1{grid-column:span 1/span 1}.col-start-1{grid-column-start:1}.col-end-6{grid-column-end:6}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-auto{height:auto}.max-w-full{max-width:100%}.flex-shrink{flex-shrink:1}.basis-1\\/2{flex-basis:50%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.list-inside{list-style-position:inside}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.list-image-\\[url\\(\\/EventiPassatii\\/Presentation-white\\.svg\\)\\]{list-style-image:url(/EventiPassatii/Presentation-white.svg)}.list-image-\\[url\\(\\/EventiPassatii\\/Presentation\\.svg\\)\\]{list-style-image:url(/EventiPassatii/Presentation.svg)}.list-image-\\[url\\(\\/EventiPassatii\\/book-round-svgrepo-com-white\\.svg\\)\\]{list-style-image:url(/EventiPassatii/book-round-svgrepo-com-white.svg)}.list-image-\\[url\\(\\/EventiPassatii\\/book-round-svgrepo-com\\.svg\\)\\]{list-style-image:url(/EventiPassatii/book-round-svgrepo-com.svg)}.list-image-\\[url\\(\\/EventiPassatii\\/camera-round-svgrepo-com-white\\.svg\\)\\]{list-style-image:url(/EventiPassatii/camera-round-svgrepo-com-white.svg)}.list-image-\\[url\\(\\/EventiPassatii\\/camera-round-svgrepo-com\\.svg\\)\\]{list-style-image:url(/EventiPassatii/camera-round-svgrepo-com.svg)}.items-center{align-items:center}.justify-center{justify-content:center}.gap-10{gap:2.5rem}.gap-4{gap:1rem}.overflow-hidden{overflow:hidden}.whitespace-break-spaces{white-space:break-spaces}.rounded-lg{border-radius:.5rem}.bg-basic-light-blue{--tw-bg-opacity:1;background-color:#c4caec;background-color:rgba(196,202,236,var(--tw-bg-opacity))}.bg-blue-950{--tw-bg-opacity:1;background-color:#172554;background-color:rgba(23,37,84,var(--tw-bg-opacity))}.bg-footer-blue-dark{--tw-bg-opacity:1;background-color:#051c38;background-color:rgba(5,28,56,var(--tw-bg-opacity))}.bg-light-blue-row{--tw-bg-opacity:1;background-color:#e8eaf6;background-color:rgba(232,234,246,var(--tw-bg-opacity))}.bg-navbar-blue-color{--tw-bg-opacity:1;background-color:#bfbcdc;background-color:rgba(191,188,220,var(--tw-bg-opacity))}.bg-pink-900{--tw-bg-opacity:1;background-color:#831843;background-color:rgba(131,24,67,var(--tw-bg-opacity))}.bg-pink-950{--tw-bg-opacity:1;background-color:#500724;background-color:rgba(80,7,36,var(--tw-bg-opacity))}.bg-opacity-30{--tw-bg-opacity:0.3}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.fill-slate-950{fill:#020617}.fill-white{fill:#fff}.p-2{padding:.5rem}.p-4{padding:1rem}.px-14{padding-left:3.5rem;padding-right:3.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.pb-2{padding-bottom:.5rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pl-10{padding-left:2.5rem}.pl-14{padding-left:3.5rem}.pl-16{padding-left:4rem}.pl-2{padding-left:.5rem}.pl-4{padding-left:1rem}.pl-44{padding-left:11rem}.pr-14{padding-right:3.5rem}.pr-4{padding-right:1rem}.pr-44{padding-right:11rem}.pr-8{padding-right:2rem}.pt-2{padding-top:.5rem}.pt-4{padding-top:1rem}.pt-8{padding-top:2rem}.text-left{text-align:left}.text-center{text-align:center}.font-roboto{font-family:Roboto,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.font-bold{font-weight:700}.font-extrathin{font-weight:50}.font-light{font-weight:300}.font-normal{font-weight:400}.font-thin{font-weight:100}.uppercase{text-transform:uppercase}.italic{font-style:italic}.text-black,.text-footer-black-darker{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.text-pink-800{--tw-text-opacity:1;color:#9d174d;color:rgba(157,23,77,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}@media (min-width:1024px){.lg\\:container{width:100%}@media (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1536px){.lg\\:container{max-width:1536px}}}.hover\\:text-sky-500:hover{--tw-text-opacity:1;color:#0ea5e9;color:rgba(14,165,233,var(--tw-text-opacity))}.group:hover .group-hover\\:opacity-50{opacity:.5}@media (min-width:640px){.sm\\:ml-96{margin-left:24rem}.sm\\:grid{display:grid}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:px-14{padding-left:3.5rem;padding-right:3.5rem}.sm\\:py-2{padding-bottom:.5rem;padding-top:.5rem}.sm\\:py-4{padding-bottom:1rem;padding-top:1rem}.sm\\:pb-10{padding-bottom:2.5rem}.sm\\:pb-14{padding-bottom:3.5rem}.sm\\:pb-2{padding-bottom:.5rem}.sm\\:pb-4{padding-bottom:1rem}.sm\\:pl-10{padding-left:2.5rem}.sm\\:pl-14{padding-left:3.5rem}.sm\\:pl-16{padding-left:4rem}.sm\\:pl-2{padding-left:.5rem}.sm\\:pl-28{padding-left:7rem}.sm\\:pl-4{padding-left:1rem}.sm\\:pr-12{padding-right:3rem}.sm\\:pr-14{padding-right:3.5rem}.sm\\:pr-8{padding-right:2rem}.sm\\:pt-10{padding-top:2.5rem}.sm\\:pt-2{padding-top:.5rem}.sm\\:pt-20{padding-top:5rem}.sm\\:pt-4{padding-top:1rem}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:flex-row{flex-direction:row}.md\\:bg-blue-950{--tw-bg-opacity:1;background-color:#172554;background-color:rgba(23,37,84,var(--tw-bg-opacity))}.md\\:bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.md\\:from-blue-950{--tw-gradient-from:#172554 var(--tw-gradient-from-position);--tw-gradient-to:rgba(23,37,84,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.md\\:from-40\\%{--tw-gradient-from-position:40%}.md\\:via-60\\%{--tw-gradient-via-position:60%}.md\\:to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)}.md\\:py-4{padding-bottom:1rem;padding-top:1rem}.md\\:py-6{padding-bottom:1.5rem;padding-top:1.5rem}.md\\:pl-44{padding-left:11rem}.md\\:pr-44{padding-right:11rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.md\\:font-bold{font-weight:700}}@media (min-width:1024px){.lg\\:visible{visibility:visible}.lg\\:grid{display:grid}.lg\\:w-1\\/4{width:25%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.lg\\:pb-10{padding-bottom:2.5rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:text-base{font-size:1rem;line-height:1.5rem}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}}',""]),n.locals={},t.exports=n},273:function(t,e,o){"use strict";o(186)},274:function(t,e,o){var n=o(60)((function(i){return i[1]}));n.push([t.i,'nav{align-items:center;background-color:#c4caec;display:flex;font-family:"Montserrat",sans-serif;justify-content:space-around;min-height:8vh}div#logo{color:#fefefe;font-size:2rem;font-weight:800;letter-spacing:5px;margin-left:6rem}ul.nav-links{display:flex;justify-content:flex-end;line-height:75px;margin-right:8rem;width:40%}ul.nav-links li{list-style:none}ul.nav-links a{color:#fff;display:block;font-size:1.2rem;font-weight:500;padding-left:35px;-webkit-text-decoration:none;text-decoration:none}#fademenu{cursor:pointer;display:none}#fademenu div{background-color:#fcd7df;height:3px;margin:8px;width:30px}ul.dropdown-menu{cursor:pointer;display:none;left:5vh;min-width:0;position:relative;top:-3vh}ul.dropdown-menu li,ul.dropdown-menu li:first-child,ul.dropdown-menu li:last-child{margin:0}ul.dropdown-menu a{background-color:#c4caec;line-height:5vh;line-height:50px;padding:3px;position:fixed}@media screen and (max-width:1024px){ul.nav-links{width:50%}}@media screen and (max-width:768px){ul.nav-links{align-items:center;background-color:#c4caec;display:none;flex-direction:column;height:92vh;justify-content:flex-start;opacity:1;padding:100px;position:absolute;right:0;top:8vh;transform:translateX(100%);transition:transform .5s ease-in;width:100%;z-index:20}ul.nav-links li{opacity:0}ul.nav-links a{color:#8e1250;font-size:large;font-weight:400;width:100%}div#fademenu{display:block}ul.dropdown-menu{height:100px;margin-left:30px;position:relative;top:0;width:100%}div#logo{color:#fefefe;font-size:2rem;font-weight:800;letter-spacing:5px;margin-left:0}}.nav-active{display:block!important;transform:translateX(0)!important}@keyframes navLinkFade{0%{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}.toggle .line1{transform:rotate(-45deg) translate(-9px,10px)}.toggle .line2{opacity:0}.toggle .line3{transform:rotate(45deg) translate(-5px,-6px)}',""]),n.locals={},t.exports=n},275:function(t,e,o){"use strict";o(187)},276:function(t,e,o){var n=o(60)((function(i){return i[1]}));n.push([t.i,"body{background:linear-gradient(180deg,#c3c6e7 15%,#caafbd 42%,#69113e 80%)}",""]),n.locals={},t.exports=n}},[[198,22,1,23]]]);
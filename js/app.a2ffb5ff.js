(function(t){function e(e){for(var s,i,r=e[0],o=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],s=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(s=!1)}s&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},c=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/typing/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ca2":function(t,e,n){},"0d0e":function(t,e,n){},"1ba2":function(t,e,n){"use strict";n("0ca2")},"48b81":function(t,e,n){"use strict";n("bfab")},"4b9f":function(t,e,n){"use strict";n("c398")},"4f21":function(t,e,n){"use strict";n("0d0e")},5352:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b680"),n("4d90"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a=Object(s["f"])("p",null,"Practice typing code. See your speed and discover problem keys and combinations.",-1),c=Object(s["f"])("p",{class:"subtitle"},[Object(s["e"])("Based off "),Object(s["f"])("a",{href:"https://typing.io"},"typing.io")],-1);function i(t,e,n,i,r,o){var l=Object(s["o"])("CodeContainer"),u=Object(s["o"])("TypingTracker");return Object(s["i"])(),Object(s["c"])(s["a"],null,[a,c,Object(s["f"])(u,{codeId:"code"},{default:Object(s["s"])((function(){return[Object(s["f"])(l)]})),_:1})],64)}var r=Object(s["v"])("data-v-4fe24cc6");Object(s["k"])("data-v-4fe24cc6");var o={class:"typing-container"},l={class:"controls"},u={key:0},d=Object(s["e"])(" Go "),p=Object(s["f"])("p",null,[Object(s["f"])("span",null,"(Ctrl-Enter)")],-1),f={key:1},b=Object(s["f"])("p",null,[Object(s["f"])("span",null,"(Ctrl-Enter)")],-1),h={key:2},v={key:0};Object(s["j"])();var j=r((function(t,e,n,a,c,i){var r=Object(s["o"])("TimerDisplay"),j=Object(s["o"])("ResultSection");return Object(s["i"])(),Object(s["c"])("div",o,[Object(s["f"])("div",l,[a.state==a.ts.INACTIVE?(Object(s["i"])(),Object(s["c"])("div",u,[Object(s["f"])("button",{onClick:e[1]||(e[1]=function(){var t;return a.tsession.start&&(t=a.tsession).start.apply(t,arguments)}),id:"go"},[d,p])])):Boolean(a.state&a.ts.ACTIVE)?(Object(s["i"])(),Object(s["c"])("div",f,[Object(s["f"])("button",{onClick:e[2]||(e[2]=function(){var t;return a.tsession.pause&&(t=a.tsession).pause.apply(t,arguments)}),id:"pause"},[Object(s["e"])(Object(s["p"])(a.state&a.ts.PAUSED?"Unpause":"Pause")+" ",1),b]),Object(s["f"])("button",{onClick:e[3]||(e[3]=function(){var t;return a.tsession.reset&&(t=a.tsession).reset.apply(t,arguments)}),id:"reset"},"Reset")])):Boolean(a.state&a.ts.FINISHED)?(Object(s["i"])(),Object(s["c"])("div",h,[Object(s["f"])("button",{onClick:e[4]||(e[4]=function(){var t;return a.tsession.reset&&(t=a.tsession).reset.apply(t,arguments)}),id:"reset"},"Reset")])):Object(s["d"])("",!0)]),Object(s["f"])(r,{seconds:a.seconds,state:a.state},null,8,["seconds","state"]),Object(s["n"])(t.$slots,"default"),Boolean(a.state&a.ts.FINISHED)?(Object(s["i"])(),Object(s["c"])("div",v,[Object(s["f"])(j,{stats:a.tsession.getStats()},null,8,["stats"])])):Object(s["d"])("",!0)])})),O=Object(s["v"])("data-v-147f7719");Object(s["k"])("data-v-147f7719");var m={class:"results",ref:"results"},y=Object(s["f"])("h1",null,"Results Summary",-1),k={class:"results-table"},g=Object(s["f"])("td",null,"typeable characters",-1),I={class:"value"},C=Object(s["f"])("td",{class:"derivation"},null,-1),w=Object(s["f"])("td",null,"typed characters",-1),S={class:"value"},E={class:"derivation"},T={class:"contents"},A={class:"calculations"},x=Object(s["f"])("td",null,null,-1),L={class:"charCount"},P=Object(s["f"])("td",null,"typeable characters",-1),N=Object(s["f"])("td",null,"+",-1),D={class:"incorrectCount"},_=Object(s["f"])("td",null,"incorrectly typed",-1),B=Object(s["f"])("td",null,"+",-1),H={class:"collateralCount"},V=Object(s["f"])("td",null,"collaterally typed before backspacing",-1),$=Object(s["f"])("td",null,"+",-1),R={class:"backspaceCount"},F=Object(s["f"])("td",null,"backspaces",-1),M=Object(s["f"])("td",null,"unproductive keystroke overhead",-1),K={class:"value"},U={class:"derivation"},q={class:"computation"},W={class:"fraction"},J={class:"numerator"},G={class:"denominator"},z=Object(s["f"])("td",null,"elapsted time",-1),Q={class:"value"},X=Object(s["f"])("td",{class:"derivation"},null,-1),Y=Object(s["f"])("td",null,"wpm",-1),Z={class:"value"},tt={class:"derivation"},et={class:"computation"},nt={class:"fraction"},st={class:"numerator"},at={class:"denominator"},ct=Object(s["f"])("span",{class:"times"},"x",-1),it={class:"fraction"},rt=Object(s["f"])("div",{class:"numerator"},"1",-1),ot={class:"denominator"};Object(s["j"])();var lt=O((function(t,e,n,a,c,i){return Object(s["i"])(),Object(s["c"])("div",m,[y,Object(s["f"])("table",k,[Object(s["f"])("tbody",null,[Object(s["f"])("tr",null,[g,Object(s["f"])("td",null,[Object(s["f"])("span",I,Object(s["p"])(n.stats.typeable),1)]),C]),Object(s["f"])("tr",null,[w,Object(s["f"])("td",null,[Object(s["f"])("span",S,Object(s["p"])(i.total),1)]),Object(s["f"])("td",E,[Object(s["f"])("div",T,[Object(s["f"])("table",A,[Object(s["f"])("tr",null,[x,Object(s["f"])("td",L,Object(s["p"])(n.stats.typeable),1),P]),Object(s["f"])("tr",null,[N,Object(s["f"])("td",D,Object(s["p"])(n.stats.incorrect),1),_]),Object(s["f"])("tr",null,[B,Object(s["f"])("td",H,Object(s["p"])(n.stats.collateral),1),V]),Object(s["f"])("tr",null,[$,Object(s["f"])("td",R,Object(s["p"])(n.stats.backspaces),1),F])])])])]),Object(s["f"])("tr",null,[M,Object(s["f"])("td",null,[Object(s["f"])("span",K,Object(s["p"])(t.$filters.percent(i.overhead)),1)]),Object(s["f"])("td",U,[Object(s["f"])("div",q,[Object(s["f"])("span",W,[Object(s["f"])("div",J,Object(s["p"])(i.total)+" typed characters - "+Object(s["p"])(n.stats.typeable)+" typeable characters ",1),Object(s["f"])("div",G,Object(s["p"])(n.stats.typeable)+" typeable characters",1)])])])]),Object(s["f"])("tr",null,[z,Object(s["f"])("td",Q,Object(s["p"])(t.$filters.minutes(n.stats.seconds)),1),X]),Object(s["f"])("tr",null,[Y,Object(s["f"])("td",Z,Object(s["p"])(t.$filters.number(i.wpm)),1),Object(s["f"])("td",tt,[Object(s["f"])("div",et,[Object(s["f"])("span",nt,[Object(s["f"])("div",st,Object(s["p"])(n.stats.typeable)+" typeable characters",1),Object(s["f"])("div",at,Object(s["p"])(c.charsPerWord)+" characters per word",1)]),ct,Object(s["f"])("span",it,[rt,Object(s["f"])("div",ot,Object(s["p"])(t.$filters.minutes(n.stats.seconds)),1)])])])])])])],512)})),ut={name:"ResultSection",props:{stats:Object},data:function(){return{charsPerWord:5}},computed:{minutes:function(){var t=this.stats.seconds;return t/60},total:function(){var t=this.stats,e=t.typeable,n=t.incorrect,s=t.collateral,a=t.backspaces;return e+n+s+a},overhead:function(){var t=this.stats.typeable;return(this.total-t)/t},wpm:function(){var t=this.stats.typeable;return t/this.charsPerWord*(1/this.minutes)}},mounted:function(){var t=this.$refs["results"];t.scrollIntoView({behavior:"smooth"})}};n("4b9f");ut.render=lt,ut.__scopeId="data-v-147f7719";var dt=ut,pt=(n("4160"),n("a630"),n("13d5"),n("a9e3"),n("ac1f"),n("3ca3"),n("466d"),n("159b"),n("5530")),ft=n("b85c"),bt=n("d4ec"),ht=n("bee2"),vt={INACTIVE:0,ACTIVE:1,PAUSED:2,FINISHED:4},jt=function(){function t(e,n,s){Object(bt["a"])(this,t),this.elementId=e,this.nodes=[],this.activeIndex=0,this.typeable=null,this.stats={incorrect:0,collateral:0,backspaces:0,misses:{}},this.backtrack=!1,this.seconds=0,this.timer=null,this.state=n,this.setState=s,this.handleInput=this.handleInput.bind(this)}return Object(ht["a"])(t,[{key:"reset",value:function(){this.stop(),this.setBacktrack(!1),this.setFinished(!1),this.setPaused(!1),this.nodes.forEach((function(t){t.classList.remove("active","incorrect","collateral","wasincorrect","wascollateral"),t.classList.add("pending")})),this.stats={incorrect:0,collateral:0,backspaces:0,misses:{}},this.activeIndex=0,this.seconds=0,this.state=this.setState(vt.INACTIVE)}},{key:"countTypeable",value:function(){return this.nodes.reduce((function(t,e){return t+Number(!e.classList.contains("skip"))}),0)}},{key:"addClass",value:function(t){var e=this.nodes[this.activeIndex].classList;e.contains(t)||e.add(t)}},{key:"removeClass",value:function(t){this.nodes[this.activeIndex].classList.remove(t)}},{key:"updateClasses",value:function(t){var e=t.add,n=t.remove;if(n){var s,a=Object(ft["a"])(n);try{for(a.s();!(s=a.n()).done;){var c=s.value;this.removeClass(c)}}catch(l){a.e(l)}finally{a.f()}}if(e){var i,r=Object(ft["a"])(e);try{for(r.s();!(i=r.n()).done;){var o=i.value;this.addClass(o)}}catch(l){r.e(l)}finally{r.f()}}}},{key:"activeChar",value:function(){return this.nodes[this.activeIndex].innerText}},{key:"contains",value:function(t){return this.nodes[this.activeIndex].classList.contains(t)}},{key:"setBacktrack",value:function(t){this.backtrack=t;var e=document.getElementById(this.elementId);e.classList.remove("backtrack"),t&&e.classList.add("backtrack")}},{key:"setPaused",value:function(t){var e=document.getElementById(this.elementId);e.classList.remove("paused"),t&&e.classList.add("paused")}},{key:"markActive",value:function(){this.updateClasses({add:["active"],remove:["pending","incorrect","collateral"]})}},{key:"markIncorrect",value:function(){if(this.backtrack)this.updateClasses({add:["collateral","wascollateral"]}),++this.stats.collateral;else{var t=this.activeChar();this.updateClasses({add:["incorrect","wasincorrect"]}),++this.stats.incorrect,this.stats.misses[t]?++this.stats.misses[t]:this.stats.misses[t]=1,this.setBacktrack(!0)}}},{key:"startTimer",value:function(){var t=this;this.state=this.setState(vt.ACTIVE),this.timer=setInterval((function(){++t.seconds}),1e3)}},{key:"stopTimer",value:function(){this.state=this.setState(this.state|vt.PAUSED),clearInterval(this.timer)}},{key:"start",value:function(){this.nodes=Array.from(document.getElementById(this.elementId).childNodes),this.typeable=this.typeable||this.countTypeable(),this.reset(),this.startTimer(),this.markActive(),window.addEventListener("keydown",this.handleInput)}},{key:"stop",value:function(){window.removeEventListener("keydown",this.handleInput),this.stopTimer()}},{key:"pause",value:function(){this.state&vt.PAUSED?(this.startTimer(),this.setPaused(!1)):(this.stopTimer(),this.setPaused(!0))}},{key:"getStats",value:function(){return Object(pt["a"])({typeable:this.typeable,seconds:this.seconds},this.stats)}},{key:"isFinished",value:function(){return!this.backtrack&&this.activeIndex===this.nodes.length-1}},{key:"setFinished",value:function(t){var e=document.getElementById(this.elementId).classList;e.remove("finished"),t&&(e.add("finished"),this.removeClass("active"),this.state=this.setState(vt.FINISHED))}},{key:"step",value:function(t){var e=t.newline,n=t.backspace;this.removeClass("active");do{if(n)this.backtrack&&this.contains("incorrect")&&this.setBacktrack(!1),this.updateClasses({add:["pending"],remove:["collateral","incorrect"]}),this.activeIndex>0&&--this.activeIndex;else{if(!(this.activeIndex<this.nodes.length-1))break;++this.activeIndex}}while(this.contains("skip")||e&&this.nodes[this.activeIndex].innerText.match(/\s/));this.backtrack&&this.contains("incorrect")&&this.setBacktrack(!1),this.markActive()}},{key:"handleInput",value:function(t){if(!(this.state.value&vt.PAUSED)&&!(t.ctrlKey||t.altKey||t.metaKey||"Shift"===t.key)){t.preventDefault();var e=t.key;if("Backspace"===e)++this.stats.backspaces,this.step({backspace:!0});else{var n=this.nodes[this.activeIndex].innerText,s="Enter"===e;!this.backtrack&&(e===n||s&&"\n"===n)?this.isFinished()?(this.stop(),this.setFinished(!0)):this.step({newline:s}):(this.markIncorrect(),this.step({newline:s}))}}}}]),t}(),Ot=Object(s["v"])("data-v-422c6dc3");Object(s["k"])("data-v-422c6dc3");var mt={class:"timer"};Object(s["j"])();var yt=Ot((function(t,e,n,a,c,i){return Object(s["i"])(),Object(s["c"])("div",mt,[Object(s["f"])("span",{class:i.className},Object(s["p"])(t.$filters.minutes(n.seconds)),3)])})),kt={name:"TimerDisplay",props:{seconds:Number,state:Number},computed:{className:function(){var t=this.state&vt.PAUSED,e=!t&&this.state&vt.ACTIVE;return{"timer-paused":t,"timer-active":e}}}};n("1ba2");kt.render=yt,kt.__scopeId="data-v-422c6dc3";var gt=kt,It={name:"TypingTracker",props:{codeId:String},components:{TimerDisplay:gt,ResultSection:dt},setup:function(t){var e=Object(s["m"])(vt.INACTIVE),n=function(t){return e.value=t},a=Object(s["l"])(new jt(t.codeId,e,n));window.ts=a;var c=function(t){t.ctrlKey&&"Enter"===t.key&&(e.value==vt.INACTIVE?a.start():e.value&vt.ACTIVE&&a.pause())};Object(s["g"])((function(){window.addEventListener("keydown",c)})),Object(s["h"])((function(){window.removeEventListener("keydown",c)}));var i=Object(s["q"])(a),r=i.seconds;return{ts:vt,tsession:a,state:e,seconds:r}}};n("4f21");It.render=j,It.__scopeId="data-v-4fe24cc6";var Ct=It;function wt(t,e,n,a,c,i){var r=Object(s["o"])("HighlightCode");return Object(s["i"])(),Object(s["c"])(r,{code:c.code,onHighlightCode:i.setupCode},null,8,["code","onHighlightCode"])}n("a15b"),n("d81d");var St={class:"highlight-container"},Et={class:"highlight-header"},Tt=Object(s["f"])("div",{class:"highlight-separator"},null,-1),At={class:"highlight-controls"},xt=Object(s["f"])("h4",null,"Highlighted Language",-1),Lt=Object(s["f"])("td",null,"Detected:",-1),Pt=Object(s["f"])("td",null,"Change:",-1),Nt=Object(s["e"])("      "),Dt=Object(s["e"])("\n    ");function _t(t,e,n,a,c,i){return Object(s["i"])(),Object(s["c"])("div",St,[Object(s["f"])("div",Et,[Tt,Object(s["f"])("div",At,[xt,Object(s["f"])("table",null,[Object(s["f"])("tbody",null,[Object(s["f"])("tr",null,[Lt,Object(s["f"])("td",null,Object(s["p"])(c.detected),1)]),Object(s["f"])("tr",null,[Pt,Object(s["f"])("td",null,[Object(s["f"])("form",{onSubmit:e[2]||(e[2]=Object(s["u"])((function(){return i.updateLanguage&&i.updateLanguage.apply(i,arguments)}),["prevent"]))},[Object(s["t"])(Object(s["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.language=t}),type:"text"},null,512),[[s["r"],c.language]])],32)])])])])])]),Object(s["f"])("pre",null,[Nt,Object(s["f"])("code",{id:"code",class:i.languageClass},Object(s["p"])(n.code),3),Dt])])}var Bt=n("1487"),Ht=n.n(Bt),Vt={name:"HighlightedCode",props:{code:String},emits:["highlight-code"],data:function(){return{language:"javascript",detected:"javascript"}},computed:{languageClass:function(){return"hljs ".concat(this.language||"javascript")}},mounted:function(){this.highlightAll()},methods:{highlightAll:function(){var t=this;document.querySelectorAll("pre code").forEach((function(e){Ht.a.highlightBlock(e),t.detected=e.classList.item(e.classList.length-1)})),this.$emit("highlight-code")},updateLanguage:function(){var t=document.querySelector("#code");t.innerHTML=this.code,this.highlightAll()}}};n("a0e7");Vt.render=_t;var $t=Vt,Rt=(n("99af"),n("1276"),function(t,e){var n=document.createElement("span");return n.innerHTML=t,n.className=e,n}),Ft=function t(e,n){if("SPAN"===e.nodeName)return n=n+" "+e.className,Array.from(e.childNodes).reduce((function(e,s){return e.concat(t(s,n+(s.className?" "+s.className:"")))}),[]);var s=!1;return Array.from(e.textContent.split("")).map((function(t){var e;return s&&t.match(/\s/)?e="skip":"\n"===t?(s=!0,e="return pending"):(s=!1,e="".concat(n," pending")),Rt(t,e)}))},Mt=function(t){var e=!1;t.forEach((function(t){e&&t.textContent.match(/\s/)?t.classList.add("skip"):e=!!t.classList.contains("hljs-comment")}))},Kt=function(t){var e,n=[],s=Object(ft["a"])(t.childNodes);try{for(s.s();!(e=s.n()).done;){var a=e.value;"hljs-comment"===a.className?(a.classList.add("skip"),n.push(a)):n=n.concat(Ft(a,""))}}catch(c){s.e(c)}finally{s.f()}return Mt(n),n},Ut=(n("5352"),{name:"CodeContainer",components:{HighlightCode:$t},data:function(){return{code:"function initProps (vm: Component, propsOptions: Object) {",code1:"function initProps (vm: Component, propsOptions: Object) {\n  const propsData = vm.$options.propsData || {}\n  const props = vm._props = {}\n  // cache prop keys so that future props updates can iterate using Array\n  // instead of dynamic object key enumeration.\n  const keys = vm.$options._propKeys = []\n  const isRoot = !vm.$parent\n  // root instance props should be converted\n  if (!isRoot) {\n    toggleObserving(false)\n  }\n  for (const key in propsOptions) {\n    keys.push(key)\n    const value = validateProp(key, propsOptions, propsData, vm)\n    /* istanbul ignore else */\n    if (process.env.NODE_ENV !== 'production') {\n      const hyphenatedKey = hyphenate(key)\n      if (isReservedAttribute(hyphenatedKey) ||\n          config.isReservedAttr(hyphenatedKey)) {\n        warn(\n          `\"${hyphenatedKey}\" is a reserved attribute and cannot be used as component prop.`,\n          vm\n        )\n      }\n      defineReactive(props, key, value, () => {\n        if (!isRoot && !isUpdatingChildComponent) {\n          warn(\n            `Avoid mutating a prop directly since the value will be ` +\n            `overwritten whenever the parent component re-renders. ` +\n            `Instead, use a data or computed property based on the prop's ` +\n            `value. Prop being mutated: \"${key}\"`,\n            vm\n          )\n        }\n      })\n    } else {\n      defineReactive(props, key, value)\n    }\n    // static props are already proxied on the component's prototype\n    // during Vue.extend(). We only need to proxy props defined at\n    // instantiation here.\n    if (!(key in vm)) {\n      proxy(vm, `_props`, key)\n    }\n  }\n    toggleObserving(true)\n  }"}},methods:{setupCode:function(){var t=document.querySelector("pre code"),e=Kt(t);t.innerHTML=e.map((function(t){return t.outerHTML})).join("")}}});Ut.render=wt;var qt=Ut,Wt=(n("7a39"),{name:"App",components:{TypingTracker:Ct,CodeContainer:qt}});n("48b81");Wt.render=i;var Jt=Wt,Gt=(n("d811"),Object(s["b"])(Jt));Gt.config.globalProperties.$filters={minutes:function(t){var e=Math.floor(t/60),n=t-60*e;return String(e).padStart(2,"0")+":"+String(n).padStart(2,"0")},number:function(t){return t.toFixed(2)},percent:function(t){return"%"+Math.round(100*t)}},Gt.mount("#app")},"69b1":function(t,e,n){},"7a39":function(t,e,n){},a0e7:function(t,e,n){"use strict";n("69b1")},bfab:function(t,e,n){},c398:function(t,e,n){}});
//# sourceMappingURL=app.a2ffb5ff.js.map
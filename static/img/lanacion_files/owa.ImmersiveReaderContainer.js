self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.ImmersiveReaderContainer.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[344],{10120:function(e,t,r){"use strict";r.r(t);var o=r(42),a=r(12639),i=r(10),c=r(23),n=r(1),s=r(254),l=r(1249),d=r(76),m=r(26),u=r(5613),b=r(2216),h=r(1456),g=r(2836),f=r(12640),p="https://learningtools.edog.onenote.com/learningtoolsapp/reader",y="https://learningtools.onenote.com/learningtoolsapp/reader";function O(e){Object(b.a)("Keyboard")}var j=Object(o.a)((function(e){var t=n.useRef();Object(h.c)(t,Object(g.b)().closeMail,O),n.useEffect((function(){var e=Object(c.autorun)((function(){u.e.apiResponse&&2===u.e.immersiveReaderFrameState&&o.current&&(b.current&&b.current.addCheckmark("SendingPostMessageToFrame"),o.current.contentWindow.postMessage(JSON.stringify(u.e.apiResponse),"*"))}));return function(){e()}}),[]);Object(l.a)("message",(function(e){e&&0!==u.e.immersiveReaderFrameState&&0===r.current.toLowerCase().indexOf(e.origin.toLowerCase())&&("ImmersiveReader-ReadyForContent"===e.data?(b.current&&b.current.addCheckmark("ReceivedReadyForContent"),Object(u.c)(),o.current.focus()):"CloseImmersiveReader"===e.data&&(b.current&&b.current.addCheckmark("ReceivedCloseReader"),j.current=!0,Object(u.a)()))}));var r=n.useRef(function(){var e=y;Object(d.h)("rp-immersiveReaderDogfood")&&(e=p);var t=Object(m.a)().SessionSettings.UserCulture;return e+"?exitCallback=CloseImmersiveReader&appId=OWA&sessionId="+u.e.sessionId+"&ui="+t+"&appSubId=React"}()),o=n.useRef(),b=n.useRef(),j=n.useRef();return 0===u.e.immersiveReaderFrameState||b.current?0===u.e.immersiveReaderFrameState&&b.current&&(j.current?b.current.end():b.current.endWithError("ServerError",new Error("Did not receive close callback")),b.current=null):(b.current=new s.a("ImmersiveReaderContainer"),b.current.addCustomData({sessionId:u.e.sessionId}),j.current=!1),0!==u.e.immersiveReaderFrameState?n.createElement("div",{className:f.immersiveReaderContainer,ref:t},n.createElement("iframe",{"aria-modal":"true",id:"immersive-reader-iframe",className:f.immersiveReaderIframe,title:Object(i.b)(a.a),allowFullScreen:!0,src:r.current,ref:function(e){b.current&&b.current.addCheckmark("GotFrameRef"),o.current=e}})):null}));r.d(t,"ImmersiveReaderContainer",(function(){return j}))},1249:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(1),a={};function i(e){var t;null===(t=a[e.type])||void 0===t||t.forEach((function(t){return t(e)}))}function c(e){var t;return a[e]=null!==(t=a[e])&&void 0!==t?t:new Map}function n(e,t,r){var a=o.useRef();o.useEffect((function(){return function(e,t,r){var o=c(e);0===o.size&&window.addEventListener(e,i),o.set(t,r)}(e,a,t),function(){return function(e,t){var r=c(e);r.delete(t),0===r.size&&window.removeEventListener(e,i)}(e,a)}}),r)}},12639:function(e){e.exports=JSON.parse('{"a":"Uhd"}')},12640:function(e,t,r){var o=r(12641),a=r(109);"string"==typeof o&&(o=[[e.i,o]]);for(var i=0;i<o.length;i++)a.loadStyles(o[i][1],!1);o.locals&&(e.exports=o.locals)},12641:function(e,t,r){(t=e.exports=r(108)(!1)).push([e.i,"._1gop7q4bCchow_bCsGR2xp{top:0;bottom:0;position:absolute;z-index:3001}html[dir=ltr] ._1gop7q4bCchow_bCsGR2xp,html[dir=rtl] ._1gop7q4bCchow_bCsGR2xp{left:0;right:0}._3Aug-3iJYlDVJH1X_Xo95r{position:fixed;top:0;bottom:0;width:100%;height:100%}html[dir] ._3Aug-3iJYlDVJH1X_Xo95r{border:0;margin:0;padding:0}html[dir=ltr] ._3Aug-3iJYlDVJH1X_Xo95r,html[dir=rtl] ._3Aug-3iJYlDVJH1X_Xo95r{left:0;right:0}",""]),t.locals={immersiveReaderContainer:"_1gop7q4bCchow_bCsGR2xp",immersiveReaderIframe:"_3Aug-3iJYlDVJH1X_Xo95r"}},1484:function(e,t,r){"use strict";var o=r(4),a=Object(o.action)("closeFlexPane",(function(e){return{flexPaneId:e}}));t.a=a},1600:function(e,t,r){"use strict";function o(){return window.O365Shell}var a=r(4),i=Object(a.action)("openFlexPane",(function(e){return{flexPaneId:e}})),c=(Object(a.orchestrator)(i,(function(e){var t=o();t&&t.FlexPane.OpenFlexPaneForProvider(e.flexPaneId)})),r(1484));Object(a.orchestrator)(c.a,(function(e){var t=o();t&&t.FlexPane.CloseFlexPaneForProvider(e.flexPaneId)}));function n(e){var t=o();t&&t.Theme.SetSearchActive(e)}function s(e,t){o().Extensibility.SetCustomHeaderButtonBadgeValue(e,t)}function l(e,t){o().Extensibility.UpdateButtonState(e,t)}r.d(t,"a",(function(){return c.a})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return l})),r.d(t,"b",(function(){return o}))},2751:function(e){e.exports=JSON.parse('{"a":"Cza"}')},2836:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var o=r(0),a=r(3682),i=r(3446),c=r(2751),n=r(10),s=r(76),l=r(1174),d=r(61),m="writeEmail",u="emailList",b="readEmail",h="goTo",g="emailActions";function f(){return[{category:m,displayName:Object(n.b)(i.V)},{category:u,displayName:Object(n.b)(i.i)},{category:b,displayName:Object(n.b)(i.L)},{category:h,displayName:Object(n.b)(i.s)},{category:g,displayName:Object(n.b)(i.h)}]}function p(){var e={};return Object(s.h)("cmp-quickSwitcher")&&(e.goToQuickSwitcher={category:h,description:Object(n.b)(i.w),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object(o.__assign)({newMail:{category:m,description:Object(n.b)(i.F),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"]},sendMail:{category:m,description:Object(n.b)(i.Q),hotmail:Object(d.l)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(d.l)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:m,description:Object(n.b)(i.N),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"]},replyAll:{category:m,description:Object(n.b)(i.M),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"]},forward:{category:m,description:Object(n.b)(i.p),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"]},saveDraft:{category:m,description:Object(n.b)(i.O),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s"},discardDraft:{category:m,description:Object(n.b)(i.g),hotmail:"esc",owa:"esc"},gotoMail:{category:h,description:Object(n.b)(i.u),hotmail:"ctrl+shift+1",yahoo:"ctrl+shift+1",gmail:"ctrl+shift+1",owa:"ctrl+shift+1"},gotoCalendar:{category:h,description:Object(n.b)(i.q),hotmail:"ctrl+shift+2",yahoo:"ctrl+shift+2",gmail:"ctrl+shift+2",owa:"ctrl+shift+2"},gotoPeople:{category:h,description:Object(n.b)(i.v),hotmail:"ctrl+shift+3",yahoo:"ctrl+shift+3",gmail:"ctrl+shift+3",owa:"ctrl+shift+3"},goToToDo:{category:h,description:Object(l.b)()?Object(n.b)(i.z):Object(n.b)(i.y),hotmail:"ctrl+shift+4",yahoo:"ctrl+shift+4",gmail:"ctrl+shift+4",owa:"ctrl+shift+4"},gotoInbox:{category:h,description:Object(n.b)(i.t),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i"},gotoDrafts:{category:h,description:Object(n.b)(i.r),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:h,description:Object(n.b)(i.x),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:h,description:Object(n.b)(i.P),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q"},undoAction:{category:g,description:Object(n.b)(i.U),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z"},selectUnselectMessage:{category:u,description:Object(n.b)(i.T),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space"},selectAll:{category:u,description:Object(n.b)(a.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a"},deselectAll:{category:u,description:Object(n.b)(i.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc"},home:{category:u,description:Object(n.b)(i.A),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"]},end:{category:u,description:Object(n.b)(i.j),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"]},deleteMail:{category:g,description:Object(n.b)(i.f),hotmail:"del",yahoo:"del",gmail:"#",owa:"del"},openMail:{category:b,description:Object(n.b)(i.H),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"]},openMailInPopout:{category:b,description:Object(n.b)(i.I),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter"},closeMail:{category:b,description:Object(n.b)(i.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc"},openNextItem:{category:b,description:Object(n.b)(i.J),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+."},openPrevItem:{category:b,description:Object(n.b)(i.K),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,"},focusNextItemPart:{category:b,description:Object(n.b)(i.n),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:b,description:Object(n.b)(i.o),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:b,description:Object(n.b)(i.k),hotmail:"x",owa:"x"},expandAll:{category:b,description:Object(n.b)(i.l),gmail:";"},collapseAll:{category:b,description:Object(n.b)(i.e),gmail:":"},softDeleteMail:{category:g,description:Object(n.b)(i.S),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del"},newFolder:{category:g,description:Object(n.b)(i.G),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e"},markAsRead:{category:g,description:Object(n.b)(i.D),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(d.l)()?"q":["q","ctrl+q"]},markAsUnread:{category:g,description:Object(n.b)(i.E),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"]},toggleFlag:{category:g,description:Object(n.b)(i.m),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins"},archiveMail:{category:g,description:Object(n.b)(i.a),hotmail:"e",gmail:"e",owa:"e"},markAsJunk:{category:g,description:Object(n.b)(i.C),hotmail:"j",gmail:"shift+1",owa:"j"},moveToFolder:{category:g,description:Object(n.b)(c.a),hotmail:"v",gmail:"v",owa:"v"},categorize:{category:g,description:Object(n.b)(i.b),hotmail:"c",gmail:"l",owa:"c"},insertHyperlink:{category:m,description:Object(n.b)(i.B),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k"},keyboardShortcuts:{category:h,description:Object(n.b)(i.R),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}},e)}},3438:function(e,t,r){"use strict";var o=r(4);t.a=Object(o.action)("SHOW_IN_IMMERSIVE_READER",(function(e,t,r){return{itemId:e,actionSource:t,subActionSource:r}}))},3446:function(e){e.exports=JSON.parse('{"V":"Kpc","i":"Lpc","L":"Mpc","s":"Npc","h":"Opc","w":"Ppc","F":"Qpc","Q":"Rpc","N":"Spc","M":"Tpc","p":"Upc","O":"Vpc","g":"Wpc","u":"Xpc","q":"Ypc","v":"Zpc","y":"_pc","z":"$pc","t":"aqc","r":"bqc","x":"cqc","P":"dqc","U":"eqc","c":"fqc","A":"gqc","j":"hqc","f":"iqc","H":"jqc","I":"kqc","d":"lqc","J":"mqc","K":"nqc","n":"oqc","o":"pqc","k":"qqc","l":"rqc","e":"sqc","S":"tqc","G":"uqc","D":"vqc","E":"wqc","m":"xqc","a":"yqc","C":"zqc","b":"Aqc","B":"Bqc","R":"Cqc","T":"Dqc"}')},3682:function(e){e.exports=JSON.parse('{"a":"Eqc"}')},5613:function(e,t,r){"use strict";var o=r(0),a=r(5691),i=r(10),c=r(4),n=r(3438),s=function(e){return new Promise((function(t){return setTimeout((function(){t()}),e)}))},l=r(25),d=r(569);function m(e,t,r,o){return i=o,void 0===(a={itemId:e,sessionId:t,version:r}).itemId||a.itemId.__type||(a.itemId=Object(d.a)(a.itemId)),Object(l.a)("ImmersiveReaderProcessText",a,i);var a,i}var u=r(254),b=r(1002),h=r(1600),g=(Object(c.orchestrator)(n.a,(function(e){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){var t,r,c,n,l,y,O,v,w,R,S,I,q,x;return Object(o.__generator)(this,(function(o){switch(o.label){case 0:if(t=e.itemId,r=j(),!t||r.isLoading||0!==r.immersiveReaderFrameState)return[2];Object(h.a)(null),(c=new u.a("ShowInImmersiveReader")).addCustomData({sessionId:r.sessionId,subAction:e.subActionSource}),c.addActionSource(e.actionSource),g(!0),f(!0),n=(new Date).getUTCMilliseconds(),l=!0,y=null,O=null,o.label=1;case 1:return o.trys.push([1,7,8,9]),[4,m(Object(d.a)({Id:t.Id}),r.sessionId,"2.0",null===(x=t.mailboxInfo)||void 0===x?void 0:x.requestOptions)];case 2:if(v=o.sent(),c.addCheckmark("ImmersiveReaderProcessText_Done"),v&&v.ReaderModelJson?y=JSON.parse(v.ReaderModelJson):(l=!1,O="Response from service call was null or did not contain a ReaderModelJson"),!l)return[3,6];w=(new Date).getUTCMilliseconds(),R=(w-n).toString(),null,y.launchToPostMessageSentDurationInMs=R,p({messageType:"LinguisticModel",messageValue:y}),S=120,I=0,o.label=3;case 3:return I<S&&1===j().immersiveReaderFrameState?[4,s(500)]:[3,5];case 4:return o.sent(),I++,[3,3];case 5:1===j().immersiveReaderFrameState&&(l=!1,O="Frame never got to Ready state"),o.label=6;case 6:return[3,9];case 7:return q=o.sent(),l=!1,c.addCheckmark("CaughtException"),O=q.toString(),[3,9];case 8:return g(!1),[7];case 9:return l?c.end():(f(!1),c.endWithError("ServerError",new Error(O)),Object(b.b)(Object(i.b)(a.b),Object(i.b)(a.a),!1,{hideCancelButton:!0})),[2]}}))}))})),Object(c.mutatorAction)("toggleImmersiveReaderLoadingState",(function(e){j().isLoading=e}))),f=Object(c.mutatorAction)("toggleImmersiveReaderShowingState",(function(e){j().immersiveReaderFrameState=e?1:0})),p=Object(c.mutatorAction)("setImmersiveReaderApiResponse",(function(e){j().apiResponse=e})),y=r(435),O={sessionId:Object(y.a)(),isLoading:!1,immersiveReaderFrameState:0,apiResponse:null},j=Object(c.createStore)("immersivereader",O),v=j(),w=Object(c.mutatorAction)("setImmersiveReaderFrameReady",(function(){j().immersiveReaderFrameState=2})),R=Object(c.mutatorAction)("closeImmersiveReader",(function(){var e=j();e.immersiveReaderFrameState=0,e.apiResponse=null}));r.d(t,"e",(function(){return v})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return w})),r.d(t,"a",(function(){return R})),r.d(t,"d",(function(){return n.a}))},5691:function(e){e.exports=JSON.parse('{"b":"W6b","a":"X6b"}')}}]);
//# sourceMappingURL=owa.ImmersiveReaderContainer.js.map
self.scriptsLoaded['owa.ImmersiveReaderContainer.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.ImmersiveReaderContainer.js'] = (new Date()).getTime();
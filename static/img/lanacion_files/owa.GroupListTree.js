self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.GroupListTree.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[320],{12332:function(e){e.exports=JSON.parse('{"a":"Npd"}')},12333:function(e){e.exports=JSON.parse('{"a":"Hpd"}')},12334:function(e,t,n){var r=n(12335),o=n(109);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},12335:function(e,t,n){(t=e.exports=n(108)(!1)).push([e.i,'.nSex22jJhxuH_NoJLuWL4{color:"[theme:themeDark, default:#0D62AA]";font-weight:600}html[dir=ltr] .nSex22jJhxuH_NoJLuWL4{padding-left:5px}html[dir=rtl] .nSex22jJhxuH_NoJLuWL4{padding-right:5px}',""]),t.locals={unreadCount:"nSex22jJhxuH_NoJLuWL4"}},12336:function(e){e.exports=JSON.parse('{"a":"Ipd"}')},12337:function(e){e.exports=JSON.parse('{"a":"ypd"}')},12338:function(e){e.exports=JSON.parse('{"c":"zpd","b":"Apd","a":"Bpd"}')},12339:function(e,t,n){var r=n(12340),o=n(109);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(e.exports=r.locals)},12340:function(e,t,n){(t=e.exports=n(108)(!1)).push([e.i,'.-pJvQw8WCSS64u4yeesBP{color:#e81123}html[dir] .-pJvQw8WCSS64u4yeesBP{padding-top:8px}html[dir=ltr] .-pJvQw8WCSS64u4yeesBP{padding-left:5px}html[dir=rtl] .-pJvQw8WCSS64u4yeesBP{padding-right:5px}.-pJvQw8WCSS64u4yeesBP:hover{color:"[theme:redDark, default:#a80000]"}',""]),t.locals={errorIcon:"-pJvQw8WCSS64u4yeesBP"}},1419:function(e,t,n){"use strict";var r,o;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),function(e){e[e.Consumer=0]="Consumer",e[e.Enterprise=1]="Enterprise"}(r||(r={})),function(e){e[e.SmtpAddress=0]="SmtpAddress",e[e.ExternalDirectoryObjectId=1]="ExternalDirectoryObjectId"}(o||(o={}))},15326:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),i=Object(o.action)("openCreateGroup"),a=Object(o.action)("openDiscoverGroups"),c=n(5481),u=n(5482),s=n(3111),l=n(2988),d=n(1601),p=n(26),b=n(296),f=n(76),m=n(1062);function O(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return e?Object(s.b)().myOrgGroups.includes(e)?[3,2]:[4,l.a.import()]:[3,4];case 1:t.sent()(),t.label=2;case 2:return[4,d.i.importAndExecute(e,"groups")];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))}Object(o.orchestrator)(i,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return!Object(f.h)("grp-shareable-crud")&&!Object(m.a)().isSensitivityLabelsEnabled||Object(b.a)()?[3,2]:[4,u.a.import()];case 1:return t=n.sent(),e=Object(p.a)().SessionSettings,t(e.ExternalDirectoryUserGuid,e.UserLanguage,e.UserCulture,"OWA_LeftNav",O),[3,4];case 2:return[4,c.b.import()];case 3:(t=n.sent())(Object(b.a)()?c.a.Consumer:c.a.Enterprise,Object(p.a)().SessionSettings.UserCulture,"OWA",O),n.label=4;case 4:return[2]}}))}))}));var g=n(7972),j=n(1126);function v(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return e?(t=e.smtpAddress.toLowerCase(),Object(s.b)().myOrgGroups.includes(t)?[3,2]:[4,l.a.import()]):[3,3];case 1:n.sent()(),n.label=2;case 2:d.i.importAndExecute(t,"groups"),n.label=3;case 3:return[2]}}))}))}Object(o.orchestrator)(a,(function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,g.b.import()];case 1:return e=n.sent(),t=Object(p.a)(),Object(j.k)(t.SessionSettings.UserEmailAddress,t.SessionSettings.UserCulture),e(Object(b.a)()?g.a.Consumer:g.a.Enterprise,t.SessionSettings.UserCulture,"OWA",v),[2]}}))}))}));var h=n(42),C=n(12332),y=n(8062),I=n(10),S=n(584),w=n(12333),E=n(6376),x=n(4073),G=n(4074),N=n(2647),_=n(2528),M=n(1003),D=n(5053),R=n(3792),A=n(1067),L=n(2218),J=n(1269),k=n(61),P=n(1),H=n(565),B=n(95),F=Object(h.a)((function(e){var t,n,o=this,i=Object(S.a)((function(){var t=e.groupId.toLowerCase();return Object(A.getGroupsStore)().groups.get(t)})),a=function(){var t=i.get().basicInformation.SmtpAddress,n=Object(R.a)(t,Object(R.b)()),r=Object(J.c)(n);L.b.importAndExecute("ContextMenu",r.virtualSelectAllExclusionList,!0,!0,[],r),e.onDismiss()},c=function(){return Object(r.__awaiter)(o,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,D.b.import()];case 1:return t.sent()(i.get().basicInformation.SmtpAddress),e.onDismiss(),[2]}}))}))},u=function(){var t=document.createElement("input"),n=i.get().basicInformation.DisplayName+" <"+i.get().basicInformation.SmtpAddress+">";t.className="screenReaderOnly",document.body.appendChild(t);try{if(t.value=n,t.select(),!document.execCommand("copy"))throw new Error}catch(e){var r=Object(k.l)()?Object(I.b)(G.a):Object(I.b)(x.a);window.prompt(r,n)}finally{document.body.removeChild(t)}e.onDismiss()},s=e.anchorPoint,l=e.onDismiss,d=(t=Object(M.isGroupInFavorites)(i.get().basicInformation.SmtpAddress),n=[W("markAllAsRead",Object(I.b)(E.a),i.get().unreadMessageCount<=0,a),W("copyEmailAddress",Object(I.b)(w.a),!1,u)],Object(f.h)("tri-favorites-roaming")&&n.push(W(t?"removeFromFavorites":"addToFavorites",t?Object(I.b)(_.a):Object(I.b)(N.a),!1,c)),n);return e.commonContextMenuItems&&(d=d.concat(e.commonContextMenuItems)),P.createElement(H.a,{shouldFocusOnMount:!0,target:s,directionalHint:B.DirectionalHint.bottomLeftEdge,onDismiss:l,items:d})}));function W(e,t,n,r){return{key:e,name:t,disabled:n,onClick:r}}var T=n(573),U=n(24),K=n(2964),Q=n(254),q=n(1021),z=n(1514);function V(){var e,t=Object(z.b)(),n=Object(q.a)().groups,r=t.myOrgGroups.some((function(t){var r,o,i;return(null===(r=(e=n.get(t)).groupDetails)||void 0===r?void 0:r.UserGroupRelationship)?e.groupDetails.UserGroupRelationship.IsOwner:null===(i=null===(o=e.basicInformation)||void 0===o?void 0:o.AdditionalProperties)||void 0===i?void 0:i.IsOwner}))||0===t.myOrgGroups.length;Object(Q.o)("ManageGroupClicked");var o=Object(U.a)().search,i=Object(T.i)(r)+o;i+=(o?"&":"?")+"source=ManageGroups",Object(K.b)("people")||window.open(i.toString(),"_blank")}var X=n(94),$=Object(h.a)((function(e){var t,n,r,o,c=function(){i(),e.onDismiss()},u=function(){a(),e.onDismiss()},s=e.anchorPoint,l=e.onDismiss,d=(t=Object(A.getUnifiedGroupsSettingsStore)().groupCreationEnabled,n=!Object(X.u)()&&Object(f.h)("grp-discovery-leftnav"),r=!Object(X.u)(),o=[],t&&o.push(Y("newGroup",Object(I.b)(y.e),!1,c)),n&&o.push(Y("discoverGroups",Object(I.b)(y.a),!1,u)),r&&o.push(Y("manageGroups",Object(I.b)(y.b),!1,Z)),o);return P.createElement(H.a,{shouldFocusOnMount:!0,target:s,directionalHint:B.DirectionalHint.bottomLeftEdge,onDismiss:l,items:d})}));function Y(e,t,n,r){return{key:e,name:t,disabled:n,onClick:r}}function Z(){V()}var ee=n(3656),te=n(6781),ne=n(12334),re=Object(h.a)((function(e){var t=Object(A.getGroupsStore)().groups.get(e.groupId.toLowerCase()),n=t?t.unreadMessageCount:null;return n?P.createElement("span",{className:ne.unreadCount},n,P.createElement("span",{className:"screenReaderOnly"},Object(I.b)(te.a))):null})),oe=n(12336),ie=n(912),ae=n(919),ce=n(340),ue=Object(h.a)((function(e){return P.createElement(ie.a,{content:Object(I.b)(oe.a),calloutProps:{gapSpace:0}},P.createElement(ae.a,{size:ce.a.small,title:""}))})),se=Object(h.a)((function(e){return Object(ee.a)(e.groupId).isDroppingMessage?P.createElement(ue,null):P.createElement(re,{groupId:e.groupId})})),le=Object(h.a)((function(e){return Object(ee.a)(e.groupId).isDroppingMessage?P.createElement(ue,null):P.createElement(re,{groupId:e.groupId})})),de=n(12337),pe=n(1002),be=n(3371),fe=n(12338),me=Object(o.mutatorAction)("setGroupDragDropActionState",(function(e,t){Object(z.b)().groupNodeViewStates.get(e).isDroppingMessage=t})),Oe=n(986),ge=n(1610),je=n(1868),ve=n(4489),he=n(1927),Ce=n(3922),ye=n(5263),Ie=n(1029);function Se(e,t,n,r){n.addCustomData({error:r}),n.endWithError("ServerError",new Error(r)),Object(pe.b)(1==t?Object(I.b)(fe.c):Object(I.b)(y.c),1==t?Object(I.c)(Object(I.b)(fe.b),e):Object(I.c)(Object(I.b)(fe.a),e),!1,{hideCancelButton:!0}),me(e,!1)}function we(e,t){e.rowKeys.length>be.b?Object(pe.b)(Object(I.b)(y.c),Object(I.c)(Object(I.b)(de.a),be.b),!1,{hideCancelButton:!0}):function(e,t){var n=new Q.a("dragDropToGroup");me(t,!0);var r=e.rowKeys,o=e.tableViewId,i=Oe.a.tableViews.get(o),a=Object(R.a)(t,Object(R.b)()),c=Object(je.a)(i)?Object(ve.a)(r,o):Object(he.a)(r,o),u={headers:{"X-OWA-ExplicitLogonUser":a.folderId,"X-AnchorMailbox":a.folderId,"X-OWA-ActionName":"GroupMailbox"}};Object(ye.a)(c,Object(Ie.a)({BaseFolderId:Object(ge.a)(a)}),!0,u).then((function(e){var r=function(e){if(!e||!e.ResponseMessages||!e.ResponseMessages.Items)return null;for(var t={successfulItems:[],failedItemCount:0},n=0;n<e.ResponseMessages.Items.length;n++){var r=e.ResponseMessages.Items[n];r&&"Success"==r.ResponseClass?t.successfulItems.push(r.Items[0].ItemId.Id):(t.failedItemCount++,r&&(t.lastResponseCode=r.ResponseCode))}return t}(e);if(r&&r.failedItemCount<1){n.end();var o=c.map((function(e){return{Id:e}}));Object(Ce.a)(o,"HardDelete"),me(t,!1)}else Se(t,c.length,n,r.lastResponseCode?r.lastResponseCode:"UnknownError")})).catch((function(e){Se(t,c.length,n,JSON.stringify(e))}))}(e,t)}var Ee=n(7783),xe=n(1857),Ge=n(1724),Ne=n(1872),_e=n(284),Me=Object(_e.action)("showGroupContextMenu")((function(e,t,n,r,o){e.withContextMenuGroup={groupId:t,group:n,anchor:r,isRootNode:o}})),De=Object(_e.action)("hideGroupContextMenu")((function(e){e.withContextMenuGroup=null})),Re=n(1076),Ae=n(306),Le=n(12339),Je=Object(z.b)(),ke=Object(A.getGroupsStore)(),Pe=1e3,He=Object(h.a)((function(e){var t=Object(p.a)().UserOptions.IsGroupsTreeCollapsed;return P.createElement(s.a,{className:e.className,selectGroup:Ue,isSelected:Ke,isGroupsTreeCollapsed:t,toggleGroupTreeExpansion:Qe,renderGroupListCustomNodes:st,renderRightCharm:We,renderRightCharmHover:Te,onChildNodeContextMenuOpened:ze,renderChildNodeContextMenu:rt,onRootNodeContextMenuOpened:Ve,renderRootNodeContextMenu:ot,renderRootNodeRightCharm:Be,renderRootNodeRightCharmHover:Be,onListNodeDrop:tt,canDropOnListNode:nt,onMouseEnterShowMoreButton:qe,onShowMoreEvent:qe,setSize:e.setSize,positionInSet:e.positionInSet})}));function Be(){return Je.loadGroupsError?P.createElement(ie.a,{content:Object(I.b)(C.a),directionalHint:B.DirectionalHint.bottomCenter},P.createElement(Ae.a,{className:Le.errorIcon,title:"",iconName:"Error",ariaLabel:Object(I.b)(C.a)})):null}function Fe(){De(Je)}function We(e,t){return P.createElement(se,{groupId:e})}function Te(e,t){return P.createElement(le,{groupId:e})}function Ue(e,t){d.i.importAndExecute(e,"groups"),Object(f.h)("tri-floodgateForConsumerGroups")&&Object(X.u)()&&setTimeout((function(){Ge.a.import().then((function(e){e("ConsumerGroupsClicked")}))}),Pe)}function Ke(e,t){return Object(d.a)(e,"groups")}function Qe(){l.e.importAndExecute()}function qe(){Object(f.h)("grp-unreadCountTop5AndFavorites")&&Object(Ee.a)()}function ze(e,t){Me(Je,t.basicInformation.SmtpAddress,t,Object(xe.a)(e),!1)}function Ve(e){var t=Object(m.a)().groupCreationEnabled,n=!Object(X.u)()&&Object(f.h)("grp-discovery-leftnav");if(!t&&!n)return null;Me(Je,null,null,Object(xe.a)(e),!0)}function Xe(e){e.stopPropagation(),e.preventDefault()}function $e(e){e.stopPropagation(),i()}function Ye(e){e.stopPropagation();window.open("https://account.microsoft.com/family/")}function Ze(e){e.stopPropagation(),a()}function et(e){e.stopPropagation(),V()}function tt(e,t){switch(e.itemType){case Re.a.MultiMailListMessageRows:case Re.a.MailListRow:we(e,t)}}function nt(e){switch(e.itemType){case Re.a.MultiMailListMessageRows:case Re.a.MailListRow:return"move";default:return"none"}}function rt(e){return P.createElement(F,{anchorPoint:e.anchor,groupId:e.group.basicInformation.SmtpAddress,onDismiss:Fe})}function ot(e){return P.createElement($,{anchorPoint:e.anchor,onDismiss:Fe})}function it(e){return Object(m.a)().groupCreationEnabled?P.createElement("div",null,!e&&P.createElement(Ne.a,{displayName:Object(I.b)(y.e),isCustomActionNode:!0,isRootNode:!1,key:"NewGroup",onClick:$e,onContextMenu:Xe})):null}function at(e){if(!(Object(X.u)()&&Object(f.h)("grp-create-family-group")))return null;var t=Je.hasLoadedFromServer&&function(){var e,t,n;try{for(var o=Object(r.__values)(Je.myOrgGroups),i=o.next();!i.done;i=o.next()){var a=i.value,c=ke.groups.get(a);if(3==(null===(n=null==c?void 0:c.basicInformation)||void 0===n?void 0:n.Kind))return!0}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return!1}();return P.createElement("div",null,!e&&!t&&P.createElement(Ne.a,{displayName:Object(I.b)(y.d),isCustomActionNode:!0,isRootNode:!1,key:"NewFamilyGroup",onClick:Ye,onContextMenu:Xe}))}function ct(e){return!Object(X.u)()&&Object(f.h)("grp-discovery-leftnav")?P.createElement("div",null,!e&&P.createElement(Ne.a,{displayName:Object(I.b)(y.a),isCustomActionNode:!0,isRootNode:!1,key:"DiscoverGroups",onClick:Ze,onContextMenu:Xe})):null}function ut(e){return Object(X.u)()?null:(Object(Q.o)("ManageGroupsRendered"),P.createElement("div",null,!e&&P.createElement(Ne.a,{displayName:Object(I.b)(y.b),isCustomActionNode:!0,isRootNode:!1,key:"ManageGroups",onClick:et,onContextMenu:Xe})))}function st(){var e=Object(p.a)().UserOptions.IsGroupsTreeCollapsed;return[it(e),at(e),ct(e),ut(e)]}n.d(t,"GroupListTree",(function(){return He})),n.d(t,"GroupRightCharm",(function(){return se})),n.d(t,"GroupRightCharmHover",(function(){return le})),n.d(t,"GroupDragDropSpinner",(function(){return ue})),n.d(t,"GroupContextMenu",(function(){return F})),n.d(t,"dropMailListRowsOnGroup",(function(){return we}))},1724:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(115),o=new r.c((function(){return n.e(825).then(n.bind(null,2870))})),i=new r.b(o,(function(e){return e.logFloodgateActivity}))},3539:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"DeleteItemJsonRequest:#Exchange"},e)}},3625:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"DeleteItemRequest:#Exchange"},e)}},3626:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(25),o=n(3539);function i(e,t){return void 0===e||e.__type||(e=Object(o.a)(e)),Object(r.a)("DeleteItem",e,t)}},3922:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3625),o=n(569),i=n(3626),a=n(245);function c(e,t){return Object(r.a)({ItemIds:e.map((function(e){return t=e,Object(o.a)({Id:t.Id,ChangeKey:t.ChangeKey});var t})),DeleteType:t,SuppressReadReceipts:!0,ReturnMovedItemIds:!0,SendMeetingCancellations:"SendToNone",AffectedTaskOccurrences:"AllOccurrences"})}function u(e,t,n){var r=c(e,t);return Object(i.a)({Header:Object(a.a)(),Body:r},n).then((function(e){return e.Body.ResponseMessages.Items}))}},4073:function(e){e.exports=JSON.parse('{"a":"L_a"}')},4074:function(e){e.exports=JSON.parse('{"a":"K_a"}')},4489:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1168);function o(e,t){var n={};return e.forEach((function(e){var o,i=null===(o=Object(r.a)(e,t))||void 0===o?void 0:o.itemIds;i&&i.forEach((function(e){n[e]||(n[e]=!0)}))})),Object.keys(n)}},5053:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(115),o=new r.c((function(){return n.e(311).then(n.bind(null,7737))})),i=Object(r.d)(o,(function(e){return e.GroupFavoriteButton})),a=new r.b(o,(function(e){return e.toggleFavoriteGroup}))},5263:function(e,t,n){"use strict";var r=n(5516),o=n(0);var i=n(25);function a(e,t){var n;return void 0===e||e.__type||(n=e,e=Object(o.__assign)({__type:"CopyItemJsonRequest:#Exchange"},n)),Object(i.a)("CopyItem",e,t)}var c=n(245);function u(e,t,n,i){var u=function(e,t,n){return i={ToFolderId:t,ItemIds:Object(r.a)(e),ReturnNewItemIds:!0,RemoteExecute:n},Object(o.__assign)({__type:"CopyItemRequest:#Exchange"},i);var i}(e,t,n);return a({Header:Object(c.a)(),Body:u},i).then((function(e){return e.Body}))}n.d(t,"a",(function(){return u}))},5481:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(115),o=n(1419);n.d(t,"a",(function(){return o.b}));var i=new r.c((function(){return Promise.all([n.e(5),n.e(6),n.e(8),n.e(9),n.e(303)]).then(n.bind(null,8298))})),a=new r.b(i,(function(e){return e.createGroup}))},5482:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(115),o=new r.c((function(){return Promise.all([n.e(5),n.e(6),n.e(8),n.e(11),n.e(304)]).then(n.bind(null,8331))})),i=new r.b(o,(function(e){return e.createGroup}))},5516:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(569);function o(e){return e.map((function(e){return Object(r.a)({Id:e})}))}},6457:function(e,t,n){"use strict";var r,o;n.d(t,"a",(function(){return r})),function(e){e[e.Consumer=0]="Consumer",e[e.Enterprise=1]="Enterprise"}(r||(r={})),function(e){e[e.SmtpAddress=0]="SmtpAddress",e[e.ExternalDirectoryObjectId=1]="ExternalDirectoryObjectId"}(o||(o={}))},7972:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(115),o=n(6457);n.d(t,"a",(function(){return o.a}));var i=new r.c((function(){return Promise.all([n.e(6),n.e(7),n.e(9),n.e(713),n.e(323)]).then(n.bind(null,11101))})),a=new r.b(i,(function(e){return e.discoverGroups}))},8062:function(e){e.exports=JSON.parse('{"c":"Cpd","e":"Dpd","d":"Epd","a":"Fpd","b":"Gpd"}')}}]);
//# sourceMappingURL=owa.GroupListTree.js.map
self.scriptsLoaded['owa.GroupListTree.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.GroupListTree.js'] = (new Date()).getTime();
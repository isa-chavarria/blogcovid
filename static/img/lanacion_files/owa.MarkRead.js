self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MarkRead.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[414],{1002:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(115),o=n(1103);n.d(t,"a",(function(){return o.a}));var c=new r.c((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(217)]).then(n.bind(null,1880))})),i=new r.b(c,(function(e){return e.confirmAction}));function a(e,t,n,r){return i.import().then((function(o){return o(e,t,n,r)}))}},1029:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"TargetFolderId:#Exchange"},e)}},1097:function(e,t,n){"use strict";var r;!function(e){e[e.Auto=0]="Auto",e[e.Init=1]="Init",e[e.LeftNavResizeExpand=2]="LeftNavResizeExpand",e[e.ToggleExpand=3]="ToggleExpand",e[e.ToggleCollapse=4]="ToggleCollapse",e[e.WindowResize=5]="WindowResize",e[e.ToggleFolderPane=6]="ToggleFolderPane",e[e.DateRangeTypeChange=7]="DateRangeTypeChange"}(r||(r={}));var o=r,c=n(4),i=Object(c.createStore)("OwaLayout",{browserWidthBucket:null});function a(){var e=i().browserWidthBucket;return e||void 0}var u=Object(c.mutatorAction)("setBrowserWidthBucket",(function(e){i().browserWidthBucket=e})),s=n(2);var d=Object(c.action)("onAvailableWidthBucketChanged",(function(e,t){return{availableWidthBucket:e,source:t}})),b=!1;function f(e){window.addEventListener("resize",l),b=e,O(o.Init)}function l(){O(o.WindowResize)}function O(e){var t,n,r,c=(t=e!=o.Init,n=b,r=Object(s.i)(t),n&&(r>1900?r-=305:r>990&&(r-=165)),r>=1600?1600:r>=1400?1599:r>=1366?1399:r>=1301?1365:r>=1239?1300:r>=1200?1238:r>=1080?1199:r>=1e3?1079:r>=919?999:r>=900?918:r>=866?899:r>=769?865:r>=692?768:r>=686?691:r>=580?685:r>=555?579:r>=542?554:r>=500?541:r>=419?499:418);i().browserWidthBucket!=c&&(u(c),c<=418?j():v(),d(c,e))}function j(){var e;(null===(e=window.document)||void 0===e?void 0:e.body)&&(document.body.style.overflowX="auto")}function v(){var e;(null===(e=window.document)||void 0===e?void 0:e.body)&&(document.body.style.overflow="hidden")}var m=n(49);function p(){return I()}function I(){return Object(m.k)()||Object(m.d)()}n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return p})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return d}))},1103:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e[e.ok=0]="ok",e[e.cancel=1]="cancel",e[e.dismiss=2]="dismiss",e[e.continue=3]="continue"}(r||(r={}))},1199:function(e,t,n){"use strict";n.d(t,"r",(function(){return d})),n.d(t,"u",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"p",(function(){return l})),n.d(t,"i",(function(){return O})),n.d(t,"o",(function(){return j})),n.d(t,"b",(function(){return v})),n.d(t,"m",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"q",(function(){return I})),n.d(t,"t",(function(){return h})),n.d(t,"s",(function(){return _})),n.d(t,"g",(function(){return R})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return y})),n.d(t,"n",(function(){return A})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"h",(function(){return E})),n.d(t,"l",(function(){return S})),n.d(t,"a",(function(){return k}));var r=n(0),o=n(118),c=n(961),i=n(977),a=n(4),u=n(1187),s=n(26),d=Object(a.action)("SINGLE_SELECT_ROW",(function(e,t,n,r){return Object(o.c)(C(r,e,t),{tableView:e,rowKey:t,isUserNavigation:n,mailListItemSelectionSource:r})})),b=Object(a.action)("TOGGLE_SELECT_ROW",(function(e,t,n,r){return Object(o.c)(C(r,e,t),{tableView:e,rowKey:t,isUserNavigation:n,mailListItemSelectionSource:r})})),f=Object(a.action)("ON_AFTER_SELECTION_CHANGED",(function(e,t,n,r,o){return{rowKey:e,tableView:t,mailListItemSelectionSource:n,listViewType:r,sxsId:o}})),l=Object(a.action)("SET_SELECTION_ON_ROW",(function(e,t,n){return{rowKey:e,tableViewId:t,shouldSelect:n}})),O=Object(a.action)("RESET_LIST_VIEW_EXPANSION_VIEW_STATE"),j=Object(a.action)("SET_LIST_VIEW_EXPANSION_LOADING_STATE",(function(e){return{shouldBeExpanded:e}})),v=Object(a.action)("ITEM_PART_SELECTED",(function(e,t,n,r,o){return{nodeId:e,itemId:t,allNodeIds:n,tableView:r,mailListItemSelectionSource:o}})),m=Object(a.action)("SELECT_NEXT_ITEM_PART",(function(e,t){return{rowKey:e,tableView:t}})),p=Object(a.action)("ON_ITEM_PART_CONTEXT_MENU",(function(e,t,n){return{contextMenuAnchor:e,nodeId:t,tableViewId:n}})),I=Object(a.action)("SINGLE_SELECT_ITEM_PART",(function(e,t,n,r){return{rowKey:e,nodeIdToSelect:t,allNodeIds:n,tableViewId:r}})),h=Object(a.action)("TOGGLE_SELECT_ITEM_PART",(function(e){return{nodeId:e}})),_=Object(a.action)("TOGGLE_SELECT_ALL_ROWS",(function(e){return{tableView:e}})),R=Object(a.action)("RANGE_SELECT_ROW",(function(e,t,n,r){return{tableView:e,targetRowKey:t,mailListItemSelectionSource:n,isCtrlOrCmdKeyDown:r}})),T=Object(a.action)("RESET_SELECTION",(function(e,t){return{tableView:e,mailListItemSelectionSource:t}})),y=Object(a.action)("RESET_SELECTION",(function(e){return{tableView:e}})),A=Object(a.action)("SELECT_ROW_IN_DIRECTION",(function(e,t,n){return Object(o.c)(C(n,e,void 0,t),{tableView:e,selectionDirection:t,mailListItemSelectionSource:n})})),g=Object(a.action)("KEYBOARD_MULTI_SELECT_ROW",(function(e,t,n,r){return{tableView:e,mailListItemSelectionSource:t,selectionDirection:n,isCtrlOrCmdKeyDown:r}})),w=Object(a.action)("KEYBOARD_COLLAPSE_CONVERSATION",(function(e){return{rowKey:e}})),E=Object(a.action)("RESET_BUS_STOP_STATE_MAP"),S=Object(a.action)("SELECT_NEW_ITEM_UPON_ROW_REMOVAL",(function(e,t,n){return{tableView:e,lastSelectedRowIndex:t,lastSelectedRowWasPinned:n}})),k=Object(a.action)("INIT_TABLE_SELECTION_ON_LOAD",(function(e){return{tableView:e}}));function C(e,t,n,o){return{name:function(e,t,n,o){return!(function(e){return e===i.b.MailListItemRichPreview||e===i.b.KeyboardShiftEnter||e===i.b.MailListItemBodyDoubleClick}(e)||Object(u.r)()&&!function(e){var t;return e===i.b.KeyboardEnter||e===i.b.MailListItemBody||e===i.b.RouteHandler||e===i.b.CommandBarArrows||e===i.b.ImmersiveReadingPaneDelete&&"ReturnToView"!==(null===(t=Object(s.a)().UserOptions)||void 0===t?void 0:t.NextSelection)}(e)||function(e,t,n,o){if(Object(u.r)())return!1;if(e===i.b.KeyboardUpDown){var a=t.rowKeys.indexOf(t.selectionAnchorRowKey);if(-1!==a&&1===t.selectedRowKeys.size){var s=t.rowKeys.indexOf(Object(r.__spread)(t.selectedRowKeys.keys())[0]);return o===c.d.Next?s===a+1||s===t.rowKeys.length-1&&a===t.rowKeys.length-1:s===a-1||0===s&&0===a}return!1}return n&&t.selectedRowKeys.has(n)&&1===t.selectedRowKeys.size}(e,t,n,o))}(e,t,n,o)?"SelectMailItem":"SelectMailItemNonCritical",options:{timeout:9e4}}}},12107:function(e){e.exports=JSON.parse('{"a":"o6b","b":"p6b","c":"q6b","d":"r6b"}')},12108:function(e){e.exports=JSON.parse('{"a":"k6b","b":"l6b","c":"m6b","d":"n6b"}')},12109:function(e){e.exports=JSON.parse('{"a":"g6b","b":"h6b","c":"i6b","d":"j6b"}')},1337:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"add",(function(){return s})),n.d(r,"remove",(function(){return d})),n.d(r,"removeAll",(function(){return b})),n.d(r,"getCount",(function(){return f})),n.d(r,"getTombstonedReasons",(function(){return l})),n.d(r,"clearMapForFolder",(function(){return O})),n.d(r,"removeRowsFromTombstone",(function(){return j}));var o=n(0),c=n(4),i=Object(c.createStore)("tombstone",{folderTombstoneMap:{}}),a=(i(),n(254)),u=n(284),s=Object(u.action)("tombstoneOperations.add")((function(e,t,n){if(1!=t.tableQuery.type&&"spotlight"!==t.tableQuery.scenarioType){var r=t.serverFolderId,o=i().folderTombstoneMap;r in o||(o[r]={});var c=o[r];e.forEach((function(e){var t=c[e];t?3!=n?t.indexOf(3)>-1||-1==t.indexOf(n)&&t.push(n):c[e]=[3]:c[e]=[n]}))}})),d=Object(u.action)("tombstoneOperations.remove")((function(e,t,n){var r=i().folderTombstoneMap;if(t in r){var o=r[t],c=o[e],a=c?c.indexOf(n):-1;if(-1==a)throw new Error("tombstone.remove given reason does not exist when trying to remove entry from it");c.splice(a,1),0==c.length&&delete o[e],0==Object.keys(o).length&&delete r[t]}})),b=Object(u.action)("tombstoneOperations.removeAll")((function(){i().folderTombstoneMap={},Object(a.p)("TnS_RemoveAllFromTombstone")})),f=function(e,t){var n=i().folderTombstoneMap;if(!(e in n))return 0;var r=0,o=n[e];return Object.values(o).forEach((function(e){e==t&&r++})),r},l=function(e,t){var n=i().folderTombstoneMap;if(t in n){var r=n[t][e];if(r)return r}return[]},O=Object(u.action)("tombstoneOperations.clearMapForFolder")((function(e){var t=i().folderTombstoneMap;t[e]&&(Object(a.p)("TnS_ClearFolderMapInTombstone",[Object.keys(t[e]).length]),delete t[e])})),j=Object(u.action)("tombstoneOperations.removeRowsFromTombstone")((function(e,t){var n,r,c=i().folderTombstoneMap;if(t in c){var a=c[t];try{for(var u=Object(o.__values)(e),s=u.next();!s.done;s=u.next()){var d=s.value;d in a&&delete a[d]}}catch(e){n={error:e}}finally{try{s&&!s.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}0==Object.keys(a).length&&delete c[t]}}));t.a=r},1428:function(e,t,n){"use strict";var r=n(1584),o=n(76),c=n(999),i=n(602);function a(){return Object(o.h)("auth-cloudCache")&&(Object(c.b)()||Object(c.c)())&&Object(i.a)()||Object(r.a)()}n.d(t,"a",(function(){return a}))},1549:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),o=Object(r.action)("setShowListPane",(function(e){return{showListPane:e}}))},1550:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),o=Object(r.action)("setShowReadingPane",(function(e){return{showReadingPane:e}}))},1557:function(e,t,n){"use strict";var r=n(115),o=n(1796),c=n(106),i=n(961),a=n(977),u=n(964),s=n(962),d=n(968);function b(e,t){return e&&!Object(i.s)()&&t&&t.type===c.a.UserMailbox&&!Object(a.o)(e)&&e!=Object(u.a)("recoverableitemsdeletions")&&!Object(s.D)(e,d.j)}n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return o.b})),n.d(t,"d",(function(){return o.c})),n.d(t,"c",(function(){return b}));var f=new r.c((function(){return n.e(611).then(n.bind(null,15405))})),l=new r.a(f,(function(e){return e.undo}))},1584:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(76),o=n(94);function c(){return Object(r.h)("mail-oneView")&&Object(o.t)()}},1603:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"ItemChange:#Exchange"},e)}},1725:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"SetItemField:#Exchange"},e)}},1782:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),o=Object(r.action)("onClientReadingPanePositionChange")},1796:function(e,t,n){"use strict";var r,o=n(4),c=Object(o.createStore)("undo",{hasUndoableAction:!1,undoableActionFolderId:null})(),i=n(1337),a=n(284),u=n(118);n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f}));var s=Object(a.action)("addActionToUndoStack")(Object(a.select)({store:function(){return c}})((function(e,t,n){null!==e&&(r=e,n.store.hasUndoableAction=!0,n.store.undoableActionFolderId=t)}))),d=Object(a.action)("clearLastUndoableAction")(Object(a.select)({store:function(){return c}})((function(e){r=null,e.store.hasUndoableAction=!1,e.store.undoableActionFolderId=null}))),b=Object(a.select)({store:function(){return c}})((function(e){return e.store.hasUndoableAction})),f=Object(u.d)("undo",{name:"TnS_Undo",customData:function(e){return[e]}})((function(e){c.undoableActionFolderId?i.a.clearMapForFolder(c.undoableActionFolderId):i.a.removeAll();null!==r&&(r(),d())}))},1899:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("MARK_ALL_AS_READ_STORE_UPDATE",(function(e,t,n){return{tableView:e,markAsRead:t,rowIdsToExclude:n}}))},1967:function(e){e.exports=JSON.parse('{"a":"Zca"}')},1969:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"Message:#Exchange"},e)}},1973:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),o=Object(r.action)("USERMAIL_INTERACTION",(function(e,t,n){return{interactionType:e,instrumentationContexts:t,triageContext:n}}))},2008:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1338);function o(e,t){return e.map((function(e){return Object(r.getInstrumentationContext)(e,t)})).filter((function(e){return e}))}},2116:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("MARK_CONVERSATIONS_AS_READ_STORE_UPDATE",(function(e,t,n,r){return{conversationIds:e,tableViewId:t,isReadValue:n,isExplicit:r}}))},2117:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("MARK_ITEMS_AS_READ_STORE_UPDATE",(function(e,t,n,r){return{itemIds:e,isReadValue:t,isExplicit:n,tableViewId:r}}))},2129:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n(115),o=n(1973);n.d(t,"d",(function(){return o.a}));var c=new r.c((function(){return n.e(378).then(n.bind(null,4205))})),i=new r.a(c,(function(e){return e.onKeyboardUpDown})),a=new r.a(c,(function(e){return e.onOpenEmail})),u=new r.a(c,(function(e){return e.onKeyboardToggleSelect}))},2191:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(4),o=Object(r.action)("ON_DELETE_CONVERSATION_ITEM_PARTS_COMPLETE"),c=Object(r.action)("TOGGLE_ROW_READ_STATE_COMPLETE")},2373:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n(982),c=n(1652),i=n(1140),a=n(26),u=n(1311);function s(e){var t,n,a=(null==e?void 0:e.itemIds)?e.itemIds.length:0;if(0==a)return[null,!1,!1];var s=null,d=2==Object(i.c)().type||!Object(i.b)();if(1==a){if(!(s=o.a.items.get(e.itemIds[0])))return[null,!1,!1];d=d||s.ParentFolderId&&s.ParentFolderId.Id==Object(i.b)()}else{var b=null;try{for(var f=Object(r.__values)(e.itemIds),l=f.next();!l.done;l=f.next()){var O=l.value,j=o.a.items.get(O);if(!j)return[null,!1,!1];if(j.ParentFolderId&&j.ParentFolderId.Id==Object(i.b)()){s=j,d=!0;break}Object(u.a)(j.ParentFolderId.Id,"sentitems")&&(b=j)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=f.return)&&n.call(f)}finally{if(t)throw t.error}}s||(s=b||o.a.items.get(e.itemIds[0]))}return[s,d,Object(c.a)(s.ParentFolderId.Id)]}function d(e,t,n){var r=Object(a.a)().UserOptions.HideDeletedItems;return e&&!((e.IsDraft||r)&&t&&!n)}function b(e){var t=o.a.conversationNodes.get(e),n=Object(r.__read)(s(t),3),c=n[0],i=n[1];return d(c,n[2],i)?c:null}},2383:function(e,t,n){"use strict";var r=n(25),o=n(0);function c(e,t){var n;return void 0===e||e.__type||(n=e,e=Object(o.__assign)({__type:"UpdateItemJsonRequest:#Exchange"},n)),Object(r.a)("UpdateItem",e,t)}n.d(t,"a",(function(){return c}))},2408:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"UpdateItemRequest:#Exchange"},e)}},2448:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(962),o=n(968);function c(e){return Object(r.D)(e,o.j)}},2699:function(e){e.exports=JSON.parse('{"a":"Dza","c":"Eza","e":"Fza","b":"Gza","d":"Hza"}')},2789:function(e,t,n){"use strict";var r=n(4798),o=n(0),c=n(3540),i=n(3541);function a(e,t,n,r,a){return e.then((function(e){if(Object(c.a)(t,n,a),e.ResponseMessages){var u=function(e,t){var n,r;try{for(var c=Object(o.__values)(e),a=c.next();!a.done;a=c.next()){var u=a.value;if(u&&"Success"!=u.ResponseClass){Object(i.a)(t);var s=new Error("ResponseCode="+u.ResponseCode+", Stacktrace="+u.StackTrace);return s.fetchErrorType="ServerFailure",s}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return null}(e.ResponseMessages.Items,r);return u?Promise.reject(u):Promise.resolve()}return Promise.reject(new Error("processUpdateItemActionResponseMessage empty response"))})).catch((function(e){return Object(c.a)(t,n,a),Object(i.a)(r),Promise.reject(e)}))}var u=n(3925);n.d(t,"d",(function(){return r.a})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return u.a})),n.d(t,"b",(function(){return c.a})),n.d(t,"c",(function(){return i.a}))},3298:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1969),o=n(978),c=n(1725);function i(e,t){var n;return Object(c.a)({Path:Object(o.a)({FieldURI:e}),Item:Object(r.a)((n={},n[e]=t,n))})}},3345:function(e,t,n){"use strict";var r=n(4);t.a=Object(r.action)("RELOAD_TABLE_ON_TRIAGE_ACTION_FAIL",(function(e){return{tableView:e}}))},3346:function(e){e.exports=JSON.parse('{"a":"s6b"}')},3374:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"ApplyConversationActionRequest:#Exchange"},e)}},3375:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e){return Object(r.__assign)({__type:"ConversationAction:#Exchange"},e)}},3395:function(e,t,n){"use strict";var r=n(0),o=n(424),c=n(25);function i(e,t){var n;return void 0===e||e.__type||(n=e,e=Object(r.__assign)({__type:"ApplyConversationActionJsonRequest:#Exchange"},n)),Object(c.a)("ApplyConversationAction",e,t)}function a(e,t,n){if(void 0===t&&(t=Object(o.b)()),!e||!e.ConversationActions||0===e.ConversationActions.length)throw new Error("ApplyConversationAction requestBody is invalid!");n=n||{};var c=Object(r.__assign)({},n),a=c.headers?new Headers(c.headers):new Headers;return a.set("X-OWA-ActionSource","ApplyConversationAction_"+e.ConversationActions[0].Action),c.headers=a,i({Header:t,Body:e},c).then((function(e){return e.Body.ResponseMessages.Items[0]})).catch((function(e){return Promise.reject(e)}))}n.d(t,"a",(function(){return a}))},3540:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1337);function o(e,t,n){n&&r.a.removeRowsFromTombstone(e,t)}},3541:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3345);function o(e){e&&Object(r.a)(e)}},3742:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(438),o=n(1029);function c(e){return e?Object(o.a)({BaseFolderId:Object(r.a)({Id:e})}):null}},3925:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(1466);function c(e){var t,n;if(!e)return Promise.reject(i("500","Server returned a null response!"));var c=Array.isArray(e)?e:[e];try{for(var a=Object(r.__values)(c),u=a.next();!u.done;u=a.next()){var s=u.value;if(s&&!Object(o.a)(s))return Promise.reject(i(s.ResponseCode,s.StackTrace))}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return Promise.resolve()}function i(e,t){var n="ResponseCode="+e;t&&(n+=", Stacktrace="+t);var r=new Error(n);return r.responseCode=e,r.fetchErrorType="ServerFailure",r}},4190:function(e,t,n){"use strict";function r(e){return e?new Date(e).toISOString():null}n.d(t,"a",(function(){return r}))},424:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));var r=n(274),o=n(305),c=n(304),i=n(298);function a(e){return Object(r.a)({RequestServerVersion:"Exchange2015",TimeZoneContext:Object(o.a)({TimeZoneDefinition:Object(c.a)({Id:null!=e?e:"Pacific Standard Time"})})})}function u(e,t,n){return Object(i.a)({PropertySetId:e,PropertyName:t,PropertyType:n})}},4489:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1168);function o(e,t){var n={};return e.forEach((function(e){var o,c=null===(o=Object(r.a)(e,t))||void 0===o?void 0:o.itemIds;c&&c.forEach((function(e){n[e]||(n[e]=!0)}))})),Object.keys(n)}},4798:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3540),o=n(3541),c=n(3925),i=n(254);function a(e,t,n,a,u){var s=Object(i.q)();return e.then((function(e){return s&&s.addCheckpoint("PAPCARM"),Object(r.a)(t,n,u),Object(c.a)(e)})).catch((function(e){return Object(r.a)(t,n,u),Object(o.a)(a),Promise.reject(e)}))}},5252:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(961),c={markConversationAsRead:{name:function(e,t,n,r,o,c,i){var a="TnS_MarkConversation";return a+=n?"Read":"Unread",r||(a+="Background"),a},options:function(e,t,n,r,o,c,i){return r?{isCore:!0}:{sessionSampleRate:10}},customData:function(e,t,n,r,c,i,a){return[c,e.length,Object(o.l)(t),Object(o.K)(t)]},cosmosOnlyData:function(e,t,n,c,i,a,u){var s,d,b=[],f=Object(o.A)(e,t);try{for(var l=Object(r.__values)(f),O=l.next();!O.done;O=l.next()){var j=O.value;b.push(o.b.getItemIds(j,t))}}catch(e){s={error:e}}finally{try{O&&!O.done&&(d=l.return)&&d.call(l)}finally{if(s)throw s.error}}return JSON.stringify({itemIds:b,conversationIds:e})}},markItemReadUnread:{name:function(e,t,n,r,o,c){var i="TnS_MarkItem";return i+=n?"Read":"Unread",r||(i+="Background"),i},options:function(e,t,n,r,o,c){return r?{isCore:!0}:{}},customData:function(e,t,n,r,c,i){var a=e?e.tableQuery.type:null,u=e?Object(o.l)(e):null,s=e?Object(o.K)(e):null;return[a,t.length,u,s]},cosmosOnlyData:function(e,t,n,r,o,c){return JSON.stringify({itemIds:t})},actionSource:function(e,t,n,r,o){return o}}},i=n(284),a=n(4),u=Object(a.createStore)("markread",{markAsReadTimerTask:null,suppressedItemIdsMap:{}})(),s=Object(i.action)("AddMarkReadSuppressedItemIds")(Object(i.select)({store:function(){return u}})((function(e,t){e.forEach((function(e){return t.store.suppressedItemIdsMap[e]=!0}))}))),d=Object(i.action)("RemoveMarkReadSuppressedItemIds")(Object(i.select)({store:function(){return u}})((function(e,t){e.forEach((function(e){return delete t.store.suppressedItemIdsMap[e]}))}))),b=Object(i.action)("ClearMarkReadSuppressedMap")(Object(i.select)({store:function(){return u}})((function(e){e.store.suppressedItemIdsMap={}})));function f(e){for(var t=0;t<e.length;t++)if(!u.suppressedItemIdsMap[e[t]])return!1;return!0}var l=n(4190),O=n(3742),j=n(3374),v=n(3375),m=n(569),p=n(3395);function I(e,t,n){var r=Object(O.a)(n),o=e.map((function(e){return function(e,t,n){return Object(v.a)({Action:"SetReadState",ConversationId:Object(m.a)({Id:e.conversationId}),IsRead:t,ConversationLastSyncTime:Object(l.a)(e.conversationLastSyncTimeStamp),SuppressReadReceipts:!0,ContextFolderId:n})}(e,t,r)}));return Object(j.a)({ConversationActions:o,ReturnMovedItemIds:!1})}var h=n(7345),_=n(2129),R=n(2116),T=n(1926),y=n(1121),A=n(75),g=n(118),w=n(2789);var E=n(982);var S=n(3298),k=n(26),C=n(1603),M=n(2383),x=n(2408),L=n(245);function N(e,t,n){var r=function(e,t){var n="AlwaysSend"!=Object(k.a)().UserOptions.ReadReceipt,r=Object(S.a)("IsRead",t),o=[];return e.forEach((function(e){return o.push(Object(C.a)({Updates:[r],ItemId:Object(m.a)({Id:e})}))})),Object(x.a)({ItemChanges:o,ConflictResolution:"AlwaysOverwrite",MessageDisposition:"SaveOnly",SuppressReadReceipts:n})}(e,t);return Object(M.a)({Header:Object(L.a)(),Body:r},n).then((function(e){return e.Body.ResponseMessages.Items[0]}))}var P=n(2117),D=Object(g.d)("markItemsAsReadBasedOnItemIds",c.markItemReadUnread)((function(e,t,n,c,i,a){return Object(r.__awaiter)(this,void 0,void 0,(function(){var u,b,f,l,O;return Object(r.__generator)(this,(function(r){return 0==(u=function(e,t){var n=[];return e.forEach((function(e){var r=E.a.items.get(e);Object(o.R)(r)&&r.IsRead!=t&&n.push(e)})),n}(t,n)).length?[2,Promise.resolve()]:(n?d(u):c?s(u):A.g.warn("Invalid scenario to implicitly mark item as unread."),b=e?e.id:null,Object(P.a)(u,n,c,b),h.a.import().then((function(t){t(e?e.tableQuery:null,!1,n,i,u)})),f={itemIds:u},n?c?Object(_.d)("MarkAsRead",a,f):Object(_.d)("MarkAsReadImplicit",a,f):Object(_.d)("MarkAsUnread",a,f),l=Object(y.c)(e).requestOptions,O=e?Object(o.A)(u,e):[],[2,V(e,O,u,n,l)])}))}))}));function V(e,t,n,r,o){return N(n,r,o).then((function(e){return Object(w.a)(e)})).catch((function(n){var r=e?e.serverFolderId:null;return Object(w.b)(t,r,!0),Promise.reject(n)}))}var U=Object(g.d)("markConversationsAsReadBasedOnConversationIds",c.markConversationAsRead)((function(e,t,n,c,i,a,u){var d=function(e,t,n){var r=[];return e.forEach((function(e){var c=Object(o.G)(e,t);c&&c.unreadCount>0===n&&r.push(e)})),r}(u,t.id,n);if(0==d.length)return Promise.resolve();if(1==e.length&&1==t.selectedRowKeys.size){var f=o.b.getRowIdString(d[0],t),l=Object(o.G)(Object(r.__spread)(t.selectedRowKeys.keys())[0],t.id);if(f==l.id){var O=l.itemIds;n?b():c?s(O):A.g.warn("Invalid scenario to implicitly mark conversation as unread.")}}Object(R.a)(e,t.id,n,c),h.a.import().then((function(r){r(t.tableQuery,!1,n,i,e)}));var j={conversationIds:e};n?c?Object(_.d)("MarkAsRead",a,j):Object(_.d)("MarkAsReadImplicit",a,j):Object(_.d)("MarkAsUnread",a,j);var v=Object(y.c)(t).requestOptions;return Object(o.e)(t)?function(e,t,n,c){var i=[];return t.forEach((function(t){i.push.apply(i,Object(r.__spread)(o.b.getItemIds(t,e)))})),V(e,t,i,n,c)}(t,d,n,v):function(e,t,n,r,c){var i=Object(T.a)(e),a=function(e,t,n,r){var o=I(e,t,n);return Object(p.a)(o,void 0,r)}(t.map((function(t){return Object(o.h)(t,e.id)})),n,i,c),u=Object(o.W)(e,n,r);return Object(w.d)(a,t,i,e,u)}(t,d,n,c,v)}));var F=n(1168),K=Object(i.action)("autoMarkConversationAsRead")(Object(i.select)({items:function(){return E.a.items}})((function(e,t,n){var r=Object(o.A)([e],t),c=Object(F.a)(r[0],t.id);if(c&&Object(o.f)(t)){var i=c.itemIds;f(i)||(0==Object.keys(u.suppressedItemIdsMap).length?U([e],t,!0,!1,null,[],r):i.forEach((function(e){!f([e])&&n.items.get(e)&&D(t,[e],!0,!1,null,[])})),b())}}))),B=Object(i.action)("autoMarkItemAsRead")((function(e,t){Object(o.f)(t)&&(f([e])||(D(t,[e],!0,!1,null,[]),b()))}));function z(e,t){if("OnSelectionChange"===Object(k.a)().UserOptions.PreviewMarkAsRead){var n=o.b.getRowIdString(e,t);switch(t.tableQuery.listViewType){case 0:K(n,t);break;case 1:B(n,t)}}}var W=n(1187),G=Object(i.action)("onReadingPaneClosed")((function(e,t){Object(W.r)()||A.d("onReadingPaneClosed should only be called in single line view."),z(e,t)})),q=Object(i.action)("onSingleSelectionChanged")((function(e,t,n){Object(W.r)()||n&&z(e,t)}));function Q(e,t,n){0==e.length||Object(W.r)()||1!==e.length||"Unread"===Object(o.K)(n)||z(e[0],t)}var J=Object(a.action)("MARK_ITEMS_READ_BASED_ON_NODE_IDS",(function(e,t,n,r,o){return{nodeIds:e,tableViewId:t,isReadValueToSet:n,isExplicit:r,actionSource:o}})),H=Object(i.action)("markItemAsReadFromReadingPane")((function(e,t,n,r,c){var i=[],a=null;if(t){if(Object(o.L)(t)){var u=E.a.items.get(e).ConversationId.Id;i=Object(o.A)([u],t)}else i=Object(o.A)([e],t);a=Object(o.k)(t)}D(t,[e],n,!0,c,r).then((function(){t&&Object(w.b)(i,a)})).catch((function(e){t&&(Object(w.b)(i,a),Object(w.c)(t))}))})),X=n(2008),Z=Object(i.action)("markConversationsAsReadFromTable")((function(e,t,n,r){var c=Object(o.y)(e,t.id),i=Object(X.a)(e,t);return U(c,t,n,!0,r,i,e)})),$=Object(i.action)("markItemsReadFromTable")((function(e,t,n,r,c){var i=Object(o.y)(e,t.id),a=Object(X.a)(e,t),u=D(t,i,n,r,c,a),s=Object(o.k)(t),d=Object(o.W)(t,n,r);u.then((function(t){Object(w.b)(e,s,d)})).catch((function(n){Object(w.b)(e,s,d),Object(w.c)(t)}))})),Y=n(2191),ee=Object(i.action)("toggleRowReadState")((function(e,t,n){var r=o.T.tableViews.get(t),c=o.b.getUnreadCount(e,r)>0;switch(r.tableQuery.listViewType){case 0:Z([e],r,c,n);break;case 1:$([e],r,c,!0,n)}Object(Y.b)()})),te=Object(i.action)("onNavigateAwayViaUpDown")((function(e,t){z(e,t)})),ne=Object(a.action)("onKeyboardMarkAsRead",(function(e,t,n,r,o,c){return{tableView:e,selectedNodeIds:t,isInVirtualSelectAllMode:n,rowKeysToActOn:r,exclusionList:o,isReadValueToSet:c}})),re=n(254),oe=n(1002),ce=n(962),ie=n(10),ae=n(1967),ue=n(1899),se=n(4489),de=n(7),be=n(25);function fe(e,t){var n;return void 0===e||e.__type||(n=e,e=Object(r.__assign)({__type:"MarkAllItemsAsReadJsonRequest:#Exchange"},n)),Object(be.a)("MarkAllItemsAsRead",e,t)}var le=n(6036),Oe=n(2448),je=n(1557),ve=n(6376),me=n(2699),pe=n(3346),Ie=n(12107),he=n(12108),_e=n(12109);var Re=n(443),Te=n(76),ye=Object(i.action)("markAsReadInTable")((function(e,t,n,c,i,a,u){var s=this;if(i.length&&n)throw new Error("If in virtual select all mode, rowKeysToActOn should be empty.");if(t.length&&!n)throw new Error("If not in virtual select all mode, exclusionList should be empty.");var d=a.tableQuery.folderId,b=ce.d.folderTable.get(d),f=a.isInVirtualSelectAllMode&&t.length>0,l=Object(o.K)(a),O="ContextFolder"===e||"CommandBar"===e&&n&&!a.isInCheckedMode&&!Object(o.O)(a,l),j=i.length>0&&!n,v=n&&b&&b.UnreadCount>=le.b,p=function(e,t,n,r,c,i,a,u){if(e){if(Object(Te.h)("tri-categoryUnreadCount")){var s=Object(o.J)(i);if(s)return Object(Re.m)(s)}return null==n?void 0:n.UnreadCount}if(Object(o.q)(i)||t||Object(o.O)(i,a)&&u)return i.totalRowsInView-r;return c}(O,f,b,t.length,i.length,a,l,n),I=v||p>=le.b,_={headerText:"",bodyText:""};if(I){var R=Object(o.o)(a.tableQuery.type,a,b&&Object(ce.i)(b));_=function(e,t,n,r,o,c,i,a){var u,s="",d="",b=1===t,f=e||b;return n<0&&(A.g.warn("totalCount in getMarkAsReadUnreadAllConfirmText should not be negative."),s=f?o?Object(ie.b)(ve.e):Object(ie.b)(me.e):o?Object(ie.b)(ve.c):Object(ie.b)(me.c)),1==n&&(s=o?Object(ie.b)(pe.a):Object(ie.b)(me.a)),u=n<le.a?n:"10000+",s=f?o?Object(ie.c)(Object(ie.b)(ve.d),u):Object(ie.c)(Object(ie.b)(me.d),u):o?Object(ie.c)(Object(ie.b)(ve.b),u):Object(ie.c)(Object(ie.b)(me.b),u),d=e?o?Object(ie.c)(Object(ie.b)(he.b),r):Object(ie.c)(Object(ie.b)(_e.b),r):c||i?b?o?Object(ie.c)(Object(ie.b)(he.d),r):Object(ie.c)(Object(ie.b)(_e.d),r):o?Object(ie.c)(Object(ie.b)(he.c),r):Object(ie.c)(Object(ie.b)(_e.c),r):b?o?Object(ie.c)(Object(ie.b)(he.b),r):Object(ie.c)(Object(ie.b)(_e.b),r):o?Object(ie.c)(Object(ie.b)(he.a),r):Object(ie.c)(Object(ie.b)(_e.a),r),a&&(d=b?o?Object(ie.b)(Ie.b):Object(ie.b)(Ie.d):o?Object(ie.b)(Ie.a):Object(ie.b)(Ie.c)),{headerText:s,bodyText:d}}(O,a.tableQuery.listViewType,p,R,c,f,j,2===a.tableQuery.type)}Object(oe.b)(_.headerText,_.bodyText,!I,{delayCallbackAfterAnimation:!0,okText:Object(ie.b)(ae.a)}).then((function(u){return Object(r.__awaiter)(s,void 0,void 0,(function(){var s,b,f,l;return Object(r.__generator)(this,(function(O){if(u===oe.a.ok)if(je.b(),n){switch(s=Object(k.a)().UserOptions.ReadReceipt,b="DoNotAutomaticallySend"==s||"NeverSend"==s||Object(Oe.a)(d),f=Object(o.P)(d)?o.T.inboxPausedDateTime:null,function(e,t,n){var r="TnS_MarkAllAs";r+=t?"Read":"Unread",Object(re.o)(r,[e,Object(o.l)(n),n.isInCheckedMode])}(e,c,a),h.a.import().then((function(t){t(a.tableQuery,!0,c,e)})),l=[],a.tableQuery.listViewType){case 0:l=Object(se.a)(t,a.id);break;case 1:l=Object(o.y)(t,a.id)}Object(ue.a)(a,c,l),function(e,t,n,o,c,i){var a,u=null!=n?n.map((function(e){return Object(m.a)({Id:e})})):void 0;fe({Header:Object(L.a)(),Body:(a={ReadFlag:t,SuppressReadReceipts:o,FromFilter:null,FolderIds:[e],ItemIdsToExclude:u,ClientLastSyncTime:i&&Object(de.ub)(i)},Object(r.__assign)({__type:"MarkAllItemsAsReadRequest:#Exchange"},a))},c).then((function(e){return e.Body.ResponseMessages.Items[0]}))}(Object(o.j)(a),c,l,b,Object(y.c)(a).requestOptions,f)}else switch(a.tableQuery.listViewType){case 0:Z(i,a,c,e);break;case 1:$(i,a,c,!0,e)}return[2]}))}))}))}));var Ae=n(1186),ge=Object(i.action)("setAutoMarkAsReadTimer")(Object(i.select)({markAsReadDelaytime:function(){return Object(k.a)().UserOptions.MarkAsReadDelaytime},store:function(){return u},userOptions:function(){return Object(k.a)().UserOptions}})((function(e,t,n){var r=Object(Ae.a)();if(r&&Object(o.f)(r)){var c=n.markAsReadDelaytime,i=n.store;"Delayed"==n.userOptions.PreviewMarkAsRead&&(i.markAsReadTimerTask=setTimeout((function(){Ee(e,r,t)}),1e3*c))}}))),we=Object(i.action)("clearAutoMarkAsReadTimer")(Object(i.select)({store:function(){return u}})((function(e){e.store.markAsReadTimerTask&&(clearTimeout(e.store.markAsReadTimerTask),e.store.markAsReadTimerTask=null)}))),Ee=Object(i.action)("setMarkAsReadTimer:timeout")((function(e,t,n){if(we(),n)B(e,t);else switch(t.tableQuery.listViewType){case 0:K(e,t);break;case 1:B(e,t)}})),Se=n(2575),ke=n(115),Ce=Object(ke.e)(Se.b,"CLONE_ON_ITEM_PART_DESELECTED",(function(e){var t=e.itemId,n=e.tableView;n&&"OnSelectionChange"==Object(k.a)().UserOptions.PreviewMarkAsRead&&B(t,n)})),Me=n(6496),xe=(Object(a.orchestrator)(J,(function(e){var t=Object(Me.a)(e.nodeIds),n=o.T.tableViews.get(e.tableViewId);D(n,t,e.isReadValueToSet,e.isExplicit,e.actionSource,null)})),n(1199)),Le=n(2373),Ne=n(2218);Object(a.orchestrator)(xe.q,(function(e){var t=Object(Le.b)(e.nodeIdToSelect);t&&(Ne.a.importAndExecute(),Ne.j.importAndExecute(t.ItemId.Id,!0))}));Object(a.orchestrator)(ne,(function(e){var t=e.tableView,n=e.selectedNodeIds,r=e.isInVirtualSelectAllMode,o=e.rowKeysToActOn,c=e.exclusionList,i=e.isReadValueToSet;n.length>0?J(n,t.id,i,!0,"Keyboard"):ye("Keyboard",c,r,i,o,t)}));n.d(t,"onReadingPaneClosed",(function(){return G})),n.d(t,"onSingleSelectionChanged",(function(){return q})),n.d(t,"markReadOnTableViewChange",(function(){return Q})),n.d(t,"markItemsAsReadBasedOnNodeIds",(function(){return J})),n.d(t,"markItemAsReadFromReadingPane",(function(){return H})),n.d(t,"toggleRowReadState",(function(){return ee})),n.d(t,"onNavigateAwayViaUpDown",(function(){return te})),n.d(t,"onKeyboardMarkAsRead",(function(){return ne})),n.d(t,"markAsReadInTable",(function(){return ye})),n.d(t,"clearAutoMarkAsReadTimer",(function(){return we})),n.d(t,"setAutoMarkAsReadTimer",(function(){return ge})),n.d(t,"onItemPartDeselectedOrchestrator",(function(){return Ce}))},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(23),o=n(1);function c(e){return{get:e}}function i(e,t){return Object(o.useMemo)((function(){return Object(r.computed)(e)}),t).get()}},6036:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=1e4,o=25},6376:function(e){e.exports=JSON.parse('{"a":"b6b","c":"c6b","e":"d6b","b":"e6b","d":"f6b"}')},6496:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(2373);function c(e){var t,n,c=[];try{for(var i=Object(r.__values)(e),a=i.next();!a.done;a=i.next()){var u=a.value,s=Object(o.b)(u);s&&c.push(s.ItemId.Id)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return c}},7345:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a}));var r=n(115),o=new r.c((function(){return n.e(324).then(n.bind(null,10806))})),c=new r.b(o,(function(e){return e.addMarkAsReadDiagnostics})),i=new r.b(o,(function(e){return e.addUnreadCountNotificationDiagnostics})),a=new r.b(o,(function(e){return e.addUnreadCountSubscriptionDiagnostics}))},999:function(e,t,n){"use strict";n.d(t,"l",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"h",(function(){return v})),n.d(t,"f",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return I})),n.d(t,"g",(function(){return h}));var r,o,c=n(3),i=n(60),a=n(26),u=["ar-sa","da-dk","de-at","de-ch","de-de","el-gr","en-ar","en-at","en-au","en-br","en-ca","en-ch","en-cl","en-co","en-de","en-dk","en-fi","en-gb","en-gr","en-hk","en-ie","en-in","en-mx","en-my","en-nl","en-no","en-nz","en-pe","en-pt","en-sa","en-se","en-sg","en-th","en-tr","en-us","en-za","es-ar","es-cl","es-co","es-ec","es-es","es-mx","es-pe","es-us","es-ve","fi-fi","fr-be","fr-ca","fr-ch","fr-fr","it-it","ja-jp","ko-kr","ms-my","nb-no","nl-be","nl-nl","pt-br","pt-pt","sv-se","th-th","tr-tr","zh-cn","zh-hk","zh-sg","zh-tw"],s=["ar-ir","es-cu","ko-kp","ar-sy","en-su","uk-ua"],d={ae:"ar-ae",ar:"es-ar",at:"de-at",au:"en-au",be:"fr-be",br:"pt-br",ca:"en-ca",ch:"de-ch",cl:"es-cl",cn:"zh-cn",co:"es-co",cr:"es-cr",cu:"es-cu",de:"de-de",dk:"da-dk",do:"es-do",ec:"es-ec",eg:"ar-eg",es:"es-es",fi:"fi-fi",fr:"fr-fr",gb:"en-gb",uk:"en-gb",gr:"el-gr",gt:"es-gt",hk:"zh-hk",id:"id-id",ie:"en-ie",in:"en-in",ir:"ar-ir",it:"it-it",jp:"ja-jp",kp:"ko-kp",kr:"ko-kr",mx:"es-mx",my:"ms-my",nl:"nl-nl",no:"nb-no",nz:"en-nz",pe:"es-pe",ph:"fil-ph",pl:"pl-pl",pt:"pt-pt",ru:"ru-ru",sa:"ar-sa",se:"sv-se",sg:"en-sg",su:"en-su",th:"th-th",tr:"tr-tr",tw:"zh-tw",ua:"uk-ua",us:"en-us",ve:"es-ve",vn:"vi-vn",za:"en-za"};function b(){return Object(a.a)().SessionSettings.IsPremiumConsumerMailbox}function f(){return Object(a.a)().IsConsumerChild}function l(){return Object(a.a)().SessionSettings.IsShadowMailbox}function O(){return void 0!==o?o:o=function(){if(Object(c.d)("ormarket"))return Object(c.a)("ormarket");var e=Object(a.a)(),t=e.SessionSettings.UserCulture;if(!e.AdMarket||!/^[a-zA-z\-]*$/.test(e.AdMarket))return t?t.toLowerCase():"en-us";var n=e.AdMarket.toLowerCase();return u.indexOf(n)>-1?n:d[n.split("-")[1]]||n}()}function j(e){return null!=e?e.toUpperCase().split("-"):[]}function v(e){return j(e)[1]||"US"}function m(){return Object(i.a)("ANON")}function p(){return Object(i.a)("MUID")}function I(){return!!Object(i.a)("TOptOut")}function h(){return r||(r=Object(c.a)("anjs")||"https://acdn.adnxs.com/ast/static/0.30.1/ast.js")}}}]);
//# sourceMappingURL=owa.MarkRead.js.map
self.scriptsLoaded['owa.MarkRead.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MarkRead.js'] = (new Date()).getTime();
// Compiled by ClojureScript 0.0-3299 {}
goog.provide('om.next.protocols');
goog.require('cljs.core');

om.next.protocols.IPull = (function (){var obj11035 = {};
return obj11035;
})();

om.next.protocols.pull = (function om$next$protocols$pull(pullable,selector,context){
if((function (){var and__4863__auto__ = pullable;
if(and__4863__auto__){
return pullable.om$next$protocols$IPull$pull$arity$3;
} else {
return and__4863__auto__;
}
})()){
return pullable.om$next$protocols$IPull$pull$arity$3(pullable,selector,context);
} else {
var x__5511__auto__ = (((pullable == null))?null:pullable);
return (function (){var or__4875__auto__ = (om.next.protocols.pull[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.protocols.pull["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPull.pull",pullable);
}
}
})().call(null,pullable,selector,context);
}
});


om.next.protocols.IPush = (function (){var obj11037 = {};
return obj11037;
})();

om.next.protocols.push = (function om$next$protocols$push(pushable,entity,context){
if((function (){var and__4863__auto__ = pushable;
if(and__4863__auto__){
return pushable.om$next$protocols$IPush$push$arity$3;
} else {
return and__4863__auto__;
}
})()){
return pushable.om$next$protocols$IPush$push$arity$3(pushable,entity,context);
} else {
var x__5511__auto__ = (((pushable == null))?null:pushable);
return (function (){var or__4875__auto__ = (om.next.protocols.push[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.protocols.push["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPush.push",pushable);
}
}
})().call(null,pushable,entity,context);
}
});


om.next.protocols.IPullAsync = (function (){var obj11039 = {};
return obj11039;
})();

om.next.protocols.pull_async = (function om$next$protocols$pull_async(pullable,selector,context,cb){
if((function (){var and__4863__auto__ = pullable;
if(and__4863__auto__){
return pullable.om$next$protocols$IPullAsync$pull_async$arity$4;
} else {
return and__4863__auto__;
}
})()){
return pullable.om$next$protocols$IPullAsync$pull_async$arity$4(pullable,selector,context,cb);
} else {
var x__5511__auto__ = (((pullable == null))?null:pullable);
return (function (){var or__4875__auto__ = (om.next.protocols.pull_async[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.protocols.pull_async["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPullAsync.pull-async",pullable);
}
}
})().call(null,pullable,selector,context,cb);
}
});


om.next.protocols.IPushAsync = (function (){var obj11041 = {};
return obj11041;
})();

om.next.protocols.push_async = (function om$next$protocols$push_async(pushable,entity,context,cb){
if((function (){var and__4863__auto__ = pushable;
if(and__4863__auto__){
return pushable.om$next$protocols$IPushAsync$push_async$arity$4;
} else {
return and__4863__auto__;
}
})()){
return pushable.om$next$protocols$IPushAsync$push_async$arity$4(pushable,entity,context,cb);
} else {
var x__5511__auto__ = (((pushable == null))?null:pushable);
return (function (){var or__4875__auto__ = (om.next.protocols.push_async[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.protocols.push_async["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPushAsync.push-async",pushable);
}
}
})().call(null,pushable,entity,context,cb);
}
});


om.next.protocols.IStore = (function (){var obj11043 = {};
return obj11043;
})();

om.next.protocols.commit = (function om$next$protocols$commit(store,component,entity){
if((function (){var and__4863__auto__ = store;
if(and__4863__auto__){
return store.om$next$protocols$IStore$commit$arity$3;
} else {
return and__4863__auto__;
}
})()){
return store.om$next$protocols$IStore$commit$arity$3(store,component,entity);
} else {
var x__5511__auto__ = (((store == null))?null:store);
return (function (){var or__4875__auto__ = (om.next.protocols.commit[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.protocols.commit["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IStore.commit",store);
}
}
})().call(null,store,component,entity);
}
});


//# sourceMappingURL=protocols.js.map
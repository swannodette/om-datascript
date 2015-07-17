// Compiled by ClojureScript 0.0-3299 {}
goog.provide('om_datascript.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next.protocols');
goog.require('om.dom');
goog.require('clojure.browser.repl');
goog.require('goog.object');
goog.require('datascript');
goog.require('cljs.pprint');
goog.require('om.next');
if(typeof om_datascript.core.repl_conn !== 'undefined'){
} else {
om_datascript.core.repl_conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
if(typeof om_datascript.core.ds_query !== 'undefined'){
} else {
om_datascript.core.ds_query = (function (){var method_table__5770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5774__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-datascript.core","ds-query"),((function (method_table__5770__auto__,prefer_table__5771__auto__,method_cache__5772__auto__,cached_hierarchy__5773__auto__,hierarchy__5774__auto__){
return (function (_,root,___$1){
return root;
});})(method_table__5770__auto__,prefer_table__5771__auto__,method_cache__5772__auto__,cached_hierarchy__5773__auto__,hierarchy__5774__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5774__auto__,method_table__5770__auto__,prefer_table__5771__auto__,method_cache__5772__auto__,cached_hierarchy__5773__auto__));
})();
}
cljs.core._add_method.call(null,om_datascript.core.ds_query,new cljs.core.Keyword("app","root","app/root",-448823820),(function (db,_,selector){
return datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","title","app/title",636408784)], null)], null),db,cljs.core.conj.call(null,selector,new cljs.core.Keyword("db","id","db/id",-1388397098)));
}));

/**
* @constructor
*/
om_datascript.core.DataScriptStore = (function (db,conn){
this.db = db;
this.conn = conn;
})
om_datascript.core.DataScriptStore.prototype.om$next$protocols$IPull$ = true;

om_datascript.core.DataScriptStore.prototype.om$next$protocols$IPull$pull$arity$3 = (function (this$,selector,_){
var self__ = this;
var this$__$1 = this;
var vec__12480 = cljs.core.first.call(null,selector);
var root = cljs.core.nth.call(null,vec__12480,(0),null);
var root_selector = cljs.core.nth.call(null,vec__12480,(1),null);
return om_datascript.core.ds_query.call(null,self__.db,root,root_selector);
});

om_datascript.core.DataScriptStore.prototype.om$next$protocols$IPush$ = true;

om_datascript.core.DataScriptStore.prototype.om$next$protocols$IPush$push$arity$3 = (function (this$,entity,_){
var self__ = this;
var this$__$1 = this;
datascript.transact_BANG_.call(null,self__.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null));

return (new om_datascript.core.DataScriptStore(cljs.core.deref.call(null,self__.conn),self__.conn));
});

om_datascript.core.DataScriptStore.prototype.om$next$protocols$IStore$ = true;

om_datascript.core.DataScriptStore.prototype.om$next$protocols$IStore$commit$arity$3 = (function (this$,component,entity){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.protocols.push.call(null,this$__$1,entity,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)], null);
});

om_datascript.core.DataScriptStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null)], null);
});

om_datascript.core.DataScriptStore.cljs$lang$type = true;

om_datascript.core.DataScriptStore.cljs$lang$ctorStr = "om-datascript.core/DataScriptStore";

om_datascript.core.DataScriptStore.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"om-datascript.core/DataScriptStore");
});

om_datascript.core.__GT_DataScriptStore = (function om_datascript$core$__GT_DataScriptStore(db,conn){
return (new om_datascript.core.DataScriptStore(db,conn));
});

om_datascript.core.increment_BANG_ = (function om_datascript$core$increment_BANG_(c,props){
return cljs.core.println.call(null,props);
});
om_datascript.core.Counter = (function om_datascript$core$Counter(){
var this__12433__auto__ = this;
return React.Component.apply(this__12433__auto__,arguments);
});

om_datascript.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x12481_12484 = om_datascript.core.Counter.prototype;
x12481_12484.shouldComponentUpdate = ((function (x12481_12484){
return (function (next_props__12417__auto__,next_state__12418__auto__){
var this__12416__auto__ = this;
return (cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12416__auto__),next_props__12417__auto__.omcljs$value)) || (cljs.core.not_EQ_.call(null,om.next.state.call(null,this__12416__auto__),next_state__12418__auto__));
});})(x12481_12484))
;

x12481_12484.render = ((function (x12481_12484){
return (function (){
var this$ = this;
var map__12482 = om.next.props.call(null,this$);
var map__12482__$1 = ((cljs.core.seq_QMARK_.call(null,map__12482))?cljs.core.apply.call(null,cljs.core.hash_map,map__12482):map__12482);
var props = map__12482__$1;
var count = cljs.core.get.call(null,map__12482__$1,new cljs.core.Keyword("state","count","state/count",-1671837210));
return React.DOM.div(null,React.DOM.p(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')),React.DOM.button({"onClick": ((function (map__12482,map__12482__$1,props,count,this$,x12481_12484){
return (function (_){
return om_datascript.core.increment_BANG_.call(null,this$,props);
});})(map__12482,map__12482__$1,props,count,this$,x12481_12484))
},"Click Me!"));
});})(x12481_12484))
;


om_datascript.core.Counter.prototype.constructor = om_datascript.core.Counter;

var x12483_12485 = om_datascript.core.Counter;
x12483_12485.om$next$IQuery$ = true;

x12483_12485.om$next$IQuery$query$arity$1 = ((function (x12483_12485){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("state","count","state/count",-1671837210)], null);
});})(x12483_12485))
;

om_datascript.core.counter = om.next.create_factory.call(null,om_datascript.core.Counter);
om_datascript.core.HelloWorld = (function om_datascript$core$HelloWorld(){
var this__12433__auto__ = this;
return React.Component.apply(this__12433__auto__,arguments);
});

om_datascript.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x12488_12491 = om_datascript.core.HelloWorld.prototype;
x12488_12491.shouldComponentUpdate = ((function (x12488_12491){
return (function (next_props__12417__auto__,next_state__12418__auto__){
var this__12416__auto__ = this;
return (cljs.core.not_EQ_.call(null,om.next.props.call(null,this__12416__auto__),next_props__12417__auto__.omcljs$value)) || (cljs.core.not_EQ_.call(null,om.next.state.call(null,this__12416__auto__),next_state__12418__auto__));
});})(x12488_12491))
;

x12488_12491.render = ((function (x12488_12491){
return (function (){
var this$ = this;
var map__12489 = cljs.core.ffirst.call(null,om.next.props.call(null,this$));
var map__12489__$1 = ((cljs.core.seq_QMARK_.call(null,map__12489))?cljs.core.apply.call(null,cljs.core.hash_map,map__12489):map__12489);
var props = map__12489__$1;
var title = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var state = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword("app","state","app/state",-1988589072));
return cljs.core.apply.call(null,om.dom.div,null,React.DOM.h2(null,title),cljs.core.map.call(null,((function (map__12489,map__12489__$1,props,title,state,this$,x12488_12491){
return (function (p1__12486_SHARP_,p2__12487_SHARP_){
return om_datascript.core.counter.call(null,cljs.core.assoc.call(null,p1__12486_SHARP_,new cljs.core.Keyword(null,"react-key","react-key",1337881348),p2__12487_SHARP_));
});})(map__12489,map__12489__$1,props,title,state,this$,x12488_12491))
,state,cljs.core.range.call(null)));
});})(x12488_12491))
;


om_datascript.core.HelloWorld.prototype.constructor = om_datascript.core.HelloWorld;

var x12490_12492 = om_datascript.core.HelloWorld;
x12490_12492.om$next$IQueryParams$ = true;

x12490_12492.om$next$IQueryParams$params$arity$1 = ((function (x12490_12492){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counter","counter",804008177),om.next.query.call(null,om_datascript.core.Counter)], null);
});})(x12490_12492))
;

x12490_12492.om$next$IQuery$ = true;

x12490_12492.om$next$IQuery$query$arity$1 = ((function (x12490_12492){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","root","app/root",-448823820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","state","app/state",-1988589072),new cljs.core.Symbol(null,"?counter","?counter",-139701964,null)], null)], null)], null);
});})(x12490_12492))
;

om_datascript.core.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","state","app/state",-1988589072),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null)], null);
om_datascript.core.conn = datascript.create_conn.call(null,om_datascript.core.schema);
datascript.transact_BANG_.call(null,om_datascript.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","title","app/title",636408784),"Hello, World!",new cljs.core.Keyword("app","state","app/state",-1988589072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("state","count","state/count",-1671837210),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("state","count","state/count",-1671837210),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("state","count","state/count",-1671837210),(0)], null)], null)], null)], null));
om_datascript.core.store = cljs.core.atom.call(null,(new om_datascript.core.DataScriptStore(cljs.core.deref.call(null,om_datascript.core.conn),om_datascript.core.conn)));
om_datascript.core.main = (function om_datascript$core$main(){
return om.next.root.call(null,om_datascript.core.HelloWorld,om_datascript.core.store,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),goog.dom.getElement("app")], null));
});
om_datascript.core.main.call(null);

//# sourceMappingURL=core.js.map
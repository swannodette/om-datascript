// Compiled by ClojureScript 0.0-3299 {}
goog.provide('om.next.stores');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next.protocols');
om.next.stores.tree_pull = (function om$next$stores$tree_pull(m,sel){
var sel__$1 = cljs.core.seq.call(null,sel);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(sel__$1){
var k = cljs.core.first.call(null,sel__$1);
if(((k instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,k,new cljs.core.Symbol(null,"*","*",345799209,null)))){
return m;
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core.contains_QMARK_.call(null,m,k)){
var G__11027 = cljs.core.next.call(null,sel__$1);
var G__11028 = cljs.core.assoc.call(null,ret,k,cljs.core.get.call(null,m,k));
sel__$1 = G__11027;
ret = G__11028;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid key "),cljs.core.str(k)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-key","error/invalid-key",1356604268)], null));
}
} else {
if(cljs.core.map_QMARK_.call(null,k)){
var G__11029 = cljs.core.next.call(null,sel__$1);
var G__11030 = (function (){var vec__11026 = cljs.core.first.call(null,k);
var k__$1 = cljs.core.nth.call(null,vec__11026,(0),null);
var sel__$2 = cljs.core.nth.call(null,vec__11026,(1),null);
if(cljs.core.contains_QMARK_.call(null,m,k__$1)){
var v = cljs.core.get.call(null,m,k__$1);
var pv = ((cljs.core.vector_QMARK_.call(null,v))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (sel__$1,ret,v,vec__11026,k__$1,sel__$2,k){
return (function (p1__11024_SHARP_){
return om$next$stores$tree_pull.call(null,p1__11024_SHARP_,sel__$2);
});})(sel__$1,ret,v,vec__11026,k__$1,sel__$2,k))
),v):((cljs.core.map_QMARK_.call(null,v))?om$next$stores$tree_pull.call(null,v,sel__$2):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot pull "),cljs.core.str(v)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-tree-pull-value","error/invalid-tree-pull-value",1733287498)], null))})()
));
return cljs.core.assoc.call(null,ret,k__$1,pv);
} else {
return new cljs.core.Keyword(null,"else","else",-1508377146);
}
})();
sel__$1 = G__11029;
ret = G__11030;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid selector fragment "),cljs.core.str(k)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-selector-fragment","error/invalid-selector-fragment",-1946122554)], null));

}
}
}
} else {
return ret;
}
break;
}
});

/**
* @constructor
*/
om.next.stores.TreeStore = (function (data,index){
this.data = data;
this.index = index;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om.next.stores.TreeStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.print_map.call(null,self__.data,cljs.core.pr_writer,writer,opts);
});

om.next.stores.TreeStore.prototype.om$next$protocols$IPull$ = true;

om.next.stores.TreeStore.prototype.om$next$protocols$IPull$pull$arity$3 = (function (_,selector,___$1){
var self__ = this;
var ___$2 = this;
return om.next.stores.tree_pull.call(null,self__.data,selector);
});

om.next.stores.TreeStore.prototype.om$next$protocols$IPush$ = true;

om.next.stores.TreeStore.prototype.om$next$protocols$IPush$push$arity$3 = (function (_,entity,ctxt){
var self__ = this;
var ___$1 = this;
return (new om.next.stores.TreeStore(cljs.core.assoc_in.call(null,self__.data,ctxt,entity),self__.index));
});

om.next.stores.TreeStore.prototype.om$next$protocols$IStore$ = true;

om.next.stores.TreeStore.prototype.om$next$protocols$IStore$commit$arity$3 = (function (this$,component,entity){
var self__ = this;
var this$__$1 = this;
var key = component.props.key;
var path = (function (){var G__11031 = cljs.core.conj.call(null,cljs.core.get_in.call(null,self__.index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component->path","component->path",1905812178),cljs.core.type.call(null,component)], null)));
var G__11031__$1 = (cljs.core.truth_(key)?cljs.core.conj.call(null,G__11031,key):G__11031);
return G__11031__$1;
})();
component.props.omcljs$value = entity;

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.protocols.push.call(null,this$__$1,entity,path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null)], null);
});

om.next.stores.TreeStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null);
});

om.next.stores.TreeStore.cljs$lang$type = true;

om.next.stores.TreeStore.cljs$lang$ctorStr = "om.next.stores/TreeStore";

om.next.stores.TreeStore.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"om.next.stores/TreeStore");
});

om.next.stores.__GT_TreeStore = (function om$next$stores$__GT_TreeStore(data,index){
return (new om.next.stores.TreeStore(data,index));
});

om.next.stores.table_pull = (function om$next$stores$table_pull(m,selector,ctxt){
return null;
});

/**
* @constructor
*/
om.next.stores.TableStore = (function (data){
this.data = data;
})
om.next.stores.TableStore.prototype.om$next$protocols$IPush$ = true;

om.next.stores.TableStore.prototype.om$next$protocols$IPush$push$arity$3 = (function (this$,selector,ctxt){
var self__ = this;
var this$__$1 = this;
return om.next.stores.table_pull.call(null,this$__$1,selector,ctxt);
});

om.next.stores.TableStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

om.next.stores.TableStore.cljs$lang$type = true;

om.next.stores.TableStore.cljs$lang$ctorStr = "om.next.stores/TableStore";

om.next.stores.TableStore.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"om.next.stores/TableStore");
});

om.next.stores.__GT_TableStore = (function om$next$stores$__GT_TableStore(data){
return (new om.next.stores.TableStore(data));
});


/**
* @constructor
*/
om.next.stores.RemoteStore = (function (data,fetch,local_keys){
this.data = data;
this.fetch = fetch;
this.local_keys = local_keys;
})
om.next.stores.RemoteStore.prototype.om$next$protocols$IPushAsync$ = true;

om.next.stores.RemoteStore.prototype.om$next$protocols$IPushAsync$push_async$arity$4 = (function (this$,entity,ctxt,cb){
var self__ = this;
var this$__$1 = this;
return null;
});

om.next.stores.RemoteStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"fetch","fetch",558537283,null),new cljs.core.Symbol(null,"local-keys","local-keys",-1324758147,null)], null);
});

om.next.stores.RemoteStore.cljs$lang$type = true;

om.next.stores.RemoteStore.cljs$lang$ctorStr = "om.next.stores/RemoteStore";

om.next.stores.RemoteStore.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"om.next.stores/RemoteStore");
});

om.next.stores.__GT_RemoteStore = (function om$next$stores$__GT_RemoteStore(data,fetch,local_keys){
return (new om.next.stores.RemoteStore(data,fetch,local_keys));
});


//# sourceMappingURL=stores.js.map
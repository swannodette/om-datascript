// Compiled by ClojureScript 0.0-3299 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.walk');
goog.require('om.next.protocols');
goog.require('om.next.stores');
om.next._STAR_app_state_STAR_ = null;
om.next.render_queued = false;
om.next.render_queue = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);

om.next.IQueryParams = (function (){var obj10887 = {};
return obj10887;
})();

om.next.params = (function om$next$params(this$){
if((function (){var and__4863__auto__ = this$;
if(and__4863__auto__){
return this$.om$next$IQueryParams$params$arity$1;
} else {
return and__4863__auto__;
}
})()){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__5511__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4875__auto__ = (om.next.params[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.params["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
})().call(null,this$);
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

om.next.IQuery = (function (){var obj10889 = {};
return obj10889;
})();

om.next.query = (function om$next$query(this$){
if((function (){var and__4863__auto__ = this$;
if(and__4863__auto__){
return this$.om$next$IQuery$query$arity$1;
} else {
return and__4863__auto__;
}
})()){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__5511__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4875__auto__ = (om.next.query[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (om.next.query["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
})().call(null,this$);
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__4863__auto__ = (x instanceof cljs.core.Symbol);
if(and__4863__auto__){
return goog.string.startsWith(cljs.core.name.call(null,x),"?");
} else {
return and__4863__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,node))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,node),node);
} else {
return node;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.bound_query = (function om$next$bound_query(cl){
return cljs.core.with_meta.call(null,om.next.bind_query.call(null,om.next.query.call(null,cl),om.next.params.call(null,cl)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cl], null));
});
om.next.create_factory = (function om$next$create_factory(cl){
return (function (props,children){
return React.createElement(cl,{"omcljs$value": props, "omcljs$appState": om.next._STAR_app_state_STAR_},children);
});
});
om.next.props = (function om$next$props(c){
return c.props.omcljs$value;
});
om.next.state = (function om$next$state(c){
return c.state;
});
om.next.app_state = (function om$next$app_state(c){
return c.props.omcljs$appState;
});
om.next.key = (function om$next$key(c){
return c.props.key;
});
om.next.build_index = (function om$next$build_index(cl){
var component__GT_path = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prop__GT_component = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var build_index_STAR_ = ((function (component__GT_path,prop__GT_component){
return (function om$next$build_index_$_build_index_STAR_(cl__$1,sel,path){
cljs.core.swap_BANG_.call(null,component__GT_path,cljs.core.assoc,cl__$1,path);

var map__10941 = cljs.core.group_by.call(null,cljs.core.keyword_QMARK_,sel);
var map__10941__$1 = ((cljs.core.seq_QMARK_.call(null,map__10941))?cljs.core.apply.call(null,cljs.core.hash_map,map__10941):map__10941);
var ks = cljs.core.get.call(null,map__10941__$1,true);
var ms = cljs.core.get.call(null,map__10941__$1,false);
cljs.core.swap_BANG_.call(null,prop__GT_component,((function (map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component){
return (function (p1__10890_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__10890_SHARP_,cljs.core.zipmap.call(null,ks,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([cl__$1], true))));
});})(map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component))
);

var seq__10942 = cljs.core.seq.call(null,ms);
var chunk__10943 = null;
var count__10944 = (0);
var i__10945 = (0);
while(true){
if((i__10945 < count__10944)){
var m = cljs.core._nth.call(null,chunk__10943,i__10945);
var vec__10946_10948 = cljs.core.first.call(null,m);
var attr_10949 = cljs.core.nth.call(null,vec__10946_10948,(0),null);
var sel_10950__$1 = cljs.core.nth.call(null,vec__10946_10948,(1),null);
cljs.core.swap_BANG_.call(null,prop__GT_component,((function (seq__10942,chunk__10943,count__10944,i__10945,vec__10946_10948,attr_10949,sel_10950__$1,m,map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component){
return (function (p1__10891_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__10891_SHARP_,new cljs.core.PersistentArrayMap.fromArray([attr_10949,cljs.core.PersistentHashSet.fromArray([cl__$1], true)], true, false));
});})(seq__10942,chunk__10943,count__10944,i__10945,vec__10946_10948,attr_10949,sel_10950__$1,m,map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component))
);

var cl_10951__$2 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel_10950__$1));
om$next$build_index_$_build_index_STAR_.call(null,cl_10951__$2,sel_10950__$1,cljs.core.conj.call(null,path,attr_10949));

var G__10952 = seq__10942;
var G__10953 = chunk__10943;
var G__10954 = count__10944;
var G__10955 = (i__10945 + (1));
seq__10942 = G__10952;
chunk__10943 = G__10953;
count__10944 = G__10954;
i__10945 = G__10955;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__10942);
if(temp__4423__auto__){
var seq__10942__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10942__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__10942__$1);
var G__10956 = cljs.core.chunk_rest.call(null,seq__10942__$1);
var G__10957 = c__5660__auto__;
var G__10958 = cljs.core.count.call(null,c__5660__auto__);
var G__10959 = (0);
seq__10942 = G__10956;
chunk__10943 = G__10957;
count__10944 = G__10958;
i__10945 = G__10959;
continue;
} else {
var m = cljs.core.first.call(null,seq__10942__$1);
var vec__10947_10960 = cljs.core.first.call(null,m);
var attr_10961 = cljs.core.nth.call(null,vec__10947_10960,(0),null);
var sel_10962__$1 = cljs.core.nth.call(null,vec__10947_10960,(1),null);
cljs.core.swap_BANG_.call(null,prop__GT_component,((function (seq__10942,chunk__10943,count__10944,i__10945,vec__10947_10960,attr_10961,sel_10962__$1,m,seq__10942__$1,temp__4423__auto__,map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component){
return (function (p1__10891_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__10891_SHARP_,new cljs.core.PersistentArrayMap.fromArray([attr_10961,cljs.core.PersistentHashSet.fromArray([cl__$1], true)], true, false));
});})(seq__10942,chunk__10943,count__10944,i__10945,vec__10947_10960,attr_10961,sel_10962__$1,m,seq__10942__$1,temp__4423__auto__,map__10941,map__10941__$1,ks,ms,component__GT_path,prop__GT_component))
);

var cl_10963__$2 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel_10962__$1));
om$next$build_index_$_build_index_STAR_.call(null,cl_10963__$2,sel_10962__$1,cljs.core.conj.call(null,path,attr_10961));

var G__10964 = cljs.core.next.call(null,seq__10942__$1);
var G__10965 = null;
var G__10966 = (0);
var G__10967 = (0);
seq__10942 = G__10964;
chunk__10943 = G__10965;
count__10944 = G__10966;
i__10945 = G__10967;
continue;
}
} else {
return null;
}
}
break;
}
});})(component__GT_path,prop__GT_component))
;
build_index_STAR_.call(null,cl,om.next.bound_query.call(null,cl),cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->component","prop->component",786891103),cljs.core.deref.call(null,prop__GT_component),new cljs.core.Keyword(null,"component->path","component->path",1905812178),cljs.core.deref.call(null,component__GT_path)], null);
});
om.next.needs_display_BANG_ = (function om$next$needs_display_BANG_(xs){
return cljs.core.swap_BANG_.call(null,om.next.render_queue,cljs.core.into,xs);
});
om.next.commit_BANG_ = (function om$next$commit_BANG_(c,entity){
var store = cljs.core.deref.call(null,om.next.app_state.call(null,c));
var vec__10969 = om.next.protocols.commit.call(null,store,c,entity);
var store_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10969,(0),null);
var render_list = cljs.core.nth.call(null,vec__10969,(1),null);
cljs.core.reset_BANG_.call(null,om.next.app_state.call(null,c),store_SINGLEQUOTE_);

return om.next.needs_display_BANG_.call(null,render_list);
});
om.next.flush_queue = (function om$next$flush_queue(){
var seq__10974_10978 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.next.render_queue));
var chunk__10975_10979 = null;
var count__10976_10980 = (0);
var i__10977_10981 = (0);
while(true){
if((i__10977_10981 < count__10976_10980)){
var c_10982 = cljs.core._nth.call(null,chunk__10975_10979,i__10977_10981);
c_10982.forceUpdate();

var G__10983 = seq__10974_10978;
var G__10984 = chunk__10975_10979;
var G__10985 = count__10976_10980;
var G__10986 = (i__10977_10981 + (1));
seq__10974_10978 = G__10983;
chunk__10975_10979 = G__10984;
count__10976_10980 = G__10985;
i__10977_10981 = G__10986;
continue;
} else {
var temp__4423__auto___10987 = cljs.core.seq.call(null,seq__10974_10978);
if(temp__4423__auto___10987){
var seq__10974_10988__$1 = temp__4423__auto___10987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10974_10988__$1)){
var c__5660__auto___10989 = cljs.core.chunk_first.call(null,seq__10974_10988__$1);
var G__10990 = cljs.core.chunk_rest.call(null,seq__10974_10988__$1);
var G__10991 = c__5660__auto___10989;
var G__10992 = cljs.core.count.call(null,c__5660__auto___10989);
var G__10993 = (0);
seq__10974_10978 = G__10990;
chunk__10975_10979 = G__10991;
count__10976_10980 = G__10992;
i__10977_10981 = G__10993;
continue;
} else {
var c_10994 = cljs.core.first.call(null,seq__10974_10988__$1);
c_10994.forceUpdate();

var G__10995 = cljs.core.next.call(null,seq__10974_10988__$1);
var G__10996 = null;
var G__10997 = (0);
var G__10998 = (0);
seq__10974_10978 = G__10995;
chunk__10975_10979 = G__10996;
count__10976_10980 = G__10997;
i__10977_10981 = G__10998;
continue;
}
} else {
}
}
break;
}

return om.next.render_queued = false;
});
om.next.root = (function om$next$root(class$,state,p__10999){
var map__11006 = p__10999;
var map__11006__$1 = ((cljs.core.seq_QMARK_.call(null,map__11006))?cljs.core.apply.call(null,cljs.core.hash_map,map__11006):map__11006);
var target = cljs.core.get.call(null,map__11006__$1,new cljs.core.Keyword(null,"target","target",253001721));
var raf = cljs.core.get.call(null,map__11006__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var render = ((function (ret,map__11006,map__11006__$1,target,raf){
return (function om$next$root_$_render(data){
var _STAR_app_state_STAR_11010 = om.next._STAR_app_state_STAR_;
om.next._STAR_app_state_STAR_ = state;

try{return cljs.core.reset_BANG_.call(null,ret,React.render(om.next.create_factory.call(null,class$).call(null,data),target));
}finally {om.next._STAR_app_state_STAR_ = _STAR_app_state_STAR_11010;
}});})(ret,map__11006,map__11006__$1,target,raf))
;
var sel = om.next.bound_query.call(null,class$);
var store = cljs.core.deref.call(null,state);
if((function (){var G__11011 = store;
if(G__11011){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11011.om$next$protocols$IPullAsync$;
}
})())){
return true;
} else {
if((!G__11011.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.protocols.IPullAsync,G__11011);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.protocols.IPullAsync,G__11011);
}
})()){
om.next.protocols.pull_async.call(null,store,sel,null,render);
} else {
render.call(null,om.next.protocols.pull.call(null,store,sel,null));

}

cljs.core.add_watch.call(null,state,new cljs.core.Keyword("om","root","om/root",-448656847),((function (sel,store,ret,map__11006,map__11006__$1,target,raf){
return (function (_,___$1,o,n){
if(cljs.core.truth_(om.next.render_queued)){
return null;
} else {
om.next.render_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(om.next.flush_queue,(16));
} else {
return requestAnimationFrame(om.next.flush_queue);

}
}
}
});})(sel,store,ret,map__11006,map__11006__$1,target,raf))
);

return cljs.core.deref.call(null,ret);
});
om.next.tree_store = (function om$next$tree_store(root_class,data){
return cljs.core.atom.call(null,(new om.next.stores.TreeStore(data,om.next.build_index.call(null,root_class))));
});

//# sourceMappingURL=next.js.map
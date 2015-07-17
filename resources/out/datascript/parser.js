// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.core');

datascript.parser.ITraversable = (function (){var obj12200 = {};
return obj12200;
})();

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((function (){var and__4863__auto__ = _;
if(and__4863__auto__){
return _.datascript$parser$ITraversable$_collect$arity$3;
} else {
return and__4863__auto__;
}
})()){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__5511__auto__ = (((_ == null))?null:_);
return (function (){var or__4875__auto__ = (datascript.parser._collect[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.parser._collect["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
})().call(null,_,pred,acc);
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((function (){var and__4863__auto__ = _;
if(and__4863__auto__){
return _.datascript$parser$ITraversable$_collect_vars$arity$2;
} else {
return and__4863__auto__;
}
})()){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__5511__auto__ = (((_ == null))?null:_);
return (function (){var or__4875__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.parser._collect_vars["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
})().call(null,_,acc);
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((function (){var and__4863__auto__ = _;
if(and__4863__auto__){
return _.datascript$parser$ITraversable$_postwalk$arity$2;
} else {
return and__4863__auto__;
}
})()){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__5511__auto__ = (((_ == null))?null:_);
return (function (){var or__4875__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.parser._postwalk["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
})().call(null,_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__12210_SHARP_,p2__12209_SHARP_){
var temp__4421__auto__ = parse_el.call(null,p2__12209_SHARP_);
if(cljs.core.truth_(temp__4421__auto__)){
var parsed = temp__4421__auto__;
return cljs.core.conj.call(null,p1__12210_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__12214){
var vec__12215 = p__12214;
var acc = cljs.core.nth.call(null,vec__12215,(0),null);
var acc__$1 = (function (){var or__4875__auto__ = acc;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if((function (){var G__12216 = form;
if(G__12216){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__12216.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__12216.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12216);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12216);
}
})()){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.core.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__12215,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__12215,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq12211){
var G__12212 = cljs.core.first.call(null,seq12211);
var seq12211__$1 = cljs.core.next.call(null,seq12211);
var G__12213 = cljs.core.first.call(null,seq12211__$1);
var seq12211__$2 = cljs.core.next.call(null,seq12211__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__12212,G__12213,seq12211__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__4875__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__4875__auto__){
return or__4875__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((function (){var G__12222 = form;
if(G__12222){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__12222.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__12222.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12222);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12222);
}
})()){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__12223){
var vec__12224 = p__12223;
var k = cljs.core.nth.call(null,vec__12224,(0),null);
var v = cljs.core.nth.call(null,vec__12224,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__12217_SHARP_){
return datascript$parser$postwalk.call(null,p1__12217_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__12218_SHARP_){
return datascript$parser$postwalk.call(null,p1__12218_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__4875__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return obj;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12229,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12231 = k12229;
switch (G__12231) {
default:
return cljs.core.get.call(null,self__.__extmap,k12229,else__5473__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12228){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12232 = cljs.core.keyword_identical_QMARK_;
var expr__12233 = k__5478__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12228),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12228){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Placeholder(G__12228,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12225){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Placeholder(null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12226,acc12227){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12227;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12227){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12227;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__12230){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__12230),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12240,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12242 = (((k12240 instanceof cljs.core.Keyword))?k12240.fqn:null);
switch (G__12242) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12240,else__5473__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Variable{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12239){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12243 = cljs.core.keyword_identical_QMARK_;
var expr__12244 = k__5478__auto__;
if(cljs.core.truth_(pred__12243.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__12244))){
return (new datascript.parser.Variable(G__12239,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12239),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12239){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__12239,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12236){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f12236),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12237,acc12238){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12237,self__.symbol,acc12238);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12238){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12238,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__12241){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__12241),null,cljs.core.dissoc.call(null,G__12241,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12251,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12253 = (((k12251 instanceof cljs.core.Keyword))?k12251.fqn:null);
switch (G__12253) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12251,else__5473__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12250){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12254 = cljs.core.keyword_identical_QMARK_;
var expr__12255 = k__5478__auto__;
if(cljs.core.truth_(pred__12254.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__12255))){
return (new datascript.parser.SrcVar(G__12250,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12250),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12250){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__12250,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12247){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f12247),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12248,acc12249){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12248,self__.symbol,acc12249);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12249){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12249,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__12252){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__12252),null,cljs.core.dissoc.call(null,G__12252,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12262,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12264 = k12262;
switch (G__12264) {
default:
return cljs.core.get.call(null,self__.__extmap,k12262,else__5473__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12261){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12265 = cljs.core.keyword_identical_QMARK_;
var expr__12266 = k__5478__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12261),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12261){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__12261,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12258){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12259,acc12260){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12260;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12260){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12260;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__12263){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__12263),null));
});


/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12273,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12275 = k12273;
switch (G__12275) {
default:
return cljs.core.get.call(null,self__.__extmap,k12273,else__5473__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12272){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12276 = cljs.core.keyword_identical_QMARK_;
var expr__12277 = k__5478__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12272),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12272){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.RulesVar(G__12272,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12269){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.RulesVar(null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12270,acc12271){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12271;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12271){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12271;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__12274){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__12274),null));
});


/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12284,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12286 = (((k12284 instanceof cljs.core.Keyword))?k12284.fqn:null);
switch (G__12286) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12284,else__5473__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Constant{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12283){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12287 = cljs.core.keyword_identical_QMARK_;
var expr__12288 = k__5478__auto__;
if(cljs.core.truth_(pred__12287.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__12288))){
return (new datascript.parser.Constant(G__12283,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12283),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12283){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__12283,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12280){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f12280),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12281,acc12282){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12281,self__.value,acc12282);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12282){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12282,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__12285){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__12285),null,cljs.core.dissoc.call(null,G__12285,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
* @param {*} symbol
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12295,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12297 = (((k12295 instanceof cljs.core.Keyword))?k12295.fqn:null);
switch (G__12297) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12295,else__5473__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12294){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12298 = cljs.core.keyword_identical_QMARK_;
var expr__12299 = k__5478__auto__;
if(cljs.core.truth_(pred__12298.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__12299))){
return (new datascript.parser.PlainSymbol(G__12294,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12294),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12294){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__12294,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12291){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f12291),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12292,acc12293){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12292,self__.symbol,acc12293);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12293){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12293,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__12296){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__12296),null,cljs.core.dissoc.call(null,G__12296,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__4875__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
* @param {*} required
* @param {*} free
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12306,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12308 = (((k12306 instanceof cljs.core.Keyword))?k12306.fqn:null);
switch (G__12308) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12306,else__5473__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12305){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12309 = cljs.core.keyword_identical_QMARK_;
var expr__12310 = k__5478__auto__;
if(cljs.core.truth_(pred__12309.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__12310))){
return (new datascript.parser.RuleVars(G__12305,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12309.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__12310))){
return (new datascript.parser.RuleVars(self__.required,G__12305,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12305),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12305){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__12305,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12302){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f12302),datascript.parser.postwalk.call(null,self__.free,f12302),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12303,acc12304){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12303,self__.free,datascript.parser.collect.call(null,pred12303,self__.required,acc12304));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12304){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12304,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__12307){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__12307),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__12307),null,cljs.core.dissoc.call(null,G__12307,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__12314 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__12314,(0),null);
var rest = cljs.core.nth.call(null,vec__12314,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(rule_vars.required)?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),rule_vars.required)], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),rule_vars.free);
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,rule_vars.required),cljs.core.count.call(null,rule_vars.free)], null);
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12319,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12321 = k12319;
switch (G__12321) {
default:
return cljs.core.get.call(null,self__.__extmap,k12319,else__5473__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12318){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12322 = cljs.core.keyword_identical_QMARK_;
var expr__12323 = k__5478__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12318),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12318){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__12318,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12315){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.BindIgnore(null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12316,acc12317){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12317;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12317){
var self__ = this;
var ___7795__auto____$1 = this;
return acc12317;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__12320){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__12320),null));
});


/**
* @constructor
* @param {*} variable
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12330,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12332 = (((k12330 instanceof cljs.core.Keyword))?k12330.fqn:null);
switch (G__12332) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12330,else__5473__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12329){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12333 = cljs.core.keyword_identical_QMARK_;
var expr__12334 = k__5478__auto__;
if(cljs.core.truth_(pred__12333.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__12334))){
return (new datascript.parser.BindScalar(G__12329,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12329),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12329){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__12329,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12326){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f12326),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12327,acc12328){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12327,self__.variable,acc12328);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12328){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12328,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__12331){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__12331),null,cljs.core.dissoc.call(null,G__12331,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
* @param {*} bindings
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12341,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12343 = (((k12341 instanceof cljs.core.Keyword))?k12341.fqn:null);
switch (G__12343) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12341,else__5473__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12340){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12344 = cljs.core.keyword_identical_QMARK_;
var expr__12345 = k__5478__auto__;
if(cljs.core.truth_(pred__12344.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__12345))){
return (new datascript.parser.BindTuple(G__12340,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12340),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12340){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__12340,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12337){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f12337),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12338,acc12339){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12338,self__.bindings,acc12339);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12339){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12339,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__12342){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__12342),null,cljs.core.dissoc.call(null,G__12342,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
* @param {*} binding
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12352,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12354 = (((k12352 instanceof cljs.core.Keyword))?k12352.fqn:null);
switch (G__12354) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12352,else__5473__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.BindColl{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12351){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12355 = cljs.core.keyword_identical_QMARK_;
var expr__12356 = k__5478__auto__;
if(cljs.core.truth_(pred__12355.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__12356))){
return (new datascript.parser.BindColl(G__12351,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12351),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12351){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__12351,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12348){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f12348),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12349,acc12350){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12349,self__.binding,acc12350);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12350){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12350,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__12353){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__12353),null,cljs.core.dissoc.call(null,G__12353,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4423__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__4863__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__4863__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__4863__auto__;
}
})())){
var temp__4421__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4421__auto__)){
var sub_bind = temp__4421__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__4875__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bindings = temp__4423__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__4863__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__4863__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__4863__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__4875__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
var or__4875__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__4875__auto____$2)){
return or__4875__auto____$2;
} else {
var or__4875__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__4875__auto____$3)){
return or__4875__auto____$3;
} else {
var or__4875__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__4875__auto____$4)){
return or__4875__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

datascript.parser.IFindVars = (function (){var obj12360 = {};
return obj12360;
})();

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((function (){var and__4863__auto__ = this$;
if(and__4863__auto__){
return this$.datascript$parser$IFindVars$_find_vars$arity$1;
} else {
return and__4863__auto__;
}
})()){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__5511__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4875__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.parser._find_vars["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
})().call(null,this$);
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12365,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12367 = (((k12365 instanceof cljs.core.Keyword))?k12365.fqn:null);
switch (G__12367) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12365,else__5473__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12364){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12368 = cljs.core.keyword_identical_QMARK_;
var expr__12369 = k__5478__auto__;
if(cljs.core.truth_(pred__12368.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__12369))){
return (new datascript.parser.Aggregate(G__12364,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12368.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__12369))){
return (new datascript.parser.Aggregate(self__.fn,G__12364,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12364),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12364){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__12364,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12361){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f12361),datascript.parser.postwalk.call(null,self__.args,f12361),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12362,acc12363){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12362,self__.args,datascript.parser.collect.call(null,pred12362,self__.fn,acc12363));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12363){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12363,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__12366){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12366),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__12366),null,cljs.core.dissoc.call(null,G__12366,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} variable
* @param {*} pattern
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12376,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12378 = (((k12376 instanceof cljs.core.Keyword))?k12376.fqn:null);
switch (G__12378) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12376,else__5473__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Pull{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12375){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12379 = cljs.core.keyword_identical_QMARK_;
var expr__12380 = k__5478__auto__;
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__12380))){
return (new datascript.parser.Pull(G__12375,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__12380))){
return (new datascript.parser.Pull(self__.source,G__12375,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__12380))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__12375,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12375),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12375){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__12375,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12372){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f12372),datascript.parser.postwalk.call(null,self__.variable,f12372),datascript.parser.postwalk.call(null,self__.pattern,f12372),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12373,acc12374){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12373,self__.pattern,datascript.parser.collect.call(null,pred12373,self__.variable,datascript.parser.collect.call(null,pred12373,self__.source,acc12374)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12374){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12374,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__12377){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__12377),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__12377),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__12377),null,cljs.core.dissoc.call(null,G__12377,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


datascript.parser.IFindElements = (function (){var obj12384 = {};
return obj12384;
})();

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((function (){var and__4863__auto__ = this$;
if(and__4863__auto__){
return this$.datascript$parser$IFindElements$find_elements$arity$1;
} else {
return and__4863__auto__;
}
})()){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__5511__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4875__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.parser.find_elements["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
* @param {*} elements
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12389,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12391 = (((k12389 instanceof cljs.core.Keyword))?k12389.fqn:null);
switch (G__12391) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12389,else__5473__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.FindRel{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12388){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12392 = cljs.core.keyword_identical_QMARK_;
var expr__12393 = k__5478__auto__;
if(cljs.core.truth_(pred__12392.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__12393))){
return (new datascript.parser.FindRel(G__12388,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12388),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12388){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__12388,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12385){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f12385),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12386,acc12387){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12386,self__.elements,acc12387);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12387){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12387,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__12390){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__12390),null,cljs.core.dissoc.call(null,G__12390,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
* @param {*} element
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12400,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12402 = (((k12400 instanceof cljs.core.Keyword))?k12400.fqn:null);
switch (G__12402) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12400,else__5473__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.FindColl{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12399){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12403 = cljs.core.keyword_identical_QMARK_;
var expr__12404 = k__5478__auto__;
if(cljs.core.truth_(pred__12403.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__12404))){
return (new datascript.parser.FindColl(G__12399,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12399),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12399){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__12399,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12396){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f12396),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12397,acc12398){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12397,self__.element,acc12398);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12398){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12398,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__12401){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__12401),null,cljs.core.dissoc.call(null,G__12401,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
* @param {*} element
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12411,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12413 = (((k12411 instanceof cljs.core.Keyword))?k12411.fqn:null);
switch (G__12413) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12411,else__5473__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12410){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12414 = cljs.core.keyword_identical_QMARK_;
var expr__12415 = k__5478__auto__;
if(cljs.core.truth_(pred__12414.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__12415))){
return (new datascript.parser.FindScalar(G__12410,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12410),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12410){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__12410,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12407){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f12407),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12408,acc12409){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12408,self__.element,acc12409);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12409){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12409,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__12412){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__12412),null,cljs.core.dissoc.call(null,G__12412,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
* @param {*} elements
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12422,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12424 = (((k12422 instanceof cljs.core.Keyword))?k12422.fqn:null);
switch (G__12424) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12422,else__5473__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12421){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12425 = cljs.core.keyword_identical_QMARK_;
var expr__12426 = k__5478__auto__;
if(cljs.core.truth_(pred__12425.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__12426))){
return (new datascript.parser.FindTuple(G__12421,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12421),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12421){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__12421,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12418){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f12418),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12419,acc12420){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12419,self__.elements,acc12420);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12420){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12420,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__12423){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__12423),null,cljs.core.dissoc.call(null,G__12423,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__12430 = form;
var fn = cljs.core.nth.call(null,vec__12430,(0),null);
var args = cljs.core.nthnext.call(null,vec__12430,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4863__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
return args_STAR_;
} else {
return and__4863__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__12432 = form;
var _ = cljs.core.nth.call(null,vec__12432,(0),null);
var fn = cljs.core.nth.call(null,vec__12432,(1),null);
var args = cljs.core.nthnext.call(null,vec__12432,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__4863__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
return args_STAR_;
} else {
return and__4863__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__12434 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__12434,(0),null);
var pattern = cljs.core.nth.call(null,vec__12434,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__4875__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__4863__auto__ = src_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__4863__auto____$1)){
return pattern_STAR_;
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__4875__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
var or__4875__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__4875__auto____$2)){
return or__4875__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__12436 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__12436__$1 = (((G__12436 == null))?null:(new datascript.parser.FindRel(G__12436,null,null,null)));
return G__12436__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__12438 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__12438__$1 = (((G__12438 == null))?null:(new datascript.parser.FindColl(G__12438,null,null,null)));
return G__12438__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__12440 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__12440__$1 = (((G__12440 == null))?null:(new datascript.parser.FindScalar(G__12440,null,null,null)));
return G__12440__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__12442 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__12442__$1 = (((G__12442 == null))?null:(new datascript.parser.FindTuple(G__12442,null,null,null)));
return G__12442__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__4875__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
var or__4875__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__4875__auto____$2)){
return or__4875__auto____$2;
} else {
var or__4875__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__4875__auto____$3)){
return or__4875__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__4875__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4421__auto__ = (function (){var or__4875__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var var$ = temp__4421__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__4875__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
* @param {*} source
* @param {*} pattern
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12447,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12449 = (((k12447 instanceof cljs.core.Keyword))?k12447.fqn:null);
switch (G__12449) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12447,else__5473__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Pattern{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12446){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12450 = cljs.core.keyword_identical_QMARK_;
var expr__12451 = k__5478__auto__;
if(cljs.core.truth_(pred__12450.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__12451))){
return (new datascript.parser.Pattern(G__12446,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12450.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__12451))){
return (new datascript.parser.Pattern(self__.source,G__12446,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12446),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12446){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__12446,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12443){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f12443),datascript.parser.postwalk.call(null,self__.pattern,f12443),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12444,acc12445){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12444,self__.pattern,datascript.parser.collect.call(null,pred12444,self__.source,acc12445));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12445){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12445,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__12448){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__12448),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__12448),null,cljs.core.dissoc.call(null,G__12448,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12458,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12460 = (((k12458 instanceof cljs.core.Keyword))?k12458.fqn:null);
switch (G__12460) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12458,else__5473__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Predicate{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12457){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12461 = cljs.core.keyword_identical_QMARK_;
var expr__12462 = k__5478__auto__;
if(cljs.core.truth_(pred__12461.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__12462))){
return (new datascript.parser.Predicate(G__12457,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12461.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__12462))){
return (new datascript.parser.Predicate(self__.fn,G__12457,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12457),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12457){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__12457,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12454){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f12454),datascript.parser.postwalk.call(null,self__.args,f12454),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12455,acc12456){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12455,self__.args,datascript.parser.collect.call(null,pred12455,self__.fn,acc12456));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12456){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12456,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__12459){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12459),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__12459),null,cljs.core.dissoc.call(null,G__12459,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} fn
* @param {*} args
* @param {*} binding
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12469,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12471 = (((k12469 instanceof cljs.core.Keyword))?k12469.fqn:null);
switch (G__12471) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12469,else__5473__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Function{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12468){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12472 = cljs.core.keyword_identical_QMARK_;
var expr__12473 = k__5478__auto__;
if(cljs.core.truth_(pred__12472.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__12473))){
return (new datascript.parser.Function(G__12468,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12472.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__12473))){
return (new datascript.parser.Function(self__.fn,G__12468,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12472.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__12473))){
return (new datascript.parser.Function(self__.fn,self__.args,G__12468,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12468),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12468){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__12468,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12465){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f12465),datascript.parser.postwalk.call(null,self__.args,f12465),datascript.parser.postwalk.call(null,self__.binding,f12465),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12466,acc12467){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12466,self__.binding,datascript.parser.collect.call(null,pred12466,self__.args,datascript.parser.collect.call(null,pred12466,self__.fn,acc12467)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12467){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12467,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__12470){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__12470),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__12470),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__12470),null,cljs.core.dissoc.call(null,G__12470,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} name
* @param {*} args
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12480,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12482 = (((k12480 instanceof cljs.core.Keyword))?k12480.fqn:null);
switch (G__12482) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12480,else__5473__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12479){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12483 = cljs.core.keyword_identical_QMARK_;
var expr__12484 = k__5478__auto__;
if(cljs.core.truth_(pred__12483.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__12484))){
return (new datascript.parser.RuleExpr(G__12479,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12483.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12484))){
return (new datascript.parser.RuleExpr(self__.source,G__12479,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12483.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__12484))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__12479,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12479),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12479){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__12479,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12476){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f12476),datascript.parser.postwalk.call(null,self__.name,f12476),datascript.parser.postwalk.call(null,self__.args,f12476),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12477,acc12478){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12477,self__.args,datascript.parser.collect.call(null,pred12477,self__.name,datascript.parser.collect.call(null,pred12477,self__.source,acc12478)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12478){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12478,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__12481){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__12481),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12481),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__12481),null,cljs.core.dissoc.call(null,G__12481,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12491,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12493 = (((k12491 instanceof cljs.core.Keyword))?k12491.fqn:null);
switch (G__12493) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12491,else__5473__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Not{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12490){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12494 = cljs.core.keyword_identical_QMARK_;
var expr__12495 = k__5478__auto__;
if(cljs.core.truth_(pred__12494.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__12495))){
return (new datascript.parser.Not(G__12490,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12494.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__12495))){
return (new datascript.parser.Not(self__.source,G__12490,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12494.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__12495))){
return (new datascript.parser.Not(self__.source,self__.vars,G__12490,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12490),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12490){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__12490,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12487){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f12487),datascript.parser.postwalk.call(null,self__.vars,f12487),datascript.parser.postwalk.call(null,self__.clauses,f12487),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12488,acc12489){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12488,self__.clauses,datascript.parser.collect.call(null,pred12488,self__.vars,datascript.parser.collect.call(null,pred12488,self__.source,acc12489)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12489){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12489,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__12492){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__12492),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__12492),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__12492),null,cljs.core.dissoc.call(null,G__12492,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} source
* @param {*} rule_vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12502,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12504 = (((k12502 instanceof cljs.core.Keyword))?k12502.fqn:null);
switch (G__12504) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12502,else__5473__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Or{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12501){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12505 = cljs.core.keyword_identical_QMARK_;
var expr__12506 = k__5478__auto__;
if(cljs.core.truth_(pred__12505.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__12506))){
return (new datascript.parser.Or(G__12501,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12505.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__12506))){
return (new datascript.parser.Or(self__.source,G__12501,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12505.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__12506))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__12501,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12501),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12501){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__12501,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12498){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f12498),datascript.parser.postwalk.call(null,self__.rule_vars,f12498),datascript.parser.postwalk.call(null,self__.clauses,f12498),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12499,acc12500){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12499,self__.clauses,datascript.parser.collect.call(null,pred12499,self__.rule_vars,datascript.parser.collect.call(null,pred12499,self__.source,acc12500)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12500){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12500,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__12503){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__12503),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__12503),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__12503),null,cljs.core.dissoc.call(null,G__12503,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12513,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12515 = (((k12513 instanceof cljs.core.Keyword))?k12513.fqn:null);
switch (G__12515) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12513,else__5473__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.And{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12512){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12516 = cljs.core.keyword_identical_QMARK_;
var expr__12517 = k__5478__auto__;
if(cljs.core.truth_(pred__12516.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__12517))){
return (new datascript.parser.And(G__12512,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12512),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12512){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__12512,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12509){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f12509),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12510,acc12511){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12510,self__.clauses,acc12511);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12511){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc12511,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__12514){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__12514),null,cljs.core.dissoc.call(null,G__12514,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__4875__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4421__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4421__auto__)){
var source_STAR_ = temp__4421__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12521 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12521,(0),null);
var next_form = cljs.core.nth.call(null,vec__12521,(1),null);
var temp__4423__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4423__auto____$1)){
var pattern_STAR_ = temp__4423__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__12523 = form;
var fn = cljs.core.nth.call(null,vec__12523,(0),null);
var args = cljs.core.nthnext.call(null,vec__12523,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__4875__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__4863__auto__ = fn_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
return args_STAR_;
} else {
return and__4863__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4423__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12525 = temp__4423__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__12525,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__12525,(1),null);
return (new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__12528 = form;
var call = cljs.core.nth.call(null,vec__12528,(0),null);
var binding = cljs.core.nth.call(null,vec__12528,(1),null);
var temp__4423__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12529 = temp__4423__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__12529,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__12529,(1),null);
var temp__4423__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4423__auto____$1)){
var binding_STAR_ = temp__4423__auto____$1;
return (new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12532 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12532,(0),null);
var next_form = cljs.core.nth.call(null,vec__12532,(1),null);
var vec__12533 = next_form;
var name = cljs.core.nth.call(null,vec__12533,(0),null);
var args = cljs.core.nthnext.call(null,vec__12533,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requieres at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,form.rule_vars);
} else {
if((function (){var G__12535 = form;
if(G__12535){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__12535.datascript$parser$ITraversable$;
}
})())){
return true;
} else {
if((!G__12535.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12535);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,G__12535);
}
})()){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_12536 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_12536)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_12536)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,clause.vars,clause.clauses,form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12539 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12539,(0),null);
var next_form = cljs.core.nth.call(null,vec__12539,(1),null);
var vec__12540 = next_form;
var sym = cljs.core.nth.call(null,vec__12540,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12540,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4421__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_(temp__4421__auto__)){
var clauses_STAR_ = temp__4421__auto__;
return datascript.parser.validate_not.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12543 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12543,(0),null);
var next_form = cljs.core.nth.call(null,vec__12543,(1),null);
var vec__12544 = next_form;
var sym = cljs.core.nth.call(null,vec__12544,(0),null);
var vars = cljs.core.nth.call(null,vec__12544,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__12544,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_((function (){var and__4863__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
return clauses_STAR_;
} else {
return and__4863__auto__;
}
})())){
return datascript.parser.validate_not.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__12551 = clause;
var map__12551__$1 = ((cljs.core.seq_QMARK_.call(null,map__12551))?cljs.core.apply.call(null,cljs.core.hash_map,map__12551):map__12551);
var map__12552 = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__12552__$1 = ((cljs.core.seq_QMARK_.call(null,map__12552))?cljs.core.apply.call(null,cljs.core.hash_map,map__12552):map__12552);
var required = cljs.core.get.call(null,map__12552__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__12552__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__12551__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__12553_12557 = cljs.core.seq.call(null,clauses);
var chunk__12554_12558 = null;
var count__12555_12559 = (0);
var i__12556_12560 = (0);
while(true){
if((i__12556_12560 < count__12555_12559)){
var clause_12561__$1 = cljs.core._nth.call(null,chunk__12554_12558,i__12556_12560);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_12561__$1], null),form);

var G__12562 = seq__12553_12557;
var G__12563 = chunk__12554_12558;
var G__12564 = count__12555_12559;
var G__12565 = (i__12556_12560 + (1));
seq__12553_12557 = G__12562;
chunk__12554_12558 = G__12563;
count__12555_12559 = G__12564;
i__12556_12560 = G__12565;
continue;
} else {
var temp__4423__auto___12566 = cljs.core.seq.call(null,seq__12553_12557);
if(temp__4423__auto___12566){
var seq__12553_12567__$1 = temp__4423__auto___12566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12553_12567__$1)){
var c__5660__auto___12568 = cljs.core.chunk_first.call(null,seq__12553_12567__$1);
var G__12569 = cljs.core.chunk_rest.call(null,seq__12553_12567__$1);
var G__12570 = c__5660__auto___12568;
var G__12571 = cljs.core.count.call(null,c__5660__auto___12568);
var G__12572 = (0);
seq__12553_12557 = G__12569;
chunk__12554_12558 = G__12570;
count__12555_12559 = G__12571;
i__12556_12560 = G__12572;
continue;
} else {
var clause_12573__$1 = cljs.core.first.call(null,seq__12553_12567__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_12573__$1], null),form);

var G__12574 = cljs.core.next.call(null,seq__12553_12567__$1);
var G__12575 = null;
var G__12576 = (0);
var G__12577 = (0);
seq__12553_12557 = G__12574;
chunk__12554_12558 = G__12575;
count__12555_12559 = G__12576;
i__12556_12560 = G__12577;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12580 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12580,(0),null);
var next_form = cljs.core.nth.call(null,vec__12580,(1),null);
var vec__12581 = next_form;
var sym = cljs.core.nth.call(null,vec__12581,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12581,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4421__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4421__auto__)){
var clauses_STAR_ = temp__4421__auto__;
return datascript.parser.validate_or.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4423__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12584 = temp__4423__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__12584,(0),null);
var next_form = cljs.core.nth.call(null,vec__12584,(1),null);
var vec__12585 = next_form;
var sym = cljs.core.nth.call(null,vec__12585,(0),null);
var vars = cljs.core.nth.call(null,vec__12585,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__12585,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
if(cljs.core.truth_((function (){var and__4863__auto__ = vars_STAR_;
if(cljs.core.truth_(and__4863__auto__)){
return clauses_STAR_;
} else {
return and__4863__auto__;
}
})())){
return datascript.parser.validate_or.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__4875__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__4875__auto____$1)){
return or__4875__auto____$1;
} else {
var or__4875__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__4875__auto____$2)){
return or__4875__auto____$2;
} else {
var or__4875__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__4875__auto____$3)){
return or__4875__auto____$3;
} else {
var or__4875__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__4875__auto____$4)){
return or__4875__auto____$4;
} else {
var or__4875__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__4875__auto____$5)){
return or__4875__auto____$5;
} else {
var or__4875__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__4875__auto____$6)){
return or__4875__auto____$6;
} else {
var or__4875__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__4875__auto____$7)){
return or__4875__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__4875__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,form);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
* @param {*} vars
* @param {*} clauses
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12590,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12592 = (((k12590 instanceof cljs.core.Keyword))?k12590.fqn:null);
switch (G__12592) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12590,else__5473__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12589){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12593 = cljs.core.keyword_identical_QMARK_;
var expr__12594 = k__5478__auto__;
if(cljs.core.truth_(pred__12593.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__12594))){
return (new datascript.parser.RuleBranch(G__12589,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12593.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__12594))){
return (new datascript.parser.RuleBranch(self__.vars,G__12589,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12589),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12589){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__12589,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12586){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f12586),datascript.parser.postwalk.call(null,self__.clauses,f12586),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12587,acc12588){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12587,self__.clauses,datascript.parser.collect.call(null,pred12587,self__.vars,acc12588));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12588){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12588,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__12591){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__12591),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__12591),null,cljs.core.dissoc.call(null,G__12591,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
* @param {*} name
* @param {*} branches
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12601,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12603 = (((k12601 instanceof cljs.core.Keyword))?k12601.fqn:null);
switch (G__12603) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12601,else__5473__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Rule{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12600){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12604 = cljs.core.keyword_identical_QMARK_;
var expr__12605 = k__5478__auto__;
if(cljs.core.truth_(pred__12604.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12605))){
return (new datascript.parser.Rule(G__12600,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12604.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__12605))){
return (new datascript.parser.Rule(self__.name,G__12600,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12600),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12600){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__12600,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12597){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f12597),datascript.parser.postwalk.call(null,self__.branches,f12597),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12598,acc12599){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12598,self__.branches,datascript.parser.collect.call(null,pred12598,self__.name,acc12599));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12599){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12599,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__12602){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12602),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__12602),null,cljs.core.dissoc.call(null,G__12602,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__12608_SHARP_){
return (p1__12608_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__12609_SHARP_){
return (p1__12609_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__12612 = form;
var head = cljs.core.nth.call(null,vec__12612,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__12612,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__12613 = head;
var name = cljs.core.nth.call(null,vec__12613,(0),null);
var vars = cljs.core.nthnext.call(null,vec__12613,(1));
var name_STAR_ = (function (){var or__4875__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__4875__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses));
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__12620 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__12622 = null;
var count__12623 = (0);
var i__12624 = (0);
while(true){
if((i__12624 < count__12623)){
var b = cljs.core._nth.call(null,chunk__12622,i__12624);
var vars_12626 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_12626))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,name.symbol)),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_12626)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__12627 = seq__12620;
var G__12628 = chunk__12622;
var G__12629 = count__12623;
var G__12630 = (i__12624 + (1));
seq__12620 = G__12627;
chunk__12622 = G__12628;
count__12623 = G__12629;
i__12624 = G__12630;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__12620);
if(temp__4423__auto__){
var seq__12620__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12620__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__12620__$1);
var G__12631 = cljs.core.chunk_rest.call(null,seq__12620__$1);
var G__12632 = c__5660__auto__;
var G__12633 = cljs.core.count.call(null,c__5660__auto__);
var G__12634 = (0);
seq__12620 = G__12631;
chunk__12622 = G__12632;
count__12623 = G__12633;
i__12624 = G__12634;
continue;
} else {
var b = cljs.core.first.call(null,seq__12620__$1);
var vars_12635 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_12635))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,name.symbol)),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_12635)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__12636 = cljs.core.next.call(null,seq__12620__$1);
var G__12637 = null;
var G__12638 = (0);
var G__12639 = (0);
seq__12620 = G__12636;
chunk__12622 = G__12637;
count__12623 = G__12638;
i__12624 = G__12639;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__5629__auto__ = (function datascript$parser$parse_rules_$_iter__12649(s__12650){
return (new cljs.core.LazySeq(null,(function (){
var s__12650__$1 = s__12650;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__12650__$1);
if(temp__4423__auto__){
var s__12650__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12650__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__12650__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__12652 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__12651 = (0);
while(true){
if((i__12651 < size__5628__auto__)){
var vec__12655 = cljs.core._nth.call(null,c__5627__auto__,i__12651);
var name = cljs.core.nth.call(null,vec__12655,(0),null);
var branches = cljs.core.nth.call(null,vec__12655,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__12651,vec__12655,name,branches,c__5627__auto__,size__5628__auto__,b__12652,s__12650__$2,temp__4423__auto__){
return (function (p1__12640_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__12640_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__12640_SHARP_),null,null,null));
});})(i__12651,vec__12655,name,branches,c__5627__auto__,size__5628__auto__,b__12652,s__12650__$2,temp__4423__auto__))
,branches);
cljs.core.chunk_append.call(null,b__12652,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__12657 = (i__12651 + (1));
i__12651 = G__12657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12652),datascript$parser$parse_rules_$_iter__12649.call(null,cljs.core.chunk_rest.call(null,s__12650__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12652),null);
}
} else {
var vec__12656 = cljs.core.first.call(null,s__12650__$2);
var name = cljs.core.nth.call(null,vec__12656,(0),null);
var branches = cljs.core.nth.call(null,vec__12656,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__12656,name,branches,s__12650__$2,temp__4423__auto__){
return (function (p1__12640_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__12640_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__12640_SHARP_),null,null,null));
});})(vec__12656,name,branches,s__12650__$2,temp__4423__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__12649.call(null,cljs.core.rest.call(null,s__12650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5629__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
* @param {*} find
* @param {*} with$
* @param {*} in$
* @param {*} where
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k12662,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__12664 = (((k12662 instanceof cljs.core.Keyword))?k12662.fqn:null);
switch (G__12664) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12662,else__5473__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.parser.Query{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_imap.call(null,this__5465__auto____$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
var self__ = this;
var this__5466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4863__auto__ = other__5467__auto__;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = (this__5466__auto____$1.constructor === other__5467__auto__.constructor);
if(and__4863__auto____$1){
return cljs.core.equiv_map.call(null,this__5466__auto____$1,other__5467__auto__);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12661){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12665 = cljs.core.keyword_identical_QMARK_;
var expr__12666 = k__5478__auto__;
if(cljs.core.truth_(pred__12665.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__12666))){
return (new datascript.parser.Query(G__12661,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12665.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__12666))){
return (new datascript.parser.Query(self__.find,G__12661,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12665.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__12666))){
return (new datascript.parser.Query(self__.find,self__.with$,G__12661,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12665.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__12666))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__12661,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__12661),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__12661){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__12661,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__7793__auto__,f12658){
var self__ = this;
var this__7793__auto____$1 = this;
var new__7794__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f12658),datascript.parser.postwalk.call(null,self__.with$,f12658),datascript.parser.postwalk.call(null,self__.in$,f12658),datascript.parser.postwalk.call(null,self__.where,f12658),null,null,null));
new__7794__auto__.__meta = cljs.core.meta.call(null,this__7793__auto____$1);

return new__7794__auto__;
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___7795__auto__,pred12659,acc12660){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect.call(null,pred12659,self__.where,datascript.parser.collect.call(null,pred12659,self__.in$,datascript.parser.collect.call(null,pred12659,self__.with$,datascript.parser.collect.call(null,pred12659,self__.find,acc12660))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___7795__auto__,acc12660){
var self__ = this;
var ___7795__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc12660,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__12663){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__12663),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__12663),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__12663),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__12663),null,cljs.core.dissoc.call(null,G__12663,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4421__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4421__auto__)){
var q = temp__4421__auto__;
if((q instanceof cljs.core.Keyword)){
var G__12669 = parsed;
var G__12670 = q;
var G__12671 = cljs.core.next.call(null,qs);
parsed = G__12669;
key = G__12670;
qs = G__12671;
continue;
} else {
var G__12672 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__12673 = key;
var G__12674 = cljs.core.next.call(null,qs);
parsed = G__12672;
key = G__12673;
qs = G__12674;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_12681 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_12682 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_12683 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_12684 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_12685 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_12681,with_vars_12682),clojure.set.union.call(null,where_vars_12684,in_vars_12683));
var shared_12686 = clojure.set.intersection.call(null,find_vars_12681,with_vars_12682);
if(cljs.core.empty_QMARK_.call(null,unknown_12685)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_12685)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_12685,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_12686)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_12686)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_12686,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_12687 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_12688 = datascript.parser.collect.call(null,((function (in_vars_12687){
return (function (p1__12675_SHARP_){
return (p1__12675_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_12687))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_12689 = datascript.parser.collect.call(null,((function (in_vars_12687,in_sources_12688){
return (function (p1__12676_SHARP_){
return (p1__12676_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_12687,in_sources_12688))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__4863__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_12687);
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_12688);
if(cljs.core.truth_(and__4863__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_12689);
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_12690 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_12690))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_12691 = datascript.parser.collect.call(null,(function (p1__12677_SHARP_){
return (p1__12677_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_12692 = datascript.parser.collect.call(null,((function (in_sources_12691){
return (function (p1__12678_SHARP_){
return (p1__12678_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_12691))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_12693 = clojure.set.difference.call(null,where_sources_12692,in_sources_12691);
if(cljs.core.empty_QMARK_.call(null,unknown_12693)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_12693)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_12693,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__12679_SHARP_){
return (p1__12679_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__12680_SHARP_){
return (p1__12680_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4423__auto__)){
var with$ = temp__4423__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map
// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.pull_parser');
goog.require('datascript.pull_api');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('datascript.parser');
goog.require('datascript.impl.entity');
goog.require('cljs.reader');
datascript.query.lru_cache_size = (100);

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k11721,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__11723 = (((k11721 instanceof cljs.core.Keyword))?k11721.fqn:null);
switch (G__11723) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11721,else__5473__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.query.Context{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
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

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
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

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11720){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11724 = cljs.core.keyword_identical_QMARK_;
var expr__11725 = k__5478__auto__;
if(cljs.core.truth_(pred__11724.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__11725))){
return (new datascript.query.Context(G__11720,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11724.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__11725))){
return (new datascript.query.Context(self__.rels,G__11720,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11724.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__11725))){
return (new datascript.query.Context(self__.rels,self__.sources,G__11720,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__11720),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__11720){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__11720,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__11722){
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__11722),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__11722),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__11722),null,cljs.core.dissoc.call(null,G__11722,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)),null));
});


/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k11729,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__11731 = (((k11729 instanceof cljs.core.Keyword))?k11729.fqn:null);
switch (G__11731) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11729,else__5473__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.query.Relation{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
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

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
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

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11728){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11732 = cljs.core.keyword_identical_QMARK_;
var expr__11733 = k__5478__auto__;
if(cljs.core.truth_(pred__11732.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__11733))){
return (new datascript.query.Relation(G__11728,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11732.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__11733))){
return (new datascript.query.Relation(self__.attrs,G__11728,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__11728),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__11728){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__11728,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__11730){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__11730),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__11730),null,cljs.core.dissoc.call(null,G__11730,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(){
var argseq__5915__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5915__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq11736){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11736));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__11747){
var vec__11748 = p__11747;
var pattern_el = cljs.core.nth.call(null,vec__11748,(0),null);
var form_el = cljs.core.nth.call(null,vec__11748,(1),null);
return datascript$query$looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form)));
} else {
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__11751){
var vec__11752 = p__11751;
var pattern_el = cljs.core.nth.call(null,vec__11752,(0),null);
var form_el = cljs.core.nth.call(null,vec__11752,(1),null);
return datascript$query$looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});

/**
* @constructor
*/
datascript.query.LRU = (function (key_value,gen_key,key_gen,gen,limit){
this.key_value = key_value;
this.gen_key = gen_key;
this.key_gen = key_gen;
this.gen = gen;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 2147484416;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.query.LRU.prototype.cleanup = (function (){
var self__ = this;
var coll = this;
if((cljs.core.count.call(null,self__.key_value) > self__.limit)){
var vec__11753 = cljs.core.first.call(null,self__.gen_key);
var g = cljs.core.nth.call(null,vec__11753,(0),null);
var k = cljs.core.nth.call(null,vec__11753,(1),null);
return (new datascript.query.LRU(cljs.core._dissoc_BANG_.call(null,self__.key_value,k),cljs.core.dissoc.call(null,self__.gen_key,g),cljs.core._dissoc_BANG_.call(null,self__.key_gen,k),self__.gen,self__.limit));
} else {
return coll;
}
});

datascript.query.LRU.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
var temp__4421__auto__ = cljs.core._lookup.call(null,self__.key_gen,k,null);
if(cljs.core.truth_(temp__4421__auto__)){
var g = temp__4421__auto__;
return (new datascript.query.LRU(self__.key_value,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.gen_key,g),self__.gen,k),cljs.core._assoc_BANG_.call(null,self__.key_gen,k,self__.gen),(self__.gen + (1)),self__.limit));
} else {
return (new datascript.query.LRU(cljs.core._assoc_BANG_.call(null,self__.key_value,k,v),cljs.core.assoc.call(null,self__.gen_key,self__.gen,k),cljs.core._assoc_BANG_.call(null,self__.key_gen,k,self__.gen),(self__.gen + (1)),self__.limit)).cleanup();
}
});

datascript.query.LRU.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.key_value,k);
});

datascript.query.LRU.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,self__.key_value,k,null);
});

datascript.query.LRU.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,self__.key_value,k,not_found);
});

datascript.query.LRU.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.persistent_BANG_.call(null,self__.key_value),writer,opts);
});

datascript.query.LRU.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-value","key-value",1605624688,null),new cljs.core.Symbol(null,"gen-key","gen-key",392707442,null),new cljs.core.Symbol(null,"key-gen","key-gen",415199034,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.query.LRU.cljs$lang$type = true;

datascript.query.LRU.cljs$lang$ctorStr = "datascript.query/LRU";

datascript.query.LRU.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.query/LRU");
});

datascript.query.__GT_LRU = (function datascript$query$__GT_LRU(key_value,gen_key,key_gen,gen,limit){
return (new datascript.query.LRU(key_value,gen_key,key_gen,gen,limit));
});

datascript.query.lru = (function datascript$query$lru(limit){
return (new datascript.query.LRU(cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.sorted_map.call(null),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),(0),limit));
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = datascript.core.arr.call(null,(l1 + l2));
var n__5760__auto___11754 = l1;
var i_11755 = (0);
while(true){
if((i_11755 < n__5760__auto___11754)){
(res[i_11755] = (t1[(idxs1[i_11755])]));

var G__11756 = (i_11755 + (1));
i_11755 = G__11756;
continue;
} else {
}
break;
}

var n__5760__auto___11757 = l2;
var i_11758 = (0);
while(true){
if((i_11758 < n__5760__auto___11757)){
(res[(l1 + i_11758)] = (t2[(idxs2[i_11758])]));

var G__11759 = (i_11758 + (1));
i_11758 = G__11759;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(){
var G__11761 = arguments.length;
switch (G__11761) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.core.arr.call(null,(0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;
datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(){
var argseq__5915__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5915__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq11763){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11763));
});
datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
var temp__4421__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4421__auto__)){
var datom = temp__4421__auto__;
return datom.v;
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__4423__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datom = temp__4423__auto__;
return cljs.core.reduced.call(null,datom.v);
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq11764){
var G__11765 = cljs.core.first.call(null,seq11764);
var seq11764__$1 = cljs.core.next.call(null,seq11764);
var G__11766 = cljs.core.first.call(null,seq11764__$1);
var seq11764__$2 = cljs.core.next.call(null,seq11764__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__11765,G__11766,seq11764__$2);
});
datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__11778 = cljs.core.nth.call(null,terms,med);
var G__11778__$1 = ((cljs.core.even_QMARK_.call(null,size))?((G__11778 + cljs.core.nth.call(null,terms,(med - (1)))) / (2)):G__11778);
return G__11778__$1;
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__5629__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__11783(s__11784){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__11784__$1 = s__11784;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11784__$1);
if(temp__4423__auto__){
var s__11784__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11784__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11784__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11786 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11785 = (0);
while(true){
if((i__11785 < size__5628__auto__)){
var x = cljs.core._nth.call(null,c__5627__auto__,i__11785);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__11786,(delta * delta));

var G__11787 = (i__11785 + (1));
i__11785 = G__11787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11786),datascript$query$variance_$_iter__11783.call(null,cljs.core.chunk_rest.call(null,s__11784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11786),null);
}
} else {
var x = cljs.core.first.call(null,s__11784__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__11783.call(null,cljs.core.rest.call(null,s__11784__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__5629__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__11788 = null;
var G__11788__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((datascript.core.cmp_val.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__11788__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,acc,x));
} else {
if((datascript.core.cmp_val.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__11788 = function(n,coll){
switch(arguments.length){
case 1:
return G__11788__1.call(this,n);
case 2:
return G__11788__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11788.cljs$core$IFn$_invoke$arity$1 = G__11788__1;
G__11788.cljs$core$IFn$_invoke$arity$2 = G__11788__2;
return G__11788;
})()
,(function() {
var G__11789 = null;
var G__11789__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((datascript.core.cmp_val.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__11789__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,acc,x));
} else {
if((datascript.core.cmp_val.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,datascript.core.cmp_val,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__11789 = function(n,coll){
switch(arguments.length){
case 1:
return G__11789__1.call(this,n);
case 2:
return G__11789__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11789.cljs$core$IFn$_invoke$arity$1 = G__11789__1;
G__11789.cljs$core$IFn$_invoke$arity$2 = G__11789__2;
return G__11789;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__11790 = null;
var G__11790__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__11790__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__11790 = function(n,coll){
switch(arguments.length){
case 1:
return G__11790__1.call(this,n);
case 2:
return G__11790__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11790.cljs$core$IFn$_invoke$arity$1 = G__11790__1;
G__11790.cljs$core$IFn$_invoke$arity$2 = G__11790__2;
return G__11790;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.bindable_to_seq_QMARK_ = (function datascript$query$bindable_to_seq_QMARK_(x){
var or__4875__auto__ = datascript.core.seqable_QMARK_.call(null,x);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.core.array_QMARK_.call(null,x);
}
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

datascript.query.IBinding = (function (){var obj11792 = {};
return obj11792;
})();

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((function (){var and__4863__auto__ = binding;
if(and__4863__auto__){
return binding.datascript$query$IBinding$in__GT_rel$arity$2;
} else {
return and__4863__auto__;
}
})()){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__5511__auto__ = (((binding == null))?null:binding);
return (function (){var or__4875__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
})().call(null,binding,value);
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([binding__$1.variable.symbol,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not.call(null,datascript.query.bindable_to_seq_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to collection "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__11793_SHARP_){
return datascript.query.in__GT_rel.call(null,binding__$1.binding,p1__11793_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = true;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not.call(null,datascript.query.bindable_to_seq_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot bind value "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to tuple "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,binding__$1.bindings))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Not enough elements in a collection "),cljs.core.str(cljs.core.pr_str.call(null,coll)),cljs.core.str(" to bind tuple "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__11794_SHARP_,p2__11795_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__11794_SHARP_,p2__11795_SHARP_);
});})(binding__$1))
,binding__$1.bindings,coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__11796){
var vec__11798 = p__11796;
var binding = cljs.core.nth.call(null,vec__11798,(0),null);
var value = cljs.core.nth.call(null,vec__11798,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,binding.variable.symbol,value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
return datascript.core.entid.call(null,datascript.query._STAR_lookup_source_STAR_,eid);
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__11799_SHARP_){
return p1__11799_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4421__auto__ = cljs.core.first.call(null,tuples__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var tuple = temp__4421__auto__;
var key = key_fn.call(null,tuple);
var G__11801 = cljs.core.next.call(null,tuples__$1);
var G__11802 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__11801;
hash_table = G__11802;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__11803_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__11803_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__11804_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__11804_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__4421__auto__ = cljs.core.get.call(null,hash,key);
if(cljs.core.truth_(temp__4421__auto__)){
var tuples1__$1 = temp__4421__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__4421__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4421__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__11805_SHARP_){
if((p1__11805_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__11805_SHARP_;
}
}),pattern);
var datoms = datascript.core._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__11808){
var vec__11809 = p__11808;
var s = cljs.core.nth.call(null,vec__11809,(0),null);
var _ = cljs.core.nth.call(null,vec__11809,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4863__auto__ = tuple__$1;
if(cljs.core.truth_(and__4863__auto__)){
return pattern__$1;
} else {
return and__4863__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p))){
var G__11810 = cljs.core.next.call(null,tuple__$1);
var G__11811 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__11810;
pattern__$1 = G__11811;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__11812_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__11812_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__11815){
var vec__11816 = p__11815;
var s = cljs.core.nth.call(null,vec__11816,(0),null);
var _ = cljs.core.nth.call(null,vec__11816,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((function (){var G__11818 = source;
if(G__11818){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11818.datascript$core$ISearch$;
}
})())){
return true;
} else {
if((!G__11818.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__11818);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__11818);
}
})()){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4421__auto__ = cljs.core.first.call(null,rels__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var rel = temp__4421__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__11819 = cljs.core.next.call(null,rels__$1);
var G__11820 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__11821 = acc;
rels__$1 = G__11819;
new_rel__$1 = G__11820;
acc = G__11821;
continue;
} else {
var G__11822 = cljs.core.next.call(null,rels__$1);
var G__11823 = new_rel__$1;
var G__11824 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__11822;
new_rel__$1 = G__11823;
acc = G__11824;
continue;
}
} else {
return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__4423__auto__ = cljs.core.some.call(null,(function (p1__11825_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__11825_SHARP_),sym)){
return p1__11825_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
if(cljs.core.truth_(temp__4423__auto__)){
var rel = temp__4423__auto__;
var temp__4423__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__4423__auto____$1)){
var tuple = temp__4423__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__11826_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__11826_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__11827_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__11827_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
return (function (tuple){
var resolved_args = cljs.core.map.call(null,(function (p1__11828_SHARP_){
if((p1__11828_SHARP_ instanceof cljs.core.Symbol)){
var or__4875__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__11828_SHARP_);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return (tuple[cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__11828_SHARP_)]);
}
} else {
return p1__11828_SHARP_;
}
}),args);
return cljs.core.apply.call(null,f,resolved_args);
});
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__11833 = clause;
var vec__11834 = cljs.core.nth.call(null,vec__11833,(0),null);
var f = cljs.core.nth.call(null,vec__11834,(0),null);
var args = cljs.core.nthnext.call(null,vec__11834,(1));
var pred = (function (){var or__4875__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__11835 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__11835,(0),null);
var production = cljs.core.nth.call(null,vec__11835,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (tuple_pred,vec__11833,vec__11834,f,args,pred,vec__11835,context__$1,production){
return (function (p1__11829_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__11829_SHARP_);
});})(tuple_pred,vec__11833,vec__11834,f,args,pred,vec__11835,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__11840 = clause;
var vec__11841 = cljs.core.nth.call(null,vec__11840,(0),null);
var f = cljs.core.nth.call(null,vec__11841,(0),null);
var args = cljs.core.nthnext.call(null,vec__11841,(1));
var out = cljs.core.nth.call(null,vec__11840,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__4875__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.query.context_resolve_val.call(null,context,f);
}
})();
var vec__11842 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__11842,(0),null);
var production = cljs.core.nth.call(null,vec__11842,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var temp__4421__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
if(cljs.core.truth_(temp__4421__auto__)){
var tuples = temp__4421__auto__;
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (tuples,temp__4421__auto__,tuple_fn,vec__11840,vec__11841,f,args,out,binding,fun,vec__11842,context__$1,production){
return (function (p1__11836_SHARP_){
var val = tuple_fn.call(null,p1__11836_SHARP_);
var rel = datascript.query.in__GT_rel.call(null,binding,val);
return datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11836_SHARP_], null),null,null,null)),rel);
});})(tuples,temp__4421__auto__,tuple_fn,vec__11840,vec__11841,f,args,out,binding,fun,vec__11842,context__$1,production))
,tuples));
} else {
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__11857 = clause;
var rule = cljs.core.nth.call(null,vec__11857,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__11857,(1));
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5629__auto__ = ((function (vec__11857,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__11858(s__11859){
return (new cljs.core.LazySeq(null,((function (vec__11857,rule,call_args,seqid,branches){
return (function (){
var s__11859__$1 = s__11859;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11859__$1);
if(temp__4423__auto__){
var s__11859__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11859__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11859__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11861 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11860 = (0);
while(true){
if((i__11860 < size__5628__auto__)){
var branch = cljs.core._nth.call(null,c__5627__auto__,i__11860);
var vec__11866 = branch;
var vec__11867 = cljs.core.nth.call(null,vec__11866,(0),null);
var _ = cljs.core.nth.call(null,vec__11867,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__11867,(1));
var clauses = cljs.core.nthnext.call(null,vec__11866,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__11861,clojure.walk.postwalk.call(null,((function (i__11860,vec__11866,vec__11867,_,rule_args,clauses,replacements,branch,c__5627__auto__,size__5628__auto__,b__11861,s__11859__$2,temp__4423__auto__,vec__11857,rule,call_args,seqid,branches){
return (function (p1__11843_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__11843_SHARP_))){
var or__4875__auto__ = replacements.call(null,p1__11843_SHARP_);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__11843_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__11843_SHARP_;
}
});})(i__11860,vec__11866,vec__11867,_,rule_args,clauses,replacements,branch,c__5627__auto__,size__5628__auto__,b__11861,s__11859__$2,temp__4423__auto__,vec__11857,rule,call_args,seqid,branches))
,clauses));

var G__11870 = (i__11860 + (1));
i__11860 = G__11870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11861),datascript$query$expand_rule_$_iter__11858.call(null,cljs.core.chunk_rest.call(null,s__11859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11861),null);
}
} else {
var branch = cljs.core.first.call(null,s__11859__$2);
var vec__11868 = branch;
var vec__11869 = cljs.core.nth.call(null,vec__11868,(0),null);
var _ = cljs.core.nth.call(null,vec__11869,(0),null);
var rule_args = cljs.core.nthnext.call(null,vec__11869,(1));
var clauses = cljs.core.nthnext.call(null,vec__11868,(1));
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__11868,vec__11869,_,rule_args,clauses,replacements,branch,s__11859__$2,temp__4423__auto__,vec__11857,rule,call_args,seqid,branches){
return (function (p1__11843_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__11843_SHARP_))){
var or__4875__auto__ = replacements.call(null,p1__11843_SHARP_);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(cljs.core.name.call(null,p1__11843_SHARP_)),cljs.core.str("__auto__"),cljs.core.str(seqid)].join(''));
}
} else {
return p1__11843_SHARP_;
}
});})(vec__11868,vec__11869,_,rule_args,clauses,replacements,branch,s__11859__$2,temp__4423__auto__,vec__11857,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__11858.call(null,cljs.core.rest.call(null,s__11859__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11857,rule,call_args,seqid,branches))
,null,null));
});})(vec__11857,rule,call_args,seqid,branches))
;
return iter__5629__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__11873){
var vec__11874 = p__11873;
var x = cljs.core.nth.call(null,vec__11874,(0),null);
var y = cljs.core.nth.call(null,vec__11874,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__11884 = rule_clause;
var rule = cljs.core.nth.call(null,vec__11884,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__11884,(1));
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__5629__auto__ = ((function (vec__11884,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__11885(s__11886){
return (new cljs.core.LazySeq(null,((function (vec__11884,rule,call_args,prev_call_args){
return (function (){
var s__11886__$1 = s__11886;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11886__$1);
if(temp__4423__auto__){
var s__11886__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11886__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11886__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11888 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11887 = (0);
while(true){
if((i__11887 < size__5628__auto__)){
var prev_args = cljs.core._nth.call(null,c__5627__auto__,i__11887);
var vec__11891 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__11891,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__11891,(1),null);
cljs.core.chunk_append.call(null,b__11888,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__11893 = (i__11887 + (1));
i__11887 = G__11893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11888),datascript$query$rule_gen_guards_$_iter__11885.call(null,cljs.core.chunk_rest.call(null,s__11886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11888),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__11886__$2);
var vec__11892 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__11892,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__11892,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__11885.call(null,cljs.core.rest.call(null,s__11886__$2)));
}
} else {
return null;
}
break;
}
});})(vec__11884,rule,call_args,prev_call_args))
,null,null));
});})(vec__11884,rule,call_args,prev_call_args))
;
return iter__5629__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__11894_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__11894_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__11894_SHARP_);
} else {
}

return p1__11894_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set.call(null,datascript.query.walk_collect.call(null,clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__11898){
var vec__11899 = p__11898;
var vec__11900 = cljs.core.nth.call(null,vec__11899,(0),null);
var _ = cljs.core.nth.call(null,vec__11900,(0),null);
var vars = cljs.core.nthnext.call(null,vec__11900,(1));
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__11901_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__11901_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__4421__auto__ = cljs.core.first.call(null,stack);
if(cljs.core.truth_(temp__4421__auto__)){
var frame = temp__4421__auto__;
var vec__11912 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__11902_SHARP_){
return cljs.core.not.call(null,datascript.query.rule_QMARK_.call(null,context,p1__11902_SHARP_));
});})(stack,rel,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__11912,(0),null);
var vec__11913 = cljs.core.nth.call(null,vec__11912,(1),null);
var rule_clause = cljs.core.nth.call(null,vec__11913,(0),null);
var next_clauses = cljs.core.nthnext.call(null,vec__11913,(1));
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__11920 = cljs.core.next.call(null,stack);
var G__11921 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__11920;
rel = G__11921;
continue;
} else {
var vec__11914 = rule_clause;
var rule = cljs.core.nth.call(null,vec__11914,(0),null);
var call_args = cljs.core.nthnext.call(null,vec__11914,(1));
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__11915 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__11915,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__11915,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__11903_SHARP_){
return cljs.core._EQ_.call(null,p1__11903_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__11922 = cljs.core.next.call(null,stack);
var G__11923 = rel;
stack = G__11922;
rel = G__11923;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__11924 = cljs.core.next.call(null,stack);
var G__11925 = rel;
stack = G__11924;
rel = G__11925;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__11926 = cljs.core.concat.call(null,(function (){var iter__5629__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__11916(s__11917){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__11917__$1 = s__11917;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11917__$1);
if(temp__4423__auto__){
var s__11917__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11917__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11917__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11919 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11918 = (0);
while(true){
if((i__11918 < size__5628__auto__)){
var branch = cljs.core._nth.call(null,c__5627__auto__,i__11918);
cljs.core.chunk_append.call(null,b__11919,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__11928 = (i__11918 + (1));
i__11918 = G__11928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),datascript$query$solve_rule_$_iter__11916.call(null,cljs.core.chunk_rest.call(null,s__11917__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11919),null);
}
} else {
var branch = cljs.core.first.call(null,s__11917__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__11916.call(null,cljs.core.rest.call(null,s__11917__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__11914,rule,call_args,guards,vec__11915,active_gs,pending_gs,vec__11912,clauses,vec__11913,rule_clause,next_clauses,frame,temp__4421__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5629__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__11927 = rel;
stack = G__11926;
rel = G__11927;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((function (){var G__11931 = source;
if(G__11931){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11931.datascript$core$IDB$;
}
})())){
return true;
} else {
if((!G__11931.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11931);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11931);
}
})()){
var vec__11932 = pattern;
var e = cljs.core.nth.call(null,vec__11932,(0),null);
var a = cljs.core.nth.call(null,vec__11932,(1),null);
var v = cljs.core.nth.call(null,vec__11932,(2),null);
var tx = cljs.core.nth.call(null,vec__11932,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,e))?datascript.core.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__4863__auto__ = v;
if(cljs.core.truth_(and__4863__auto__)){
var and__4863__auto____$1 = datascript.query.attr_QMARK_.call(null,a);
if(cljs.core.truth_(and__4863__auto____$1)){
var and__4863__auto____$2 = datascript.core.ref_QMARK_.call(null,source,a);
if(and__4863__auto____$2){
return datascript.query.lookup_ref_QMARK_.call(null,v);
} else {
return and__4863__auto____$2;
}
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
})())?datascript.core.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.core.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__11935 = pattern;
var e = cljs.core.nth.call(null,vec__11935,(0),null);
var a = cljs.core.nth.call(null,vec__11935,(1),null);
var v = cljs.core.nth.call(null,vec__11935,(2),null);
var tx = cljs.core.nth.call(null,vec__11935,(3),null);
var G__11936 = cljs.core.PersistentHashSet.EMPTY;
var G__11936__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__11936,e):G__11936);
var G__11936__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__11936__$1,tx):G__11936__$1);
var G__11936__$3 = (cljs.core.truth_((function (){var and__4863__auto__ = datascript.query.free_var_QMARK_.call(null,v);
if(cljs.core.truth_(and__4863__auto__)){
return (cljs.core.not.call(null,datascript.query.free_var_QMARK_.call(null,a))) && (datascript.core.ref_QMARK_.call(null,source,a));
} else {
return and__4863__auto__;
}
})())?cljs.core.conj.call(null,G__11936__$2,v):G__11936__$2);
return G__11936__$3;
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__11944 = datascript.query.looks_like_QMARK_;
var expr__11945 = clause;
if(cljs.core.truth_(pred__11944.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__11945))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__11944.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__11945))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__11944.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__11945))){
var vec__11947 = datascript.query.normalize_pattern_clause.call(null,clause);
var source_sym = cljs.core.nth.call(null,vec__11947,(0),null);
var pattern = cljs.core.nthnext.call(null,vec__11947,(1));
var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs.call(null,source,pattern);
var relation = datascript.query.lookup_pattern.call(null,source,pattern__$1);
var lookup_source_QMARK_ = (function (){var G__11948 = source;
if(G__11948){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11948.datascript$core$IDB$;
}
})())){
return true;
} else {
if((!G__11948.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11948);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11948);
}
})();
var _STAR_lookup_source_STAR_11949 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_11950 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs.call(null,source,pattern__$1):null);

try{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_11950;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_11949;
}} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11945)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_.call(null,context,clause))){
var vec__11952 = (cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));
var source = cljs.core.nth.call(null,vec__11952,(0),null);
var rule = cljs.core.nth.call(null,vec__11952,(1),null);
var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));
var rel = datascript.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(){
var G__11955 = arguments.length;
switch (G__11955) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.core.arr.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__4421__auto__ = cljs.core.first.call(null,rels);
if(cljs.core.truth_(temp__4421__auto__)){
var rel = temp__4421__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__11963 = acc;
var G__11964 = cljs.core.next.call(null,rels);
var G__11965 = symbols;
acc = G__11963;
rels = G__11964;
symbols = G__11965;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__4421__auto__){
return (function (p1__11953_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__11953_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4421__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__11966 = (function (){var iter__5629__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4421__auto__){
return (function datascript$query$iter__11956(s__11957){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4421__auto__){
return (function (){
var s__11957__$1 = s__11957;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11957__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var t1 = cljs.core.first.call(null,xs__4975__auto__);
var iterys__5625__auto__ = ((function (s__11957__$1,acc,rels,symbols,t1,xs__4975__auto__,temp__4423__auto__,copy_map,len,keep_attrs,rel,temp__4421__auto__){
return (function datascript$query$iter__11956_$_iter__11958(s__11959){
return (new cljs.core.LazySeq(null,((function (s__11957__$1,acc,rels,symbols,t1,xs__4975__auto__,temp__4423__auto__,copy_map,len,keep_attrs,rel,temp__4421__auto__){
return (function (){
var s__11959__$1 = s__11959;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__11959__$1);
if(temp__4423__auto____$1){
var s__11959__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11959__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11959__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11961 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11960 = (0);
while(true){
if((i__11960 < size__5628__auto__)){
var t2 = cljs.core._nth.call(null,c__5627__auto__,i__11960);
cljs.core.chunk_append.call(null,b__11961,(function (){var res = cljs.core.aclone.call(null,t1);
var n__5760__auto___11969 = len;
var i_11970 = (0);
while(true){
if((i_11970 < n__5760__auto___11969)){
var temp__4423__auto___11971__$2 = (copy_map[i_11970]);
if(cljs.core.truth_(temp__4423__auto___11971__$2)){
var idx_11972 = temp__4423__auto___11971__$2;
(res[i_11970] = (t2[idx_11972]));
} else {
}

var G__11973 = (i_11970 + (1));
i_11970 = G__11973;
continue;
} else {
}
break;
}

return res;
})());

var G__11974 = (i__11960 + (1));
i__11960 = G__11974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11961),datascript$query$iter__11956_$_iter__11958.call(null,cljs.core.chunk_rest.call(null,s__11959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11961),null);
}
} else {
var t2 = cljs.core.first.call(null,s__11959__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__5760__auto___11975 = len;
var i_11976 = (0);
while(true){
if((i_11976 < n__5760__auto___11975)){
var temp__4423__auto___11977__$2 = (copy_map[i_11976]);
if(cljs.core.truth_(temp__4423__auto___11977__$2)){
var idx_11978 = temp__4423__auto___11977__$2;
(res[i_11976] = (t2[idx_11978]));
} else {
}

var G__11979 = (i_11976 + (1));
i_11976 = G__11979;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__11956_$_iter__11958.call(null,cljs.core.rest.call(null,s__11959__$2)));
}
} else {
return null;
}
break;
}
});})(s__11957__$1,acc,rels,symbols,t1,xs__4975__auto__,temp__4423__auto__,copy_map,len,keep_attrs,rel,temp__4421__auto__))
,null,null));
});})(s__11957__$1,acc,rels,symbols,t1,xs__4975__auto__,temp__4423__auto__,copy_map,len,keep_attrs,rel,temp__4421__auto__))
;
var fs__5626__auto__ = cljs.core.seq.call(null,iterys__5625__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__5626__auto__){
return cljs.core.concat.call(null,fs__5626__auto__,datascript$query$iter__11956.call(null,cljs.core.rest.call(null,s__11957__$1)));
} else {
var G__11980 = cljs.core.rest.call(null,s__11957__$1);
s__11957__$1 = G__11980;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4421__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4421__auto__))
;
return iter__5629__auto__.call(null,acc);
})();
var G__11967 = cljs.core.next.call(null,rels);
var G__11968 = symbols;
acc = G__11966;
rels = G__11967;
symbols = G__11968;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;
datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

datascript.query.IContextResolve = (function (){var obj11982 = {};
return obj11982;
})();

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((function (){var and__4863__auto__ = var$;
if(and__4863__auto__){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2;
} else {
return and__4863__auto__;
}
})()){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__5511__auto__ = (((var$ == null))?null:var$);
return (function (){var or__4875__auto__ = (datascript.query._context_resolve[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.query._context_resolve["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
})().call(null,var$,context);
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = true;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_.call(null,element))){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__11983_SHARP_){
return datascript.query._context_resolve.call(null,p1__11983_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__11984_SHARP_){
return cljs.core.nth.call(null,p1__11984_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__11985_SHARP_,p2__11986_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__11985_SHARP_))){
return p2__11986_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__11987_SHARP_){
return cljs.core.nth.call(null,tuple,p1__11987_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__5629__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__11996(s__11997){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__11997__$1 = s__11997;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11997__$1);
if(temp__4423__auto__){
var s__11997__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11997__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11997__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11999 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11998 = (0);
while(true){
if((i__11998 < size__5628__auto__)){
var vec__12002 = cljs.core._nth.call(null,c__5627__auto__,i__11998);
var _ = cljs.core.nth.call(null,vec__12002,(0),null);
var tuples = cljs.core.nth.call(null,vec__12002,(1),null);
cljs.core.chunk_append.call(null,b__11999,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__12004 = (i__11998 + (1));
i__11998 = G__12004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11999),datascript$query$aggregate_$_iter__11996.call(null,cljs.core.chunk_rest.call(null,s__11997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11999),null);
}
} else {
var vec__12003 = cljs.core.first.call(null,s__11997__$2);
var _ = cljs.core.nth.call(null,vec__12003,(0),null);
var tuples = cljs.core.nth.call(null,vec__12003,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__11996.call(null,cljs.core.rest.call(null,s__11997__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__5629__auto__.call(null,grouped);
});

datascript.query.IPostProcess = (function (){var obj12006 = {};
return obj12006;
})();

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((function (){var and__4863__auto__ = find;
if(and__4863__auto__){
return find.datascript$query$IPostProcess$_post_process$arity$2;
} else {
return and__4863__auto__;
}
})()){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__5511__auto__ = (((find == null))?null:find);
return (function (){var or__4875__auto__ = (datascript.query._post_process[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.query._post_process["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
})().call(null,find,tuples);
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = true;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__5629__auto__ = (function datascript$query$pull_$_iter__12019(s__12020){
return (new cljs.core.LazySeq(null,(function (){
var s__12020__$1 = s__12020;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__12020__$1);
if(temp__4423__auto__){
var s__12020__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12020__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__12020__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__12022 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__12021 = (0);
while(true){
if((i__12021 < size__5628__auto__)){
var find = cljs.core._nth.call(null,c__5627__auto__,i__12021);
cljs.core.chunk_append.call(null,b__12022,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,find.source,context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,find.pattern,context))], null):null));

var G__12031 = (i__12021 + (1));
i__12021 = G__12031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12022),datascript$query$pull_$_iter__12019.call(null,cljs.core.chunk_rest.call(null,s__12020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12022),null);
}
} else {
var find = cljs.core.first.call(null,s__12020__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,find.source,context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,find.pattern,context))], null):null),datascript$query$pull_$_iter__12019.call(null,cljs.core.rest.call(null,s__12020__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5629__auto__.call(null,find_elements);
})();
var iter__5629__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__12023(s__12024){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__12024__$1 = s__12024;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__12024__$1);
if(temp__4423__auto__){
var s__12024__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12024__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__12024__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__12026 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__12025 = (0);
while(true){
if((i__12025 < size__5628__auto__)){
var tuple = cljs.core._nth.call(null,c__5627__auto__,i__12025);
cljs.core.chunk_append.call(null,b__12026,cljs.core.mapv.call(null,((function (i__12025,tuple,c__5627__auto__,size__5628__auto__,b__12026,s__12024__$2,temp__4423__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__12029 = env;
var src = cljs.core.nth.call(null,vec__12029,(0),null);
var spec = cljs.core.nth.call(null,vec__12029,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__12025,tuple,c__5627__auto__,size__5628__auto__,b__12026,s__12024__$2,temp__4423__auto__,resolved))
,resolved,tuple));

var G__12032 = (i__12025 + (1));
i__12025 = G__12032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12026),datascript$query$pull_$_iter__12023.call(null,cljs.core.chunk_rest.call(null,s__12024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12026),null);
}
} else {
var tuple = cljs.core.first.call(null,s__12024__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__12024__$2,temp__4423__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__12030 = env;
var src = cljs.core.nth.call(null,vec__12030,(0),null);
var spec = cljs.core.nth.call(null,vec__12030,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__12024__$2,temp__4423__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__12023.call(null,cljs.core.rest.call(null,s__12024__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__5629__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.query.lru.call(null,datascript.query.lru_cache_size));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__4421__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if(cljs.core.truth_(temp__4421__auto__)){
var cached = temp__4421__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(){
var argseq__5915__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5915__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__12036 = q;
var G__12036__$1 = ((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,G__12036):G__12036);
return G__12036__$1;
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__12037 = resultset;
var G__12037__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__12037,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__12033_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__12033_SHARP_,(0),result_arity));
});})(G__12037,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__12037):G__12037);
var G__12037__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__12037__$1):G__12037__$1);
var G__12037__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__12037__$2):G__12037__$2);
var G__12037__$4 = datascript.query._post_process.call(null,find,G__12037__$3)
;
return G__12037__$4;
});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq12034){
var G__12035 = cljs.core.first.call(null,seq12034);
var seq12034__$1 = cljs.core.next.call(null,seq12034);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__12035,seq12034__$1);
});

//# sourceMappingURL=query.js.map
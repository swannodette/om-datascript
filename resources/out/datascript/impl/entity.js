// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.core');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.core.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if((function (){var G__11159 = db;
if(G__11159){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11159.datascript$core$IDB$;
}
})())){
return true;
} else {
if((!G__11159.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11159);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IDB,G__11159);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("dc","IDB","dc/IDB",-1264384990,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if((function (){var G__11160 = db;
if(G__11160){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11160.datascript$core$ISearch$;
}
})())){
return true;
} else {
if((!G__11160.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__11160);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.ISearch,G__11160);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("dc","ISearch","dc/ISearch",-1142016324,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if((function (){var G__11161 = db;
if(G__11161){
var bit__5549__auto__ = null;
if(cljs.core.truth_((function (){var or__4875__auto__ = bit__5549__auto__;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return G__11161.datascript$core$IIndexAccess$;
}
})())){
return true;
} else {
if((!G__11161.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IIndexAccess,G__11161);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.core.IIndexAccess,G__11161);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("dc","IIndexAccess","dc/IIndexAccess",565219582,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

var temp__4423__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(datascript.core.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__11162_SHARP_,p2__11163_SHARP_){
return cljs.core.conj.call(null,p1__11162_SHARP_,datascript.impl.entity.entity.call(null,db,p2__11163_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__11164_SHARP_,p2__11165_SHARP_){
return cljs.core.conj.call(null,p1__11164_SHARP_,p2__11165_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.core.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else {
return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__4421__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4421__auto__)){
var datoms = temp__4421__auto__;
if(datascript.core.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).e);
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__4421__auto__){
return (function (p1__11166_SHARP_,p2__11167_SHARP_){
return cljs.core.conj.call(null,p1__11166_SHARP_,datascript.impl.entity.entity.call(null,db,p2__11167_SHARP_.e));
});})(datoms,temp__4421__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__5629__auto__ = (function datascript$impl$entity$js_seq_$_iter__11176(s__11177){
return (new cljs.core.LazySeq(null,(function (){
var s__11177__$1 = s__11177;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11177__$1);
if(temp__4423__auto__){
var s__11177__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11177__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11177__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11179 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11178 = (0);
while(true){
if((i__11178 < size__5628__auto__)){
var vec__11182 = cljs.core._nth.call(null,c__5627__auto__,i__11178);
var a = cljs.core.nth.call(null,vec__11182,(0),null);
var v = cljs.core.nth.call(null,vec__11182,(1),null);
cljs.core.chunk_append.call(null,b__11179,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__11184 = (i__11178 + (1));
i__11178 = G__11184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11179),datascript$impl$entity$js_seq_$_iter__11176.call(null,cljs.core.chunk_rest.call(null,s__11177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11179),null);
}
} else {
var vec__11183 = cljs.core.first.call(null,s__11177__$2);
var a = cljs.core.nth.call(null,vec__11183,(0),null);
var v = cljs.core.nth.call(null,vec__11183,(1),null);
return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__11176.call(null,cljs.core.rest.call(null,s__11177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5629__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__11199 = null;
var G__11199__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__11186 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__11187 = null;
var count__11188 = (0);
var i__11189 = (0);
while(true){
if((i__11189 < count__11188)){
var vec__11190 = cljs.core._nth.call(null,chunk__11187,i__11189);
var a = cljs.core.nth.call(null,vec__11190,(0),null);
var v = cljs.core.nth.call(null,vec__11190,(1),null);
f.call(null,v,a,this$);

var G__11200 = seq__11186;
var G__11201 = chunk__11187;
var G__11202 = count__11188;
var G__11203 = (i__11189 + (1));
seq__11186 = G__11200;
chunk__11187 = G__11201;
count__11188 = G__11202;
i__11189 = G__11203;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__11186);
if(temp__4423__auto__){
var seq__11186__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11186__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__11186__$1);
var G__11204 = cljs.core.chunk_rest.call(null,seq__11186__$1);
var G__11205 = c__5660__auto__;
var G__11206 = cljs.core.count.call(null,c__5660__auto__);
var G__11207 = (0);
seq__11186 = G__11204;
chunk__11187 = G__11205;
count__11188 = G__11206;
i__11189 = G__11207;
continue;
} else {
var vec__11191 = cljs.core.first.call(null,seq__11186__$1);
var a = cljs.core.nth.call(null,vec__11191,(0),null);
var v = cljs.core.nth.call(null,vec__11191,(1),null);
f.call(null,v,a,this$);

var G__11208 = cljs.core.next.call(null,seq__11186__$1);
var G__11209 = null;
var G__11210 = (0);
var G__11211 = (0);
seq__11186 = G__11208;
chunk__11187 = G__11209;
count__11188 = G__11210;
i__11189 = G__11211;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__11199__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__11192 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__11193 = null;
var count__11194 = (0);
var i__11195 = (0);
while(true){
if((i__11195 < count__11194)){
var vec__11196 = cljs.core._nth.call(null,chunk__11193,i__11195);
var a = cljs.core.nth.call(null,vec__11196,(0),null);
var v = cljs.core.nth.call(null,vec__11196,(1),null);
f.call(use_as_this,v,a,this$);

var G__11212 = seq__11192;
var G__11213 = chunk__11193;
var G__11214 = count__11194;
var G__11215 = (i__11195 + (1));
seq__11192 = G__11212;
chunk__11193 = G__11213;
count__11194 = G__11214;
i__11195 = G__11215;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__11192);
if(temp__4423__auto__){
var seq__11192__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11192__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__11192__$1);
var G__11216 = cljs.core.chunk_rest.call(null,seq__11192__$1);
var G__11217 = c__5660__auto__;
var G__11218 = cljs.core.count.call(null,c__5660__auto__);
var G__11219 = (0);
seq__11192 = G__11216;
chunk__11193 = G__11217;
count__11194 = G__11218;
i__11195 = G__11219;
continue;
} else {
var vec__11197 = cljs.core.first.call(null,seq__11192__$1);
var a = cljs.core.nth.call(null,vec__11197,(0),null);
var v = cljs.core.nth.call(null,vec__11197,(1),null);
f.call(use_as_this,v,a,this$);

var G__11220 = cljs.core.next.call(null,seq__11192__$1);
var G__11221 = null;
var G__11222 = (0);
var G__11223 = (0);
seq__11192 = G__11220;
chunk__11193 = G__11221;
count__11194 = G__11222;
i__11195 = G__11223;
continue;
}
} else {
return null;
}
}
break;
}
});
G__11199 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__11199__1.call(this,f);
case 2:
return G__11199__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11199.cljs$core$IFn$_invoke$arity$1 = G__11199__1;
G__11199.cljs$core$IFn$_invoke$arity$2 = G__11199__2;
return G__11199;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.core.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.core.reverse_ref.call(null,attr),null));
} else {
var G__11198 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
var G__11198__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__11198):G__11198);
return G__11198__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__11224 = null;
var G__11224__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__11224__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__11224 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11224__2.call(this,self__,k);
case 3:
return G__11224__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11224.cljs$core$IFn$_invoke$arity$2 = G__11224__2;
G__11224.cljs$core$IFn$_invoke$arity$3 = G__11224__3;
return G__11224;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args11185){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11185)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(){
var G__11226 = arguments.length;
switch (G__11226) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.core.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.core.reverse_ref.call(null,attr),not_found);
} else {
var or__4875__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__4421__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__4421__auto__)){
var datoms = temp__4421__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;
datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.core.component_QMARK_.call(null,db,a))?((datascript.core.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__4423__auto___11228 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4423__auto___11228)){
var datoms_11229 = temp__4423__auto___11228;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_11229)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map
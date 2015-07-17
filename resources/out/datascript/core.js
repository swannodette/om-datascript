// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('datascript.btset');
datascript.core.arr = (function datascript$core$arr(size){
return (new Array(size));
});
datascript.core.into_arr = (function datascript$core$into_arr(aseq){
return cljs.core.into_array.call(null,aseq);
});
datascript.core.array_QMARK_ = cljs.core.array_QMARK_;
datascript.core.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.core.neg_number_QMARK_ = cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.neg_QMARK_);
datascript.core.Exception = Error;

datascript.core.IllegalArgumentException = Error;

datascript.core.UnsupportedOperationException = Error;
datascript.core.tx0 = (536870912);
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.core.cljs_env_QMARK_ = (function datascript$core$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});





/**
* @constructor
*/
datascript.core.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164480;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__4875__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return d__$1.__hash = datascript.core.hash_datom.call(null,d__$1);
}
});

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__4863__auto__ = (o instanceof datascript.core.Datom);
if(and__4863__auto__){
return datascript.core.equiv_datom.call(null,d__$1,o);
} else {
return and__4863__auto__;
}
});

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.core.seq_datom.call(null,d__$1);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.core.val_at_datom.call(null,d__$1,k,null);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.core.val_at_datom.call(null,d__$1,k,nf);
});

datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.core.assoc_datom.call(null,k);
});

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.core.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null);
});

datascript.core.Datom.cljs$lang$type = true;

datascript.core.Datom.cljs$lang$ctorStr = "datascript.core/Datom";

datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.core/Datom");
});

datascript.core.__GT_Datom = (function datascript$core$__GT_Datom(e,a,v,tx,added){
return (new datascript.core.Datom(e,a,v,tx,added));
});

datascript.core.datom = (function datascript$core$datom(){
var argseq__5915__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return datascript.core.datom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5915__auto__);
});

datascript.core.datom.cljs$core$IFn$_invoke$arity$variadic = (function (e,a,v,p__11492){
var vec__11493 = p__11492;
var tx = cljs.core.nth.call(null,vec__11493,(0),null);
var added = cljs.core.nth.call(null,vec__11493,(1),null);
return (new datascript.core.Datom(e,a,v,(function (){var or__4875__auto__ = tx;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.core.tx0;
}
})(),(((added == null))?true:added)));
});

datascript.core.datom.cljs$lang$maxFixedArity = (3);

datascript.core.datom.cljs$lang$applyTo = (function (seq11488){
var G__11489 = cljs.core.first.call(null,seq11488);
var seq11488__$1 = cljs.core.next.call(null,seq11488);
var G__11490 = cljs.core.first.call(null,seq11488__$1);
var seq11488__$2 = cljs.core.next.call(null,seq11488__$1);
var G__11491 = cljs.core.first.call(null,seq11488__$2);
var seq11488__$3 = cljs.core.next.call(null,seq11488__$2);
return datascript.core.datom.cljs$core$IFn$_invoke$arity$variadic(G__11489,G__11490,G__11491,seq11488__$3);
});
datascript.core.datom_QMARK_ = (function datascript$core$datom_QMARK_(x){
return (x instanceof datascript.core.Datom);
});
datascript.core.hash_datom = (function datascript$core$hash_datom(d){
return cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datascript.core.equiv_datom = (function datascript$core$equiv_datom(d,o){
return (cljs.core._EQ_.call(null,d.e,o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v));
});
datascript.core.seq_datom = (function datascript$core$seq_datom(d){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d.added),d.tx),d.v),d.a),d.e);
});
datascript.core.val_at_datom = (function datascript$core$val_at_datom(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.core.val_at_datom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.core.val_at_datom.cljs$core$IFn$_invoke$arity$variadic = (function (d,k,p__11497){
var vec__11498 = p__11497;
var not_found = cljs.core.nth.call(null,vec__11498,(0),null);
var G__11499 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__11499)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__11499)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__11499)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"v",G__11499)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__11499)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__11499)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__11499)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,"added",G__11499)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"tx",G__11499)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__11499)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});

datascript.core.val_at_datom.cljs$lang$maxFixedArity = (2);

datascript.core.val_at_datom.cljs$lang$applyTo = (function (seq11494){
var G__11495 = cljs.core.first.call(null,seq11494);
var seq11494__$1 = cljs.core.next.call(null,seq11494);
var G__11496 = cljs.core.first.call(null,seq11494__$1);
var seq11494__$2 = cljs.core.next.call(null,seq11494__$1);
return datascript.core.val_at_datom.cljs$core$IFn$_invoke$arity$variadic(G__11495,G__11496,seq11494__$2);
});
datascript.core.assoc_datom = (function datascript$core$assoc_datom(d,k,v){
var G__11501 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__11501) {
case "e":
return (new datascript.core.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.core.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.core.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.core.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.core.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.core.IllegalArgumentException([cljs.core.str("invalid key for #datascript/Datom: "),cljs.core.str(k)].join('')));

}
});
datascript.core.datom_from_reader = (function datascript$core$datom_from_reader(p__11503){
var vec__11505 = p__11503;
var e = cljs.core.nth.call(null,vec__11505,(0),null);
var a = cljs.core.nth.call(null,vec__11505,(1),null);
var v = cljs.core.nth.call(null,vec__11505,(2),null);
var tx = cljs.core.nth.call(null,vec__11505,(3),null);
var added = cljs.core.nth.call(null,vec__11505,(4),null);
return datascript.core.datom.call(null,e,a,v,tx,added);
});
datascript.core.cmp = (function datascript$core$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__4863__auto__ = o1;
if(cljs.core.truth_(and__4863__auto__)){
return o2;
} else {
return and__4863__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.core.cmp_num = (function datascript$core$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__4863__auto__ = n1;
if(cljs.core.truth_(and__4863__auto__)){
return n2;
} else {
return and__4863__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.core.cmp_val = (function datascript$core$cmp_val(o1,o2){
if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2))){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
} else {
return (0);
}
});
datascript.core.cmp_datoms_eavt = (function datascript$core$cmp_datoms_eavt(d1,d2){
var c__7031__auto__ = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function datascript$core$cmp_datoms_aevt(d1,d2){
var c__7031__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});
datascript.core.cmp_datoms_avet = (function datascript$core$cmp_datoms_avet(d1,d2){
var c__7031__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});
datascript.core.cmp_attr_quick = (function datascript$core$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.core.cmp_val_quick = (function datascript$core$cmp_val_quick(o1,o2){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
});
datascript.core.cmp_datoms_eavt_quick = (function datascript$core$cmp_datoms_eavt_quick(d1,d2){
var c__7031__auto__ = (d1.e - d2.e);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});
datascript.core.cmp_datoms_aevt_quick = (function datascript$core$cmp_datoms_aevt_quick(d1,d2){
var c__7031__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = (d1.e - d2.e);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});
datascript.core.cmp_datoms_avet_quick = (function datascript$core$cmp_datoms_avet_quick(d1,d2){
var c__7031__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__7031__auto__)){
var c__7031__auto____$1 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__7031__auto____$1)){
var c__7031__auto____$2 = (d1.e - d2.e);
if(((0) === c__7031__auto____$2)){
var c__7031__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__7031__auto____$3)){
return (0);
} else {
return c__7031__auto____$3;
}
} else {
return c__7031__auto____$2;
}
} else {
return c__7031__auto____$1;
}
} else {
return c__7031__auto__;
}
});

datascript.core.ISearch = (function (){var obj11508 = {};
return obj11508;
})();

datascript.core._search = (function datascript$core$_search(data,pattern){
if((function (){var and__4863__auto__ = data;
if(and__4863__auto__){
return data.datascript$core$ISearch$_search$arity$2;
} else {
return and__4863__auto__;
}
})()){
return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else {
var x__5511__auto__ = (((data == null))?null:data);
return (function (){var or__4875__auto__ = (datascript.core._search[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._search["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});


datascript.core.IIndexAccess = (function (){var obj11510 = {};
return obj11510;
})();

datascript.core._datoms = (function datascript$core$_datoms(db,index,components){
if((function (){var and__4863__auto__ = db;
if(and__4863__auto__){
return db.datascript$core$IIndexAccess$_datoms$arity$3;
} else {
return and__4863__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__5511__auto__ = (((db == null))?null:db);
return (function (){var or__4875__auto__ = (datascript.core._datoms[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._datoms["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._seek_datoms = (function datascript$core$_seek_datoms(db,index,components){
if((function (){var and__4863__auto__ = db;
if(and__4863__auto__){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3;
} else {
return and__4863__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__5511__auto__ = (((db == null))?null:db);
return (function (){var or__4875__auto__ = (datascript.core._seek_datoms[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._seek_datoms["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._index_range = (function datascript$core$_index_range(db,attr,start,end){
if((function (){var and__4863__auto__ = db;
if(and__4863__auto__){
return db.datascript$core$IIndexAccess$_index_range$arity$4;
} else {
return and__4863__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__5511__auto__ = (((db == null))?null:db);
return (function (){var or__4875__auto__ = (datascript.core._index_range[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._index_range["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
})().call(null,db,attr,start,end);
}
});


datascript.core.IDB = (function (){var obj11512 = {};
return obj11512;
})();

datascript.core._schema = (function datascript$core$_schema(db){
if((function (){var and__4863__auto__ = db;
if(and__4863__auto__){
return db.datascript$core$IDB$_schema$arity$1;
} else {
return and__4863__auto__;
}
})()){
return db.datascript$core$IDB$_schema$arity$1(db);
} else {
var x__5511__auto__ = (((db == null))?null:db);
return (function (){var or__4875__auto__ = (datascript.core._schema[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._schema["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
})().call(null,db);
}
});

datascript.core._attrs_by = (function datascript$core$_attrs_by(db,property){
if((function (){var and__4863__auto__ = db;
if(and__4863__auto__){
return db.datascript$core$IDB$_attrs_by$arity$2;
} else {
return and__4863__auto__;
}
})()){
return db.datascript$core$IDB$_attrs_by$arity$2(db,property);
} else {
var x__5511__auto__ = (((db == null))?null:db);
return (function (){var or__4875__auto__ = (datascript.core._attrs_by[goog.typeOf(x__5511__auto__)]);
if(or__4875__auto__){
return or__4875__auto__;
} else {
var or__4875__auto____$1 = (datascript.core._attrs_by["_"]);
if(or__4875__auto____$1){
return or__4875__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
})().call(null,db,property);
}
});








/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} rschema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k11524,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__11526 = (((k11524 instanceof cljs.core.Keyword))?k11524.fqn:null);
switch (G__11526) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11524,else__5473__auto__);

}
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.core.DB{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
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

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
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

datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11523){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11527 = cljs.core.keyword_identical_QMARK_;
var expr__11528 = k__5478__auto__;
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__11528))){
return (new datascript.core.DB(G__11523,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__11528))){
return (new datascript.core.DB(self__.schema,G__11523,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__11528))){
return (new datascript.core.DB(self__.schema,self__.eavt,G__11523,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__11528))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__11523,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__11528))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__11523,self__.max_tx,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__11528))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__11523,self__.rschema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11527.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__11528))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__11523,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__11523),null));
}
}
}
}
}
}
}
});

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__11523){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__11523,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.core.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null)], null);
});

datascript.core.DB.cljs$lang$type = true;

datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});

datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.core/DB");
});

datascript.core.__GT_DB = (function datascript$core$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema){
return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,null,null,null));
});

datascript.core.map__GT_DB = (function datascript$core$map__GT_DB(G__11525){
return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__11525),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__11525),null,cljs.core.dissoc.call(null,G__11525,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)),null));
});


datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.core.pr_db.call(null,db__$1,w,opts);
});

datascript.core.DB.prototype.cljs$core$ICounted$ = true;

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.cljs$core$IReversible$ = true;

datascript.core.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.cljs$core$IHash$ = true;

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.hash_db.call(null,db__$1);
});

datascript.core.DB.prototype.cljs$core$IEquiv$ = true;

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.core.equiv_db.call(null,db__$1,other);
});

datascript.core.DB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.core.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.empty_db.call(null,db__$1.schema);
});

datascript.core.DB.prototype.cljs$core$ISeqable$ = true;

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.DB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.core.components__GT_pattern.call(null,db__$1,index,cs));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.core.components__GT_pattern.call(null,db__$1,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
datascript.core.validate_attr.call(null,attr,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),start),attr),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null)));

return datascript.btset.slice.call(null,db__$1.avet,datascript.core.resolve_datom.call(null,db__$1,null,attr,start,null),datascript.core.resolve_datom.call(null,db__$1,null,attr,end,null));
});

datascript.core.DB.prototype.datascript$core$IDB$ = true;

datascript.core.DB.prototype.datascript$core$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.core.DB.prototype.datascript$core$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.core.DB.prototype.datascript$core$ISearch$ = true;

datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__11530 = pattern;
var e = cljs.core.nth.call(null,vec__11530,(0),null);
var a = cljs.core.nth.call(null,vec__11530,(1),null);
var v = cljs.core.nth.call(null,vec__11530,(2),null);
var tx = cljs.core.nth.call(null,vec__11530,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11513_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__11513_SHARP_.tx);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11514_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__11514_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__11514_SHARP_.tx));
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11515_SHARP_){
return cljs.core._EQ_.call(null,v,p1__11515_SHARP_.v);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11516_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__11516_SHARP_.tx);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11517_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__11517_SHARP_.tx);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,v,null,null))));
} else {
return datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11518_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__11518_SHARP_.tx);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11519_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__11519_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__11519_SHARP_.tx));
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11520_SHARP_){
return cljs.core._EQ_.call(null,v,p1__11520_SHARP_.v);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (p1__11521_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__11521_SHARP_.tx);
});})(vec__11530,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.core.db_QMARK_ = (function datascript$core$db_QMARK_(x){
return ((x instanceof datascript.core.ISearch)) && ((x instanceof datascript.core.IIndexAccess)) && ((x instanceof datascript.core.IDB));
});

/**
* @constructor
* @param {*} unfiltered_db
* @param {*} pred
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k11536,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__11538 = (((k11536 instanceof cljs.core.Keyword))?k11536.fqn:null);
switch (G__11538) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11536,else__5473__auto__);

}
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.core.FilteredDB{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.core.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
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

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
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

datascript.core.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11535){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11539 = cljs.core.keyword_identical_QMARK_;
var expr__11540 = k__5478__auto__;
if(cljs.core.truth_(pred__11539.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__11540))){
return (new datascript.core.FilteredDB(G__11535,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11539.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__11540))){
return (new datascript.core.FilteredDB(self__.unfiltered_db,G__11535,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__11535),null));
}
}
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__11535){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,G__11535,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.core.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null)], null);
});

datascript.core.FilteredDB.cljs$lang$type = true;

datascript.core.FilteredDB.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/FilteredDB");
});

datascript.core.FilteredDB.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.core/FilteredDB");
});

datascript.core.__GT_FilteredDB = (function datascript$core$__GT_FilteredDB(unfiltered_db,pred){
return (new datascript.core.FilteredDB(unfiltered_db,pred,null,null,null));
});

datascript.core.map__GT_FilteredDB = (function datascript$core$map__GT_FilteredDB(G__11537){
return (new datascript.core.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__11537),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__11537),null,cljs.core.dissoc.call(null,G__11537,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397)),null));
});


datascript.core.FilteredDB.prototype.cljs$core$ILookup$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new datascript.core.UnsupportedOperationException());
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new datascript.core.UnsupportedOperationException());
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.core.pr_db.call(null,db__$1,w,opts);
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datascript.core._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.core.hash_db.call(null,db__$1);
});

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.core.equiv_db.call(null,db__$1,other);
});

datascript.core.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new datascript.core.UnsupportedOperationException());
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new datascript.core.UnsupportedOperationException());
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new datascript.core.UnsupportedOperationException());
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$ = true;

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.core._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.core._schema.call(null,db__$1.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.core._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datascript.core.FilteredDB.prototype.datascript$core$ISearch$ = true;

datascript.core.FilteredDB.prototype.datascript$core$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.core._search.call(null,db__$1.unfiltered_db,pattern));
});
datascript.core.attr__GT_properties = (function datascript$core$attr__GT_properties(k,v){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null);
} else {
return null;
}
}
}
}
}
});
datascript.core.multimap = (function datascript$core$multimap(e,m){
return cljs.core.reduce.call(null,(function (acc,p__11545){
var vec__11546 = p__11545;
var k = cljs.core.nth.call(null,vec__11546,(0),null);
var v = cljs.core.nth.call(null,vec__11546,(1),null);
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.core.rschema = (function datascript$core$rschema(schema){
return datascript.core.multimap.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5629__auto__ = (function datascript$core$rschema_$_iter__11561(s__11562){
return (new cljs.core.LazySeq(null,(function (){
var s__11562__$1 = s__11562;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11562__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var vec__11572 = cljs.core.first.call(null,xs__4975__auto__);
var a = cljs.core.nth.call(null,vec__11572,(0),null);
var kv = cljs.core.nth.call(null,vec__11572,(1),null);
var iterys__5625__auto__ = ((function (s__11562__$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__){
return (function datascript$core$rschema_$_iter__11561_$_iter__11563(s__11564){
return (new cljs.core.LazySeq(null,((function (s__11562__$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__){
return (function (){
var s__11564__$1 = s__11564;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__11564__$1);
if(temp__4423__auto____$1){
var xs__4975__auto____$1 = temp__4423__auto____$1;
var vec__11574 = cljs.core.first.call(null,xs__4975__auto____$1);
var k = cljs.core.nth.call(null,vec__11574,(0),null);
var v = cljs.core.nth.call(null,vec__11574,(1),null);
var iterys__5625__auto__ = ((function (s__11564__$1,s__11562__$1,vec__11574,k,v,xs__4975__auto____$1,temp__4423__auto____$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__){
return (function datascript$core$rschema_$_iter__11561_$_iter__11563_$_iter__11565(s__11566){
return (new cljs.core.LazySeq(null,((function (s__11564__$1,s__11562__$1,vec__11574,k,v,xs__4975__auto____$1,temp__4423__auto____$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__){
return (function (){
var s__11566__$1 = s__11566;
while(true){
var temp__4423__auto____$2 = cljs.core.seq.call(null,s__11566__$1);
if(temp__4423__auto____$2){
var s__11566__$2 = temp__4423__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11566__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11566__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11568 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11567 = (0);
while(true){
if((i__11567 < size__5628__auto__)){
var prop = cljs.core._nth.call(null,c__5627__auto__,i__11567);
cljs.core.chunk_append.call(null,b__11568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__11575 = (i__11567 + (1));
i__11567 = G__11575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11568),datascript$core$rschema_$_iter__11561_$_iter__11563_$_iter__11565.call(null,cljs.core.chunk_rest.call(null,s__11566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11568),null);
}
} else {
var prop = cljs.core.first.call(null,s__11566__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$core$rschema_$_iter__11561_$_iter__11563_$_iter__11565.call(null,cljs.core.rest.call(null,s__11566__$2)));
}
} else {
return null;
}
break;
}
});})(s__11564__$1,s__11562__$1,vec__11574,k,v,xs__4975__auto____$1,temp__4423__auto____$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__))
,null,null));
});})(s__11564__$1,s__11562__$1,vec__11574,k,v,xs__4975__auto____$1,temp__4423__auto____$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__))
;
var fs__5626__auto__ = cljs.core.seq.call(null,iterys__5625__auto__.call(null,datascript.core.attr__GT_properties.call(null,k,v)));
if(fs__5626__auto__){
return cljs.core.concat.call(null,fs__5626__auto__,datascript$core$rschema_$_iter__11561_$_iter__11563.call(null,cljs.core.rest.call(null,s__11564__$1)));
} else {
var G__11576 = cljs.core.rest.call(null,s__11564__$1);
s__11564__$1 = G__11576;
continue;
}
} else {
return null;
}
break;
}
});})(s__11562__$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__))
,null,null));
});})(s__11562__$1,vec__11572,a,kv,xs__4975__auto__,temp__4423__auto__))
;
var fs__5626__auto__ = cljs.core.seq.call(null,iterys__5625__auto__.call(null,kv));
if(fs__5626__auto__){
return cljs.core.concat.call(null,fs__5626__auto__,datascript$core$rschema_$_iter__11561.call(null,cljs.core.rest.call(null,s__11562__$1)));
} else {
var G__11577 = cljs.core.rest.call(null,s__11562__$1);
s__11562__$1 = G__11577;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5629__auto__.call(null,schema);
})());
});
datascript.core.validate_schema_key = (function datascript$core$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap.fromArray([a,new cljs.core.PersistentArrayMap.fromArray([k,v], true, false)], true, false))),cljs.core.str(", expected one of "),cljs.core.str(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.core.validate_schema = (function datascript$core$validate_schema(schema){
var seq__11584_11590 = cljs.core.seq.call(null,schema);
var chunk__11585_11591 = null;
var count__11586_11592 = (0);
var i__11587_11593 = (0);
while(true){
if((i__11587_11593 < count__11586_11592)){
var vec__11588_11594 = cljs.core._nth.call(null,chunk__11585_11591,i__11587_11593);
var a_11595 = cljs.core.nth.call(null,vec__11588_11594,(0),null);
var kv_11596 = cljs.core.nth.call(null,vec__11588_11594,(1),null);
var comp_QMARK__11597 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_11596,false);
datascript.core.validate_schema_key.call(null,a_11595,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_11596),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4863__auto__ = comp_QMARK__11597;
if(cljs.core.truth_(and__4863__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_11596),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4863__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_11595),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_11595,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.core.validate_schema_key.call(null,a_11595,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_11596),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.core.validate_schema_key.call(null,a_11595,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_11596),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.core.validate_schema_key.call(null,a_11595,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_11596),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__11598 = seq__11584_11590;
var G__11599 = chunk__11585_11591;
var G__11600 = count__11586_11592;
var G__11601 = (i__11587_11593 + (1));
seq__11584_11590 = G__11598;
chunk__11585_11591 = G__11599;
count__11586_11592 = G__11600;
i__11587_11593 = G__11601;
continue;
} else {
var temp__4423__auto___11602 = cljs.core.seq.call(null,seq__11584_11590);
if(temp__4423__auto___11602){
var seq__11584_11603__$1 = temp__4423__auto___11602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11584_11603__$1)){
var c__5660__auto___11604 = cljs.core.chunk_first.call(null,seq__11584_11603__$1);
var G__11605 = cljs.core.chunk_rest.call(null,seq__11584_11603__$1);
var G__11606 = c__5660__auto___11604;
var G__11607 = cljs.core.count.call(null,c__5660__auto___11604);
var G__11608 = (0);
seq__11584_11590 = G__11605;
chunk__11585_11591 = G__11606;
count__11586_11592 = G__11607;
i__11587_11593 = G__11608;
continue;
} else {
var vec__11589_11609 = cljs.core.first.call(null,seq__11584_11603__$1);
var a_11610 = cljs.core.nth.call(null,vec__11589_11609,(0),null);
var kv_11611 = cljs.core.nth.call(null,vec__11589_11609,(1),null);
var comp_QMARK__11612 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_11611,false);
datascript.core.validate_schema_key.call(null,a_11610,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_11611),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__4863__auto__ = comp_QMARK__11612;
if(cljs.core.truth_(and__4863__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_11611),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__4863__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute specification for "),cljs.core.str(a_11610),cljs.core.str(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_11610,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.core.validate_schema_key.call(null,a_11610,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_11611),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.core.validate_schema_key.call(null,a_11610,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_11611),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.core.validate_schema_key.call(null,a_11610,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_11611),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__11613 = cljs.core.next.call(null,seq__11584_11603__$1);
var G__11614 = null;
var G__11615 = (0);
var G__11616 = (0);
seq__11584_11590 = G__11613;
chunk__11585_11591 = G__11614;
count__11586_11592 = G__11615;
i__11587_11593 = G__11616;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.core.empty_db = (function datascript$core$empty_db(){
var argseq__5915__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$variadic(argseq__5915__auto__);
});

datascript.core.empty_db.cljs$core$IFn$_invoke$arity$variadic = (function (p__11618){
var vec__11619 = p__11618;
var schema = cljs.core.nth.call(null,vec__11619,(0),null);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),datascript.core.validate_schema.call(null,schema),new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.core.tx0,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.core.rschema.call(null,schema)], null));
});

datascript.core.empty_db.cljs$lang$maxFixedArity = (0);

datascript.core.empty_db.cljs$lang$applyTo = (function (seq11617){
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11617));
});
datascript.core.init_db = (function datascript$core$init_db(){
var argseq__5915__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5915__auto__);
});

datascript.core.init_db.cljs$core$IFn$_invoke$arity$variadic = (function (datoms,p__11623){
var vec__11624 = p__11623;
var schema = cljs.core.nth.call(null,vec__11624,(0),null);
if(cljs.core.empty_QMARK_.call(null,datoms)){
return datascript.core.empty_db.call(null,schema);
} else {
var _ = datascript.core.validate_schema.call(null,schema);
var ds_arr = cljs.core.into_array.call(null,datoms);
var eavt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_eavt_quick),datascript.core.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_aevt_quick),datascript.core.cmp_datoms_aevt);
var avet = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.core.cmp_datoms_avet_quick),datascript.core.cmp_datoms_avet);
var max_eid = cljs.core.first.call(null,cljs.core._rseq.call(null,eavt)).e;
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (_,ds_arr,eavt,aevt,avet,max_eid,vec__11624,schema){
return (function (p1__11620_SHARP_){
return p1__11620_SHARP_.tx;
});})(_,ds_arr,eavt,aevt,avet,max_eid,vec__11624,schema))
),cljs.core.max,datascript.core.tx0,eavt);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.core.rschema.call(null,schema)], null));
}
});

datascript.core.init_db.cljs$lang$maxFixedArity = (1);

datascript.core.init_db.cljs$lang$applyTo = (function (seq11621){
var G__11622 = cljs.core.first.call(null,seq11621);
var seq11621__$1 = cljs.core.next.call(null,seq11621);
return datascript.core.init_db.cljs$core$IFn$_invoke$arity$variadic(G__11622,seq11621__$1);
});
datascript.core.equiv_db_index = (function datascript$core$equiv_db_index(x,y){
var and__4863__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));
if(and__4863__auto__){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__11625 = cljs.core.next.call(null,xs);
var G__11626 = cljs.core.next.call(null,ys);
xs = G__11625;
ys = G__11626;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__4863__auto__;
}
});
datascript.core.hash_db = (function datascript$core$hash_db(db){
var or__4875__auto__ = db.__hash;
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return db.__hash = cljs.core.hash_ordered_coll.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.core.equiv_db = (function datascript$core$equiv_db(db,other){
var and__4863__auto__ = ((other instanceof datascript.core.DB)) || ((other instanceof datascript.core.FilteredDB));
if(and__4863__auto__){
var and__4863__auto____$1 = cljs.core._EQ_.call(null,datascript.core._schema.call(null,db),datascript.core._schema.call(null,other));
if(and__4863__auto____$1){
return datascript.core.equiv_db_index.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.core._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
} else {
return and__4863__auto____$1;
}
} else {
return and__4863__auto__;
}
});
datascript.core.pr_db = (function datascript$core$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.core._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.core.db_from_reader = (function datascript$core$db_from_reader(p__11627){
var map__11631 = p__11627;
var map__11631__$1 = ((cljs.core.seq_QMARK_.call(null,map__11631))?cljs.core.apply.call(null,cljs.core.hash_map,map__11631):map__11631);
var schema = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__11631__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.core.init_db.call(null,cljs.core.map.call(null,((function (map__11631,map__11631__$1,schema,datoms){
return (function (p__11632){
var vec__11633 = p__11632;
var e = cljs.core.nth.call(null,vec__11633,(0),null);
var a = cljs.core.nth.call(null,vec__11633,(1),null);
var v = cljs.core.nth.call(null,vec__11633,(2),null);
var tx = cljs.core.nth.call(null,vec__11633,(3),null);
return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__11631,map__11631__$1,schema,datoms))
,datoms),schema);
});


datascript.core.resolve_datom = (function datascript$core$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
datascript.core.validate_attr.call(null,a,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,t),v),a),e),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null)));
} else {
}

return (new datascript.core.Datom(datascript.core.entid_some.call(null,db,e),a,(cljs.core.truth_((function (){var and__4863__auto__ = cljs.core.some_QMARK_.call(null,v);
if(and__4863__auto__){
return datascript.core.ref_QMARK_.call(null,db,a);
} else {
return and__4863__auto__;
}
})())?datascript.core.entid_strict.call(null,db,v):v),datascript.core.entid_some.call(null,db,t),null));
});
datascript.core.components__GT_pattern = (function datascript$core$components__GT_pattern(db,index,p__11634){
var vec__11637 = p__11634;
var c0 = cljs.core.nth.call(null,vec__11637,(0),null);
var c1 = cljs.core.nth.call(null,vec__11637,(1),null);
var c2 = cljs.core.nth.call(null,vec__11637,(2),null);
var c3 = cljs.core.nth.call(null,vec__11637,(3),null);
var G__11638 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__11638) {
case "eavt":
return datascript.core.resolve_datom.call(null,db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.core.resolve_datom.call(null,db,c1,c0,c2,c3);

break;
case "avet":
return datascript.core.resolve_datom.call(null,db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} tx_meta
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5470__auto__,k__5471__auto__){
var self__ = this;
var this__5470__auto____$1 = this;
return cljs.core._lookup.call(null,this__5470__auto____$1,k__5471__auto__,null);
});

datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5472__auto__,k11641,else__5473__auto__){
var self__ = this;
var this__5472__auto____$1 = this;
var G__11643 = (((k11641 instanceof cljs.core.Keyword))?k11641.fqn:null);
switch (G__11643) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11641,else__5473__auto__);

}
});

datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = ((function (this__5484__auto____$1){
return (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});})(this__5484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5485__auto__,pr_pair__5487__auto__,"#datascript.core.TxReport{",", ","}",opts__5486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5468__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return self__.__meta;
});

datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5474__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
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

datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5466__auto__,other__5467__auto__){
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

datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5480__auto__)),null));
}
});

datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__11640){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__11644 = cljs.core.keyword_identical_QMARK_;
var expr__11645 = k__5478__auto__;
if(cljs.core.truth_(pred__11644.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__11645))){
return (new datascript.core.TxReport(G__11640,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11644.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__11645))){
return (new datascript.core.TxReport(self__.db_before,G__11640,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11644.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__11645))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__11640,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11644.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__11645))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__11640,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11644.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__11645))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__11640,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5478__auto__,G__11640),null));
}
}
}
}
}
});

datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5469__auto__,G__11640){
var self__ = this;
var this__5469__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__11640,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5475__auto__,entry__5476__auto__){
var self__ = this;
var this__5475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5476__auto__)){
return cljs.core._assoc.call(null,this__5475__auto____$1,cljs.core._nth.call(null,entry__5476__auto__,(0)),cljs.core._nth.call(null,entry__5476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5475__auto____$1,entry__5476__auto__);
}
});

datascript.core.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datascript.core.TxReport.cljs$lang$type = true;

datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__5504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});

datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"datascript.core/TxReport");
});

datascript.core.__GT_TxReport = (function datascript$core$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.core.map__GT_TxReport = (function datascript$core$map__GT_TxReport(G__11642){
return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__11642),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__11642),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__11642),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__11642),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__11642),null,cljs.core.dissoc.call(null,G__11642,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datascript.core.is_attr_QMARK_ = (function datascript$core$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datascript.core._attrs_by.call(null,db,property),attr);
});
datascript.core.multival_QMARK_ = (function datascript$core$multival_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function datascript$core$ref_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.component_QMARK_ = (function datascript$core$component_QMARK_(db,attr){
return datascript.core.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.core.entid = (function datascript$core$entid(db,eid){
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref should contain 2 elements: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if(!(datascript.core.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,eid),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Lookup ref attribute should be marked as :db.unique/identity: "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected number or lookup ref for entity id, got "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
});
datascript.core.entid_strict = (function datascript$core$entid_strict(db,eid){
var or__4875__auto__ = datascript.core.entid.call(null,db,eid);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Nothing found for entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.core.entid_some = (function datascript$core$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.core.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datascript.core.validate_datom = (function datascript$core$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__4863__auto__ = datom.added;
if(cljs.core.truth_(and__4863__auto__)){
return datascript.core.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__4863__auto__;
}
})())){
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var found = temp__4423__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot add "),cljs.core.str(cljs.core.pr_str.call(null,datom)),cljs.core.str(" because of unique constraint: "),cljs.core.str(cljs.core.pr_str.call(null,found))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.core.validate_eid = (function datascript$core$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity id "),cljs.core.str(cljs.core.pr_str.call(null,eid)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.core.validate_attr = (function datascript$core$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity attribute "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(" at "),cljs.core.str(cljs.core.pr_str.call(null,at)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.core.validate_val = (function datascript$core$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot store nil as a value at "),cljs.core.str(cljs.core.pr_str.call(null,at))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.core.current_tx = (function datascript$core$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function datascript$core$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function datascript$core$advance_max_eid(db,eid){
var G__11649 = db;
var G__11649__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.call(null,G__11649,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__11649);
return G__11649__$1;
});
datascript.core.allocate_eid = (function datascript$core$allocate_eid(){
var G__11651 = arguments.length;
switch (G__11651) {
case 2:
return datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});

datascript.core.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});

datascript.core.allocate_eid.cljs$lang$maxFixedArity = 3;
datascript.core.tx_id_QMARK_ = (function datascript$core$tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.core.with_datom = (function datascript$core$with_datom(db,datom){
datascript.core.validate_datom.call(null,db,datom);

if(cljs.core.truth_(datom.added)){
return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_avet_quick),datom.e);
} else {
var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_avet_quick);
}
});
datascript.core.transact_report = (function datascript$core$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref_QMARK_ = (function datascript$core$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.core.reverse_ref = (function datascript$core$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.core.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),[cljs.core.str("_"),cljs.core.str(cljs.core.name.call(null,attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__11654 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__11654,(0),null);
var ns = cljs.core.nth.call(null,vec__11654,(1),null);
var name = cljs.core.nth.call(null,vec__11654,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str(ns),cljs.core.str("/_"),cljs.core.str(name)].join('');
} else {
return [cljs.core.str("_"),cljs.core.str(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute type: "),cljs.core.str(cljs.core.pr_str.call(null,attr)),cljs.core.str(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.core.resolve_upsert = (function datascript$core$resolve_upsert(db,entity){
var temp__4421__auto__ = cljs.core.not_empty.call(null,datascript.core._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if(cljs.core.truth_(temp__4421__auto__)){
var idents = temp__4421__auto__;
return cljs.core.reduce_kv.call(null,((function (idents,temp__4421__auto__){
return (function (ent,a,v){
var temp__4421__auto____$1 = cljs.core.first.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
if(cljs.core.truth_(temp__4421__auto____$1)){
var datom = temp__4421__auto____$1;
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(ent);
var new_eid = datom.e;
if((old_eid == null)){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,ent,a),new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
} else {
if(cljs.core._EQ_.call(null,old_eid,new_eid)){
return cljs.core.dissoc.call(null,ent,a);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot resolve upsert for "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),old_eid,a,v], true, false))),cljs.core.str(" conflicts with existing "),cljs.core.str(cljs.core.pr_str.call(null,datom))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));

}
}
} else {
return ent;
}
});})(idents,temp__4421__auto__))
,entity,cljs.core.select_keys.call(null,entity,idents));
} else {
return entity;
}
});
datascript.core.maybe_wrap_multival = (function datascript$core$maybe_wrap_multival(db,a,vs){
if(!((datascript.core.reverse_ref_QMARK_.call(null,a)) || (datascript.core.multival_QMARK_.call(null,db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not.call(null,(function (){var or__4875__auto__ = datascript.core.array_QMARK_.call(null,vs);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return (cljs.core.coll_QMARK_.call(null,vs)) && (!(cljs.core.map_QMARK_.call(null,vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datascript.core.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.core.explode = (function datascript$core$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__5629__auto__ = ((function (eid){
return (function datascript$core$explode_$_iter__11663(s__11664){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__11664__$1 = s__11664;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__11664__$1);
if(temp__4423__auto__){
var xs__4975__auto__ = temp__4423__auto__;
var vec__11670 = cljs.core.first.call(null,xs__4975__auto__);
var a = cljs.core.nth.call(null,vec__11670,(0),null);
var vs = cljs.core.nth.call(null,vec__11670,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.core.validate_attr.call(null,a,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false));
var reverse_QMARK_ = datascript.core.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datascript.core.reverse_ref.call(null,a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.core.ref_QMARK_.call(null,db,straight_a))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Bad attribute "),cljs.core.str(cljs.core.pr_str.call(null,a)),cljs.core.str(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs], true, false)], null))})():null);
var iterys__5625__auto__ = ((function (s__11664__$1,_,reverse_QMARK_,straight_a,___$1,vec__11670,a,vs,xs__4975__auto__,temp__4423__auto__,eid){
return (function datascript$core$explode_$_iter__11663_$_iter__11665(s__11666){
return (new cljs.core.LazySeq(null,((function (s__11664__$1,_,reverse_QMARK_,straight_a,___$1,vec__11670,a,vs,xs__4975__auto__,temp__4423__auto__,eid){
return (function (){
var s__11666__$1 = s__11666;
while(true){
var temp__4423__auto____$1 = cljs.core.seq.call(null,s__11666__$1);
if(temp__4423__auto____$1){
var s__11666__$2 = temp__4423__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11666__$2)){
var c__5627__auto__ = cljs.core.chunk_first.call(null,s__11666__$2);
var size__5628__auto__ = cljs.core.count.call(null,c__5627__auto__);
var b__11668 = cljs.core.chunk_buffer.call(null,size__5628__auto__);
if((function (){var i__11667 = (0);
while(true){
if((i__11667 < size__5628__auto__)){
var v = cljs.core._nth.call(null,c__5627__auto__,i__11667);
cljs.core.chunk_append.call(null,b__11668,(((datascript.core.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.core.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__11671 = (i__11667 + (1));
i__11667 = G__11671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11668),datascript$core$explode_$_iter__11663_$_iter__11665.call(null,cljs.core.chunk_rest.call(null,s__11666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11668),null);
}
} else {
var v = cljs.core.first.call(null,s__11666__$2);
return cljs.core.cons.call(null,(((datascript.core.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.core.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$core$explode_$_iter__11663_$_iter__11665.call(null,cljs.core.rest.call(null,s__11666__$2)));
}
} else {
return null;
}
break;
}
});})(s__11664__$1,_,reverse_QMARK_,straight_a,___$1,vec__11670,a,vs,xs__4975__auto__,temp__4423__auto__,eid))
,null,null));
});})(s__11664__$1,_,reverse_QMARK_,straight_a,___$1,vec__11670,a,vs,xs__4975__auto__,temp__4423__auto__,eid))
;
var fs__5626__auto__ = cljs.core.seq.call(null,iterys__5625__auto__.call(null,datascript.core.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__5626__auto__){
return cljs.core.concat.call(null,fs__5626__auto__,datascript$core$explode_$_iter__11663.call(null,cljs.core.rest.call(null,s__11664__$1)));
} else {
var G__11672 = cljs.core.rest.call(null,s__11664__$1);
s__11664__$1 = G__11672;
continue;
}
} else {
var G__11673 = cljs.core.rest.call(null,s__11664__$1);
s__11664__$1 = G__11673;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__5629__auto__.call(null,entity);
});
datascript.core.transact_add = (function datascript$core$transact_add(report,p__11674){
var vec__11676 = p__11674;
var _ = cljs.core.nth.call(null,vec__11676,(0),null);
var e = cljs.core.nth.call(null,vec__11676,(1),null);
var a = cljs.core.nth.call(null,vec__11676,(2),null);
var v = cljs.core.nth.call(null,vec__11676,(3),null);
var ent = vec__11676;
datascript.core.validate_attr.call(null,a,ent);

datascript.core.validate_val.call(null,v,ent);

var tx = datascript.core.current_tx.call(null,report);
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var v__$1 = ((datascript.core.ref_QMARK_.call(null,db,a))?datascript.core.entid_strict.call(null,db,v):v);
var datom = (new datascript.core.Datom(e__$1,a,v__$1,tx,true));
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.core.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__4421__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__4421__auto__)){
var old_datom = temp__4421__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e__$1,a,old_datom.v,tx,false))),datom);
}
} else {
return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function datascript$core$transact_retract_datom(report,d){
var tx = datascript.core.current_tx.call(null,report);
return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.retract_components = (function datascript$core$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__11677_SHARP_){
return datascript.core.component_QMARK_.call(null,db,p1__11677_SHARP_.a);
})),cljs.core.map.call(null,(function (p1__11678_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),p1__11678_SHARP_.v],null));
}))),datoms);
});
datascript.core.transact_tx_data = (function datascript$core$transact_tx_data(report,es){
while(true){
if(((es == null)) || (cljs.core.sequential_QMARK_.call(null,es))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad transaction data "),cljs.core.str(cljs.core.pr_str.call(null,es)),cljs.core.str(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),es], null));
}

var vec__11684 = es;
var entity = cljs.core.nth.call(null,vec__11684,(0),null);
var entities = cljs.core.nthnext.call(null,vec__11684,(1));
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var known_eid = datascript.core.entid_some.call(null,db,(cljs.core.truth_(datascript.core.neg_number_QMARK_.call(null,old_eid))?cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),old_eid], null)):((datascript.core.tx_id_QMARK_.call(null,old_eid))?datascript.core.current_tx.call(null,report):old_eid
)));
var upserted = datascript.core.resolve_upsert.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),known_eid));
var new_eid = (function (){var or__4875__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(upserted);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return datascript.core.next_eid.call(null,db);
}
})();
var new_entity = cljs.core.assoc.call(null,upserted,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var new_report = (((old_eid == null))?datascript.core.allocate_eid.call(null,report,new_eid):(cljs.core.truth_(datascript.core.neg_number_QMARK_.call(null,old_eid))?datascript.core.allocate_eid.call(null,report,old_eid,new_eid):report
));
var G__11688 = new_report;
var G__11689 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,new_entity),entities);
report = G__11688;
es = G__11689;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__11685 = entity;
var op = cljs.core.nth.call(null,vec__11685,(0),null);
var e = cljs.core.nth.call(null,vec__11685,(1),null);
var a = cljs.core.nth.call(null,vec__11685,(2),null);
var v = cljs.core.nth.call(null,vec__11685,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__11686 = entity;
var _ = cljs.core.nth.call(null,vec__11686,(0),null);
var f = cljs.core.nth.call(null,vec__11686,(1),null);
var args = cljs.core.nthnext.call(null,vec__11686,(2));
var G__11690 = report;
var G__11691 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__11690;
es = G__11691;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__11687 = entity;
var _ = cljs.core.nth.call(null,vec__11687,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__11687,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__11687,(2),null);
var ov = cljs.core.nth.call(null,vec__11687,(3),null);
var nv = cljs.core.nth.call(null,vec__11687,(4),null);
var e__$2 = datascript.core.entid_strict.call(null,db,e__$1);
var ___$1 = datascript.core.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datascript.core.ref_QMARK_.call(null,db,a__$1))?datascript.core.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datascript.core.ref_QMARK_.call(null,db,a__$1))?datascript.core.entid_strict.call(null,db,nv):nv);
var ___$2 = datascript.core.validate_val.call(null,ov__$1,entity);
var ___$3 = datascript.core.validate_val.call(null,nv__$1,entity);
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.core.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__11687,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,___$3,datoms,vec__11685,op,e,a,v,vec__11684,entity,entities,db){
return (function (p1__11679_SHARP_){
return cljs.core._EQ_.call(null,p1__11679_SHARP_.v,ov__$1);
});})(report,es,vec__11687,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,___$3,datoms,vec__11685,op,e,a,v,vec__11684,entity,entities,db))
,datoms))){
var G__11692 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__11693 = entities;
report = G__11692;
es = G__11693;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = cljs.core.first.call(null,datoms).v;
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__11694 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__11695 = entities;
report = G__11694;
es = G__11695;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(cljs.core.pr_str.call(null,e__$2)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,a__$1)),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str("], expected "),cljs.core.str(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.core.tx_id_QMARK_.call(null,e)){
var G__11696 = report;
var G__11697 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx.call(null,report),a,v], null)], null),entities);
report = G__11696;
es = G__11697;
continue;
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && (datascript.core.tx_id_QMARK_.call(null,v))){
var G__11698 = report;
var G__11699 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx.call(null,report)], null)], null),entities);
report = G__11698;
es = G__11699;
continue;
} else {
if(cljs.core.truth_(datascript.core.neg_number_QMARK_.call(null,e))){
var temp__4421__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_(temp__4421__auto__)){
var eid = temp__4421__auto__;
var G__11700 = report;
var G__11701 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__11700;
es = G__11701;
continue;
} else {
var G__11702 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__11703 = es;
report = G__11702;
es = G__11703;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4863__auto__ = datascript.core.ref_QMARK_.call(null,db,a);
if(and__4863__auto__){
return datascript.core.neg_number_QMARK_.call(null,v);
} else {
return and__4863__auto__;
}
})())){
var temp__4421__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__4421__auto__)){
var vid = temp__4421__auto__;
var G__11704 = report;
var G__11705 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__11704;
es = G__11705;
continue;
} else {
var G__11706 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__11707 = es;
report = G__11706;
es = G__11707;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__11708 = datascript.core.transact_add.call(null,report,entity);
var G__11709 = entities;
report = G__11708;
es = G__11709;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var v__$1 = ((datascript.core.ref_QMARK_.call(null,db,a))?datascript.core.entid_strict.call(null,db,v):v);
datascript.core.validate_attr.call(null,a,entity);

datascript.core.validate_val.call(null,v__$1,entity);

var temp__4421__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__4421__auto__)){
var old_datom = temp__4421__auto__;
var G__11710 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__11711 = entities;
report = G__11710;
es = G__11711;
continue;
} else {
var G__11712 = report;
var G__11713 = entities;
report = G__11712;
es = G__11713;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
datascript.core.validate_attr.call(null,a,entity);

var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__11714 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__11715 = cljs.core.concat.call(null,datascript.core.retract_components.call(null,db,datoms),entities);
report = G__11714;
es = G__11715;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var e__$1 = datascript.core.entid_strict.call(null,db,e);
var e_datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,es,e__$1,e_datoms,vec__11685,op,e,a,v,vec__11684,entity,entities,db){
return (function (a__$1){
return datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e__$1,e_datoms,vec__11685,op,e,a,v,vec__11684,entity,entities,db))
,datascript.core._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
var G__11716 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__11717 = cljs.core.concat.call(null,datascript.core.retract_components.call(null,db,e_datoms),entities);
report = G__11716;
es = G__11717;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unknown operation at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Bad entity type at "),cljs.core.str(cljs.core.pr_str.call(null,entity)),cljs.core.str(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
break;
}
});

//# sourceMappingURL=core.js.map
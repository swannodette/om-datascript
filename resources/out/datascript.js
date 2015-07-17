// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.core');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function datascript$entity_db(entity){
return entity.db;
});
datascript.datom = datascript.core.datom;
datascript.pull = datascript.pull_api.pull;
datascript.pull_many = datascript.pull_api.pull_many;
datascript.touch = datascript.impl.entity.touch;
datascript.empty_db = datascript.core.empty_db;
datascript.init_db = datascript.core.init_db;
datascript.datom_QMARK_ = datascript.core.datom_QMARK_;
datascript.db_QMARK_ = datascript.core.db_QMARK_;
datascript.tx0 = datascript.core.tx0;
datascript.is_filtered = (function datascript$is_filtered(x){
return (x instanceof datascript.core.FilteredDB);
});
datascript.filter = (function datascript$filter(db,pred){
if(cljs.core.truth_(datascript.is_filtered.call(null,db))){
var u = db.unfiltered_db;
return (new datascript.core.FilteredDB(u,((function (u){
return (function (p1__11046_SHARP_){
var and__4863__auto__ = pred.call(null,u,p1__11046_SHARP_);
if(cljs.core.truth_(and__4863__auto__)){
return db.pred.call(null,p1__11046_SHARP_);
} else {
return and__4863__auto__;
}
});})(u))
,null,null,null));
} else {
return (new datascript.core.FilteredDB(db,(function (p1__11047_SHARP_){
return pred.call(null,db,p1__11047_SHARP_);
}),null,null,null));
}
});
datascript.with$ = (function datascript$with(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.with$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.with$.cljs$core$IFn$_invoke$arity$variadic = (function (db,tx_data,p__11051){
var vec__11052 = p__11051;
var tx_meta = cljs.core.nth.call(null,vec__11052,(0),null);
if(cljs.core.truth_(datascript.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.with$.cljs$lang$maxFixedArity = (2);

datascript.with$.cljs$lang$applyTo = (function (seq11048){
var G__11049 = cljs.core.first.call(null,seq11048);
var seq11048__$1 = cljs.core.next.call(null,seq11048);
var G__11050 = cljs.core.first.call(null,seq11048__$1);
var seq11048__$2 = cljs.core.next.call(null,seq11048__$1);
return datascript.with$.cljs$core$IFn$_invoke$arity$variadic(G__11049,G__11050,seq11048__$2);
});
datascript.db_with = (function datascript$db_with(db,tx_data){
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
datascript.datoms = (function datascript$datoms(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,cs){
return datascript.core._datoms.call(null,db,index,cs);
});

datascript.datoms.cljs$lang$maxFixedArity = (2);

datascript.datoms.cljs$lang$applyTo = (function (seq11053){
var G__11054 = cljs.core.first.call(null,seq11053);
var seq11053__$1 = cljs.core.next.call(null,seq11053);
var G__11055 = cljs.core.first.call(null,seq11053__$1);
var seq11053__$2 = cljs.core.next.call(null,seq11053__$1);
return datascript.datoms.cljs$core$IFn$_invoke$arity$variadic(G__11054,G__11055,seq11053__$2);
});
datascript.seek_datoms = (function datascript$seek_datoms(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.seek_datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,index,cs){
return datascript.core._seek_datoms.call(null,db,index,cs);
});

datascript.seek_datoms.cljs$lang$maxFixedArity = (2);

datascript.seek_datoms.cljs$lang$applyTo = (function (seq11056){
var G__11057 = cljs.core.first.call(null,seq11056);
var seq11056__$1 = cljs.core.next.call(null,seq11056);
var G__11058 = cljs.core.first.call(null,seq11056__$1);
var seq11056__$2 = cljs.core.next.call(null,seq11056__$1);
return datascript.seek_datoms.cljs$core$IFn$_invoke$arity$variadic(G__11057,G__11058,seq11056__$2);
});
datascript.index_range = datascript.core._index_range;
datascript.entid = datascript.core.entid;
datascript.create_conn = (function datascript$create_conn(){
var argseq__5915__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(argseq__5915__auto__);
});

datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic = (function (p__11060){
var vec__11061 = p__11060;
var schema = cljs.core.nth.call(null,vec__11061,(0),null);
return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});

datascript.create_conn.cljs$lang$maxFixedArity = (0);

datascript.create_conn.cljs$lang$applyTo = (function (seq11059){
return datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11059));
});
datascript._transact_BANG_ = (function datascript$_transact_BANG_(conn,tx_data,tx_meta){
var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.transact_BANG_ = (function datascript$transact_BANG_(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conn,tx_data,p__11065){
var vec__11066 = p__11065;
var tx_meta = cljs.core.nth.call(null,vec__11066,(0),null);
var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__11067_11073 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__11068_11074 = null;
var count__11069_11075 = (0);
var i__11070_11076 = (0);
while(true){
if((i__11070_11076 < count__11069_11075)){
var vec__11071_11077 = cljs.core._nth.call(null,chunk__11068_11074,i__11070_11076);
var __11078 = cljs.core.nth.call(null,vec__11071_11077,(0),null);
var callback_11079 = cljs.core.nth.call(null,vec__11071_11077,(1),null);
callback_11079.call(null,report);

var G__11080 = seq__11067_11073;
var G__11081 = chunk__11068_11074;
var G__11082 = count__11069_11075;
var G__11083 = (i__11070_11076 + (1));
seq__11067_11073 = G__11080;
chunk__11068_11074 = G__11081;
count__11069_11075 = G__11082;
i__11070_11076 = G__11083;
continue;
} else {
var temp__4423__auto___11084 = cljs.core.seq.call(null,seq__11067_11073);
if(temp__4423__auto___11084){
var seq__11067_11085__$1 = temp__4423__auto___11084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11067_11085__$1)){
var c__5660__auto___11086 = cljs.core.chunk_first.call(null,seq__11067_11085__$1);
var G__11087 = cljs.core.chunk_rest.call(null,seq__11067_11085__$1);
var G__11088 = c__5660__auto___11086;
var G__11089 = cljs.core.count.call(null,c__5660__auto___11086);
var G__11090 = (0);
seq__11067_11073 = G__11087;
chunk__11068_11074 = G__11088;
count__11069_11075 = G__11089;
i__11070_11076 = G__11090;
continue;
} else {
var vec__11072_11091 = cljs.core.first.call(null,seq__11067_11085__$1);
var __11092 = cljs.core.nth.call(null,vec__11072_11091,(0),null);
var callback_11093 = cljs.core.nth.call(null,vec__11072_11091,(1),null);
callback_11093.call(null,report);

var G__11094 = cljs.core.next.call(null,seq__11067_11085__$1);
var G__11095 = null;
var G__11096 = (0);
var G__11097 = (0);
seq__11067_11073 = G__11094;
chunk__11068_11074 = G__11095;
count__11069_11075 = G__11096;
i__11070_11076 = G__11097;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.transact_BANG_.cljs$lang$maxFixedArity = (2);

datascript.transact_BANG_.cljs$lang$applyTo = (function (seq11062){
var G__11063 = cljs.core.first.call(null,seq11062);
var seq11062__$1 = cljs.core.next.call(null,seq11062);
var G__11064 = cljs.core.first.call(null,seq11062__$1);
var seq11062__$2 = cljs.core.next.call(null,seq11062__$1);
return datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11063,G__11064,seq11062__$2);
});
datascript.listen_BANG_ = (function datascript$listen_BANG_(){
var G__11099 = arguments.length;
switch (G__11099) {
case 2:
return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.unlisten_BANG_ = (function datascript$unlisten_BANG_(conn,key){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.core.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.core.db_from_reader], null);
var seq__11101_11107 = cljs.core.seq.call(null,datascript.data_readers);
var chunk__11102_11108 = null;
var count__11103_11109 = (0);
var i__11104_11110 = (0);
while(true){
if((i__11104_11110 < count__11103_11109)){
var vec__11105_11111 = cljs.core._nth.call(null,chunk__11102_11108,i__11104_11110);
var tag_11112 = cljs.core.nth.call(null,vec__11105_11111,(0),null);
var cb_11113 = cljs.core.nth.call(null,vec__11105_11111,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_11112,cb_11113);

var G__11114 = seq__11101_11107;
var G__11115 = chunk__11102_11108;
var G__11116 = count__11103_11109;
var G__11117 = (i__11104_11110 + (1));
seq__11101_11107 = G__11114;
chunk__11102_11108 = G__11115;
count__11103_11109 = G__11116;
i__11104_11110 = G__11117;
continue;
} else {
var temp__4423__auto___11118 = cljs.core.seq.call(null,seq__11101_11107);
if(temp__4423__auto___11118){
var seq__11101_11119__$1 = temp__4423__auto___11118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11101_11119__$1)){
var c__5660__auto___11120 = cljs.core.chunk_first.call(null,seq__11101_11119__$1);
var G__11121 = cljs.core.chunk_rest.call(null,seq__11101_11119__$1);
var G__11122 = c__5660__auto___11120;
var G__11123 = cljs.core.count.call(null,c__5660__auto___11120);
var G__11124 = (0);
seq__11101_11107 = G__11121;
chunk__11102_11108 = G__11122;
count__11103_11109 = G__11123;
i__11104_11110 = G__11124;
continue;
} else {
var vec__11106_11125 = cljs.core.first.call(null,seq__11101_11119__$1);
var tag_11126 = cljs.core.nth.call(null,vec__11106_11125,(0),null);
var cb_11127 = cljs.core.nth.call(null,vec__11106_11125,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_11126,cb_11127);

var G__11128 = cljs.core.next.call(null,seq__11101_11119__$1);
var G__11129 = null;
var G__11130 = (0);
var G__11131 = (0);
seq__11101_11107 = G__11128;
chunk__11102_11108 = G__11129;
count__11103_11109 = G__11130;
i__11104_11110 = G__11131;
continue;
}
} else {
}
}
break;
}
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function datascript$tempid(){
var G__11133 = arguments.length;
switch (G__11133) {
case 1:
return datascript.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});

datascript.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.tempid.cljs$lang$maxFixedArity = 2;
datascript.resolve_tempid = (function datascript$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
datascript.transact = (function datascript$transact(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.transact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.transact.cljs$core$IFn$_invoke$arity$variadic = (function (conn,tx_data,p__11138){
var vec__11139 = p__11138;
var tx_meta = cljs.core.nth.call(null,vec__11139,(0),null);
var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.t11140 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t11140 = (function (conn,tx_data,p__11138,vec__11139,tx_meta,res,meta11141){
this.conn = conn;
this.tx_data = tx_data;
this.p__11138 = p__11138;
this.vec__11139 = vec__11139;
this.tx_meta = tx_meta;
this.res = res;
this.meta11141 = meta11141;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.t11140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__11139,tx_meta){
return (function (_11142,meta11141__$1){
var self__ = this;
var _11142__$1 = this;
return (new datascript.t11140(self__.conn,self__.tx_data,self__.p__11138,self__.vec__11139,self__.tx_meta,self__.res,meta11141__$1));
});})(res,vec__11139,tx_meta))
;

datascript.t11140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__11139,tx_meta){
return (function (_11142){
var self__ = this;
var _11142__$1 = this;
return self__.meta11141;
});})(res,vec__11139,tx_meta))
;

datascript.t11140.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__11139,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res,vec__11139,tx_meta))
;

datascript.t11140.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__11139,tx_meta){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res,vec__11139,tx_meta))
;

datascript.t11140.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__11139,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res,vec__11139,tx_meta))
;

datascript.t11140.getBasis = ((function (res,vec__11139,tx_meta){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"p__11138","p__11138",795801491,null),new cljs.core.Symbol(null,"vec__11139","vec__11139",667963764,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta11141","meta11141",1539402718,null)], null);
});})(res,vec__11139,tx_meta))
;

datascript.t11140.cljs$lang$type = true;

datascript.t11140.cljs$lang$ctorStr = "datascript/t11140";

datascript.t11140.cljs$lang$ctorPrWriter = ((function (res,vec__11139,tx_meta){
return (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript/t11140");
});})(res,vec__11139,tx_meta))
;

datascript.__GT_t11140 = ((function (res,vec__11139,tx_meta){
return (function datascript$__GT_t11140(conn__$1,tx_data__$1,p__11138__$1,vec__11139__$1,tx_meta__$1,res__$1,meta11141){
return (new datascript.t11140(conn__$1,tx_data__$1,p__11138__$1,vec__11139__$1,tx_meta__$1,res__$1,meta11141));
});})(res,vec__11139,tx_meta))
;

}

return (new datascript.t11140(conn,tx_data,p__11138,vec__11139,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.transact.cljs$lang$maxFixedArity = (2);

datascript.transact.cljs$lang$applyTo = (function (seq11135){
var G__11136 = cljs.core.first.call(null,seq11135);
var seq11135__$1 = cljs.core.next.call(null,seq11135);
var G__11137 = cljs.core.first.call(null,seq11135__$1);
var seq11135__$2 = cljs.core.next.call(null,seq11135__$1);
return datascript.transact.cljs$core$IFn$_invoke$arity$variadic(G__11136,G__11137,seq11135__$2);
});
datascript.future_call = (function datascript$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.t11146 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t11146 = (function (future_call,f,res,realized,meta11147){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta11147 = meta11147;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.t11146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_11148,meta11147__$1){
var self__ = this;
var _11148__$1 = this;
return (new datascript.t11146(self__.future_call,self__.f,self__.res,self__.realized,meta11147__$1));
});})(res,realized))
;

datascript.t11146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_11148){
var self__ = this;
var _11148__$1 = this;
return self__.meta11147;
});})(res,realized))
;

datascript.t11146.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.t11146.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.t11146.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.t11146.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta11147","meta11147",-718621259,null)], null);
});})(res,realized))
;

datascript.t11146.cljs$lang$type = true;

datascript.t11146.cljs$lang$ctorStr = "datascript/t11146";

datascript.t11146.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript/t11146");
});})(res,realized))
;

datascript.__GT_t11146 = ((function (res,realized){
return (function datascript$future_call_$___GT_t11146(future_call__$1,f__$1,res__$1,realized__$1,meta11147){
return (new datascript.t11146(future_call__$1,f__$1,res__$1,realized__$1,meta11147));
});})(res,realized))
;

}

return (new datascript.t11146(datascript$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.transact_async = (function datascript$transact_async(){
var argseq__5915__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return datascript.transact_async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5915__auto__);
});

datascript.transact_async.cljs$core$IFn$_invoke$arity$variadic = (function (conn,tx_data,p__11152){
var vec__11153 = p__11152;
var tx_meta = cljs.core.nth.call(null,vec__11153,(0),null);
return datascript.future_call.call(null,((function (vec__11153,tx_meta){
return (function (){
return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
});})(vec__11153,tx_meta))
);
});

datascript.transact_async.cljs$lang$maxFixedArity = (2);

datascript.transact_async.cljs$lang$applyTo = (function (seq11149){
var G__11150 = cljs.core.first.call(null,seq11149);
var seq11149__$1 = cljs.core.next.call(null,seq11149);
var G__11151 = cljs.core.first.call(null,seq11149__$1);
var seq11149__$2 = cljs.core.next.call(null,seq11149__$1);
return datascript.transact_async.cljs$core$IFn$_invoke$arity$variadic(G__11150,G__11151,seq11149__$2);
});
datascript.rand_bits = (function datascript$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.to_hex_string = (function datascript$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.squuid = (function datascript$squuid(){
return (new cljs.core.UUID([cljs.core.str(datascript.to_hex_string.call(null,Math.round(((new Date()).getTime() / (1000))),(8))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.to_hex_string.call(null,datascript.rand_bits.call(null,(16)),(4)))].join('')));
});
datascript.squuid_time_millis = (function datascript$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(uuid),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.js.map
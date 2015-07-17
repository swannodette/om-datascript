// Compiled by ClojureScript 0.0-3299 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17269_17281 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17270_17282 = null;
var count__17271_17283 = (0);
var i__17272_17284 = (0);
while(true){
if((i__17272_17284 < count__17271_17283)){
var f_17285 = cljs.core._nth.call(null,chunk__17270_17282,i__17272_17284);
cljs.core.println.call(null,"  ",f_17285);

var G__17286 = seq__17269_17281;
var G__17287 = chunk__17270_17282;
var G__17288 = count__17271_17283;
var G__17289 = (i__17272_17284 + (1));
seq__17269_17281 = G__17286;
chunk__17270_17282 = G__17287;
count__17271_17283 = G__17288;
i__17272_17284 = G__17289;
continue;
} else {
var temp__4423__auto___17290 = cljs.core.seq.call(null,seq__17269_17281);
if(temp__4423__auto___17290){
var seq__17269_17291__$1 = temp__4423__auto___17290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17269_17291__$1)){
var c__5660__auto___17292 = cljs.core.chunk_first.call(null,seq__17269_17291__$1);
var G__17293 = cljs.core.chunk_rest.call(null,seq__17269_17291__$1);
var G__17294 = c__5660__auto___17292;
var G__17295 = cljs.core.count.call(null,c__5660__auto___17292);
var G__17296 = (0);
seq__17269_17281 = G__17293;
chunk__17270_17282 = G__17294;
count__17271_17283 = G__17295;
i__17272_17284 = G__17296;
continue;
} else {
var f_17297 = cljs.core.first.call(null,seq__17269_17291__$1);
cljs.core.println.call(null,"  ",f_17297);

var G__17298 = cljs.core.next.call(null,seq__17269_17291__$1);
var G__17299 = null;
var G__17300 = (0);
var G__17301 = (0);
seq__17269_17281 = G__17298;
chunk__17270_17282 = G__17299;
count__17271_17283 = G__17300;
i__17272_17284 = G__17301;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17302 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4875__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17302);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17302)))?cljs.core.second.call(null,arglists_17302):arglists_17302));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17273 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17274 = null;
var count__17275 = (0);
var i__17276 = (0);
while(true){
if((i__17276 < count__17275)){
var vec__17277 = cljs.core._nth.call(null,chunk__17274,i__17276);
var name = cljs.core.nth.call(null,vec__17277,(0),null);
var map__17278 = cljs.core.nth.call(null,vec__17277,(1),null);
var map__17278__$1 = ((cljs.core.seq_QMARK_.call(null,map__17278))?cljs.core.apply.call(null,cljs.core.hash_map,map__17278):map__17278);
var doc = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17278__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17303 = seq__17273;
var G__17304 = chunk__17274;
var G__17305 = count__17275;
var G__17306 = (i__17276 + (1));
seq__17273 = G__17303;
chunk__17274 = G__17304;
count__17275 = G__17305;
i__17276 = G__17306;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__17273);
if(temp__4423__auto__){
var seq__17273__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17273__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__17273__$1);
var G__17307 = cljs.core.chunk_rest.call(null,seq__17273__$1);
var G__17308 = c__5660__auto__;
var G__17309 = cljs.core.count.call(null,c__5660__auto__);
var G__17310 = (0);
seq__17273 = G__17307;
chunk__17274 = G__17308;
count__17275 = G__17309;
i__17276 = G__17310;
continue;
} else {
var vec__17279 = cljs.core.first.call(null,seq__17273__$1);
var name = cljs.core.nth.call(null,vec__17279,(0),null);
var map__17280 = cljs.core.nth.call(null,vec__17279,(1),null);
var map__17280__$1 = ((cljs.core.seq_QMARK_.call(null,map__17280))?cljs.core.apply.call(null,cljs.core.hash_map,map__17280):map__17280);
var doc = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__17311 = cljs.core.next.call(null,seq__17273__$1);
var G__17312 = null;
var G__17313 = (0);
var G__17314 = (0);
seq__17273 = G__17311;
chunk__17274 = G__17312;
count__17275 = G__17313;
i__17276 = G__17314;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

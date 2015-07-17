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
var seq__13785_13797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13786_13798 = null;
var count__13787_13799 = (0);
var i__13788_13800 = (0);
while(true){
if((i__13788_13800 < count__13787_13799)){
var f_13801 = cljs.core._nth.call(null,chunk__13786_13798,i__13788_13800);
cljs.core.println.call(null,"  ",f_13801);

var G__13802 = seq__13785_13797;
var G__13803 = chunk__13786_13798;
var G__13804 = count__13787_13799;
var G__13805 = (i__13788_13800 + (1));
seq__13785_13797 = G__13802;
chunk__13786_13798 = G__13803;
count__13787_13799 = G__13804;
i__13788_13800 = G__13805;
continue;
} else {
var temp__4423__auto___13806 = cljs.core.seq.call(null,seq__13785_13797);
if(temp__4423__auto___13806){
var seq__13785_13807__$1 = temp__4423__auto___13806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13785_13807__$1)){
var c__5660__auto___13808 = cljs.core.chunk_first.call(null,seq__13785_13807__$1);
var G__13809 = cljs.core.chunk_rest.call(null,seq__13785_13807__$1);
var G__13810 = c__5660__auto___13808;
var G__13811 = cljs.core.count.call(null,c__5660__auto___13808);
var G__13812 = (0);
seq__13785_13797 = G__13809;
chunk__13786_13798 = G__13810;
count__13787_13799 = G__13811;
i__13788_13800 = G__13812;
continue;
} else {
var f_13813 = cljs.core.first.call(null,seq__13785_13807__$1);
cljs.core.println.call(null,"  ",f_13813);

var G__13814 = cljs.core.next.call(null,seq__13785_13807__$1);
var G__13815 = null;
var G__13816 = (0);
var G__13817 = (0);
seq__13785_13797 = G__13814;
chunk__13786_13798 = G__13815;
count__13787_13799 = G__13816;
i__13788_13800 = G__13817;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13818 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4875__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13818);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13818)))?cljs.core.second.call(null,arglists_13818):arglists_13818));
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
var seq__13789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13790 = null;
var count__13791 = (0);
var i__13792 = (0);
while(true){
if((i__13792 < count__13791)){
var vec__13793 = cljs.core._nth.call(null,chunk__13790,i__13792);
var name = cljs.core.nth.call(null,vec__13793,(0),null);
var map__13794 = cljs.core.nth.call(null,vec__13793,(1),null);
var map__13794__$1 = ((cljs.core.seq_QMARK_.call(null,map__13794))?cljs.core.apply.call(null,cljs.core.hash_map,map__13794):map__13794);
var doc = cljs.core.get.call(null,map__13794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13819 = seq__13789;
var G__13820 = chunk__13790;
var G__13821 = count__13791;
var G__13822 = (i__13792 + (1));
seq__13789 = G__13819;
chunk__13790 = G__13820;
count__13791 = G__13821;
i__13792 = G__13822;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__13789);
if(temp__4423__auto__){
var seq__13789__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13789__$1)){
var c__5660__auto__ = cljs.core.chunk_first.call(null,seq__13789__$1);
var G__13823 = cljs.core.chunk_rest.call(null,seq__13789__$1);
var G__13824 = c__5660__auto__;
var G__13825 = cljs.core.count.call(null,c__5660__auto__);
var G__13826 = (0);
seq__13789 = G__13823;
chunk__13790 = G__13824;
count__13791 = G__13825;
i__13792 = G__13826;
continue;
} else {
var vec__13795 = cljs.core.first.call(null,seq__13789__$1);
var name = cljs.core.nth.call(null,vec__13795,(0),null);
var map__13796 = cljs.core.nth.call(null,vec__13795,(1),null);
var map__13796__$1 = ((cljs.core.seq_QMARK_.call(null,map__13796))?cljs.core.apply.call(null,cljs.core.hash_map,map__13796):map__13796);
var doc = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13827 = cljs.core.next.call(null,seq__13789__$1);
var G__13828 = null;
var G__13829 = (0);
var G__13830 = (0);
seq__13789 = G__13827;
chunk__13790 = G__13828;
count__13791 = G__13829;
i__13792 = G__13830;
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

//# sourceMappingURL=repl.js.map
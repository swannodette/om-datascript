// Compiled by ClojureScript 0.0-3299 {}
goog.provide('datascript.btset');
goog.require('cljs.core');


datascript.btset.half = (function datascript$btset$half(x){
return (x >>> (1));
});
datascript.btset.min_len = (64);
datascript.btset.max_len = (128);
datascript.btset.avg_len = datascript.btset.half.call(null,(datascript.btset.max_len + datascript.btset.min_len));
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11394_SHARP_){
return ((datascript.btset.max_len & (1 << p1__11394_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function datascript$btset$path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function datascript$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.eq = (function datascript$btset$eq(a,b){
return ((0) === datascript.btset._STAR_cmp_STAR_.call(null,a,b));
});
datascript.btset.binary_search_l = (function datascript$btset$binary_search_l(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp < (0))){
var G__11395 = arr;
var G__11396 = (m + (1));
var G__11397 = r;
var G__11398 = k;
arr = G__11395;
l = G__11396;
r = G__11397;
k = G__11398;
continue;
} else {
var G__11399 = arr;
var G__11400 = l;
var G__11401 = (m - (1));
var G__11402 = k;
arr = G__11399;
l = G__11400;
r = G__11401;
k = G__11402;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function datascript$btset$binary_search_r(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp > (0))){
var G__11403 = arr;
var G__11404 = l;
var G__11405 = (m - (1));
var G__11406 = k;
arr = G__11403;
l = G__11404;
r = G__11405;
k = G__11406;
continue;
} else {
var G__11407 = arr;
var G__11408 = (m + (1));
var G__11409 = r;
var G__11410 = k;
arr = G__11407;
l = G__11408;
r = G__11409;
k = G__11410;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function datascript$btset$lookup_exact(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if(cljs.core.truth_((function (){var and__4863__auto__ = (idx < arr_l);
if(and__4863__auto__){
return datascript.btset.eq.call(null,(arr[idx]),key);
} else {
return and__4863__auto__;
}
})())){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function datascript$btset$lookup_range(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function datascript$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function datascript$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var arr_l = arr.length;
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = (new Array(((l1 + xs_l) + l2)));
var n__5760__auto___11411 = l1;
var i_11412 = (0);
while(true){
if((i_11412 < n__5760__auto___11411)){
(new_arr[i_11412] = (arr[(cut_from + i_11412)]));

var G__11413 = (i_11412 + (1));
i_11412 = G__11413;
continue;
} else {
}
break;
}

var n__5760__auto___11414 = xs_l;
var i_11415 = (0);
while(true){
if((i_11415 < n__5760__auto___11414)){
(new_arr[(i_11415 + l1)] = (xs[i_11415]));

var G__11416 = (i_11415 + (1));
i_11415 = G__11416;
continue;
} else {
}
break;
}

var n__5760__auto___11417 = l2;
var i_11418 = (0);
while(true){
if((i_11418 < n__5760__auto___11417)){
(new_arr[(i_11418 + l1xs)] = (arr[(splice_to + i_11418)]));

var G__11419 = (i_11418 + (1));
i_11418 = G__11419;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function datascript$btset$cut(){
var G__11421 = arguments.length;
switch (G__11421) {
case 2:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datascript.btset.cut.cljs$lang$maxFixedArity = 3;
datascript.btset.splice = (function datascript$btset$splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function datascript$btset$insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function datascript$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = datascript.btset.half.call(null,total_l);
var r2_l = (total_l - r1_l);
var r1 = (new Array(r1_l));
var r2 = (new Array(r2_l));
var n__5760__auto___11423 = total_l;
var i_11424 = (0);
while(true){
if((i_11424 < n__5760__auto___11423)){
((((i_11424 < r1_l))?r1:r2)[(((i_11424 < r1_l))?i_11424:(i_11424 - r1_l))] = ((((i_11424 < a1_l))?a1:a2)[(((i_11424 < a1_l))?i_11424:(i_11424 - a1_l))]));

var G__11425 = (i_11424 + (1));
i_11424 = G__11425;
continue;
} else {
}
break;
}

return [r1,r2];
});
datascript.btset.eq_arr = (function datascript$btset$eq_arr(a1,a1_from,a1_to,a2,a2_from,a2_to,cmp){
var len = (a1_to - a1_from);
var and__4863__auto__ = (len === (a2_to - a2_from));
if(and__4863__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(cljs.core.not.call(null,cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)])))){
return false;
} else {
var G__11426 = (i + (1));
i = G__11426;
continue;

}
}
break;
}
} else {
return and__4863__auto__;
}
});
datascript.btset.check_n_splice = (function datascript$btset$check_n_splice(arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,arr,from,to,new_arr,(0),new_arr.length,datascript.btset.eq)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function datascript$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_11427 = (0);
while(true){
if((i_11427 < len)){
(arr[i_11427] = f.call(null,(arr[i_11427])));

var G__11428 = (i_11427 + (1));
i_11427 = G__11428;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datascript.btset.arr_partition_approx = (function datascript$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.avg_len;
var len = arr.length;
var acc = [];
if((len > (0))){
var pos_11429 = (0);
while(true){
var rest_11430 = (len - pos_11429);
if((rest_11430 <= max_len)){
acc.push(arr.slice(pos_11429));
} else {
if((rest_11430 >= (chunk_len + min_len))){
acc.push(arr.slice(pos_11429,(pos_11429 + chunk_len)));

var G__11431 = (pos_11429 + chunk_len);
pos_11429 = G__11431;
continue;
} else {
var piece_len_11432 = datascript.btset.half.call(null,rest_11430);
acc.push(arr.slice(pos_11429,(pos_11429 + piece_len_11432)));

var G__11433 = (pos_11429 + piece_len_11432);
pos_11429 = G__11433;
continue;

}
}
break;
}
} else {
}

return acc;
});
/**
 * Filter out repetitive values in a sorted array
 */
datascript.btset.arr_distinct = (function datascript$btset$arr_distinct(arr,cmp){
var i_11434 = (0);
while(true){
if((i_11434 >= arr.length)){
} else {
if(((i_11434 > (0))) && (((0) === cmp.call(null,(arr[i_11434]),(arr[(i_11434 - (1))]))))){
arr.splice(i_11434,(1));

var G__11435 = i_11434;
i_11434 = G__11435;
continue;
} else {
var G__11436 = (i_11434 + (1));
i_11434 = G__11436;
continue;
}
}
break;
}

return arr;
});
datascript.btset.lim_key = (function datascript$btset$lim_key(node){
return datascript.btset.alast.call(null,node.keys);
});
/**
 * Drop non-nil references and return array of arguments
 */
datascript.btset.return_array = (function datascript$btset$return_array(){
var G__11438 = arguments.length;
switch (G__11438) {
case 1:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datascript.btset.return_array.cljs$lang$maxFixedArity = 3;
datascript.btset.rotate = (function datascript$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((node.len() > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__4863__auto__ = left;
if(cljs.core.truth_(and__4863__auto__)){
return (left.len() <= datascript.btset.min_len);
} else {
return and__4863__auto__;
}
})())){
return datascript.btset.return_array.call(null,left.merge(node),right);
} else {
if(cljs.core.truth_((function (){var and__4863__auto__ = right;
if(cljs.core.truth_(and__4863__auto__)){
return (right.len() <= datascript.btset.min_len);
} else {
return and__4863__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,node.merge(right));
} else {
if(cljs.core.truth_((function (){var and__4863__auto__ = left;
if(cljs.core.truth_(and__4863__auto__)){
return ((right == null)) || ((left.len() < right.len()));
} else {
return and__4863__auto__;
}
})())){
var nodes = left.merge_n_split(node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = node.merge_n_split(right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.Node(self__.keys.concat(next.keys),self__.pointers.concat(next.pointers)));
});

datascript.btset.Node.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.pointers[idx]).lookup(key);
}
});

datascript.btset.Node.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (2)),key);
var nodes = (self__.pointers[idx]).conj(key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,idx,(idx + (1)),nodes.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = datascript.btset.half.call(null,new_pointers.length);
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = child.disj(key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,left_idx,right_idx,disjned.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function datascript$btset$__GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
*/
datascript.btset.LeafNode = (function (keys){
this.keys = keys;
})
datascript.btset.LeafNode.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str_STAR_.call(null,cljs.core.vec.call(null,self__.keys));
});

datascript.btset.LeafNode.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.LeafNode.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.LeafNode(self__.keys.concat(next.keys)));
});

datascript.btset.LeafNode.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.LeafNode((ks[(0)]))),(new datascript.btset.LeafNode((ks[(1)]))));
});

datascript.btset.LeafNode.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.LeafNode.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(cljs.core.truth_((function (){var and__4863__auto__ = (idx < keys_l);
if(and__4863__auto__){
return datascript.btset.eq.call(null,key,(self__.keys[idx]));
} else {
return and__4863__auto__;
}
})())){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = datascript.btset.half.call(null,(keys_l + (1)));
if((idx > middle)){
return [(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.LeafNode(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.LeafNode.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.LeafNode(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

datascript.btset.LeafNode.cljs$lang$type = true;

datascript.btset.LeafNode.cljs$lang$ctorStr = "datascript.btset/LeafNode";

datascript.btset.LeafNode.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.btset/LeafNode");
});

datascript.btset.__GT_LeafNode = (function datascript$btset$__GT_LeafNode(keys){
return (new datascript.btset.LeafNode(keys));
});

datascript.btset.keys_for = (function datascript$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__11440 = (level - datascript.btset.level_shift);
var G__11441 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__11440;
node = G__11441;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
var _STAR_cmp_STAR_11443 = datascript.btset._STAR_cmp_STAR_;
datascript.btset._STAR_cmp_STAR_ = cmp;

try{var roots = set.root.conj(key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(roots.map(datascript.btset.lim_key),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_11443;
}});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
var _STAR_cmp_STAR_11445 = datascript.btset._STAR_cmp_STAR_;
datascript.btset._STAR_cmp_STAR_ = cmp;

try{var new_roots = set.root.disj(key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && ((new_root.pointers.length === (1)))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_11445;
}});
datascript.btset._next_path = (function datascript$btset$_next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = datascript$btset$_next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datascript.btset.next_path = (function datascript$btset$next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datascript.btset._rpath = (function datascript$btset$_rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__11446 = datascript.btset.alast.call(null,node__$1.pointers);
var G__11447 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__11448 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__11446;
path = G__11447;
level__$1 = G__11448;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function datascript$btset$_prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = datascript$btset$_prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datascript.btset.prev_path = (function datascript$btset$prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});
datascript.btset._distance = (function datascript$btset$_distance(node,left,right,level){
var idx_l = datascript.btset.path_get.call(null,left,level);
var idx_r = datascript.btset.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return datascript$btset$_distance.call(null,(node.pointers[idx_l]),left,right,(level - datascript.btset.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
return (res * datascript.btset.avg_len);
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datascript.btset.distance = (function datascript$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datascript.btset.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return datascript.btset._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
datascript.btset.est_count = (function datascript$btset$est_count(iter){
return datascript.btset.distance.call(null,iter.set,iter.left,iter.right);
});



/**
* @constructor
*/
datascript.btset.BTSetIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.btset.BTSetIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4421__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var next = temp__4421__auto__;
return next;
} else {
return (new datascript.btset.BTSetIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
if(((self__.left + (1)) < self__.right)){
return (new datascript.btset.BTSetIter(self__.set,(self__.left + (1)),self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,self__.set,self__.left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < self__.right))){
return datascript.btset._btset_iter.call(null,self__.set,left__$1,self__.right);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.keys == null)){
return f.call(null);
} else {
var first = (self__.keys[self__.idx]);
var temp__4421__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var next = temp__4421__auto__;
return cljs.core._reduce.call(null,next,f,first);
} else {
return first;
}
}
});

datascript.btset.BTSetIter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
var left__$1 = self__.left;
var keys__$1 = self__.keys;
var idx__$1 = self__.idx;
var acc = start;
while(true){
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
if((keys__$1 == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys__$1[idx__$1]));
if(((idx__$1 + (1)) < keys__$1.length)){
if(((left__$1 + (1)) < self__.right)){
var G__11449 = (left__$1 + (1));
var G__11450 = keys__$1;
var G__11451 = (idx__$1 + (1));
var G__11452 = new_acc;
left__$1 = G__11449;
keys__$1 = G__11450;
idx__$1 = G__11451;
acc = G__11452;
continue;
} else {
return new_acc;
}
} else {
var new_left = datascript.btset.next_path.call(null,self__.set,left__$1);
if((cljs.core.not_EQ_.call(null,(-1),new_left)) && ((new_left < self__.right))){
var G__11453 = new_left;
var G__11454 = datascript.btset.keys_for.call(null,self__.set,new_left);
var G__11455 = datascript.btset.path_get.call(null,new_left,(0));
var G__11456 = new_acc;
left__$1 = G__11453;
keys__$1 = G__11454;
idx__$1 = G__11455;
acc = G__11456;
continue;
} else {
return new_acc;
}
}

}
}
break;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return datascript.btset._btset_backwards_iter.call(null,self__.set,datascript.btset.prev_path.call(null,self__.set,self__.left),datascript.btset.prev_path.call(null,self__.set,self__.right));
} else {
return null;
}
});

datascript.btset.BTSetIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

datascript.btset.BTSetIter.cljs$lang$type = true;

datascript.btset.BTSetIter.cljs$lang$ctorStr = "datascript.btset/BTSetIter";

datascript.btset.BTSetIter.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.btset/BTSetIter");
});

datascript.btset.__GT_BTSetIter = (function datascript$btset$__GT_BTSetIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetIter(set,left,right,keys,idx));
});

datascript.btset._btset_iter = (function datascript$btset$_btset_iter(set,left,right){
return (new datascript.btset.BTSetIter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});

/**
* @constructor
*/
datascript.btset.BTSetBackwardsIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4421__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var next = temp__4421__auto__;
return next;
} else {
return (new datascript.btset.BTSetBackwardsIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx - (1)) >= (0))){
if(((self__.right - (1)) > self__.left)){
return (new datascript.btset.BTSetBackwardsIter(self__.set,self__.left,(self__.right - (1)),self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,self__.set,self__.right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > self__.left))){
return datascript.btset._btset_backwards_iter.call(null,self__.set,self__.left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
var new_left = (((self__.left === (-1)))?(0):datascript.btset.next_path.call(null,self__.set,self__.left));
var new_right = datascript.btset.next_path.call(null,self__.set,self__.right);
var new_right__$1 = (((new_right === (-1)))?(self__.right + (1)):new_right);
return datascript.btset._btset_iter.call(null,self__.set,new_left,new_right__$1);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

datascript.btset.BTSetBackwardsIter.cljs$lang$type = true;

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorStr = "datascript.btset/BTSetBackwardsIter";

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.btset/BTSetBackwardsIter");
});

datascript.btset.__GT_BTSetBackwardsIter = (function datascript$btset$__GT_BTSetBackwardsIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,keys,idx));
});

datascript.btset._btset_backwards_iter = (function datascript$btset$_btset_backwards_iter(set,left,right){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
/**
 * Iterator that represents whole set
 */
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
if((set.root.keys.length > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset._btset_iter.call(null,set,left,right);
} else {
return null;
}
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datascript.btset._seek = (function datascript$btset$_seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (2)),key);
var G__11457 = (node.pointers[idx]);
var G__11458 = datascript.btset.path_set.call(null,path,level,idx);
var G__11459 = (level - datascript.btset.level_shift);
node = G__11457;
path = G__11458;
level = G__11459;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datascript.btset._rseek = (function datascript$btset$_rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (2)),key);
var G__11460 = (node.pointers[idx]);
var G__11461 = datascript.btset.path_set.call(null,path,level,idx);
var G__11462 = (level - datascript.btset.level_shift);
node = G__11460;
path = G__11461;
level = G__11462;
continue;
}
break;
}
});
datascript.btset._slice = (function datascript$btset$_slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.BTSetIter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datascript.btset.slice = (function datascript$btset$slice(){
var G__11464 = arguments.length;
switch (G__11464) {
case 2:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datascript.btset.slice.call(null,set,key,key);
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
var _STAR_cmp_STAR_11465 = datascript.btset._STAR_cmp_STAR_;
datascript.btset._STAR_cmp_STAR_ = set.comparator;

try{return datascript.btset._slice.call(null,set,key_from,key_to);
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_11465;
}});

datascript.btset.slice.cljs$lang$maxFixedArity = 3;

/**
* @constructor
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2296779023;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (set,k){
var self__ = this;
var set__$1 = this;
return cljs.core._lookup.call(null,set__$1,k,null);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var _STAR_cmp_STAR_11469 = datascript.btset._STAR_cmp_STAR_;
datascript.btset._STAR_cmp_STAR_ = self__.comparator;

try{var or__4875__auto__ = self__.root.lookup(k);
if(cljs.core.truth_(or__4875__auto__)){
return or__4875__auto__;
} else {
return not_found;
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_11469;
}});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reverse.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__5291__auto__ = self__.__hash;
if(!((h__5291__auto__ == null))){
return h__5291__auto__;
} else {
var h__5291__auto____$1 = cljs.core.hash_iset.call(null,coll__$1);
self__.__hash = h__5291__auto____$1;

return h__5291__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__11467_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__11467_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),self__.comparator,self__.meta,(0)));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_disj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_conj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__11470 = null;
var G__11470__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__11470__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11470 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11470__2.call(this,self__,k);
case 3:
return G__11470__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11470.cljs$core$IFn$_invoke$arity$2 = G__11470__2;
G__11470.cljs$core$IFn$_invoke$arity$3 = G__11470__3;
return G__11470;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args11468){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11468)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

datascript.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__5454__auto__,writer__5455__auto__,opt__5456__auto__){
return cljs.core._write.call(null,writer__5455__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function datascript$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function datascript$btset$alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
datascript.btset._btset_from_sorted_arr = (function datascript$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,datascript.btset.__GT_LeafNode,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__11473 = cljs.core.count.call(null,current_level);
switch (G__11473) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,(0)));

break;
default:
var G__11475 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__11473,leafs){
return (function (p1__11471_SHARP_){
return (new datascript.btset.Node(p1__11471_SHARP_.map(datascript.btset.lim_key),p1__11471_SHARP_));
});})(current_level,shift,G__11473,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__11476 = (shift + datascript.btset.level_shift);
current_level = G__11475;
shift = G__11476;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function datascript$btset$_btset_from_seq(seq,cmp){
var arr = datascript.btset.arr_distinct.call(null,cljs.core.into_array.call(null,seq).sort(cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
datascript.btset.btset_by = (function datascript$btset$btset_by(){
var G__11480 = arguments.length;
switch (G__11480) {
case 1:
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__5926__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5926__auto__);

}
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
});

datascript.btset.btset_by.cljs$lang$applyTo = (function (seq11477){
var G__11478 = cljs.core.first.call(null,seq11477);
var seq11477__$1 = cljs.core.next.call(null,seq11477);
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__11478,seq11477__$1);
});

datascript.btset.btset_by.cljs$lang$maxFixedArity = (1);
datascript.btset.btset = (function datascript$btset$btset(){
var G__11484 = arguments.length;
switch (G__11484) {
case 0:
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__5926__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0)));
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__5926__auto__);

}
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
});

datascript.btset.btset.cljs$lang$applyTo = (function (seq11482){
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11482));
});

datascript.btset.btset.cljs$lang$maxFixedArity = (0);

//# sourceMappingURL=btset.js.map
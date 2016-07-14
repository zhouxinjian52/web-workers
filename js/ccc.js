/**
 * Created by Administrator on 2016/7/13.
 */

console.time("控制台计时器四");
var num = 1999999999;
var r = 0;
for (var i = 1; i < num; i++) {
	r += i;
}
console.timeEnd("控制台计时器四");
self.postMessage(r);
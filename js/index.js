'use strict';

var module = function () {};

Object.assign(module.prototype, {
	    init () {
			// this.hehe();
			if(typeof(Worker)!=="undefined") {
				console.log("支持web workers");
				this.workers1();
				this.workers2();
			}else{
			  	console.log("不支持web workers");
			}
			this.forEachModule();
			this.getRandom();
		},
		workers1 () {
			var that = this;
			console.time("控制台计时器一");
			self.importScript('../js/abc.js');
			var works = new Worker('../js/abc.js');
			
			works.onmessage=function(event){
				// console.log(event.data);
				document.getElementById("result").innerText = event.data;
			};
			// works.postMessage("Hello");
			// works.addEventListener("error", function(evt){
			// 	console.log(evt);
			// }, false);
			console.timeEnd("控制台计时器一");
		},
		workers2 () {
			var that = this;
			console.time("控制台计时器二");
			var hehe = new Worker('../js/ccc.js');
			hehe.onmessage=function(event){
				console.log(event);
				document.getElementById("result2").innerText = event.data;
			};
			console.timeEnd("控制台计时器二");
		},
		forEachModule () {
			console.time("控制台计时器三");
			var array = ['hehe','xixi','haha','huhu','lala','hehe','xixi','haha','huhu','lala','hehe','xixi','haha','huhu','lala','hehe','xixi','haha','huhu','lala'];
			//	传统写法
			// array.forEach(function(v, i, a) {
			// 	console.log(v);
			// });
			//ES6
			array.forEach((v,i,a) => {
				var span=document.createElement("span");//新建一个div元素节点
				span.innerText = v;
				document.getElementById("result3").appendChild(span);
			});
			console.timeEnd("控制台计时器三");
		},
		getRandom () {

			//产生一个随机数
			var num=Math.random()*(2^360)/(3^240)*(2/3);
			document.getElementById("result4").innerText = `your num is ${num}`;
			
		}
});

//类的定义
class Animal {
	//ES6中新型构造器
    constructor(name,age) {
        Object.assign(this, {name, age});
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
        console.log("I'm "+this.age+" years ago");
    }
}
//类的继承
class Programmer extends Animal {
    constructor(name,age,sex) {
    	//直接调用父类构造器进行初始化
        super(name,age);
        Object.assign(this, {sex});
    }
    program() {
    	console.log("I'm coding..."+this.name);
        console.log("I'm "+this.sex+"");
    }
}
//测试我们的类
var animal=new Animal('dummy',18),
wayou=new Programmer('xxxxx',20,'男');
animal.sayName();//输出 ‘My name is dummy’
wayou.sayName();//输出 ‘My name is wayou’
wayou.program();//输出 ‘I'm coding...’


// 启动workers
var start = new module;
console.time("总耗时");
start.init();
console.timeEnd("总耗时");

// console.dir(module);

var [x,y]=getVal([7,8]),//函数返回值的解构
    [name,,age]=['wayou','male','secrect'];//数组解构

function getVal(value=[13,52]) {
    return value;
}

console.log('x:'+x+', y:'+y);//输出：x:1, y:2 
console.log('name:'+name+', age:'+age);//输出： name:wayou, age:secrect 


//将所有参数相加的函数
function add(...x){
	console.log(x);
	return x.reduce((m,n)=>m+n);
}

var arraysd = {
	'a':'hehe',
	'b':'haha',
	'c':'xixix',
	'd':'zzz'
}
console.log(add(arraysd));
console.log(add(1,2,3,4,5));

// Sets
var s = new Set();
s.add("hello").add("goodbye").add("goodbye");
console.log(s);
console.log(s.size === 2 ? 'true' : 'false');
console.log(s);
console.log(s.has("goodbye") === true ? 'true2' : 'false2');
 
console.log(s);
// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get("hello") == 42 ? 'true3' : 'false3');
console.log(m.get(s) == 34 ? 'true4' : 'false4');

m.forEach(function(i,o){
	console.log('@@@@@@@@@@@@');
	console.log(i);
	console.log(o);
	console.log('@@@@@@@@@@@@');
});

let aa = 0;
setInterval(function(){
	aa++;
	document.getElementById('result1').innerText = aa;
},1000);


// var array = [10,20,13,20,22,12,52,514,123];

// var kk = 0;
// console.log(array);
// setInterval(function(){
// 	postMessage(array[kk]);
//     kk++;
//     if(kk == array.length){
//         kk=0;
//     }
// },100);

setInterval(function(){
	let [h,m,t] = getTime();
	// console.log([h,m,t]);
	self.postMessage(h+":"+m+":"+t);
},1000);

function getTime(){
	let time = new Date();
	let h = time.getHours();
	let m = time.getMinutes();
	let t = time.getSeconds() ;
	h = h < 10 ? '0'+h : h;
	m = m < 10 ? '0'+m : m;
	t = t < 10 ? '0'+t : t;
	return [h,m,t];
}

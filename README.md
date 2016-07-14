# web-workers
web workers 

###我发现了一个问题，workers里面用上setInterval的时候最多15秒后就不会post信息回来，其实该定时器是还在继续执行的只是postMessage未执行，所以感觉是暂停或者出错了，但是在其他浏览器上无此现象。webpack打包后可以跑在绝大多数浏览器上。

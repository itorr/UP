#偷揉图床 API 说明 文档

![偷揉图床 API](http://ww1.sinaimg.cn/large/4764ae2agw1evfb3z44bqg21e00qoq2w.gif)

>偷揉图床是一个简单的图片分享工具
>http://x.mouto.org/wb


全部功能包括：
 1. 选图->返回地址

因偷揉相册难产、但图床需求迫切，所以提前把上一个版本的公开 API 整理成文档。


## JavaScript API

###上传

引入  `up.itorr.js` 
```html
<script src="up.itorr.js"></script>
```
或者引用 线上版本的 `up.itorr.js` 
```html
<script src="http://x.mouto.org/wb/up.itorr.js"></script>
```
####第一种使用方式
```javascript
UP=function( !图片文件 , !正确回调 , ?错误回调 , ?进度回调 )
/**
 * !感叹号 必须存在
 * ?疑问号 可选
**/
```
#####第一种使用方式的例子
```javascript
UP(图片文件,function(pid){  //图片 pid 部分
	console.log(/上传成功，图片地址:/,'http://ww2.sinaimg.cn/large/'+pid)
},function(error){ //错误回调，返回错误原因文本
	console.log(/上传文件出错了！/,error)
},function(进度){ //进度回调，返回进度 0-1
	console.log(/进度/,进度*100+'%')
})
```
####第二种使用方式
```javascript
UP=function({
	file: !图片文件 ,
	success: !正确回调 ,
	error: ?错误回调 ,
	upload: ?进度回调 
})
/**
 * !感叹号 必须存在
 * ?疑问号 可选
**/
```
#####第二种使用方式的例子
```javascript
UP({
	file:图片文件,
	success:function(pid){  //正确回调，返回图片 pid 部分文本
		console.log(/上传成功，图片地址:/,'http://ww2.sinaimg.cn/large/'+pid)
	},error:function(error){ //错误回调，返回错误原因文本
		console.log(/上传文件出错了！/,error)
	},upload:function(进度){ //进度回调，返回进度 0-1
		console.log(/进度/,进度*100+'%')
	}
})
```


###演示地址

[http://x.mouto.org/wb/上传演示.html](http://x.mouto.org/wb/上传演示.html)

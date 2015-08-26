/* 🐕itorr<itorrrrrr@me.com> 2015-8-25 */
var 
UP=function(o,success,error,upload,x,file,A){
	if(typeof success=='function')
		file=o;
	else{
		if(!o.file)
			return console.log('并没有传入需要上传的文件')

		if(A=o.success)
			success=A

		if(A=o.upload)
			upload=A
		
		if(A=o.error)
			error=A
	}

	x=new XMLHttpRequest()
	x.open('POST','http://x.mouto.org/wb/x.php?up',1)

	if(upload)
		x.upload.onprogress=function(e){
			upload(e.loaded/e.total)
		}

	x.onload=function(r){
		r=JSON.parse(x.responseText)

		if(r.error&&error)
			return error(r.error)

		if(r.pid&&success)
			return success(r.pid)
	}
	x.send(file)
}

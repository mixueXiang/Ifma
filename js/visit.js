window.onload=function(){
	var mask=document.getElementById('mask');
	var sMap=document.getElementById('smallMap');
	var bMap=document.getElementById('bigMap');
	var mapWrap=document.getElementById('mapWrap');
	var bWrap=document.getElementById('b_wrap');
	mapWrap.onmouseenter=function(){
		mask.style.display='block';
		bMap.style.display='block';
	}	
	mapWrap.onmouseleave=function(){
		mask.style.display='none';
		bMap.style.display='none';
	}	
	document.onmousemove=function(e){
		var e=e||window.event;
		var x=e.clientX-mask.offsetWidth/2-mapWrap.offsetLeft;
		var y=e.clientY-mask.offsetHeight/2-mapWrap.offsetTop;
		
		if(x<0){
			x=0;
		}
		if(x>mapWrap.offsetWidth-mask.offsetWidth){
			x=mapWrap.offsetWidth-mask.offsetWidth;}
		if(y<0){
			y=0;}
		if(y>mapWrap.offsetHeight-mask.offsetHeight){
			y=mapWrap.offsetHeight-mask.offsetHeight;}

		mask.style.left=x+'px';
		mask.style.top=y+'px';		

		var scaleX=x/(mapWrap.offsetWidth-mask.offsetWidth);
		var scaleY=y/(mapWrap.offsetHeight-mask.offsetHeight);
		bMap.style.left=-scaleX*(bMap.offsetWidth-bWrap.offsetWidth)+'px';
		bMap.style.top=-scaleY*(bMap.offsetHeight-bWrap.offsetHeight)+'px';
	}

	
	function getLeft(obj){
		var oLeft=0;
		while(obj){
		 	oLeft+=obj.offsetLeft;
			obj=obj.offsetParent;
		}
		return oLeft;}
}
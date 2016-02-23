(function(){
	$(function(){
		var oUnit=document.getElementById('unit');
		var myUl=oUnit.getElementsByTagName('ul')[0];
		var myLi=oUnit.getElementsByTagName('li');
		var speed=-2;
		var tm=null;
		clearInterval(tm);
		myUl.innerHTML+=myUl.innerHTML;
		myUl.style.width=myLi[0].offsetWidth*myLi.length+'px';
		var startMove=function(){
			if(myUl.offsetLeft<-myUl.offsetWidth/2){
		 		myUl.style.left=0+"px"
		 	}if(myUl.offsetLeft>0){
		 		myUl.style.left=-myUl.offsetWidth/2+"px";
		 	}
	      		myUl.style.left=myUl.offsetLeft+speed+"px"
	     	}

	    tm=setInterval(function(){
	     	startMove();
	    },50)
	 	oUnit.onmouseover=function(){
			 clearInterval(tm);
		 }
	 	oUnit.onmouseout=function(){
		 	tm=setInterval(function(){
		 		startMove();
		 },50)
		 };
	})
})();
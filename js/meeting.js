(function(){
	$(function(){
		var oMeet=$('#meeting');
		var timer=null;
		clearInterval(timer);
		timer=setInterval(function(){
			move();
		},5000);
		var curIndex=0;
		var arr=new Array();
		arr[0]="met_one.jpg";
		arr[1]="met_two.jpg";
		arr[2]="met_three.jpg";
		arr[3]="met_four.jpg";
		var move=function(){
			var met=document.getElementById('meet');
			if(curIndex == arr.length-1){
				curIndex = 0;
			}else{curIndex += 1;}
			met.src="images/"+arr[curIndex];
		}
	})
		var oUnit=document.getElementById('unit');
		var myLi=oUnit.getElementsByTagName('li');
		var speed=-2;
		var tm=null;
		clearInterval(tm);
		oUnit.innerHTML+=oUnit.innerHTML;
		oUnit.style.width=myLi[0].offsetWidth*myLi.length+'px';
		var startScroll=function(){
			if(oUnit.offsetLeft<-oUnit.offsetWidth/2){
		 		oUnit.style.left=0+"px"
		 	}if(oUnit.offsetLeft>0){
		 		oUnit.style.left=-oUnit.offsetWidth/2+"px";
		 	}
	      		oUnit.style.left=oUnit.offsetLeft+speed+"px"
	     	}

	     	tm=setInterval(function(){
	     		startScroll();
	     	},30)
	 		oUnit.onmouseover=function(){
			 clearInterval(tm);
		 	}
	 		oUnit.onmouseout=function(){
		 	tm=setInterval(function(){
		 		startScroll();
		 	},30)
		 	};

})();



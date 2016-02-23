$(function(){
	$('.i_introduce').each(function(index,elem){	
		$(elem).click(function(){
			  $('#i_ul p').eq(index).toggle(1000);
	  });		
	});
	var oSpan=document.getElementById('move');
	var nav=document.getElementById('navi');
	var nA=nav.getElementsByTagName('a');
	for(var i=0;i<nA.length;i++){
		if(i==0){
				nA[i]._index=i;
				nA[i].onmouseover=function(){
				startMove(oSpan, {
						left:this.offsetLeft-35
					});
			}		
		}else{
			nA[i]._index=i;
			nA[i].onmouseover=function(){
				startMove(oSpan, {
						left:this.offsetLeft-10
					});
			}
		}		
	}
})
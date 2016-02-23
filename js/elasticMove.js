	function startMove(obj, json, fn) {
		  clearInterval(obj.iTimer);
		  var iCur = 0;
		  var iSpeed = 0;
			  
		  obj.iTimer = setInterval(function() {
			  
			  var iBtn = true;
						  
			  for ( var attr in json ) {
								  
				  var iTarget = json[attr];
				  
				  
				  iCur = parseInt(css(obj, attr));
				  
				  iSpeed += ( iTarget - iCur ) / 5;
				  iSpeed*=0.75;
				  
				 
				  if (iCur !== iTarget) {
					  iBtn = false;
					    if(Math.abs(iCur-iTarget)<1 && iSpeed<1)
					    {
							iCur=iTarget;
							iSpeed=0;
						}
						else{
					  		obj.style[attr] = iCur + iSpeed + 'px';
						}
				  }
				  
			  }
			  
			  if (iBtn) {
				  clearInterval(obj.iTimer);
				  fn && fn.call(obj);
			        }
			  
		  }, 30);
	  }
	  
	  function css(obj, attr) {
		  if (obj.currentStyle) {
			  return obj.currentStyle[attr];
		  } else {
			  return getComputedStyle(obj, false)[attr];
		  }
	  }
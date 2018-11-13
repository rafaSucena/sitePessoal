$(document).ready(function(){

	let picHeight=1537;
	let picWidth=933;
	let initialOffSetslideImage= $('#slideImage').offset().top;
	let wHeight =window.innerHeight;
	let c=wHeight/2 - 252;
	let w0=initialOffSetslideImage-c;
	let wf= initialOffSetslideImage+3*wHeight-504-c;
	let wScroll=0;
	let initialBlackBackgroundOffSet =$('.blackBackground').offset().top;
	$(window).scroll(function(){
		wScroll= window.scrollY;
		console.log(window.scrollY);
		if( wScroll >= wf ){

			$('#profilePic').css({
				'background-position':'center 100%',
				'background-attachment':'scroll',
				'position':'relative',
				'top':'calc( 300vh - 504px )',
				'left':'0'
					});
			$('.blacken').css('opacity',((wScroll-w0)/(wf-w0)*0.8));
			$('.whiteBorder').css({'opacity':(wScroll-w0)/(wf-w0)});
		} else if (wScroll <= w0){
			$('#profilePic').css({
				'background-position':250-picWidth/2+'px '+'0%',
				'background-attachment':'scroll',
				'position':'relative',
				'top':'0',
				'left':'0',
			});
			
		} else {
			
			$('#profilePic').css({
				'position':'fixed',
				'top':wHeight/2-252+'px',
				'left':window.innerWidth/2-252+'px',
				'background-attachment':'fixed',
				'background-position':(-picWidth/2+window.innerWidth/2)+'px '+(c+2-(picHeight-500)*(wScroll-w0)/(wf-w0))+'px' 
					});

			$('.blacken').css('opacity',((wScroll-w0)/(wf-w0)*0.8));
			$('.whiteBorder').css({'opacity':(wScroll-w0)/(wf-w0)});
		}//end else if

	});//end window scroll
	
	

	//on window resize
	window.onresize=function(){
		initialBlackBackgroundOffSet =$('.blackBackground').offset().top;
		initialOffSetslideImage= $('#slideImage').offset().top;
	    
		wHeight =window.innerHeight;
		wScroll= window.scrollY;
		c= wHeight/2 - 252;
		w0=initialOffSetslideImage-c;
		wf= initialOffSetslideImage+3*wHeight-504-c;
		if( wScroll >= wf ){

			$('#profilePic').css({
				'background-position':'center 100%',
				'background-attachment':'scroll',
				'position':'relative',
				'top':'calc( 300vh - 504px )',
				'left':'0'
					});
			$('.blacken').css('opacity',((wScroll-w0)/(wf-w0)*0.8));
			$('.whiteBorder').css({'opacity':(wScroll-w0)/(wf-w0)});
		} else if (wScroll <= w0){
			$('#profilePic').css({
				'background-position':250-picWidth/2+'px '+'0%',
				'background-attachment':'scroll',
				'position':'relative',
				'top':'0',
				'left':'0',
			});
			
		} else {
			
			$('#profilePic').css({
				'position':'fixed',
				'top':wHeight/2-252+'px',
				'left':window.innerWidth/2-252+'px',
				'background-attachment':'fixed',
				'background-position':(-picWidth/2+window.innerWidth/2)+'px '+(c+2-(picHeight-500)*(wScroll-w0)/(wf-w0))+'px' 
					});

			$('.blacken').css('opacity',((wScroll-w0)/(wf-w0)*0.8));
			$('.whiteBorder').css({'opacity':(wScroll-w0)/(wf-w0)});
		}//end else if
	};//end resize
	



	//on hover whiteborder
	$('.whiteBorder').hover(
		function(){
			$(this).empty();
			$(this).css({'font-weight':'bold',
				'border':'3px solid'
				});
			$(this).animate({'font-size':1.5+'em',	
					'width':80+'%',
					'height':80+'%',
					'line-height': 500*0.8+'px'
					},400);
			$(this).append('916449541');
			
		},function(){
			$(this).empty();
			$(this).css({'font-weight':'normal',
				'border':'1px solid'
					});
			$(this).animate({'font-size':1+'em',	
					'width':20+'%',
					'height':20+'%',
					'line-height': 500*0.2+'px'
					},400);
			$(this).append('Contactar');
		}	
	);//end hover




	
	$(document).on("mousemove",function(event){
		var mouseY= event.pageY-initialBlackBackgroundOffSet;
		var vectorX=(mouseY-wHeight/2)/wHeight;
		var vectorY=(event.pageX-window.innerWidth/2)/window.innerWidth;
		if (mouseY>-100){
				$('#withPerspective').css({
						'transform':'rotate3d('+vectorX+','+vectorY+',0,'+-40*Math.pow((Math.pow(vectorX,2)+Math.pow(vectorY,2)),0.5)+'deg)'
							}); 
		}//end if
	
	});//end on mouse move


});

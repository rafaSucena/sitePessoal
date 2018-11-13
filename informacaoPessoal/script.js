$(document).ready(function(){
	if(window.innerWidth*0.4 < 433){
				$('.with-tux').css({
				'background-image':'none'
					});
			$('#left-text').css({
				'width':window.innerWidth*0.8+'px'
					});
			
	} else {
			$('.with-tux').css({
					'background-image': 'url("images/tux.png")',
    				'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-position': '60vw center'
				});		
			$('#left-text').css({
					'width':window.innerWidth*0.5+'px'
				});
			
	}

	
	if (window.innerHeight<480){
		$('.disposable').empty();
	} else if ($('.disposable:first-of-type').html()==''){
			$('.disposable:first-of-type').append('José');	
			$('.disposable:last-of-type').append('Gonçalves');		
	}

	window.onresize=function () {
		if(window.innerWidth*0.4 < 433){
				$('.with-tux').css({
				'background-image':'none'
					});
			$('#left-text').css({
				'width':window.innerWidth*0.8+'px'
					});
			
		} else {
			$('.with-tux').css({
					'background-image': 'url("images/tux.png")',
    				'background-repeat': 'no-repeat',
					'background-attachment': 'fixed',
					'background-position': '60vw center'
				});		
			$('#left-text').css({
					'width':window.innerWidth*0.5+'px'
				});
			
		}

				console.log('hi');				

		if (window.innerHeight<480){
			$('.disposable').empty();
		} else if ($('.disposable:first-of-type').html()==''){
			$('.disposable:first-of-type').append('José');
			$('.disposable:last-of-type').append('Gonçalves');				
		}
	}


});
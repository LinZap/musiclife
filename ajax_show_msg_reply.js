var index,Rid,id;

function checking(){
	var a= document.getElementById('ttt').value;if(a=="")return false;else return true;}
function check(ss){var a= document.getElementById(ss).value;if(a=="")return false;else return true;}
function testForEnter(){if (event.keyCode == 13){event.cancelBubble=true;event.returnValue=false;}}

// 設定必要參數，作為AJAX傳遞資料所用 i=第幾個reMsg要AJAX, dx=傳送給print_reply的參數 , user 使用者的id
function set_arg(i,dx,user){
	
	index = i;
	Rid = dx;
	id = user;
	
	}


$(function(){
	
	$('#new_post').hide(0);
	$('#slidebar').hide(0);
	$('#post_msg').bind('click',function(){
		$('#new_post').slideDown(1000);
		});
	$('#post_cancle').bind('click',function(){
		$('#new_post').slideUp(500);
		});	
	$('#visitor_cancle').bind("click",function(){
		$('#slidebar').slideUp(400);
		});
	$('#showbar').bind("click",function(){
		$('#slidebar').slideDown(500);
		});
		
		
		
		
	$('.msg_show_all_reply').bind('click',function(){
		
		
		$.ajax({
			type:"GET",
			url:"print_reply.php",
			data:"id="+id+"&Rid="+Rid,
			
			// ajax 之前 "都會" 執行的函式
			 beforeSend: function(){
				 
				// 移除顯示所有回覆的div
				$('.msg_show_all_reply:eq('+index+')').hide(0);
				// 顯示等待中的圖示
				$('.ajax_status:eq('+index+')').append('<div class="msg_show_waiting"></div>');
				
			 },
			 
			 // ajax 失敗時執行的函式(success / error 只會有一個執行)
			 error: function(){
				 
				 // 顯示錯誤訊息，並提示
				 $('.ajax_status:eq('+index+')').append('<div class="msg_show_error">發生錯誤，請重試!</div>');
				 //重新顯示被隱藏的 "顯示所有回覆的div" 
				 //$('.msg_show_all_reply:eq('+index+')').show(0);
			 },
			 
			 // ajax 成功時執行的函式
			 success: function(data){
				 
				 //顯示所有留言資料
				 $('.ajax_reply:eq('+index+')').html(data);
				//移除提示專用DIV
				 $('.ajax_status:eq('+index+')').hide(0);
				
				
			 },
			 
			 // ajax 結束 "都會" 執行的函式(目前無動作)
			 complete: function(){},
			 
	});
		
		
		})
		
		
		
		
		
		
});
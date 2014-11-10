<!doctype html>
<html>
<head>
<meta charset="utf-8"  HTTP-EQUIV="Pragma" CONTENT="no-cache">
<title>Login</title>
<script type="text/javascript">

$(function(){
	
	$('#sub').bind('click',function(){
		
		if($('#in_mail').val()=="")
		$('#in_emil_hint').html("欄位不可為空!!");
		else
		$('#in_emil_hint').html("");
		
		
		if($('#in_psd').val()=="")
		$('#in_password_hint').html("欄位不可為空!!");
		else
		$('#in_password_hint').html("");
		
		
		});
	
	
	
	});

function check(){
	
if(document.getElementById('in_mail').value=="" 
|| document.getElementById('in_psd').value=="" ) 
return false;
else return true;

}
</script>


</head>

<body>

<div class="contant_sign">
 <div class="tit">登入</div>
 <div class="sign_left">
   <div class="sign_left_box">
  <div class="sign_left_box_img"><img src="image/nor5.fw.png" width="79" height="81"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">加入課程討論</div>
<div class="sign_left_box_world_hint">討論區與留言板上歡迎同學使用，登入後便能加入課程的相關活動!</div>
</div>
</div>

<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor6.fw.png" width="79" height="81"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">取得最新消息</div>
<div class="sign_left_box_world_hint">最新消息會通知各位同學，在網頁上一覽無遺!!</div>
</div>
</div>

<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor7.fw.png" width="79" height="81"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">開始音樂欣賞</div>
<div class="sign_left_box_world_hint">課程教材內提供許多古典音樂相關的資訊與檔案，歡迎同學使用!</div>
</div>
</div>


</div>


<div class="sign_board">

  <form name="loginer"  onSubmit="return check();" method="post" action="in.php" >
  
  
  <p class="login_hint">電子信箱&nbsp;&nbsp;&nbsp;<span id="in_emil_hint" class="error_hint"></span></p>
  <input name="in_mail" type="text" placeholder="電子信箱" style="width:300px; height:30px" id="in_mail"/>
  
  
  <p class="login_hint">輸入密碼&nbsp;&nbsp;&nbsp;<span id="in_password_hint" class="error_hint"></span></p>
  <input name="in_psd" type="password" placeholder="輸入密碼" style="width:300px; height:30px" id="in_psd"/>
  
  
  
   <p><input name="input" type="submit" value="登入" class="btn_signup" id="sub"/>&nbsp;&nbsp;&nbsp;<a href="#" style="font-size:14px">忘記密碼</a></p> 
   
   
   </form>
  </div>
</div>



</body>
</html>

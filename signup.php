<!doctype html>
<html>
<head>
<meta charset="utf-8"  HTTP-EQUIV="Pragma" CONTENT="no-cache">
<title>SignUp</title>
<script type="text/javascript">



$(function(){
	
	$('#email').bind('focus',function(){
		$('#email_msg').html("<br>輸入正確的電子信箱，往後可以找回密碼。")
		});
		
	$('#email').bind('blur',function(){
		$('#email_msg').html("")
		});
	
	$('#name').bind('focus',function(){
		$('#name_msg').html("<br>盡量使用真名，方便課程討論。")
		});
		
	$('#name').bind('blur',function(){
		$('#name_msg').html("")
		});
	
	
	$('#sub').bind('click',function(){
		
		if($('#email').val()=="")
			$('#email_hint').html("請輸入電子信箱!!");	
		else	
			$('#email_hint').html("");
		
		if($('#name').val()=="")
			$('#name_hint').html("請輸入姓名!!");
		else
			$('#name_hint').html("");
			
			
		if($('#password').val()=="")
			$('#password_hint').html("請輸入密碼!!");
		else	
			$('#password_hint').html("");
		
		
		if($('#again_psd').val()!=$('#password').val())
			$('#again_password_hint').html("密碼重複輸入不符!!");
		else
			$('#again_password_hint').html("");
		
		
		});
	
	
	
	});
	
function check(){
	
if(document.getElementById('email').value=="" 
|| document.getElementById('name').value=="" 
|| document.getElementById('password').value=="" 
|| document.getElementById('password').value!=document.getElementById('again_psd').value
|| document.getElementById('chbox').checked==false) 
return false;
else return true;

}
	

</script>

</head>

<body>


<div class="contant_sign">

<div class="tit">建立新的帳戶</div>


<div class="sign_left">

<div><strong>&nbsp;&nbsp;&nbsp;&nbsp;使用條款</strong></div>




<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor3.fw.png" width="79" height="81"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">使用課程資料</div>
<div class="sign_left_box_world_hint">上課提供的資料僅限教學使用，如涉及到商業部分請留意著作權規範與資料使用的合法性。</div>
</div>
</div>



<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor2.fw.png"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">帳戶行為規範</div>
<div class="sign_left_box_world_hint">帳戶在使用本系統時，如有涉及到人身攻擊或不雅的言論字詞，帳戶將會被凍結並且無法再使用。</div>
</div>
</div>


<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor1.fw.png"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">網站相關素材</div>
<div class="sign_left_box_world_hint">網站相關素材部分屬於公開使用，若需要取得相關素材的使用權利，請聯絡網站管理員。</div>
</div>
</div>


<div class="sign_left_box">
<div class="sign_left_box_img"><img src="image/nor4.fw.png"></div>
<div class="sign_left_box_world">
<div class="sign_left_box_world_tit">帳戶隱私權保密</div>
<div class="sign_left_box_world_hint">帳戶註冊後資訊絕對保密，除了使用於本系統外，絕不另外使用於其他用途。</div>
</div>
</div>



</div>


<div class="sign_board">
  <form name="signuper"  onSubmit="return check();" method="post" action="insert.php" >
    <p class="login_hint">您的電子信箱&nbsp;&nbsp;&nbsp;<span id="email_hint" class="error_hint"></span>
    <span id="email_msg"  style="font-size:12px; color:#666"></span></p>
      <input name="email" type="text" placeholder="電子信箱" style="width:270px; height:30px" id="email" value=""/>
    
    
    
    <p class="login_hint">設定密碼&nbsp;&nbsp;&nbsp;<span id="password_hint" class="error_hint"></span></p>
  <input name="psd" type="password" placeholder="輸入密碼" style="width:270px; height:30px" id="password" value=""/>
  
  
    <p class="login_hint">確認密碼&nbsp;&nbsp;&nbsp;<span id="again_password_hint" class="error_hint"></span></p>
  <input name="again_psd" type="password" placeholder="確認密碼" style="width:270px; height:30px" id="again_psd" value=""/>
  
  
  <p class="login_hint">您的姓名&nbsp;&nbsp;&nbsp;<span id="name_hint" class="error_hint"></span>
  <span id="name_msg" style="font-size:12px; color:#666"></span>
  </p> 
  <input name="name" type="text" placeholder="輸入姓名" style="width:270px; height:30px" id="name" value=""/>
  
   <p class="login_hint">
     <label><input name="agree" type="checkbox" value="" id="chbox">
       我同意使用條款</label>   
   <p>
     <input name="submit" type="submit" value="註冊" id="sub" class="btn_signup"/>
 </p>
  </form>
  </div>
  
  
  </div>
  




</body>
</html>

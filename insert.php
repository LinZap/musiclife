<?

include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');

$name = trim($_POST["name"]);
$psd = trim($_POST["psd"]);
$email = trim($_POST["email"]);
$level = 1;

if(!empty($name) && !empty($psd) && !empty($email)){
	
	$sqlString = "select mail from member where mail='".db_escape($email)."'";
	
	$res = db_query($sqlString);
	
	if(db_num_rows($res)==1){
		//表示已經被註冊
		echo '<script>alert("email帳號已經被註冊過了!");  location.href="index.php?page=signup.php" ;</script>';
		exit();
		}
	else{
		//沒有重複，寫入資料庫
		$insSQL = "insert into member(mail,password,name,level) values('$email','$psd','$name','$level')";
		$rel = db_query($insSQL);
		//資料寫入成功
		if($rel==true)echo '<script>alert("註冊成功!"); location.href="index.php?page=login.php";</script>';
		else echo '<script>alert("註冊失敗，請在試一次 !"); location.href="index.php?page=signup.php";</script>';

	}
}
?>
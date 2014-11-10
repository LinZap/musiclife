<?
include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');
session_start();

if(isset($_SESSION['name'])){
	 
	 $name = $_SESSION['name'];
	 $time = date("Y-m-d g:i:s");
	 $re_con = trim($_POST['re_con']);
	 $msg_id = $_POST['msg_id'];
	 
	 $sqlString = "insert into reply(Rid,Rcon,Rdate,Rmember) values('$msg_id','$re_con','$time','$name')";
	 $res = db_query($sqlString);
	 
	 if($res==true) echo '<script>alert("回覆成功!"); location.href="index.php?page=msg.php";</script>';
	 else  echo '<script>alert("回覆失敗，請在試一次!"); location.href="index.php?page=msg.php";</script>';
	 
	 }
	 
else echo '<script>alert("請先登入!!"); location.href="index.php?page=login.php";</script>';	
 
?>
<?
include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');
session_start();

if(isset($_SESSION['name'])){
	
	$n = $_SESSION['name'];
	$mid =  $_GET['mid'];
	$id = $_GET['id'];
	
	//echo "send id=".$_GET['id'];
	//echo "id=".$n;
	
	
	if($n == $id){
	//修改留言內容變成已經被使用者刪除
	
	 $sqlString = "delete from msg where Mid='$mid'";
	 $res = db_query($sqlString);
	 
	 if($res==true) echo '<script>alert("刪除成功!"); location.href="index.php?page=msg.php";</script>';
	 else  echo '<script>alert("刪除失敗，請在試一次!"); location.href="index.php?page=msg.php";</script>';
	
	}
	
	else{
		
		echo '<script>alert("您的權限不足!"); location.href="index.php?page=msg.php";</script>';
		
		}
		
		
	}
else echo '<script>alert("請先登入!!"); location.href="index.php?page=login.php";</script>';	
 




?>
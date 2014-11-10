<?

include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');

session_start();

//echo trim($_POST["msg_tit"])."<br>";
//echo trim($_POST["msg_con"]);

 
 if(isset($_SESSION['name']) || $_POST["visitor"]=="visitor"){
	 //已經登入或是使用訪客才能發文
	 
	 if($_POST["visitor"]=="visitor")$name = 19;
	 else $name = $_SESSION['name'];
	 
	 $time = date("Y-m-d g:i:s");
	 $tit = trim($_POST["msg_tit"]);
	 $cnt = $_POST["msg_con"];
	 
	 $sqlString = "insert into msg(Mtit,Mcon,Mdate,Mmember) values('$tit','$cnt','$time','$name')";
	 $res = db_query($sqlString);
	 
	 if($res==true) echo '<script>alert("發表留言成功!"); location.href="index.php?page=msg.php";</script>';
	 else  echo '<script>alert("發表留言失敗，請在試一次!"); location.href="index.php?page=msg.php";</script>';
	 }
	 
	 
else{
	 //沒有登入
	 echo '<script>alert("留言之前請先登入"); location.href="index.php?page=login.php";</script>';
	 }



?>

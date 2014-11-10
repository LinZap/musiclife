
<?
header ('Content-Type: text/html; charset=utf-8');
include_once('db_fuc.php');
include_once('db_con.php');



$email =  trim($_POST["in_mail"]) ;
$psd =  trim($_POST["in_psd"]) ;


$sqlS = "select * from member where mail ='$email' and password ='$psd'";

echo $sqlS ;

//$sqlS = "select * from member where mail = mail = '1' OR '1'='1' and password =password = '1' OR '1'='1'";
mysql_query("SET NAMES 'utf-8'");
$ress = db_query($sqlS);

//帳號密碼輸入正確
if(mysql_num_rows($ress)>0){
	
	$row =  db_fetch_array($ress);
		
	session_start();
	
	$_SESSION['name'] =  $row[0];
	
	echo '<script>alert("登入成功 !");</script>';
	echo '<script>location.href="index.php" ;</script>';
	
	}
else{
	echo $email ."   " .$psd ;
	echo '<script>alert("登入失敗 !"); location.href="index.php?page=login.php " ;</script>';
	}


?>


<?

$Host ="210.70.168.17";
$Account="admin";
$Password = "demonzap123";
$Dbname = "test";

$con = mysql_connect($Host,$Account,$Password);
mysql_select_db($Dbname);
mysql_set_charset('utf8',$con);

?>

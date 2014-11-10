<!doctype html>
<html>
<head>
<meta charset="utf-8" http-equiv="pragma" content="no-cache">
<title>留言板</title>
<script src="ajax_show_msg_reply.js"></script>
</head>
<body>
<div id="slidebar">
<h3>何謂<em>「訪客身分」</em>?</h3>
<ol style="font-size:14px">
  <li><strong>不需登入</strong>就可發表</li>
  <li>發表人會顯示&quot;<strong>訪客</strong>&quot;字樣</li>
  <li>文章較無保障，內容違規會直接遭到刪除</li>
  <li>無法&quot;<strong>回覆</strong>&quot;別人的主題</li>
  <li>針對需緊急留下訊息者使用，建議登入後再發表</li>
</ol>
<div align="right"><input type="button" name="post_msg" id="visitor_cancle" value="知道了" class="btn_nor" ></div>
</div>
<div class=" msg_bg">
<div class="tit">我們的對話
  <input type="submit" name="post_msg2" id="post_msg" value="發表主題"  class="btn_msg"/>
</div>

<div class=" msg_post_all" id="new_post">
<form action="post_msg.php" method="post" name="post_msg" onSubmit="return checking()">
<p>對話主題： <br><input name="msg_tit" type="text" maxlength="50" style="height:21px; width:500px" id="ttt"/> </p>
<p>詳細內容：<br><textarea name="msg_con" rows="4" style="width:500px"></textarea>
<input type="submit" name="post_msg" id="post_ok" value="發表" class="btn_nor" ><input type="button" name="post_msg" id="post_cancle" value="取消" class="btn_nor" >
<input name="visitor" type="checkbox" id="visitor" value="visitor">
<label for="visitor"  style="color:#313131; font-size:13px; font-weight:normal">使用訪客身分發表</label><span id="showbar"> <a href="#">( 何謂使用訪客身分發表? )</a> </span>
</p>
</form>
</div>

<?
include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');
session_start();
define('pnum',10);


$start = $_Get["start"]; if(!isset($start))$start=0;
$n="9999"; if(isset($_SESSION['name'])) $n = $_SESSION['name'];
$count = 0;

$sqlString = "select Mtit,Mcon,Mdate,name,Mid,Mmember from member,msg where Mmember=id order by Mdate DESC";
$res = db_query($sqlString);


if(db_num_rows($res)>0){
	
	$num=db_num_rows($res);
	$end = $start+pnum;
	$view_de = "";
	
	echo " <div class=\"msg_all\"> ";
	
	for($i=0;$i<$num;$i++){
		$row = db_fetch_array($res);	
		//刪除
		if($n==$row[5]) $view_de = "| <a href=\"de_msg.php?mid=$row[4]&id=$n\" class=\"msg_menu\">刪除</a>";
		else $view_de ="";

		//顯示留言
		echo " <div class=\"msg_box\"> ";
		echo " <div class=\"msg_tit\"><span class=\"msg_tit\">".$row[3]." : </span>"
		."<span class=\"msg_tit\">".htmlspecialchars($row[0])."</span>"."</div> ";
		
		echo " <div class=\"msg_tit\"><span class=\"msg_tit2\">".$row[1]."</span></div>";
		//刪除
		$sp_date = explode(" ",$row[2]);
		echo " <div class=\" msg_menu\">"."<span>".$sp_date[0]."</span>"." $view_de </div> ";		
		echo " </div>";
		
		
		
		
		
		//顯示回覆 (used ajax)
		$sqlRe = "Select Rcon,Rdate,name,Mainid,Rmember from msg,reply,member where Rid=Mid and Rmember=id and Rid='$row[4]'";
		$Re_res = db_query($sqlRe);	
		echo " <div class=\"msg_re_all\"> ";
		
		$msg_count = db_num_rows($Re_res);
			
		if($msg_count>0){
			echo "<div class=\"ajax_status\">";	
			echo "<div class=\"msg_show_all_reply\" onClick=\"set_arg(".$count.",".$row[4].",".$n.")\"><div class=\"msg_show_all\">顯示所有回覆</div><div class=\"msg_re_count\"><img src=\"image/chat.fw.png\"> ".$msg_count."</div></div>";
			$count++;
			echo "</div>";
			echo "<div class=\"ajax_reply\"></div>";
		}//if end
		

		


		echo "<div class=\"msg_reply_from\">";
		echo "<form action=\"re_msg.php\" method=\"post\" onSubmit=\"return check('re".$row[4]."');\" >";
		echo "<input type=\"hidden\" name=\"msg_id\" value=\"$row[4]\" />";
		echo "<input name=\"re_con\" type=\"text\" maxlength=\"150\" onkeydown=\"testForEnter();\" style=\"height:14px; width:300px\" id=\"re".$row[4]."\" /> ";
		echo "<input type=\"submit\" name=\"re_btn\" value=\"回覆\" class=\"btn_nor\">";
		echo "</form>";
		echo " </div> ";// for re box
        echo " </div> ";//for re all
	}
		echo " </div> "; // for msg all
}
?>

</div>







</body>
</html>
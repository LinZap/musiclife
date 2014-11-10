<?
include_once('db_fuc.php');
include_once('db_con.php');
header('Content-Type:text/html;charset=utf-8');
session_start();

$Rid = $_GET['Rid'];
$n =  $_GET['id'];


$sqlRe = "Select Rcon,Rdate,name,Mainid,Rmember from msg,reply,member where Rid=Mid and Rmember=id and Rid='$Rid'";

		$Re_res = db_query($sqlRe);		
		if(db_num_rows($Re_res)>0){	

			for($j=0;$j<db_num_rows($Re_res);$j++){
				
				$Rerow = db_fetch_array($Re_res);	
				if($n==$Rerow[4]) 
				$view_Rede = " | <a href=\"de_Remsg.php?mid=$Rerow[3]&id=$n\" class=\"msg_menu\">刪除</a>";
			    else $view_Rede="";
				echo " <div class=\"msg_re_box\"> ";
				echo " <div class=\"msg_tit\"><span>".$Rerow[2]
				."</span> :  "."<span class=\"msg_tit2\">".htmlspecialchars($Rerow[0])."</span> </div> ";
				//刪除
				$sp_date = explode(" ",$Rerow[1]);
				echo " <div class=\" msg_menu\"><span>".$sp_date[0]."</span> $view_Rede </div> ";
				echo "</div> "; // for re box	
			}// for end
		}//if end


?>
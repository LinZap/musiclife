<?

// 取得前一次sql後所影響的行數
function db_affected_rows() {
	return mysql_affected_rows ();
}

// 移動sql內部指針，res參數是 mysql_query()的結果，num 則是結果的行數
function db_data_seek($res, $num) {
	return mysql_data_seek ( $res, $num );
}
// 上一個sql操作錯誤訊息
function db_error(){return mysql_error();}

// 轉換特殊自元
function db_escape($param){
	return mysql_real_escape_string($param);
}

// 從結果中取得一行(陣列型態)，低於一行則false
function db_fetch_array($res){return mysql_fetch_array($res);}

//
function db_fetch_object($res){return mysql_fetch_object($res);}

//取得上一步inset指令後該資料的id
function insert_id($res){return mysql_insert_id($res);}

function db_num_rows($res){return mysql_num_rows($res);}

function db_query($sql){
	//mysql_query("SET NAMES UTF8");
	return mysql_query($sql);}
?>
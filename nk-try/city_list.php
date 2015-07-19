<?php
	error_reporting(0);
	//header("Access-Control-Allow-Origin: *");

	$request = $GLOBALS['HTTP_RAW_POST_DATA'];
	$request = json_decode($request,true);
	$letter = $request["letter"];

	$con = mysql_connect("rdsamizfjqznbmu.mysql.rds.aliyuncs.com","tv","tvtvtv"); 
	mysql_select_db("tv", $con);
	mysql_query("SET CHARACTER_SET_RESULTS=utf8");
	$result = mysql_query("SELECT `name` FROM  `city` WHERE  `letter` =  '$letter' LIMIT 0 , 30");
	while($r = mysql_fetch_array($result)){
		$data[] = $r['name'];
	}
	$data = json_encode($data);
	print_r($data);
	mysql_close($con);

?>

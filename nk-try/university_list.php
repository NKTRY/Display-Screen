<?php
	//error_reporting(0);
	//header("Access-Control-Allow-Origin: *");
	header('Content-Type: text/html; charset=UTF-8');
	$request = $GLOBALS['HTTP_RAW_POST_DATA'];
	$request = json_decode($request,true);
	$province = $request["province"];

	$con = mysql_connect("rdsamizfjqznbmu.mysql.rds.aliyuncs.com","tv","tvtvtv"); 
	mysql_select_db("tv", $con);
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT=utf8");
	mysql_query("SET CHARACTER_SET_RESULTS=utf8");
	$result = mysql_query("SELECT `name`,`url`,`logo`,`engine`,`description` FROM `university` WHERE `province`LIKE'%$province%' LIMIT 0 , 30");
	$i = 0;
	while($r = mysql_fetch_array($result)){
	 	$data[$i]['name'] = $r['name'];
	 	$data[$i]['url'] = $r['url'];
	 	$data[$i]['logo'] = $r['logo'];
	 	$data[$i]['engine'] = $r['engine'];
	 	$data[$i]['description'] = $r['description'];
	 	$i++;
	}

	$data = json_encode($data);
	print_r($data);
	mysql_close($con);
	//$r = mysql_fetch_array($result);
	//print_r($r);


?>

<?php
	error_reporting(0);

	$city = $_POST['city'];
	$letter = substr(strtoupper($_POST['letter']),0,1);

	$con = mysql_connect("rdsamizfjqznbmu.mysql.rds.aliyuncs.com","tv","tvtvtv"); 
	mysql_select_db("tv", $con);
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT=utf8");
	mysql_query("SET CHARACTER_SET_RESULTS=utf8");
	$result = mysql_query("INSERT INTO  `tv`.`city` (`id` ,`name` ,`letter`)VALUES (NULL ,  '$city',  '$letter');");
	if ($result) {
		echo "添加成功 ^_^";
	}else{
		echo "添加失败 %>_<%";
	}
	mysql_close($con);



?>

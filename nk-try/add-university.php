<?php
	error_reporting(0);

	$name = $_POST['name'];
	$url = $_POST['url'];
	$logo = $_POST['logo'];
	$engine = $_POST['engine'];
	$description = $_POST['description'];
	$province = $_POST['province'];


	$con = mysql_connect("rdsamizfjqznbmu.mysql.rds.aliyuncs.com","tv","tvtvtv"); 
	mysql_select_db("tv", $con);
	mysql_query("SET NAMES 'utf8'");
	mysql_query("SET CHARACTER_SET_CLIENT=utf8");
	mysql_query("SET CHARACTER_SET_RESULTS=utf8");
	$result = mysql_query("INSERT INTO  `tv`.`university` (`id` ,`name` ,`url`,`logo`,`engine`,`description`,`province`)VALUES (NULL ,  '$name',  '$url','logo','engine','description','province');");
	if ($result) {
		echo "添加成功 ^_^";
	}else{
		echo "添加失败 %>_<%";
	}
	mysql_close($con);



?>

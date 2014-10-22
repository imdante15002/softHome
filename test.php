<?php
	header("Content-type: text/html; charset=utf-8");
	$str=array('1','2','4');
	$a="<a href='1.htmm'>替换成功了</a>";
	$content="他家来了1个大侠，杀了2个土匪，他爹送了他们4个laomuji"; 
	$content=str_replace($str,$a,$content); 
	print_r($content) ;
	function AnchorText($content,$anchor,$anlink){
		$anlink="<a href=".$anlink.">".$anchor."</a>";
		$content=str_replace($anchor,$anlink,$content);
		return $content;
	}
?>
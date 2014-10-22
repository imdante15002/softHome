/**
 * 使用手册js效果代码
 * @return {[type]} [description]
 */
$(document).ready(function(){
	$(".manual-menu ul:first").show();

	$(".manual-menu ul ol:first").show();

	$(".manual-menu h3").click(function(){
		$(this).next("ul").slideToggle(200);
		$(this).addClass("on").siblings(this).removeClass("on");
	});

	$(".manual-menu>ul>li.add").click(function(){
		$(this).next("ol").slideToggle(200);
		$(this).toggleClass("del");
	});

	$(".manual-menu>ul>ol>li.add").click(function(){
		$(this).next("ol").slideToggle(200);
		$(this).toggleClass("del");
	});

	$(".manual-menu>ul>ol>ol>li.add").click(function(){
		$(this).next("ol").slideToggle(200);
		$(this).toggleClass("del");
	});

	$(".menu_right").hide();

	$(".menu_left").click(function(){
		$("#aside-menu").animate({width:160},50);
		$(this).hide();$(".menu_right").show();
		$(".manual-menu").css("left","160px");
		$(".manual-article").css("margin-left","160px");
	});

	$(".menu_right").click(function(){
		$("#aside-menu").animate({width:0},100);
		$(this).hide();
		$(".menu_left").show();
		$(".manual-menu").css("left","0");
		$(".manual-article").css("margin-left","0px");
	});

	$(".manual-menu ul li a").click(function(){
		var doc=$(this).attr('id');
		$(".manual-article").html("<div class='loading'></div>");
		$.ajax({
			type:"get",
			url:"manual/doc/"+doc+".html",
			success:function(response,xhr){
				$(".manual-article").html(response);
			}
		})
	})
});
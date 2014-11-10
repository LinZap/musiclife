// JavaScript Document
$(function(){
	
	// 隱藏所有子內容相片
	function fide_content(){
		$('#p423').hide(0);
		$('#p430').hide(0);
		$('#p312').hide(0);
		$('#p507').hide(0);
		$('#p521').hide(0);
		$('#p528').hide(0);
	}
	
	var in_dir=false;
	
	
	var photo="";
	for(var i=0;i<=4;i++)photo+="<div class=\"photo_img\"><a href=\"image/homework1/"+i+".jpg\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework1/little/"+i+".fw.png\" alt=\"學生作品\" border=\"0px\"/></a></div>";
	$('#p312').html(photo);

	var photo2="";
	for(var i=0;i<=5;i++)photo2+="<div class=\"photo_img\"><a href=\"image/homework2/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework2/little/"+i+".fw.png\" alt=\"學生作品\" border=\"0px\"/></a></div>";
	$('#p430').html(photo2);
	
	
	var photo3="";
	for(var i=0;i<=1;i++)photo3+="<div class=\"photo_img\"><a href=\"image/homework3/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework3/little/"+i+".fw.png\" alt=\"學生作品\" border=\"0px\"/></a></div>";
	$('#p423').html(photo3);
	
	
	var photo4="";
	for(var i=1;i<=8;i++)photo4+="<div class=\"photo_img\"><a href=\"image/homework4/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework4/little/"+i+".fw.png\" alt=\"學生作品\" border=\"0px\"/></a></div>";
	$('#p507').html(photo4);
	
	
	var photo5="";
	for(var i=1;i<=3;i++)photo5+="<div class=\"photo_img\"><a href=\"image/homework5/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework5/little/"+i+".fw.png\" alt=\"學生作品\" border=\"0px\"/></a></div>";
	$('#p521').html(photo5);
	
	var photo6="";
	for(var i=1;i<=5;i++)photo6+="<div class=\"photo_img\"><a href=\"image/homework6/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"學生作品\"><img src=\"image/homework6/little/"+i+".fw.png\" alt=\"校外參訪學習單\" border=\"0px\"/></a></div>";
	$('#p528').html(photo6);
	
	
	$('#goback_dir').hide(0);
	$('#p312').hide(0);
	$('#p430').hide(0);
	$('#p423').hide(0);
	$('#p507').hide(0);
	$('#p521').hide(0);
	$('#p528').hide(0);
	
	$('#goback_dir').bind('click',function(){
		if(in_dir){
			in_dir = false;
			fide_content();
			$('#dir').fadeIn(500);
			$('#goback_dir').hide(0);
			$('#dir_name').html("對話成果");
			}

	});
	
	
	
	
	// 顯示3/12 學生成果 
	$('#dir312').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("3/12 音樂與生命的對話 - 情意與愛");
		$('#dir').hide(0);
		$('#p312').fadeIn(1000);
		in_dir = true;
	});
	
	// 顯示4/30 學生成果 
	$('#dir430').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("4/30 音樂與科技的對話 - 制天命而用之");
		$('#dir').hide(0);
		$('#p430').fadeIn(1000);
		in_dir = true;
	});
	
	
	
		// 顯示4/23 學生成果 
	$('#dir423').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("4/23 前奏曲 - 生命是什麼");
		$('#dir').hide(0);
		$('#p423').fadeIn(1000);
		in_dir = true;
	});
	
	
			// 顯示5/07 學生成果 
	$('#dir507').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("5/07 音樂與醫療的對話-音樂治療");
		$('#dir').hide(0);
		$('#p507').fadeIn(1000);
		in_dir = true;
	});
	
	
			// 顯示5/21 學生成果 
	$('#dir521').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("5/21 音樂與戲劇的對話 - 漫談音樂劇");
		$('#dir').hide(0);
		$('#p521').fadeIn(1000);
		in_dir = true;
	});
	
	
			// 顯示5/28 學生成果 
	$('#dir528').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("5/28 校外參訪 - 台南藝術大學");
		$('#dir').hide(0);
		$('#p528').fadeIn(1000);
		in_dir = true;
	});
	
	
	
	
	
	
	});
	
	
	
	
	
	
$(function(){
	
	var in_dir=false;
	var photo="";
	var photo2="";
	var photo3="";
	var photo4="";
	var photo5="";
	var photo6="";
	var photo7="";
	var photo8="";
	var photo9="";
	var photo10="";
	
			
	
	// print 2/26 
	for(var i=1;i<=15;i++)photo+="<div class=\"photo_img\"><a href=\"image/2-26/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"2/26(二)上課一景\"><img src=\"image/2-26/little/"+i+".fw.png\" alt=\"2/26(二)上課一景\" border=\"0px\"/></a></div>";
	$('#p226').html(photo);
	
	
	
	// print 3/12
	$('#p312').html("&nbsp;&nbsp;&nbsp;&nbsp;<iframe width=\"640\" height=\"360\" src=\"http://www.youtube.com/embed/nrgwvyKS46Y\" frameborder=\"0\" allowfullscreen></iframe>");
	
	
	
	// print 3/19 (7 photo)
	for(var i=1;i<=7;i++)
	photo2+="<div class=\"photo_img\"><a href=\"image/3-19/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"3/19(二)上課一景\"><img src=\"image/3-19/little/"+i+".fw.png\" alt=\"3/19(二)上課一景\" border=\"0px\"/></a></div>";
	$('#p319').html(photo2);
	
	
	// print 4/09 (6 photo)
		for(var i=1;i<=6;i++)
		photo3+="<div class=\"photo_img\"><a href=\"image/4-09/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"4/09(二)上課一景\"><img src=\"image/4-09/little/"+i+".fw.png\" alt=\"4/09(二)上課一景\" border=\"0px\"/></a></div>";
	$('#p409').html(photo3);
	
	
	// print 4/23 (12 photo)
		for(var i=1;i<=12;i++)
		photo4+="<div class=\"photo_img\"><a href=\"image/4-23/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"4/23(二)上課一景\"><img src=\"image/4-23/little/"+i+".fw.png\" alt=\"4/23(二)上課一景\" border=\"0px\"/></a></div>";
	$('#p423').html(photo4);
	
	
	// print 4/30 (12 photo)
		for(var i=1;i<=12;i++)
		photo5+="<div class=\"photo_img\"><a href=\"image/4-30/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"4/30(二)演講紀實\"><img src=\"image/4-30/little/"+i+".fw.png\" alt=\"4/30(二)演講紀實\" border=\"0px\"/></a></div>";
	$('#p430').html(photo5);
	
	
	// print 5/07 (18 photo)
		for(var i=1;i<=18;i++)
		photo6+="<div class=\"photo_img\"><a href=\"image/5-07/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"5/07(二)演講紀實\"><img src=\"image/5-07/little/"+i+".fw.png\" alt=\"5/07(二)演講紀實\" border=\"0px\"/></a></div>";
	$('#p507').html(photo6);
	
	
	// print 5/21 (8 photo)
		for(var i=1;i<=8;i++)
		photo7+="<div class=\"photo_img\"><a href=\"image/5-21/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"5/21(二)演講紀實\"><img src=\"image/5-21/little/"+i+".fw.png\" alt=\"5/21(二)演講紀實\" border=\"0px\"/></a></div>";
	$('#p521').html(photo7);
	
	
		// print 6/07 (15 photo)
		for(var i=1;i<=15;i++)
		photo8+="<div class=\"photo_img\"><a href=\"image/6-07/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"6/07(二)校外參訪-台南藝術大學\"><img src=\"image/6-07/little/"+i+".fw.png\" alt=\"6/07(二)校外參訪-台南藝術大學\" border=\"0px\"/></a></div>";
	$('#p607').html(photo8);
	
	
			// print 6/07 (11 photo)
		for(var i=1;i<=11;i++)
		photo10+="<div class=\"photo_img\"><a href=\"image/6-08/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"6/07(二)校外參訪-動物之家\"><img src=\"image/6-08/little/"+i+".fw.png\" alt=\"6/07(二)校外參訪-動物之家\" border=\"0px\"/></a></div>";
	$('#p608').html(photo10);
	
	
		
		// print work (3 photo)
		for(var i=1;i<=10;i++)
		photo9+="<div class=\"photo_img\"><a href=\"image/work/"+i+".fw.png\"rel=\"lightbox[226]\"title=\"工作紀錄\"><img src=\"image/work/little/"+i+".fw.png\" alt=\"工作紀錄\" border=\"0px\"/></a></div>";
	$('#pwork').html(photo9);
		

	
	$('#goback_dir').hide(0);
	$('#p226').hide(0);
	$('#p312').hide(0);
	$('#p319').hide(0);
	$('#p409').hide(0);
	$('#p423').hide(0);
	$('#p430').hide(0);
	$('#p507').hide(0);
	$('#p521').hide(0);
	$('#p607').hide(0);
	$('#p608').hide(0);
	$('#pwork').hide(0);
	
	
	$('#goback_dir').bind('click',function(){
		if(in_dir){
			in_dir = false;
			$('#p226').hide(0);
			$('#p312').hide(0);
			$('#p319').hide(0);
			$('#p409').hide(0);
			$('#p423').hide(0);
			$('#p430').hide(0);
			$('#p507').hide(0);
			$('#p521').hide(0);
			$('#p607').hide(0);
			$('#p608').hide(0);
			$('#pwork').hide(0);
			$('#dir').fadeIn(500);
			$('#goback_dir').hide(0);
			$('#dir_name').html("上課紀實");
			}
		});
	
	
	// 顯示2/26上課照片 
	$('#dir226').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("2/26 上課剪影");
		$('#dir').hide(0);
		$('#p226').fadeIn(1000);
		in_dir = true;
	});
	
	// 顯示3/12上課照片 
	$('#dir312').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("3/12 協同教學實錄");
		$('#dir').hide(0);
		$('#p312').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示3/19上課照片 
	$('#dir319').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("3/19 上課剪影");
		$('#dir').hide(0);
		$('#p319').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示4/09上課照片 
	$('#dir409').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("4/09 上課剪影");
		$('#dir').hide(0);
		$('#p409').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示4/23上課照片 
	$('#dir423').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("4/23 上課剪影");
		$('#dir').hide(0);
		$('#p423').fadeIn(1000);
		in_dir = true;
	});
	
	
		// 顯示4/30上課照片 
	$('#dir430').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("4/30 演講剪影");
		$('#dir').hide(0);
		$('#p430').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示5/07上課照片 
	$('#dir507').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("5/07 演講剪影");
		$('#dir').hide(0);
		$('#p507').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示5/21上課照片 
	$('#dir521').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("5/21 演講剪影");
		$('#dir').hide(0);
		$('#p521').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示6/07上課照片(南藝大) 
	$('#dir607').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("6/07 校外參訪 - 台南藝術大學");
		$('#dir').hide(0);
		$('#p607').fadeIn(1000);
		in_dir = true;
	});
	
		// 顯示6/07上課照片(動物之家) 
	$('#dir608').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("6/07 校外參訪 - 善化動物之家");
		$('#dir').hide(0);
		$('#p608').fadeIn(1000);
		in_dir = true;
	});
	
	
		// 顯示工作紀錄
	$('#dirwork').bind('click',function(){
		$('#goback_dir').fadeIn(1000);	
		$('#dir_name').html("工作紀錄");
		$('#dir').hide(0);
		$('#pwork').fadeIn(1000);
		in_dir = true;
	});


	});
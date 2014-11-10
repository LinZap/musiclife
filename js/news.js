// JavaScript Document
$(function(){
	
	$('#apDiv1').hide(0);
	$('#apDiv2').hide(0);
	$('#apDiv3').hide(0);
	
	//var newsbox = [$('#news1'),$('#news2'),$('#news3'),$('#news4'),$('#news5'),$('#news6')];
	var down = [$('#d1'),$('#d2'),$('#d3'),$('#d4'),$('#d5'),$('#d6')];
	var con = [$('#c1'),$('#c2'),$('#c3'),$('#c4'),$('#c5')];
	var power = [true,true,true,true,false,true];	
	for(var j = 0;j <5 ;j++ )if(j!=4)con[j].hide(0);
	

	$('#tit_news').hide(0);
	for(var aa=0;aa<=5;aa++) 
	$('.news_box:eq('+aa+')').hide(0);
	

	$('#tit_news').fadeIn(1000);
	var speed =500;
	for(var aa=0;aa<=5;aa++) {
	$('.news_box:eq('+aa+')').delay(speed).show("slide",{direction:"right"},500);
	speed+=100;
	}
	
	
	$('.news_box:eq(0)').bind('click',function(){news(0)});
	$('.news_box:eq(1)').bind('click',function(){news(1)});
	$('.news_box:eq(2)').bind('click',function(){news(2)});
	$('.news_box:eq(3)').bind('click',function(){news(3)});
	$('.news_box:eq(4)').bind('click',function(){news(4)});


	function show(index){
		if(power[index]){
			con[index].slideDown(500);
			down[index].css({'background-image':'url(/image/up.fw.png)' });
			for(var yy=0;yy<=5;yy++)if(index!=yy)con[yy].slideUp(500);
		}
		else{
			con[index].slideUp(500);
			down[index].css({'background-image': 'url(/image/down.fw.png)'});	
			//for(var yy=0;yy<=5;yy++)if(index!=yy)con[yy].slideDown(500);
		}
	}
	

	
	function news(i){
		$('.news_box:eq('+i+')').stop(true,true);
		show(i);
		power[i]=!power[i];
	}
	

	
	
	$('#news2').bind("mouseover",function(){
		$('#apDiv1').show(100);
		});
	$('#news2').bind("mouseleave",function(){
		$('#apDiv1').hide(0);
		});
	
	
	$('#news4').bind("mouseover",function(){
		$('#apDiv2').show(100);
		});
	$('#news4').bind("mouseleave",function(){
		$('#apDiv2').hide(0);
		});
		
		
		
	$('#news3').bind("mouseover",function(){
		$('#apDiv3').show(100);
		});
	$('#news3').bind("mouseleave",function(){
		$('#apDiv3').hide(0);
		});	
	
	});
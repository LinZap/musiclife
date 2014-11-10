// JavaScript Document
$(function(){
	$('#g2').hide(0);
	$('#g3').hide(0);
	$('#g4').hide(0);
	
	$(window).bind("scroll",function(){
		var top = $(window).scrollTop();
		
		if(top<650)$('#g1').show("slide",{direction:"left"},500);
		else $('#g1').hide("slide",{direction:"left"},1000);
			
		if(top>=450 && top<940)$('#g2').show("slide",{direction:"right"},500);
		else $('#g2').hide("slide",{direction:"right"},1000);

		if(top>=740 && top<1330)$('#g3').show("slide",{direction:"left"},500);
		else $('#g3').hide("slide",{direction:"left"},1000);
		
		if(top>1130)$('#g4').show("slide",{direction:"right"},500);
		else $('#g4').hide("slide",{direction:"right"},1000);
			
		});
		

	});
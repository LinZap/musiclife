// JavaScript Document

$(function(){
	
	var page = $G("page");
	if(page=="")page="home.html";
	
	
	$('#contant').load(page);
	
	$('#news').bind("click",function(){
		
		if(page!="home.html"){
		remove_position();
		page="home.html"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		
		}
	});
	
	$('#group').bind("click",function(){	

	if(page!="group.html"){
		remove_position();
		page="group.html"
		position();
		$('#contant').fadeOut(1000);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		
		}
	});
	
	/*
	$('#login').bind("click",function(){	
	if(page!="login.php"){
		remove_position();
		page="login.php"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);

		}
	});
	
	
	$('#signup').bind("click",function(){	
	if(page!="signup.php"){
		remove_position();
		page="signup.php"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		}
	});
	*/

	$('#date').bind("click",function(){	
	if(page!="date.html"){
		remove_position();
		page="date.html"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		}
	});
	
	$('#course').bind("click",function(){	
	if(page!="course.html"){
		remove_position();
		page="course.html"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		}
	});
	
	
	$('#textbook').bind("click",function(){	
	if(page!="contant3.html"){
		remove_position();
		page="contant3.html"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);
		}
	});
	
	
	
	$('#photo').bind("click",function(){	
	if(page!="photo2.html"){
		remove_position();
		page="photo2.html"
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);

		}
	});
	/*
	$('#message').bind("click",function(){	
	if(page!="msg.php"){
		remove_position();
		page="msg.php";
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);

		}
	});
	*/
	
	$('#result').bind("click",function(){	
	if(page!="result.html"){
		remove_position();
		page="result.html";
		position();
		$('#contant').fadeOut(500);
		$('#contant').load(page);
		$('#contant').stop(true,true);
		$('#contant').fadeIn(1000);

		}
	});
	
	
	position();
	
	function position(){
		
		switch(page){
			
			case("home.html"):
			$('#news').addClass('menu_list_selected');
			break;
			case("group.html"):
			$('#group').addClass('menu_list_selected');
			break;
			case("login.php"):
			$('#login').addClass('menu_list_selected');
			break;
			case("signup.php"):
			$('#signup').addClass('menu_list_selected');
			break;
			case("date.html"):
			$('#date').addClass('menu_list_selected');
			break;
			case("course.html"):
			$('#course').addClass('menu_list_selected');
			break;
			case("contant3.html"):
			$('#textbook').addClass('menu_list_selected');
			break;
			case("photo2.html"):
			$('#photo').addClass('menu_list_selected');
			break;
			case("msg.php"):
			$('#message').addClass('menu_list_selected');
			break;
			case("result.html"):
			$('#result').addClass('menu_list_selected');
			break;
			default:
			
			}
		
		
		}
		
		
		function remove_position(){
		
		switch(page){
			
			case("home.html"):
			$('#news').removeClass('menu_list_selected');
			break;
			case("group.html"):
			$('#group').removeClass('menu_list_selected');
			break;
			case("login.php"):
			$('#login').removeClass('menu_list_selected');
			break;
			case("signup.php"):
			$('#signup').removeClass('menu_list_selected');
			break;
			case("date.html"):
			$('#date').removeClass('menu_list_selected');
			break;
			case("course.html"):
			$('#course').removeClass('menu_list_selected');
			break;
			case("contant3.html"):
			$('#textbook').removeClass('menu_list_selected');
			break;
			case("photo2.html"):
			$('#photo').removeClass('menu_list_selected');
			break;
			case("msg.php"):
			$('#message').removeClass('menu_list_selected');
			break;
			case("result.html"):
			$('#result').removeClass('menu_list_selected');
			break;
			
			default:
			
			}
		
		
		}
		
	
	
	//group js
	
	
	//group js
	
	
// get url parameter
function $G(){
 var Url=top.window.location.href; 
 var u,g,StrBack=''; 
 if(arguments[arguments.length-1]=="#") u=Url.split("#"); 
 else u=Url.split("?"); 
 if (u.length==1) g=''; 
 else g=u[1];  
 if(g!=''){ gg=g.split("&");
 var MaxI=gg.length; str = arguments[0]+"="; 
 for(i=0;i<MaxI;i++){ 
 if(gg[i].indexOf(str)==0) { 
 StrBack=gg[i].replace(str,""); break; }
  } 
 } return StrBack; 
}
	

	
	
	
	
	
});




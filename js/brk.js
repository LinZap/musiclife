// JavaScript Document
$(function(){
	
	 var brk_c = new Array( $('#c1'), $('#c2') , $('#c3') , $('#c4') ,$('#c5'),$('#c6'),$('#c7'),$('#c8'),$('#c9'),$('#c10'),$('#c11'),$('#c12'),$('#c13'),$('#c14'),$('#c15'),$('#c16'),$('#c17') );
	
	 var bk = new Array($('#bk1'),$('#bk2'),$('#bk3'),$('#bk4'),$('#bk5'),$('#bk6'),$('#bk7'),$('#bk8'),$('#bk9'),$('#bk10'),$('#bk11'),$('#bk12'),$('#bk13'),$('#bk14'),$('#bk15'),$('#bk16'),$('#bk17'));
	
	 var power = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
	
	
	 var ex = new Array( $('#ex1'), $('#ex2') , $('#ex3') , $('#ex4') ,$('#ex5'),$('#ex6'),$('#ex7'),$('#ex8'),$('#ex9'),$('#ex10'),$('#ex11'),$('#ex12'),$('#ex13'),$('#ex14'),$('#ex15'),$('#ex16'),$('#ex17'));
	
	
	//hide all
	for(var i=0;i<17;i++){brk_c[i].hide(i);	}	
	
	
	
	
	
	$('#ex1').bind("click",function(){
			$('#c1').hide(500);
			power[0]=false;
		});
		
	$('#ex2').bind("click",function(){
			$('#c2').hide(500);
			power[1]=false;
		});
		
	$('#ex3').bind("click",function(){
			$('#c3').hide(500);
			power[2]=false;
		});		
	$('#ex4').bind("click",function(){
			$('#c4').hide(500);
			power[3]=false;
		});		
	$('#ex5').bind("click",function(){
			$('#c5').hide(500);
			power[4]=false;
		});
		$('#ex6').bind("click",function(){
			$('#c6').hide(500);
			power[5]=false;
		});
		$('#ex7').bind("click",function(){
			$('#c7').hide(500);
			power[6]=false;
		});
		$('#ex8').bind("click",function(){
			$('#c8').hide(500);
			power[7]=false;
		});
		$('#ex9').bind("click",function(){
			$('#c9').hide(500);
			power[8]=false;
		});
		$('#ex10').bind("click",function(){
			$('#c10').hide(500);
			power[9]=false;
		});
		$('#ex11').bind("click",function(){
			$('#c11').hide(500);
			power[10]=false;
		});
		$('#ex12').bind("click",function(){
			$('#c12').hide(500);
			power[11]=false;
		});
		$('#ex13').bind("click",function(){
			$('#c13').hide(500);
			power[12]=false;
		});
		$('#ex14').bind("click",function(){
			$('#c14').hide(500);
			power[13]=false;
		});
		$('#ex15').bind("click",function(){
			$('#c15').hide(500);
			power[14]=false;
		});
		$('#ex16').bind("click",function(){
			$('#c16').hide(500);
			power[15]=false;
		});
		$('#ex17').bind("click",function(){
			$('#c17').hide(500);
			power[16]=false;
		});
	
	
	$('#bk1').bind("click",function(){
		ch(0);
		if(power[0]){brk_c[0].hide(500);power[0]=false;}
		else{brk_c[0].show(500);power[0]=true;}
		});
	
	
	$('#bk2').bind("click",function(){
		ch(1);
		if(power[1]){brk_c[1].hide(500);power[1]=false;}
		else{brk_c[1].show(500);power[0]=true;}
		});
		
		
		$('#bk3').bind("click",function(){
		ch(2);
		if(power[2]){brk_c[2].hide(500);power[2]=false;}
		else{brk_c[2].show(500);power[2]=true;}
		});
		
		$('#bk4').bind("click",function(){
		ch(3);
		if(power[3]){brk_c[3].hide(500);power[3]=false;}
		else{brk_c[3].show(500);power[3]=true;}
		});
		$('#bk5').bind("click",function(){
		ch(4);
		if(power[4]){brk_c[4].hide(500);power[4]=false;}
		else{brk_c[4].show(500);power[4]=true;}
		});
		$('#bk6').bind("click",function(){
		ch(5);
		if(power[5]){brk_c[5].hide(500);power[5]=false;}
		else{brk_c[5].show(500);power[5]=true;}
		});
		
		$('#bk7').bind("click",function(){
		ch(6);
		if(power[6]){brk_c[6].hide(500);power[6]=false;}
		else{brk_c[6].show(500);power[6]=true;}
		});
		$('#bk8').bind("click",function(){
		ch(7);
		if(power[7]){brk_c[7].hide(500);power[7]=false;}
		else{brk_c[7].show(500);power[7]=true;}
		});
		$('#bk9').bind("click",function(){
		ch(8);
		if(power[8]){brk_c[8].hide(500);power[8]=false;}
		else{brk_c[8].show(500);power[8]=true;}
		});
		$('#bk10').bind("click",function(){
		ch(9);
		if(power[9]){brk_c[9].hide(500);power[9]=false;}
		else{brk_c[9].show(500);power[9]=true;}
		});
		$('#bk11').bind("click",function(){
		ch(10);
		if(power[10]){brk_c[10].hide(500);power[10]=false;}
		else{brk_c[10].show(500);power[10]=true;}
		});
		$('#bk12').bind("click",function(){
		ch(11);
		if(power[11]){brk_c[11].hide(500);power[11]=false;}
		else{brk_c[11].show(500);power[11]=true;}
		});
		$('#bk13').bind("click",function(){
		ch(12);
		if(power[12]){brk_c[12].hide(500);power[12]=false;}
		else{brk_c[12].show(500);power[12]=true;}
		});
		$('#bk14').bind("click",function(){
		ch(13);
		if(power[13]){brk_c[13].hide(500);power[13]=false;}
		else{brk_c[13].show(500);power[13]=true;}
		});
		$('#bk15').bind("click",function(){
		ch(14);
		if(power[14]){brk_c[14].hide(500);power[14]=false;}
		else{brk_c[14].show(500);power[14]=true;}
		});
		$('#bk16').bind("click",function(){
		ch(15);
		if(power[15]){brk_c[15].hide(500);power[15]=false;}
		else{brk_c[15].show(500);power[15]=true;}
		});
		$('#bk17').bind("click",function(){
		ch(16);
		if(power[16]){brk_c[16].hide(500);power[16]=false;}
		else{brk_c[16].show(500);power[16]=true;}
		});
	
	
	
	function ch(idx){
		for(var j=0;j<17;j++){
			if(power[j]==true && j!=idx){}
				brk_c[j].hide(500);
				power[j]=false;
			}
		}
	
	
	});
	
	
$(function() {
	//exbn.html
	var countNum;
	var cardArray;
	var cardy;
	var time;
	var ab;	
	var timer;
    var minutes;
    var seconds;
	init();
	function init(){
		cardArray = ["人","大","工","一","王","牛","之","廾","中","丁","卜","小","月","無","口","木","日","几","二","十","山","弋","三","又","夕","八"];
         cardy = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		time = 0;
		for(var i = 0; i <= 25; i++){
			var r = Math.floor(Math.random()*25);
			var tmpNum = cardArray[i];		
			cardArray[i] = cardArray[r];
			cardArray[r] = tmpNum;
		}
		$("#numbers").html("");
		for(var i = 25; i >= 0; i--){
		var cardNum = cardy[i];
			$("#numbers").prepend("<div>"+ cardNum +"</div>");
		}
    		 countNum=0;
	}

	$("#stt").click(function(){
		$("#startScene").hide();
		$("#cc").show();
		fdw(countNum);
	$("#wd").hover(function(){
//	$("#wd").mousedown(function(){
				$(this).html(oi($(this).html()));
				$(this).css({'background':'darkseagreen','color':'red'});
                	},function(){
                        $(this).html(fdw(countNum));
						$(this).css({'background':'seagreen','color':'yellow'});
	});		 

		$("#numbers div").click(function(){
			var num = choi($(this).html());
			$("#wd").focus();
			if(num == ab){
				$("#wd").fadeOut().fadeIn();
				$("#wd").css({"backgroundColor":"seagreen"});
				$(this).addClass("hit").off('click');
				 countNum++;
				 fdw(countNum);
				if(countNum == 26){
					clearInterval(timer);
					$("#stt").html("《成功》重新按鈕開始？");
					$("#stt").css({'width':'250px','margin':'0px auto','zIndex':100,'position':'relative','opacity': 0}).animate({
								"top":-250,
								"opacity": 1,
								"fontSize": "2em"
							  }, 1500 );
					$("#startScene").show();
					if($("#record span").html() - $("#timer span").html()> 0 || $("#record span").html() == 0){
						$("#record span").html($("#timer span").html());
					}
				init();	
				}
			}else{
				$("#wd").fadeOut().fadeIn();
				$("#wd").css({"backgroundColor":"red"});				
			}
			$("#wd").focus();
		});
		timerFunc();
		timer = setInterval(timerFunc, 1000);
	});
	function timerFunc(){
		time++;
        minutes = Math.floor(time / 60); // 计算分钟
        seconds = time % 60; // 计算秒数

		if(time){
		$("#timer span").html(minutes+'分'+seconds+'秒');
	  }
	}
	
  
	function fdw(countNum){
	  $("#wd").html(cardArray[countNum]);
	  ab = $("#wd").html();
	  countNum++;
	}
	function choi(oi){
		var oi;
		switch(oi){
			case 'A':
			return '人';
			break;
			case 'B':
			return '大';
			break;
			case 'C':
			return '工';
			break;
			case 'D':
			return '一';
			break;
			case 'E':
			return '王';
			break;
			case 'F':
			return '牛';
			break;
			case 'G':
			return '之';
			break;
			case 'H':
			return '廾';
			break;
			case 'I':
			return '中';
			break;
			case 'J':
			return '丁';
			break;
			case 'K':
			return '卜';
			break;
			case 'L':
			return '小';
			break;
			case 'M':
			return '月';
			break;
			case 'N':
			return '無';
			break;
			case 'O':
			return '口';
			break;
			case 'P':
			return '木';
			break;
			case 'Q':
			return '日';
			break;
			case 'R':
			return '几';
			break;
			case 'S':
			return '二';
			break;
			case 'T':
			return '十';
			break;
			case 'U':
			return '山';
			break;
			case 'V':
			return '弋';
			break;
			case 'W':
			return '三';
			break;
			case 'X':
			return '又';
			break;
			case 'Y':
			return '夕';
			break;
			case 'Z':
			return '八';
			break;
						
		}
	}
	
		function oi(o){
		var o;
		switch(o){
			case '人':
			return 'A';
			break;
			case '大':
			return 'B';
			break;
			case '工':
			return 'C';
			break;
			case '一':
			return 'D';
			break;
			case '王':
			return 'E';
			break;
			case '牛':
			return 'F';
			break;
			case '之':
			return 'G';
			break;
			case '廾':
			return 'H';
			break;
			case '中':
			return 'I';
			break;
			case '丁':
			return 'J';
			break;
			case '卜':
			return 'K';
			break;
			case '小':
			return 'L';
			break;
			case '月':
			return 'M';
			break;
			case '無':
			return 'N';
			break;
			case '口':
			return 'O';
			break;
			case '木':
			return 'P';
			break;
			case '日':
			return 'Q';
			break;
			case '几':
			return 'R';
			break;
			case '二':
			return 'S';
			break;
			case '十':
			return 'T';
			break;
			case '山':
			return 'U';
			break;
			case '弋':
			return 'V';
			break;
			case '三':
			return 'W';
			break;
			case '又':
			return 'X';
			break;
			case '夕':
			return 'Y';
			break;
			case '八':
			return 'Z';
			break;
		}
	}
});
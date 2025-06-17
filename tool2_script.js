$(function() {
//exrn.html
	var countNum;
	var cardArray;
	var cardy;
	var time;
	var num;
	var v,vv;
	var ab;	
	var timer;
	var minutes;
    var seconds;
	init();
	function init(){
		cardArray = ["疋","走","臾","夷","尺","夭","央","矢","夾","土","壬","丘","上","止","巨","臣","里","且","血","亞","互","去","幺","厶","五","正","丑","隹","彐","年","事","扌","乙","已","巴","毛","甩","亡","匹","甚","辶","斤","井","片","弗","卅","卉","肅","赤","申","巾","弔","了","丨","亅","阝","丩","卩","忄","弓","勿","另","予","考","禺","禹","牙","身","矛","孓","卡","卞","亻","不","糸","衤","礻","爪","永","水","束","東","朿","用","而","冖","冂","鳥","魚","豕","犭","豸","灬","廿","古","舌","凹","凸","未","朱","禾","隶","來","目","田","白","由","西","酉","面","母","毋","兄","見","克","允","兀","尤","比","羽","哥","多","竹","林","圭","冫","千","子","孑","干","于","耳","車","本","出","匕","也","七","世","臼","屯","我","民","戈","瓦","衣","艮","瓜","氏","川","品","森","州","氵","文","及","史","丈","父","反","更","戶","厂","乡","丿","門","鬥","非","北","只","貝","頁","尺","六","共","真","與","頁"];
         cardy = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		time = 0;
		for(var i = 0; i <cardArray.length; i++){
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
				$(this).html(oi($(this).html()));
				$(this).css({'background':'darkseagreen','color':'red'});
                	}, function(){
                        $(this).html(fdw(countNum));
						$(this).css({'background':'seagreen','color':'yellow'});
	});			 

		$("#numbers div").click(function(){
			vv= choi($(this).html());
    		num = $.inArray($("#wd").html(),vv);
			num=vv[num];
            $(this).fadeOut().fadeIn();
			if(num == ab){
				$("#wd").fadeOut().fadeIn();
				$("#wd").css({"backgroundColor":"seagreen"});
				 countNum++;
				 fdw(countNum);
				if(countNum == cardArray.length){
					clearInterval(timer);
					$("#stt").html("《成功》重新按鈕開始？");
					$("#stt").css({'width':'250px','margin':'0px auto','zIndex':100,'position':'relative','opacity': 0}).animate({
								top:-250,
								opacity: 1,
								fontSize: "2em"
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
			return v=["疋","走","夷","臾","尺"];
			break;
			case 'B':
			return v=["夭","央","矢","夾"];
			break;
			case 'C':
			return v=["土","壬","丘","上","止","里"];
			break;
			case 'D':
			return v=["且","血","亞","互","去","幺","厶"];
			break;
			case 'E':
			return v=["五","正","丑","隹","彐"];
			break;
			case 'F':
			return v=["年","事","扌"];
			break;
			case 'G':
			return v=["已","巴","巨","臣","甩","屯","辶"];
			break;
			case 'H':
			return v=["斤","井","弗","卅","卉","肅","赤"];
			break;
			case 'I':
			return v=["申","巾","弔","了","丨","亅","阝","丩","卩","忄"];
			break;
			case 'J':
			return v=["弓","勿","另","予","片","考","禺","禹"];
			break;
			case 'K':
			return v=["牙","身","矛","孓","卡","卞","亻"];
			break;
			case 'L':
			return v=["不","糸","衤","礻","爪","永","水","束","東","朿"];
			break;
			case 'M':
			return v=["用","而","冖","冂"];
			break;
			case 'N':
			return v=["鳥","魚","豕","犭","豸","灬"];
			break;
			case 'O':
			return v=["廿","古","舌","凹","凸"];
			break;
			case 'P':
			return v=["未","朱","禾","隶","來"];
			break;
			case 'Q':
			return v=["目","田","白","由","西","酉","面","母","毋"];
			break;
			case 'R':
			return v=["兄","見","克","允","兀","瓦","尤"];
			break;
			case 'S':
			return v=["比","羽","哥","多","竹","林","圭","冫"];
			break;
			case 'T':
			return v=["千","子","孑","干","于","耳","車","本"];
			break;
			case 'U':
			return v=["乙","出","匕","也","七","世","臼","毛","亡","匹","甚"];
			break;
			case 'V':
			return v=["我","民","戈","衣","艮","瓜","氏"];
			break;
			case 'W':
			return v=["川","品","森","州","氵"];
			break;
			case 'X':
			return v=["文","及","史","丈","父","反","更"];
			break;
			case 'Y':
			return v=["戶","厂","乡","丿"];
			break;
			case 'Z':
			return v=["門","鬥","非","北","只","六","貝","真","共","與","頁"];
			break;
		}
	}

		function oi(o){
		var o;
	        switch(o){	
			case "疋": return 'A'; break;
			case "走": return 'A'; break;
			case "夷": return 'A'; break;
            case "臾": return 'A'; break;
			case "尺": return 'A'; break;
			case "夭": return 'B'; break; 
			case "央": return 'B'; break; 
			case "矢": return 'B'; break; 
			case "夾": return 'B'; break;
			case "土": return 'C'; break; 
			case "壬": return 'C'; break; 
			case "丘": return 'C'; break;	
			case "上": return 'C'; break; 
			case "止": return 'C'; break; 
			case "里": return 'C'; break;
			case "且": return 'D'; break; 
			case "血": return 'D'; break; 
			case "亞": return 'D'; break; 
			case "互": return 'D'; break; 
			case "去": return 'D'; break; 
			case "幺": return 'D'; break; 
			case "厶": return 'D'; break; 
			case "五": return 'E'; break; 
			case "正": return 'E'; break; 
			case "丑": return 'E'; break; 
			case "隹": return 'E'; break; 
			case "彐": return 'E'; break;
			case "年": return 'F'; break; 
			case "事": return 'F'; break; 
			case "扌": return 'F'; break;
			case "已": return 'G'; break; 
			case "巴": return 'G'; break; 
			case "甩": return 'G'; break;
			case "巨": return 'G'; break; 
			case "臣": return 'G'; break;
            case "屯": return 'G'; break; 				
			case "辶": return 'G'; break; 
			case "斤": return 'H'; break; 
			case "井": return 'H'; break; 
			case "弗": return 'H'; break; 
			case "卅": return 'H'; break; 
			case "卉": return 'H'; break; 
			case "肅": return 'H'; break; 
			case "赤": return 'H'; break; 
			case "申": return 'I'; break; 
			case "巾": return 'I'; break; 
			case "弔": return 'I'; break; 
			case "了": return 'I'; break; 
			case "丨": return 'I'; break; 
			case "亅": return 'I'; break; 
			case "阝": return 'I'; break; 
			case "丩": return 'I'; break; 
			case "卩": return 'I'; break; 
			case "忄": return 'I'; break; 
			case "弓": return 'J'; break; 
			case "勿": return 'J'; break; 
			case "另": return 'J'; break; 
			case "予": return 'J'; break;
			case "片": return 'J'; break; 			
			case "考": return 'J'; break; 
			case "禺": return 'J'; break; 
			case "禹": return 'J'; break; 
			case "牙": return 'K'; break; 
			case "身": return 'K'; break; 
			case "矛": return 'K'; break; 
			case "孓": return 'K'; break; 
			case "卡": return 'K'; break; 
			case "卞": return 'K'; break; 
			case "亻": return 'K'; break; 
			case "不": return 'L'; break; 
			case "糸": return 'L'; break;
			case "衤": return 'L'; break; 
			case "礻": return 'L'; break; 
			case "爪": return 'L'; break; 
			case "永": return 'L'; break; 
			case "水": return 'L'; break; 
			case "束": return 'L'; break; 
			case "東": return 'L'; break; 
			case "朿": return 'L'; break; 
			case "用": return 'M'; break; 
			case "而": return 'M'; break; 
			case "冖": return 'M'; break; 
			case "冂": return 'M'; break; 
            case "鳥": return 'N'; break;
            case "魚": return 'N'; break;			
			case "豕": return 'N'; break; 
			case "犭": return 'N'; break; 
			case "豸": return 'N'; break; 
			case "灬": return 'N'; break; 
			case "廿": return 'O'; break; 
			case "古": return 'O'; break; 
			case "舌": return 'O'; break; 
			case "凹": return 'O'; break; 
			case "凸": return 'O'; break; 
			case "未": return 'P'; break; 
			case "朱": return 'P'; break; 
			case "禾": return 'P'; break; 
			case "隶": return 'P'; break; 
			case "來": return 'P'; break;
			case "目": return 'Q'; break; 
			case "田": return 'Q'; break; 
			case "白": return 'Q'; break; 
			case "由": return 'Q'; break; 
			case "西": return 'Q'; break; 
			case "酉": return 'Q'; break; 
			case "面": return 'Q'; break; 
			case "母": return 'Q'; break; 
			case "毋": return 'Q'; break;
			case "兄": return 'R'; break; 
			case "見": return 'R'; break; 
			case "克": return 'R'; break; 
			case "允": return 'R'; break; 
			case "兀": return 'R'; break; 
			case "尤": return 'R'; break;
            case "瓦": return 'R'; break; 			
			case "比": return 'S'; break; 
			case "羽": return 'S'; break; 
			case "哥": return 'S'; break; 
			case "多": return 'S'; break; 
			case "竹": return 'S'; break; 
			case "林": return 'S'; break; 
			case "圭": return 'S'; break; 
			case "冫": return 'S'; break;
			case "千": return 'T'; break; 
			case "子": return 'T'; break;
			case "孑": return 'T'; break;
			case "干": return 'T'; break; 
			case "于": return 'T'; break; 
			case "耳": return 'T'; break; 
			case "車": return 'T'; break; 
			case "本": return 'T'; break;
			case "出": return 'U'; break; 
			case "匕": return 'U'; break; 
			case "也": return 'U'; break; 
			case "七": return 'U'; break; 
			case "世": return 'U'; break; 
			case "臼": return 'U'; break;
			case "毛": return 'U'; break;
			case "亡": return 'U'; break; 
			case "匹": return 'U'; break; 
			case "甚": return 'U'; break;
			case "乙": return 'U'; break; 	 			
			case "我": return 'V'; break; 
			case "民": return 'V'; break; 
			case "戈": return 'V'; break; 
			case "衣": return 'V'; break; 
			case "艮": return 'V'; break; 
			case "瓜": return 'V'; break; 
			case "氏": return 'V'; break;
			case "川": return 'W'; break; 
			case "品": return 'W'; break; 
			case "森": return 'W'; break; 
			case "州": return 'W'; break; 
			case "氵": return 'W'; break;
			case "文": return 'X'; break; 
			case "及": return 'X'; break; 
			case "史": return 'X'; break; 
			case "丈": return 'X'; break; 
			case "父": return 'X'; break; 
			case "反": return 'X'; break; 
			case "更": return 'X'; break;
			case "戶": return 'Y'; break; 
			case "厂": return 'Y'; break; 
			case "乡": return 'Y'; break; 
			case "丿": return 'Y'; break;
			case "門": return 'Z'; break;
           	case "鬥": return 'Z'; break;
			case "非": return 'Z'; break; 
			case "北": return 'Z'; break; 
			case "只": return 'Z'; break; 
			case "貝": return 'Z'; break; 
			case "頁": return 'Z'; break;
			case "六": return 'Z'; break;
			case "共": return 'Z'; break;
			case "真": return 'Z'; break;
			case "與": return 'Z'; break;

		}
	}
});

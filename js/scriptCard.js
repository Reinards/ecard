//tcolor = color
//fsize = font size
//talign = font alignment
//teffect = effect
//content = text
//ccol = cards bg
//pcol = pages bg
//shadow = cards shadow
//bg1 = bg page
//bg2 = bg card
//bthik = border size
//bcol = border color
//border = border

function setCard(){
	var color = pa("tcolor");
	var size = pa("fsize");
	var align = pa("talign");
	var effect = pa("teffect");
	var content = pa("content");
	var bgcard = pa("ccol");
	var bgbg = pa("pcol");
	var shadow = pa("shadow");
	var texBg = pa("bg1");

	var border = pa("border");
	var borderColor = pa("bcol");
	var borderSize = pa("bthik");

	var sticker = pa("sticker");
	var stW = pa("stW");
	var stH = pa("stH");
	var stX = pa("stX");
	var stY = pa("stY");
	var tx = pa("tx");
	var ty = pa("ty");
	var valign = pa("valign");
	var from = pa("from");
	var to = pa("to");
	var translate = pa("translate");
	
	$(document).ready(function(){
		$(".cardtxt").css("font-size", size+"px");


		if(translate!="true"){
			document.title = "From "+from+" to "+to+"!"
		}else{
			if(from=="Me")from="Manis";
			if(to=="You")to="Tev";
			document.title = "No "+from+", "+to+"!"
		}

		if(color[0] == ">"){
			color = color.replace('Q','#');
			$(".cardtxt").css("color", color);
		}else $(".cardtxt").css("color", color);

		if(valign=="false"){
			$(".cardtxt").css("line-height", size+"px");
		}

		$(".cardtxt").css("text-align", align);

		if(bgcard[0] == ">"){
			bgcard = bgcard.replace('Q','#');
			$(".card").css("background-color", bgcard);
		}else $(".card").css("background-color", bgcard);

		if(bgbg[0] == ">"){
			bgbg = bgbg.replace('Q','#');
			$("body").css("background-color", bgbg);
		}else $("body").css("background-color", bgbg);

		$(".cardtxt").text(content);

		if(effect=="bold"){
			$(".cardtxt").css("font-weight", "bold");
		}
		if(effect=="none"){
			$(".cardtxt").css("font-weight", "normal");
			$(".cardtxt").css("text-decoration", "none");
		}
		if(effect=="overline" || effect=="underline"){
			$(".cardtxt").css("text-decoration", effect);
		}
		
		if(shadow=="true"){
			$(".card").css("box-shadow", "0px 2px 6px black");
		}else if(shadow=="false"){
			$(".card").css("box-shadow", "none");
		}

		if(border=="true"){
			borderColor = borderColor.replace('Q','#');
			$(".card").css("border", borderSize+"px solid "+borderColor);
		}else if(border=="false"){
			$(".card").css("border", "none");
		}

		if(sticker!="0"){
			console.log(sticker);
			var sturl = "./images/st"+sticker+".png"
			$(".card").css("background-image", 'url(' + sturl + ')');
			$(".card").css("background-repeat", 'no-repeat');
			$(".card").css("background-size", stW+'px '+stH+"px");
			$(".card").css("background-position", stX+'px '+stY+"px");
		}else if(sticker=="0"){
			$(".card").css("background-image", "none");
		}

		var url1 = "./images/nr"+texBg+".png";

		if(texBg!=0){
			$("body").css("background-image", 'url(' + url1 + ')');
			$("body").css("background-size", '300px');
		}
		$(".cardtxt").css("margin-left", tx+"px");
		$(".cardtxt").css("margin-top", ty+"px");
	});
}

function pa(name) {
  	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
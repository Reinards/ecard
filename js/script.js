setInterval(function(){ textProp() }, 50);


var fsize=40;
var tcolor="#013a4a";
var talign="center";
var teffect="none";
var content="Happy Birthday!";
var cardcol="#3fb9cc";
var bgcol="#A1D890";
var shadow = true;
var valign = true;
var bg1 = 5;
var border = false;
var bcolor = "#000000"; //Border color
var bthik = 4; //Border thikness
var font = 6;

var sticker = 39;
var stW = 200;
var stH = 200;
var stX = 20;
var stY = 108;
var tX = 0;
var tY = 0;

var from = "Me";
var to = "You";

var translate=false;

var link="http://reinards.github/ecard/card.html/";

function textProp(){
	text();
	color();
	align();
	effect();
	gcontent();
	cardColor();
	bgColor();
	shadowing();
	valigning();
	textures();
	stickering();
	bordering();
	fromto();
	linkit();
}

function text(){
	var fontSize = document.getElementById("fsize").value;
	fontSize = parseInt(fontSize);
	fsize = fontSize;
	var tx = document.getElementById("tX").value;
	var ty = document.getElementById("tY").value;
	tx = parseInt(tx);
	ty = parseInt(ty);
	tY=ty;
	tX=tx;
	var fontt = document.getElementById("font").value;
	fontt = parseInt(fontt);
	if(fontt==1)font="Arial";
	else if(fontt==2)font="Courier";
	else if(fontt==3)font="Georgia";
	else if(fontt==4)font="Courier New";
	else if(fontt==5)font="Times New Roman";
	else if(fontt==6)font="Ubuntu";
	else if(fontt==7)font="Calibri";

	$(".cardText").css("font-size", fontSize+"px");
	$(".cardText").css("font-family", font+", Arial");
	$(".cardText").css("margin-left", tX+"px");
	$(".cardText").css("margin-top", tY+"px");
}
function gcontent(){
	var txt = document.getElementById("text").value;
	content = txt;
	$(".cardText").text(""+txt);
}

function fromto(){
	var fromm = document.getElementById("from").value;
	var too = document.getElementById("to").value;

	if(from.length < 2 || from == '' || from == null){
		from = "Me";
	}else from = fromm;

	if(to.length <= 2 || to == '' || to == null){
		to = "You";
	}else to=too;
}

function stickering(){
	var st = document.getElementById("sticker").value;
	var wi = document.getElementById("stWidth").value;
	var he = document.getElementById("stHeight").value;
	var sx = document.getElementById("stX").value;
	var sy = document.getElementById("stY").value;

	sticker = st;
	stW = wi;
	stH = he;
	stX = sx;
	stY = sy;

	if(st !=0){
		var sturl = "./images/st"+st+".png"
		$(".makeCard").css("background-image", 'url(' + sturl + ')');
		$(".makeCard").css("background-repeat", 'no-repeat');
		$(".makeCard").css("background-size", wi+'px '+he+"px");
		$(".makeCard").css("background-position", sx+'px '+sy+"px");
	}else{
		$(".makeCard").css("background-image", 'none');
	}
}

function textures(){
	var texbg = document.getElementById("bgtex").value;
	texbg = parseInt(texbg);

	var url1 = "./images/nr"+texbg+".png";

	bg1 = texbg;
	if(texbg!=0){
		$("body").css("background-image", 'url(' + url1 + ')');
		$("body").css("background-size", '300px');
	}else{
		$("body").css("background-image", 'none');
	}

}

function shadowing(){
	if(shadow){
		$("#shadowb").css("color", "black");
		$(".makeCard").css("box-shadow", "0px 2px 6px black");
	}else if(!shadow){
		$("#shadowb").css("color", "lightgray");
		$(".makeCard").css("box-shadow", "none");
	}
}
function bordering(){

	var bordcol = document.getElementById("bordcol").value;
	bcolor = bordcol;
	var bordsize = document.getElementById("bordsize").value;
	bthik = bordsize;
	if(bthik > 8){
		bthik=8;
		document.getElementById("bordsize").value(8);
	}

	if(border){
		$("#borderb").css("color", "black");
		$(".makeCard").css("border", bthik+"px solid "+bcolor);
	}else if(!border){
		$("#borderb").css("color", "lightgray");
		$(".makeCard").css("border", "none");
	}
}
function valigning(){
	if(valign){
		$("#valign").css("color", "black");
		$(".cardText").css("line-height", "250px");
	}else if(!valign){
		$("#valign").css("color", "lightgray");
		$(".cardText").css("line-height", fsize+"px");
	}
}
function setValign(){
	if(valign)valign=false;
	else if(!valign)valign=true;
}
function setshadow(){
	if(shadow)shadow=false;
	else if(!shadow)shadow=true;
}
function setborder(){
	if(border)border=false;
	else if(!border)border=true;
}

function color(){
	var tcol = document.getElementById("tColor").value;
	
	$(".cardText").css("color", tcol);

	if(tcol[0]=="#"){
		tcol = tcol.replace('#','Q');
	}
	tcolor = tcol;
}
function cardColor(){
	var ccol = document.getElementById("ccolor").value;
	
	$(".makeCard").css("background-color", ccol);

	if(ccol[0]=="#"){
		ccol = ccol.replace('#','Q');
	}
	cardcol = ccol;
}
function bgColor(){
	var pcol = document.getElementById("pcolor").value;
	
	$("body").css("background-color", pcol);

	if(pcol[0]=="#"){
		pcol = pcol.replace('#','Q');
	}
	bgcol = pcol;
}

function align(){
	var tal = document.getElementById("tAlign").value;
	tal = parseInt(tal);
	if(tal==1)tal="left";
	else if(tal==2)tal="center";
	else if(tal==3)tal="right";
	else tal="center";

	talign = tal;
	$(".cardText").css("text-align", talign);
}

function effect(){
	var tef = document.getElementById("tEffect").value;
	tef = parseInt(tef);

	
	teffect = tef;

	if(tef==0){
		$(".cardText").css("text-decoration", "none");
		$(".cardText").css("font-weight", "normal");
	}else if(tef==1){
		$(".cardText").css("font-weight", "bold");
	}else if(tef==2){
		$(".cardText").css("text-decoration", "underline");
		$(".cardText").css("font-weight", "normal");
	}else if(tef==3){
		$(".cardText").css("text-decoration", "overline");
		$(".cardText").css("font-weight", "normal");
	}else if(tef==4){
		$(".cardText").css("text-decoration", "line-through");
		$(".cardText").css("font-weight", "normal");
	}else if(tef==5){
		$(".cardText").css("text-decoration", "underline");
		$(".cardText").css("font-weight", "bold");
	}else if(tef==6){
		$(".cardText").css("text-decoration", "overline");
		$(".cardText").css("font-weight", "bold");
	}else if(tef==7){
		$(".cardText").css("text-decoration", "line-through");
		$(".cardText").css("font-weight", "bold");
	}else{
		$(".cardText").css("text-decoration", "none");
		$(".cardText").css("font-weight", "normal");
	}
}

function generate(){
	bcolor = bcolor.replace('#','Q');
	$(".link").val(link+"?fsize="+fsize+"&tcolor="+tcolor+"&talign="+talign+"&teffect="+teffect+"&content="+content+"&ccol="+cardcol+"&pcol="+bgcol+"&shadow="+shadow+"&bg1="+bg1+"&border="+border+"&bcol="+bcolor+"&bthik="+bthik+"&sticker="+sticker+"&stW="+stW+"&stH="+stH+"&stX="+stX+"&stY="+stY+"&tx="+tX+"&ty="+tY+"&valign="+valign+"&from="+from+"&to="+to+"&translate="+translate);
	$(".bb").fadeIn(500);
	$(".linkBox").fadeIn(500);
}

function linkit(){
	bcolor = bcolor.replace('#','Q');
	document.getElementById("preview").href=link+"?fsize="+fsize+"&tcolor="+tcolor+"&talign="+talign+"&teffect="+teffect+"&content="+content+"&ccol="+cardcol+"&pcol="+bgcol+"&shadow="+shadow+"&bg1="+bg1+"&border="+border+"&bcol="+bcolor+"&bthik="+bthik+"&sticker="+sticker+"&stW="+stW+"&stH="+stH+"&stX="+stX+"&stY="+stY+"&tx="+tX+"&ty="+tY+"&valign="+valign+"&from="+from+"&to="+to+"&translate="+translate; 
}

$(document).ready(function(){
	$(".bb").click(function(){
		$(this).fadeOut(500);
		$(".linkBox").fadeOut(500);
	});
	$(".makeCard").click(function(){
		generate();
	});
	translating();
});

function translating(){
	var tolvl = pa("translate");
	if(tolvl=="true"){
		translate=true;
		$("#t1").text("Izmērs");
		$("#t2").text("Fonts");
		$("#t3").text("Līdzināšana");
		$("#t4").text("Effekts");
		$("#t5").text("Horizontālā pozīcija");
		$("#t6").text("Vertikālā pozīcija");
		$("#t7").text("Krāsa");
		$("#t8").text("Teksts");
		$("#t9").text("Kartiņas krāsa");
		$("#t10").text("Lapas krāsa");
		$("#t11").text("Lapas tekstūra");
		$("#t12").text("Uzlīmes nummurs");
		$("#t13").text("Uzlīmes platums");
		$("#t14").text("Uzlīmes augstums");
		$("#t15").text("Horizontālā pozīcija");
		$("#t16").text("Vertikālā pozīcija");
		$("#t17").text("Malas krāsa");
		$("#t18").text("Malas platums");

		$("#shadowb").text("Ēna");
		$("#borderb").text("Mala");
		$("#valign").text("Vertikāli centrēts");
		$(".makeCard").title = "Nospied, lai dabūtu linku";
		$("#preview").text("Priekšskatīt");
		document.getElementsByName('from')[0].placeholder='No kā...';
	document.getElementsByName('to')[0].placeholder='Kam...';
	}else{
		translate=false;
	}
}

function transl(){
	translate=true;
	$("#t1").text("Izmērs");
	$("#t2").text("Fonts");
	$("#t3").text("Līdzināšana");
	$("#t4").text("Effekts");
	$("#t5").text("Horizontālā pozīcija");
	$("#t6").text("Vertikālā pozīcija");
	$("#t7").text("Krāsa");
	$("#t8").text("Teksts");
	$("#t9").text("Kartiņas krāsa");
	$("#t10").text("Lapas krāsa");
	$("#t11").text("Lapas tekstūra");
	$("#t12").text("Uzlīmes nummurs");
	$("#t13").text("Uzlīmes platums");
	$("#t14").text("Uzlīmes augstums");
	$("#t15").text("Horizontālā pozīcija");
	$("#t16").text("Vertikālā pozīcija");
	$("#t17").text("Malas krāsa");
	document.getElementsByName('from')[0].placeholder='No kā...';
	document.getElementsByName('to')[0].placeholder='Kam...';

	$("#shadowb").text("Ēna");
	$("#borderb").text("Mala");
	$("#preview").text("Priekšskatīt");
	$("#valign").text("Vertikāli centrēts");
	$(".makeCard").title = "Nospied, lai dabūtu linku";
}

function pa(name) {
  	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
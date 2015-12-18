$(document).ready (function() {

var score = 0;
var total = 0;


function generateBomb() {
	$(".bomb").css("visibility", "visible");
	$(".orange").css("visibility", "hidden");
	setTimeout(hideBomb, 1500);
}

setInterval(generateBomb, 9000);

function hideBomb() {
	$(".bomb").css("visibility", "hidden");
	$(".orange").css("visibility", "visible");
}

$(".bomb").click (function() {
	var snd = new Audio("snd/bomb.mp3");
	snd.play();
	total = total - 40;
	$(".bomb").css("visibility", "hidden");
	$(".total").html("Total Score = " + total);
});

function generateSlice() {
	var left = Math.floor(Math.random()*1000);
	var top = Math.floor(Math.random()*500);
	$(".slice").css("left", left+"px");
	$(".slice").css("top", top+"px");
	$(".slice").css("visibility", "visible");
	setTimeout(hideSlice, 2000);
}

setInterval(generateSlice, 7000);

function hideSlice() {
	$(".slice").css("visibility", "hidden");
}

$(".slice").click (function() {
	var snd = new Audio("snd/specialslice.wav");
	snd.play();
	total = total + 10;
	$(".slice").css("visibility", "hidden");
	$(".total").html("Total Score = " + total);
});

$(".orange").click (function() {
	var snd = new Audio("snd/splash.wav");
	snd.play();
	total = total + 1;
	$(".total").html("Total Score = " + total);
	score = score + 1;
	$(".score").html("Fruits Juiced = " + score);

	if (score == 2 ) {
		$(".jug").attr("src","img/jug2.png");
	}

	else if (score == 4 ) {
		$(".jug").attr("src","img/jug3.png");
		generateSlice();
	}

	else if (score == 6 ) {
		$(".jug").attr("src","img/jug4.png");

	}

	else if (score == 8 ) {
		$(".jug").attr("src","img/jug5.png");

	}

	else if (score == 10 ) {
		$(".jug").attr("src","img/jug6.png");

	}

	else if (score == 12 ) {
		$(".jug").attr("src","img/jug7.png");
		$(".achievement").css("visibility", "visible");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 14 ) {
		$(".jug").attr("src","img/jug8.png");

	}

	else if (score == 16 ) {
		$(".jug").attr("src","img/jug9.png");

	}

	else if (score == 18 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/strawberry.png");
		$(".orange").css("margin-top", "-15px");
		$(".achievement").css("visibility", "hidden");
	}
	
	else if (score == 20 ) {
		$(".jug").attr("src","img/strawjug2.png");

	}

	else if (score == 22 ) {
		$(".jug").attr("src","img/strawjug3.png");

	}

	else if (score == 24 ) {
		$(".jug").attr("src","img/strawjug4.png");

	}

	else if (score == 26 ) {
		$(".jug").attr("src","img/strawjug5.png");

	}

	else if (score == 28 ) {
		$(".jug").attr("src","img/strawjug6.png");

	}

	else if (score == 30 ) {
		$(".jug").attr("src","img/strawjug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach2.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 32 ) {
		$(".jug").attr("src","img/strawjug8.png");

	}

	else if (score == 34 ) {
		$(".jug").attr("src","img/strawjug9.png");

	}

	else if (score == 36 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/chocolatebar.png");
		$(".orange").css("margin-top", "10px" );
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 38 ) {
		$(".jug").attr("src","img/chochjug2.png");

	}

	else if (score == 40 ) {
		$(".jug").attr("src","img/chochjug3.png");

	}

	else if (score == 42 ) {
		$(".jug").attr("src","img/chochjug4.png");

	}

	else if (score == 44 ) {
		$(".jug").attr("src","img/chochjug5.png");

	}

	else if (score == 46 ) {
		$(".jug").attr("src","img/chochjug6.png");

	}

	else if (score == 48 ) {
		$(".jug").attr("src","img/chochjug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach3.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 50 ) {
		$(".jug").attr("src","img/chochjug8.png");

	}

	else if (score == 52 ) {
	$(".jug").attr("src","img/chochjug9.png");

	}

	else if (score == 54 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/apple.png");
		$(".orange").css("margin-top", "15px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 56 ) {
		$(".jug").attr("src","img/applejug2.png");
	}

	else if (score == 58 ) {
		$(".jug").attr("src","img/applejug3.png");
	}

	else if (score == 60 ) {
		$(".jug").attr("src","img/applejug4.png");
	}

	else if (score == 62 ) {
		$(".jug").attr("src","img/applejug5.png");
	}

	else if (score == 64 ) {
		$(".jug").attr("src","img/applejug6.png");
	}

	else if (score == 66 ) {
		$(".jug").attr("src","img/applejug7.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach4.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 68 ) {
		$(".jug").attr("src","img/applejug8.png");
	}

	else if (score == 70 ) {
		$(".jug").attr("src","img/applejug9.png");
	}

	else if (score == 72 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/tomato.png");
		$(".orange").css("margin-top", "40px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 74 ) {
		$(".jug").attr("src","img/tomatojug2.png");
	}

	else if (score == 76 ) {
		$(".jug").attr("src","img/tomatojug3.png");
	}

	else if (score == 78 ) {
		$(".jug").attr("src","img/tomatojug4.png");
	}

	else if (score == 80 ) {
		$(".jug").attr("src","img/tomatojug5.png");
	}

	else if (score == 82 ) {
		$(".jug").attr("src","img/tomatojug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach5.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 84 ) {
		$(".jug").attr("src","img/tomatojug7.png");
	}

	else if (score == 86 ) {
		$(".jug").attr("src","img/tomatojug8.png");
	}

	else if (score == 88 ) {
		$(".jug").attr("src","img/tomatojug9.png");
	}

	else if (score == 90 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/broccoli.png");
		$(".orange").css("margin-top", "20px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 92 ) {
		$(".jug").attr("src","img/brocjug2.png");
	}

	else if (score == 94 ) {
		$(".jug").attr("src","img/brocjug3.png");
	}

	else if (score == 96 ) {
		$(".jug").attr("src","img/brocjug4.png");
	}

	else if (score == 98 ) {
		$(".jug").attr("src","img/brocjug5.png");
	}

	else if (score == 100 ) {
		$(".jug").attr("src","img/brocjug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach6.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 102 ) {
		$(".jug").attr("src","img/brocjug7.png");
	}

	else if (score == 104 ) {
		$(".jug").attr("src","img/brocjug8.png");
	}

	else if (score == 106 ) {
		$(".jug").attr("src","img/brocjug9.png");
	}

	else if (score == 108 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/lemon.png");
		$(".orange").css("margin-top", "40px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 110 ) {
		$(".jug").attr("src","img/lemonjug2.png");
	}

	else if (score == 112 ) {
		$(".jug").attr("src","img/lemonjug3.png");
	}

	else if (score == 114 ) {
		$(".jug").attr("src","img/lemonjug4.png");
	}

	else if (score == 116 ) {
		$(".jug").attr("src","img/lemonjug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach7.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 118 ) {
		$(".jug").attr("src","img/lemonjug7.png");
	}

	else if (score == 120 ) {
		$(".jug").attr("src","img/lemonjug8.png");
	}

	else if (score == 122 ) {
		$(".jug").attr("src","img/lemonjug9.png");
	}

	else if (score == 124 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/carrot.png");
		$(".orange").css("margin-top", "0px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 126 ) {
		$(".jug").attr("src","img/carrotjug2.png");
	}

	else if (score == 128 ) {
		$(".jug").attr("src","img/carrotjug3.png");
	}

	else if (score == 130 ) {
		$(".jug").attr("src","img/carrotjug4.png");
	}

	else if (score == 132 ) {
		$(".jug").attr("src","img/carrotjug5.png");
	}

	else if (score == 134 ) {
		$(".jug").attr("src","img/carrotjug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach8.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 136 ) {
		$(".jug").attr("src","img/carrotjug7.png");
	}

	else if (score == 138 ) {
		$(".jug").attr("src","img/carrotjug8.png");
	}

	else if (score == 140 ) {
		$(".jug").attr("src","img/carrotjug9.png");
	}

	else if (score == 142 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/blueberry.png");
		$(".orange").css("margin-top", "40px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 144 ) {
		$(".jug").attr("src","img/bluejug2.png");
	}

	else if (score == 146 ) {
		$(".jug").attr("src","img/bluejug3.png");
	}

	else if (score == 148 ) {
		$(".jug").attr("src","img/bluejug4.png");
	}

	else if (score == 150 ) {
		$(".jug").attr("src","img/bluejug5.png");
	}

	else if (score == 152 ) {
		$(".jug").attr("src","img/bluejug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach9.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 154 ) {
		$(".jug").attr("src","img/bluejug7.png");
	}

	else if (score == 156 ) {
		$(".jug").attr("src","img/bluejug8.png");
	}

	else if (score == 158 ) {
		$(".jug").attr("src","img/bluejug9.png");
	}

	else if (score == 160 ) {
		$(".jug").attr("src","img/jug1.png");
		$(".orange").attr("src","img/goldbar.png");
		$(".orange").css("margin-top", "40px");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 162 ) {
		$(".jug").attr("src","img/goldjug2.png");
	}

	else if (score == 164 ) {
		$(".jug").attr("src","img/goldjug3.png");
	}

	else if (score == 166 ) {
		$(".jug").attr("src","img/goldjug4.png");
	}

	else if (score == 168 ) {
		$(".jug").attr("src","img/goldjug5.png");
	}

	else if (score == 170 ) {
		$(".jug").attr("src","img/goldjug6.png");
		$(".achievement").css("visibility", "visible");
		$(".achievement").attr("src", "img/ach10.png");
		var snda = new Audio("snd/achievement.mp3");
		snda.play();
	}

	else if (score == 172 ) {
		$(".jug").attr("src","img/goldjug7.png");
	}

	else if (score == 174 ) {
		$(".jug").attr("src","img/goldjug8.png");
	}

	else if (score == 176 ) {
		$(".jug").attr("src","img/goldjug9.png");
	}

	else if (score == 178 ) {
		$(".jug").attr("src","img/ranjug2.png");
		$(".achievement").css("visibility", "hidden");
	}

	else if (score == 180 ) {
		$(".jug").attr("src","img/ranjug3.png");
	}

	else if (score == 182 ) {
		$(".jug").attr("src","img/ranjug4.png");
	}

	else if (score == 184 ) {
		$(".jug").attr("src","img/ranjug5.png");
	}

	else if (score == 186 ) {
		$(".jug").attr("src","img/ranjug6.png");
	}

	else if (score == 188 ) {
		$(".jug").attr("src","img/ranjug7.png");
	}

	else if (score == 190 ) {
		$(".jug").attr("src","img/ranjug8.png");
	}

	else if (score == 192 ) {
		$(".jug").attr("src","img/ranjug9.png");
	}












});

});  



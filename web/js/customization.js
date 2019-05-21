function Select(n, letter){
	var price = 0;
	
	document.getElementsByClassName("custom-inputs")[0].style.display = "none";
	document.querySelector(".scheme-img").src = "assets/emotesBack.png";
	
	if(letter == "X"){
		for(i=1; i<=4; i++){
			var elem = document.getElementById(letter+i);
			elem.setAttribute('class', 'cell');
		}
		if(n==1){
			var elem = document.getElementById(letter+'1');
		}else if(n==2){
			var elem = document.getElementById(letter+'2');
		}else if(n==3){
			var elem = document.getElementById(letter+'3');
		}
		elem.className += ' selected';
	}else if(letter == "F"){
		var elem = document.getElementById(letter+n);
		if(elem.className == "cell addon-box"){
			elem.className += ' selected';
		}else{
			elem.setAttribute('class', 'cell addon-box');
		}
	}else{
		for(i=1; i<=7; i++){
			var elem = document.getElementById(letter+i);
			elem.setAttribute('class', 'cell');
		}
		if(n==1){
			var elem = document.getElementById(letter+'1');
		}else if(n==2){
			var elem = document.getElementById(letter+'2');
		}else if(n==3){
			var elem = document.getElementById(letter+'3');
		}else if(n==4){
			var elem = document.getElementById(letter+'4');
		}else if(n==5){
			var elem = document.getElementById(letter+'5');
		}else if(n==6){
			var elem = document.getElementById(letter+'6');
		}else if(n==7){
			var elem = document.getElementById(letter+'7');
		}
		elem.className += ' selected';
	}
	
	var elements = document.getElementsByClassName("selected");
	
	for(i = 0; i < elements.length; i++){
		var num = parseInt(elements[i].getAttribute('id').charAt(1));
		if(elements[i].getAttribute('id').charAt(0) == "S"){
			if(num == 1){
				price += 10;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_BK.png";
			}
			else if(num == 2){
				price += 10;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_R.png";
			}
			else if(num == 3){
				price += 10;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_B.png";
			}
			else if(num == 4){
				price += 10;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_W.png";
			}
			else if(num == 5){
				price += 15;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_C.png";
			}
			else if(num == 6){
				price += 20;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_CF.png";
			}
			else if(num == 7){
				price += 35;
				document.querySelector("#goggles").src = "assets/maskPic/GOG_S.png";
			}
		}else if(elements[i].getAttribute('id').charAt(0) == "B"){
			if(num ==1 ){
				price += 15;
				document.querySelector("#mask").src = "assets/maskPic/MASK_BK.png";
			}
			else if(num == 2){
				price += 15;
				document.querySelector("#mask").src = "assets/maskPic/MASK_R.png";
			}
			else if(num == 3){
				price += 15;
				document.querySelector("#mask").src = "assets/maskPic/MASK_B.png";
			}
			else if(num == 4){
				price += 15;
				document.querySelector("#mask").src = "assets/maskPic/MASK_W.png";
			}
			else if(num == 5){
				price += 20;
				document.querySelector("#mask").src = "assets/maskPic/MASK_C.png";
			}
			else if(num == 6){
				price += 25;
				document.querySelector("#mask").src = "assets/maskPic/MASK_CF.png";
			}
			else if(num == 7){
				price += 45;
				document.querySelector("#mask").src = "assets/maskPic/MASK_S.png";
			}
		}else if(elements[i].getAttribute('id').charAt(0) == "L"){
			if(num == 1){
				document.querySelector("#led").src = "assets/maskPic/LED_W.png";
			}
			else if(num == 2){
				document.querySelector("#led").src = "assets/maskPic/LED_R.png";
			}
			else if(num == 3){
				document.querySelector("#led").src = "assets/maskPic/LED_B.png";
			}
			else if(num == 4){
				document.querySelector("#led").src = "assets/maskPic/LED_Y.png";
			}
			else if(num == 5){
				document.querySelector("#led").src = "assets/maskPic/LED_G.png";
			}
			else if(num == 6){
				document.querySelector("#led").src = "assets/maskPic/LED_P.png";
			}
			else if(num == 7){
				document.querySelector("#led").src = "assets/maskPic/LED_O.png";
			}
		}
		
		else if(elements[i].getAttribute('id').charAt(0) == "M"){
			if(num == 1){
				price += 0;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_0.png";
			}
			else if(num == 2){
				price += 20;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_1.png";
			}
			else if(num == 3){
				price += 20;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_2.png";
			}
			else if(num == 4){
				price += 25;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_3.png";
			}
			else if(num == 5){
				price += 25;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_4.png";
			}
			else if(num == 6){
				price += 30;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_5.png";
			}
			else if(num == 7){
				price += 35;
				document.querySelector("#lmask").src = "assets/maskPic/LMASK_6.png";
			}
		}else if(elements[i].getAttribute('id').charAt(0) == "F"){
			if(num==1)price += 5;
			else if(num==2)price += 10;
			else if(num==3)price += 10;
		}else if(elements[i].getAttribute('id').charAt(0) == "X"){
			if(num==1){
				price += 0;
				document.querySelector(".scheme-img").src = "assets/emotes1.png";
			}
			else if(num==2){
				price += 5;
				document.querySelector(".scheme-img").src = "assets/emotes2.png";
			}
			else if(num==3){
				price += 10;
				document.querySelector(".scheme-img").src = "assets/emotes3.png";
			}
			else if(num==4){
				price += 20;
				document.getElementsByClassName("custom-inputs")[0].style.display = "block";
				document.querySelector(".scheme-img").src = "assets/emotes4.png";
			}
		}
	}
	document.getElementById("price").innerHTML = price;
}

function creditCard(){
	var num = document.getElementById("cardNumInput").value;
	var cards = new Array();
	
	document.getElementById("visa").setAttribute('class', 'deactivated');
	document.getElementById("maestro").setAttribute('class', 'deactivated');
	document.getElementById("mastercard").setAttribute('class', 'deactivated');
	document.getElementById("JCB").setAttribute('class', 'deactivated');
	document.getElementById("discover").setAttribute('class', 'deactivated');
	document.getElementById("dinners-club").setAttribute('class', 'deactivated');
	document.getElementById("american-express").setAttribute('class', 'deactivated');
	
	if(num.length == 15){
		if(num.charAt(0) == '3' && (num.charAt(1) == '4' || num.charAt(1) == '7')){
			cards.push("american-express");
		}
	}if(num.length == 14){
		if(num.charAt(0) == '3' && (num.charAt(1) == '0' || num.charAt(1) == '6' || num.charAt(1) == '8')){
			cards.push("dinners-club");
		}
	}if(num.length == 16){
		if(num.charAt(0) == '5'){
			if(parseInt(num.charAt(1)) >= 1 && parseInt(num.charAt(1)) <= 5){
				cards.push("mastercard");
			}
		}else if(num.charAt(0) == '2'){
			if(parseInt(num.charAt(1)) >= 2 && parseInt(num.charAt(1)) <= 7){
				cards.push("mastercard");
			}
		}else{
			var ss = parseInt(num.substring(0, 6));
			if((ss >= 601100 && ss <= 601109) ||
				(ss >= 601120 && ss <= 601149) ||
				(ss == 601174) ||
				(ss >= 601177 && ss <= 601179) ||
				(ss >= 601186 && ss <= 601199) ||
				(ss >= 644000 && ss <= 659999)){
					cards.push("discover");
				}
		}
	}if(num.length >= 16 && num.length <= 19){
		var ss = parseInt(num.substring(0, 4));
		if(ss >= 3528 && ss <= 3589){
			cards.push("JCB");
		}
	}if(num.length <= 19){
		var ss = parseInt(num.substring(0, 2));
		if(ss == 50 || (ss >= 56 && ss <= 64) || (ss >= 66 && ss <= 69)){
			cards.push("maestro");
		}
		if(num.charAt(0) == '4'){
			cards.push("visa");
		}
	}
	
	cards.forEach(function(card) {
	  document.getElementById(card).setAttribute('class', 'activated');
	});
}

function ChangeText(selected){
	var text = document.getElementById("scheme_text");
	var title = document.getElementById("scheme_title");
	var img = document.getElementById("scheme");
	if(selected == 0){
		title.innerHTML = ""
		text.innerHTML = "";
		img.src = "assets/scheme.png";
	}else if(selected == 1){
		title.innerHTML = "LED Matrices"
		text.innerHTML = "The display consists of two 8x8 LED<br>matrices. Each for one eye. They are<br>being controlled directly by the<br>chip, which can turn on or off each<br>individual light.";
		img.src = "assets/scheme1.png";
	}else if(selected == 2){
		title.innerHTML = "Eyebrow sensors"
		text.innerHTML = "The eyebrow sensors lean on the<br>wearer's eyebrows, pushing a<br>little towards his face. That<br>way when moving your eyebrows<br>you lean the sensors up and down.<br>Upon detecting this movement it<br>can determine the eyebrow's<br>position - up, centered or down.";
		img.src = "assets/scheme2.png";
	}else if(selected == 3){
		title.innerHTML = "Mouth sensor"
		text.innerHTML = "A distance sensor is placed directly<br>in front of the wearer's mouth. By<br>measuring the distance in front it<br>can distinguish three states:<br><br>closed (small distance)<br>open (bigger distance)<br>talking (rapid change of distance)";
		img.src = "assets/scheme3.png";
	}else if(selected == 4){
		title.innerHTML = "Battery"
		text.innerHTML = "The most straight-forward part of<br>the mask. A 2500 mAh Li-Ion battery<br>pack is used to supply power to each<br>component through the chip.";
		img.src = "assets/scheme4.png";
	}else if(selected == 5){
		title.innerHTML = "Microcontroller"
		text.innerHTML = "The brain of the mask is an Adruino Uno<br>controller. It reads the data from the<br>sensors and based on it decides what<br>facial expression the human makes.<br>After that it sends the corresponding<br>symbol for the matrices to display.";
		img.src = "assets/scheme5.png";
	}
}
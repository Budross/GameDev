window.onload = function() {
	
	let color;

	let pRadius = (19/2);

	let startX = 650;

	let startY = 370;

	let ballX = 0;
	
	let ballY = 0;

	let playerX = startX + ballX;

	let playerY = startY + ballY;
	let canvas = document.getElementById('firstcanvas');
	
	// canvas.style.cursor = "none"; //hide the original cursor
	let ctx = canvas.getContext("2d");





	setInterval(saveMap, 10000);
	function saveMap(){
		
	}

	let framesPerSecond = 80;
	setInterval(playerModel, 20);
	function playerModel(){
		
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(startX+ballX,startY+ballY, pRadius, 0,Math.PI*2, true);
		ctx.fill();
		
	}
	setInterval(resetMap, 225);

	function resetMap(){
		ctx.beginPath();
		ctx.drawImage(canvasImg,0,0);
	}

	let datasURL = localStorage.getItem(firstcanvas);
	let img = new Image;
	img.src = dataURL;
	img.onload = function () {
    	ctx.drawImage(img, 0, 0);
	};

	//sets grid width
	let gWidth = 0;

	//sets grid height
	let gHeight = 0;

	//launches game
	ctx.beginPath();

	//adds click functionality
	canvas.addEventListener('click', function(event) {
    
    //takes coordinates of mouse cursor when clicked
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
	//posts to console coordinates selected
    console.log("x: " + x + " y: " + y); 
	}, false);
	//adds event listener to highlight grid
	canvas.addEventListener('click', function(event) {
		let rect = canvas.getBoundingClientRect();
		ctx.clearRect(this.x,this.y,19,19);
		let x = (Math.floor((event.clientX - rect.left) / 20));
    	let y = (Math.floor((event.clientY - rect.top) / 20));
		//array holding all highlighted grid values
		let hlBox = [];

		let highlightBox = {

			x: x * 20,
    		y: y * 20,

			highlight: function(){
				let oldX = this.x;
				let oldY = this.y;
				// make array to clear rect, add to front (newest), remove from back (oldest)

				ctx.fillStyle = "#000000";
				ctx.fillRect(this.x,this.y,19,19);
				console.log("Grid x: " + ((this.x/20)+1) + " Grid y: " + ((this.y/20)+1));
			}

		};

		let hLight = hlBox.unshift(highlightBox.highlight());

		 	if(hlBox.length > 1){
		 		hlBox.pop();

			 }

	}, false);
	//creates grid lines, change size with let i 	
	ctx.beginPath();
	for(let i=0; i<=1280; i+=20) {
    	ctx.moveTo(i, 0);
    	ctx.lineTo(i, 1280);

   		ctx.moveTo(0, i);
    	ctx.lineTo(1280, i);
	}

	ctx.stroke();
	ctx.beginPath();
	if(dataURL !== null){	
		for(let x=0;x<=1280; x+=20){

    		for(let y=0; y<=720; y+=20){
    		
    		switch(Math.floor(Math.random()*12)){
				case(0):
					ctx.fillStyle = "#5b452c";
					color = 1;
					break;
				case(1):
					ctx.fillStyle = "#514334";
					color = 2;
					break;
				case(2):
					ctx.fillStyle = "#103d17";
					color = 3;
					break;
				case(3):
					ctx.fillStyle = "#332716";
					color = 4;
					break;
				case(4):
					ctx.fillStyle = "#3a3320";
					color = 5;
					break;
				case(5):
					ctx.fillStyle = "#3d2e09";
					color = 6;
					break;
				case(6):
					ctx.fillStyle = "#254713";
					color = 7;
					break;
				case(7):
					ctx.fillStyle = "#474026";
					color = 8;
					break;
				case(8):
					ctx.fillStyle = "#5b452c";
					color = 1;
					break;
				case(9):
					ctx.fillStyle = "#514334";
					color = 2;
					break;
				case(10):
					ctx.fillStyle = "#103d17";
					color = 3;
					break;
				case(11):
					ctx.fillStyle = "#332716";
					color = 4;
					break;
			}
			//ctx.fillStyle = "#ffffff"; //sets all tiles to white
    		ctx.fillRect(x,y,19,19);
    		ctx.save();
    		//console.log(ctx.fillStyle);
    		}
		}
	} else {

	}
	$(function() {
  		let pressed = false; //Global let to hold state

  		$(document).keydown(function (e) {

      		if( pressed === true ) { //Already pressed don't allow another press
         
         return false;
      }

      pressed = true;
      setTimeout(function() { pressed = false }, 500);

    let keyCode = e.keyCode || e.which;
    let arrow = {left: 65, up: 87, right: 68, down: 83 };              
    if(playerX >= 0){
    	if(keyCode == arrow.left && (ballX-20) >= -640) {
    	   ballX= ballX-20; //right arrow add 20 from current
    	   console.log("left");
    	   console.log(ballX);
    	} else if (keyCode ==arrow.right && (ballX+20) <= 620) {
    	   ballX= ballX+20; //right arrow add 20 from current
    	   console.log("right");
    	   console.log(ballX);
    	} else if (keyCode == arrow.up && (ballY-20)>= -360) {
    	   ballY= ballY-20; //right arrow add 20 from current
    	   console.log("up");
    	   console.log(ballY);
    	} else if(keyCode == arrow.down && (ballY+20) <= 340) {
    	   ballY= ballY+20; //right arrow add 20 from current
    	   console.log("down");
    	   console.log(ballY);
    	} else {
    		ballX = ballX;
    		ballY = ballY;
    	}
    }
  });
});
	
let keyPressed;
let interface = false;
document.body.onkeydown = function(e){
	
	if(e.keyCode == 32 && interface == false){
        //your code 
        interface = true;
        keyPressed = setInterval(function(){
        	ctx.fillRect(320,120,640,480);
        }, 1);
    }

 document.body.onkeyup = function(e){

 	if(e.keyCode == 32 && interface == true){
 		clearInterval(keyPressed);
 		keyPressed = null;
 		ctx.clearRect(320,120,640,480);
 		interface = false;
 	}
 }  





	
	let dataURL = canvas.toDataURL('image/png');
	let image = document.getElementById("canvasImg");
	image.src = dataURL;
} 
var score = 0;
var stage, w, h, loader;
var sky, ashlyn, ground, hill, hill2, dog, dog2, dog3, dog4, dog5, dogbone, dogbone2, dogbone3, dogbone4, dogbone5, ending;
var randnum = Math.floor(Math.random() * (0 - 13) + 13);

var answer = [
    'http://clicktogive.com/animal_care',
    'http://www.caretoclick.com/pets', 
    'http://theanimalrescuesite.com/',
    'http://www.care2.com/click-to-donate/animal-rescue/',
    'http://www.freekibble.com/',
    'http://barkingmad.co.za/click-to-feed-2016/',
    'http://www.clicanimaux.com/catalog/accueil.php?sites_id=2 ',
    'http://www.freekibble.com/kat/',
    'http://www.freekibble.com/litter/',
    'http://www.care2.com/click-to-donate/big-cats/',
    'http://bigcatrescue.org/get-involved/volunteer/i-care-click-to-feed-a-big-cat/',
    'http://www.care2.com/click-to-donate/primates/',
    'http://www.care2.com/click-to-donate/wolves/',
    'http://www.care2.com/click-to-donate/seals/'    
]



function init() {
    examples.showDistractor();
    stage = new createjs.Stage("animal");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    manifest = [
        {src: "spriteashlyn.png", id: "ashlyn"},
        {src: "sky.png", id: "sky"},
        {src: "ground.png", id: "ground"},
        {src: "hill1.png", id: "hill"},
        {src: "hill2.png", id: "hill2"},
        {src: "dog.png", id: "dog"},
        {src: "dogbone.png", id: "dogbone"},
        {src: "ending.png", id: "ending"}
    ];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest, true, "assets/art/");
}

function handleComplete() {
    examples.hideDistractor();

    sky = new createjs.Shape();
    sky.graphics.beginBitmapFill(loader.getResult("sky")).drawRect(0, 0, w, h);

    var groundImg = loader.getResult("ground");
    ground = new createjs.Shape();
    ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w + groundImg.width, groundImg.height);
    ground.tileW = groundImg.width;
    ground.y = h - groundImg.height;

    hill = new createjs.Bitmap(loader.getResult("hill"));
    hill.setTransform(Math.random() * w, h - hill.image.height * 4 - groundImg.height, 4, 4);
    hill.alpha = 0.5;

    hill2 = new createjs.Bitmap(loader.getResult("hill2"));
    hill2.setTransform(Math.random() * w, h - hill2.image.height * 3 - groundImg.height, 3, 3);

    var spriteSheet = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("ashlyn")],
            "frames": {"regX": 0, "height": 220, "count": 2, "regY": 0, "width": 150},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

    var spriteSheet2 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("dog")],
            "frames": {"regX": 0, "height": 101, "count": 1, "regY": 0, "width": 75},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

        var spriteSheet3 = new createjs.SpriteSheet({
            framerate: 30,
            "images": [loader.getResult("dogbone")],
            "frames": {"regX": 0, "height": 52, "count": 1, "regY": 0, "width": 100},
            //define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
                //"run": 1
                //"jump": [2, "run"]
            }
        });

// 		var x = event.clientX;    
// 		var y = event.clientY; 
    ashlyn = new createjs.Sprite(spriteSheet);
// 		if(2==2){
// 			ashlyn.y = 10;
// 		}
// 		else{
// 			ashlyn.y = 35;
// 		}
    ashlyn.y = 35;


    dog = new createjs.Sprite(spriteSheet2);
    dog.x = Math.random() * (400 - 900) + 900;
    dog.y = Math.random() * (140 - 10) + 10;

    dog2 = new createjs.Sprite(spriteSheet2);
    dog2.x= Math.random() * (400 - 900) + 900;
    dog2.y= Math.random() * (140 - 20) + 20;

    dog3 = new createjs.Sprite(spriteSheet2);
    dog3.x= Math.random() * (400 - 900) + 900;
    dog3.y= Math.random() * (140 - 40) + 30;

    dog4 = new createjs.Sprite(spriteSheet2);
    dog4.x= Math.random() * (400 - 900) + 900;
    dog4.y= Math.random() * (140 - 60) + 40;

    dog5 = new createjs.Sprite(spriteSheet2);
    dog5.x= Math.random() * (400 - 900) + 900;
    dog5.y= Math.random() * (140 - 80) + 50;

    dogbone = new createjs.Sprite(spriteSheet3);
    dogbone.x = 1000;
    dogbone.y = Math.random() * (140 - 10) + 10;

    dogbone2 = new createjs.Sprite(spriteSheet3);
    dogbone2.x = Math.random() * (300 - 1000) + 1000;
    dogbone2.y = Math.random() * (140 - 30) + 10;

    dogbone3 = new createjs.Sprite(spriteSheet3);
    dogbone3.x = Math.random() * (300 - 1000) + 1000;
    dogbone3.y = Math.random() * (140 - 50) + 10;

    dogbone4 = new createjs.Sprite(spriteSheet3);
    dogbone4.x = Math.random() * (300 - 1000) + 1000;
    dogbone4.y = Math.random() * (140 - 70) + 10;

    dogbone5 = new createjs.Sprite(spriteSheet3);
    dogbone5.x = Math.random() * (300 - 1000) + 1000;
    dogbone5.y = Math.random() * (140 - 90) + 10;


    stage.addChild(sky, hill, hill2, ground, ashlyn, dog, dog2, dog3, dog4, dog5, dogbone, dogbone2, dogbone3, dogbone4, dogbone5);
    stage.addEventListener("stagemousedown", handleJumpStart);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", tick);
}

function handleJumpStart() {
    //ashlyn.gotoAndPlay("jump");
    ashlyn.y -=40;
}

function collisionborder() {
	    if (ashlyn.x<(dog.x+50) && (ashlyn.y+50)<(dog.y+50)&& ashlyn.x>(dog.x-50) && (ashlyn.y+50)>(dog.y-50)){	
        stage.removeChild(dog);
        stage.addChild(dog);
        dog.x = 900;
        score +=1;
    }

    if (ashlyn.x<(dog2.x+50) && (ashlyn.y+50)<(dog2.y+50)&& ashlyn.x>(dog2.x-50) && (ashlyn.y+50)>(dog2.y-50)){	
        stage.removeChild(dog2);
        stage.addChild(dog2);
        dog2.x = 1000;
        dog2.y= Math.random() * (140 - 20) + 20;
        score +=1;
    }

    if (ashlyn.x<(dog3.x+50) && (ashlyn.y+50)<(dog3.y+50)&& ashlyn.x>(dog3.x-50) && (ashlyn.y+50)>(dog3.y-50)){	
        stage.removeChild(dog3);
        stage.addChild(dog3);
        dog3.x = 1200;
        dog3.y= Math.random() * (140 - 40) + 40;
        score +=1;
    }

    if (ashlyn.x<(dog4.x+50) && (ashlyn.y+50)<(dog4.y+50)&& ashlyn.x>(dog4.x-50) && (ashlyn.y+50)>(dog4.y-50)){	
        stage.removeChild(dog4);
        stage.addChild(dog4);
        dog4.x = 1400;
        dog4.y= Math.random() * (140 - 60) + 60;
        score +=1;
    }

    if (ashlyn.x<(dog5.x+50) && (ashlyn.y+50)<(dog5.y+50)&& ashlyn.x>(dog5.x-50) && (ashlyn.y+50)>(dog5.y-50)){	
        stage.removeChild(dog5);
        stage.addChild(dog5);
        dog5.x = 1600;
        dog5.y= Math.random() * (140 - 80) + 80;
        score +=1;
    }

    if (ashlyn.x<(dogbone.x+50) && (ashlyn.y+50)<(dogbone.y+50)&& ashlyn.x>(dogbone.x-50) && (ashlyn.y+50)>(dogbone.y-50)){	
        stage.removeChild(dogbone);
        stage.addChild(dogbone);
        dogbone.x = 900;
        score +=1;
    }

    if (ashlyn.x<(dogbone2.x+50) && (ashlyn.y+50)<(dogbone2.y+50)&& ashlyn.x>(dogbone2.x-50) && (ashlyn.y+50)>(dogbone2.y-50)){	
        stage.removeChild(dogbone2);
        stage.addChild(dogbone2);
        dogbone2.x = 1000;
        dogbone2.y= Math.random() * (140 - 30) + 30;
        score +=1;
    }

    if (ashlyn.x<(dogbone3.x+50) && (ashlyn.y+50)<(dogbone3.y+50)&& ashlyn.x>(dogbone3.x-50) && (ashlyn.y+50)>(dogbone3.y-50)){	
        stage.removeChild(dogbone3);
        stage.addChild(dogbone3);
        dogbone3.x = 1200;
        dogbone3.y= Math.random() * (140 - 50) + 50;
        score +=1;
    }

    if (ashlyn.x<(dogbone4.x+50) && (ashlyn.y+50)<(dogbone4.y+50)&& ashlyn.x>(dogbone4.x-50) && (ashlyn.y+50)>(dogbone4.y-50)){	
        stage.removeChild(dogbone4);
        stage.addChild(dogbone4);
        dogbone4.x = 1400;
        dogbone4.y= Math.random() * (140 - 70) + 70;
        score +=1;
    }

    if (ashlyn.x<(dogbone5.x+50) && (ashlyn.y+50)<(dogbone5.y+50)&& ashlyn.x>(dogbone5.x-50) && (ashlyn.y+50)>(dogbone5.y-50)){	
        stage.removeChild(dogbone5);
        stage.addChild(dogbone5);
        dogbone5.x = 1600;
        dogbone5.y= Math.random() * (140 - 90) + 90;
        score +=1;
    }

    if (dog.x < -50) {
        dog.x = 900;
    }

    if (dog2.x < -50) {
        dog2.x = 1000;
        dog2.y= Math.random() * (140 - 20) + 20;
    }

    if (dog3.x < -50) {
        dog3.x = 1200;
        dog3.y= Math.random() * (140 - 40) + 40;
    }

    if (dog4.x < -50) {
        dog4.x = 1400;
        dog4.y= Math.random() * (140 - 60) + 60;
    }

    if (dog5.x < -50) {
        dog5.x = 1600;
        dog5.y= Math.random() * (140 - 80) + 80;
    }

    if (dogbone.x < -50) {
        dogbone.x = 900;
    }

    if (dogbone2.x < -50) {
        dogbone2.x = 1000;
        dogbone2.y= Math.random() * (140 - 30) + 30;
    }

    if (dogbone3.x < -50) {
        dogbone3.x = 1200;
        dogbone3.y= Math.random() * (140 - 50) + 50;
    }

    if (dogbone4.x < -50) {
        dogbone4.x = 1400;
        dogbone4.y= Math.random() * (140 - 70) + 70;
    }

    if (dogbone5.x < -50) {
        dogbone5.x = 1600;
        dogbone5.y= Math.random() * (140 - 90) + 90;
	}
}



function tick(event) {
    var deltaS = event.delta / 1000;
    var position = ashlyn.x + 0 * deltaS;

    var ashlynW = ashlyn.getBounds().width * ashlyn.scaleX;
    ashlyn.x = (position >= w + ashlynW) ? -ashlynW : position;


    ground.x = (ground.x - deltaS * 150) % ground.tileW;
    hill.x = (hill.x - deltaS * 30);
    if (hill.x + hill.image.width * hill.scaleX <= 0) {
        hill.x = w;
    }
    hill2.x = (hill2.x - deltaS * 45);
    if (hill2.x + hill2.image.width * hill2.scaleX <= 0) {
        hill2.x = w;

    }

	dog.x = (dog.x - deltaS * 150);

    dog2.x =(dog2.x - deltaS * 140);

    dog3.x = (dog3.x - deltaS * 160);

    dog4.x = (dog4.x - deltaS * 140);

    dog5.x = (dog5.x - deltaS * 150);

    dogbone.x = (dogbone.x - deltaS * 130);

    dogbone2.x = (dogbone2.x - deltaS * 140);

    dogbone3.x = (dogbone3.x - deltaS * 150);

    dogbone4.x = (dogbone4.x - deltaS * 160);

    dogbone5.x = (dogbone5.x - deltaS * 150);
    
    if (ashlyn.y < -50) {
        ashlyn.y = -40;
    }

    if (ashlyn.y < 140) {
        ashlyn.y +=1;
    }

	collisionborder();
	

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    if (score >= 40)	{
    	stage.removeChild(sky, hill, hill2, ground, ashlyn, dog, dog2, dog3, dog4, dog5, dogbone, dogbone2, dogbone3, dogbone4, dogbone5);
    	stage.addChild(ending);
 		document.getElementById("link_content").href = answer[randnum];
 		modal.style.display = "block";

    }

    stage.update(event);
    
    $('#score').html(score);
}

document.addEventListener('DOMContentLoaded', init, false);
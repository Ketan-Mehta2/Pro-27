const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var gameState = "menu";
var play, working, back;
var infoImg, titleImg,instructionImg;


function preload() {
	infoImg = loadImage("Info.png");
	titleImg = loadImage("Title.jpg");
	instructionImg = loadImage("Instruction.jpg");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(318, 400, 20);
	bob2 = new Bob(360, 400, 20);
	bob3 = new Bob(400, 400, 20);
	bob4 = new Bob(440, 400, 20);
	bob5 = new Bob(480, 400, 20);

	roof = new Roof(400, 110, 500, 20);

	rope1 = new Rope(bob1.body, roof.body, -bob1.radius * 4, 0);
	rope2 = new Rope(bob2.body, roof.body, -bob2.radius * 2, 0);
	rope3 = new Rope(bob3.body, roof.body, -bob3.radius * 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bob4.radius * 2, 0);
	rope5 = new Rope(bob5.body, roof.body, bob5.radius * 4, 0);

	play = createSprite(400, 350, 400, 100);
	play.shapeColor = "magenta";

	working = createSprite(400, 500, 600, 100);
	working.shapeColor = "yellow"

	back = createSprite(400, 600, 300, 100);
	back.shapeColor = "limegreen";

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(200, 100, 20);

	if (gameState == "menu") {
		image(titleImg, 150, 25, 500, 200);
		play.display();
		working.display();
		fill(rgb(25, 199, 218));
		stroke(0);
		strokeWeight(5);
		textSize(70);
		textFont("Galada");
		text("PLAY", 300, 375);
		fill(rgb(137, 4, 47));
		text("HOW IT WORKS", 150, 525);
		if (mousePressedOver(play)) {
			gameState = "game"
		}
		if (mousePressedOver(working)) {
			gameState = "info";
		}
	}

	if (gameState == "game") {
		image(instructionImg,100,450,600,200);
		roof.display();
		rope1.display();
		rope2.display();
		rope3.display();
		rope4.display();
		rope5.display();
		bob1.display();
		bob2.display();
		bob3.display();
		bob4.display();
		bob5.display();
	}

	if (gameState == "info") {
		image(infoImg, -50, 0, 900, 550);
		back.display();
		back.visible = true;
		fill(rgb(54, 46, 133));
		stroke(0);
		strokeWeight(5);
		textSize(70);
		textFont("Magic Tree");
		text("BACK", 300, 625);
		if (mousePressedOver(back)) {
			gameState = "menu";
		}
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW && gameState == "game") {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -30, y: -30 });
	}
}

var canvas;
var gameState = 0;
var contestantCount;
var database;
var contestant,game,question;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();;
}


function draw()
{
  background("pink");  

  if(contestantCount===4)
  {
    game.update(1);
  }

  if(gameState===1)
  {
    game.play();
  }
}

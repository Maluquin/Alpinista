

var alpinista;
var mina, mina2, mina3, minaGroup;
var malha;
var coracao1, coracao2, coracao3;
var vida = 3;



function setup() {
  createCanvas(windowWidth - 15, windowHeight - 15);
  alpinistaX = [width/16/2, width/16/2 + width/16, width/16/2 + width/16 * 2, width/16/2 + width/16 * 3, width/16/2 + width/16 * 4,
  width/16/2 + width/16 * 5, width/16/2 + width/16 * 6, width/16/2 + width/16 * 7, width/16/2 + width/16 * 8, 
  width/16/2 + width/16 * 9, width/16/2 + width/16 * 10, width/16/2 + width/16 * 11, width/16/2 + width/16 * 12,
  width/16/2 + width/16 * 13, width/16/2 + width/16 * 14, width/16/2 + width/16 * 15];

  alpinista_aleatorioX = Math.round(random(0,14));

  alpinista = createSprite(alpinistaX[alpinista_aleatorioX], height/14.4/2 + height/14.4 * 13, width/16/3, height/14.4/2);
  
  minaGroup = new Group()

  //mina = createSprite(width/16/2, height/13.3/2, width/16, height/13.3);
  // mina.shapeColor = "red";
  // mina2 = createSprite(width/16/2 + width/16, height/13.3/2, width/16, height/13.3);
  // mina3 = createSprite(width/16/2 + width/16 * 2, height/13.3/2 + height/133 *2, width/16, height/13.3);

  

 

  criarMinas();

}
function preload() {
  malha = loadImage("fundo.png");

  coracao1 = loadImage("1coracao.png");
  coracao2 = loadImage("2coracoes.png");
  coracao3 = loadImage("3coracoes.png");

}


function draw() {
  background(malha);

  if(alpinista.collide(minaGroup)){
    vida -= 1;
    console.log(vida);
    alpinista.x = alpinistaX[alpinista_aleatorioX];
    alpinista.y =  height/14.4/2 + height/14.4 * 13;
  }

  if (vida === 3) {
    image(coracao3, 30, 30, 150, 68);
  } else if(vida === 2) {
    image(coracao2, 30, 30, 150, 68);
  }
  else{
    image(coracao1, 30, 30, 150, 68);
  }
  if (vida === 0){
    gameOver();
    }
  if (alpinista.position.y <= height/14.4/2){
    venceu();
  }
  

  drawSprites();
}

function criarMinas(){
  
  x = [width/16/2, width/16/2 + width/16, width/16/2 + width/16 * 2, width/16/2 + width/16 * 3, width/16/2 + width/16 * 4,
  width/16/2 + width/16 * 5, width/16/2 + width/16 * 6, width/16/2 + width/16 * 7, width/16/2 + width/16 * 8, 
  width/16/2 + width/16 * 9, width/16/2 + width/16 * 10, width/16/2 + width/16 * 11, width/16/2 + width/16 * 12,
  width/16/2 + width/16 * 13, width/16/2 + width/16 * 14, width/16/2 + width/16 * 15];

  y = [height/14.4/2, height/14.4/2 + height/14.4, height/14.4/2 + height/14.4 * 2, height/14.4/2 + height/14.4 * 3,
  height/14.4/2 + height/14.4 * 4, height/14.4/2 + height/14.4 * 5, height/14.4/2 + height/14.4 * 6, 
  height/14.4/2 + height/14.4 * 7, height/14.4/2 + height/14.4 * 8, height/14.4/2 + height/14.4 * 9,
  height/14.4/2 + height/14.4 * 10, height/14.4/2 + height/14.4 * 11, height/14.4/2 + height/14.4 * 12,
  height/14.4/2 + height/14.4 * 13, height/14.4/2 + height/14.4 * 14];


  for(let i = 1; i < 20; i++){
    
    
  
    aleatoriox = Math.round(random(0,17));
    aleatorioy = Math.round(random(0,12));

    mina = createSprite(x[aleatoriox], y[aleatorioy], width/16, height/13.3);
    mina.visible = false;
    minaGroup.add(mina);

    

    




    
  }

  
  
}

function keyReleased(){
  if(keyCode === 87){
    alpinista.y -= height/14.4;

  }
  if(keyCode === 83){
    alpinista.y += height/14.4;
  }

  if(keyCode === 65){
    alpinista.x -= width/16;
  }

  if(keyCode === 68){
    alpinista.x += width/16;
  }
  
}

function gameOver(){
  swal({
    title:"Você perdeu!", 
    text: "Tente mais uma vez",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/619/619014.png",
    imageSize: "150x150",
    confirmButtonText: "Jogar novamente"
  },
  function (isConfirm){
    if(isConfirm){
      location.reload();

    }
  })
}

function venceu(){
  swal({
    title:"Você venceu!", 
    text: "Vitória",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5572/5572498.png",
    imageSize: "150x150",
    confirmButtonText: "Jogar novamente"
  },
  function (isConfirm){
    if(isConfirm){
      location.reload();

    }
  })
}







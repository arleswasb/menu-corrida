//DECLARAÇÃODE VARIÁVEIS//

var tela = 1;
var largura1 = 75;
var largura2 = 135;
var largura3 = 95;
var largura4 = 120;
var altura1 = 35;
var altura2 = 35;
var altura3 = 35;
var altura4 = 95;
var xMenu1 = 10;
var xMenu2 = 230;
var xMenu3 = 495;
var xMenu4 = 250;
var yMenu1 = 7;
var yMenu2 = 7;
var yMenu3 = 7;
var yMenu4 = 65;
var pontos = 0;
var nivel = 0;
var xcar = 130;
var carmusic;
var car;

//CARREGAMENTO DAS IMAGENS DE FUNDO//

function preload() {
  
  img =  loadImage("tela1.jpg");
  img1 = loadImage("tela2.jpg");
  img2 = loadImage("tela3.jpg");
  img3 = loadImage("tela4.png");
  car =   loadImage("carro.png");
  carmusic = createAudio("MOTORCOBRA.wav");
}

function mouseClicked(){
  
//////menu tela 1////////////
  
  if (tela==1 && mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ){
        tela = 2;
      }  
      else if (tela==1 && 
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura2 &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
      ){
        tela=3
               }else if (tela==1 && 
      mouseX > xMenu3 &&
      mouseX < xMenu3 + largura3 &&
      mouseY > yMenu3 &&
      mouseY < yMenu3 + altura3
    )  {
      tela=4
      }
  
  
//////menu tela 2////////////
  
  if (tela==2 && mouseX > (xMenu2+20) &&
      mouseX < xMenu2 + (largura2-65) &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
    ){
        tela = 1;
      }
  
  
//////menu tela 3////////////
  
  if (tela==3 && mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ){
        tela = 1;
      }  
  
    //////menu tela 4////////////
  
  if (tela==4 && mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ){
        tela = 1;
      }  
}


//INICIO DO JOGO

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  textStyle(BOLD);


  ///////////////TELA 1 MENU PRINCIPAL///////////////////

  if (tela == 1) {
     
    background(img);


    //MENU PRINCIPAL COM DUAS OPÇÕES///

    textAlign(LEFT);

    //MENU JOGAR//

    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
      
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Jogar", 20, 30);

    //MENU INFORMAÇÕES DO JOGO///

    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura2 &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu2, yMenu2, largura2, altura2, 15);
      }
      fill(20);
      noStroke();
      text("Informações", 240, 30);
    
      //MENU CRÉDITOS DO JOGO///
    
    if (
      mouseX > xMenu3 &&
      mouseX < xMenu3 + largura3 &&
      mouseY > yMenu3 &&
      mouseY < yMenu3 + altura3
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu3, yMenu3, largura3, altura3, 15);
      
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Créditos",500, 30);
  }
  /////////////////TELA 2 JOGO /////////////////
  
  else if (tela == 2) {
    
    background(img1);
    
    /////INICIAR JOGO////////

    textAlign(LEFT);

    /////MENU DA TELA 2 INICIAR/////

      fill(120);
      noStroke();
      textSize(20);
      text("Nível: ", 15, 30);
      text("Pontos: ",470,30)
    
    

    //MOVIMENTO DO CARRO///
    
    image(car, xcar, 500);
    if (keyIsDown(LEFT_ARROW) && xcar>25) {
      xcar -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)&& xcar<445) {
      xcar += 5;
    }
 
    ///////////RETORNAR TELA 1/////////

    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura2 &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect((xMenu2+20), yMenu2, (largura2-65), altura2, 20);
      }
    fill(20);
    noStroke();
    text("Menu", 260, 30);
  }

  /////////////////tela 3 INFORMAÇÕES/////////////////

  else if (tela == 3) {
    background(img2);
    
    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
      
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Menu", 20, 30);
    
      
///////TELA 4 CRÉDITOS//////////// 
    
  } 
  else if (tela == 4) {
    
    background(img3);
    
    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
      
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Menu", 20, 30);
    }
}
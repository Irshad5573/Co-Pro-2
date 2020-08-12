class Game {
  constructor(){
   
  }


  async start(){
    if(gameState === 0){
      
      homeScreen = new HomeScreen()
      homeScreen.display();
    }

    player1 = createSprite(displayWidth/2,200);
    player1.addAnimation("player.gif",player1_img);

    
    
  }

  play(){
        homeScreen.hide();
        background(rgb(0,100,0));

        //image(garden_img,displayWidth/10,-displayHeight*8,1036,displayHeight*10);        


        
        camera.position.x = player1.x;
        camera.position.y = player1.y;


        image(road_img,displayWidth/6,-displayHeight*4,1036,displayHeight*5);
        image(road1_img,displayWidth/6,-displayHeight*9,1036,displayHeight*5);
      

      if(keyWentDown(UP_ARROW) ){
        player1.velocityY = -20;
      }
      else if(keyWentUp(UP_ARROW) ){
        player1.velocityY = 0;
      }
  
      if(keyWentDown(DOWN_ARROW) ){
        player1.velocityY = 17.5;
      }
      else if(keyWentUp(DOWN_ARROW) ){
        player1.velocityY = 0;
      }
  
      if(keyWentDown(LEFT_ARROW) ){
        player1.velocityX = -15;
      }
      else if(keyWentUp(LEFT_ARROW) ){
        player1.velocityX = 0;
      }
  
      if(keyWentDown(RIGHT_ARROW) ){
        player1.velocityX = 15;
      }
      else if(keyWentUp(RIGHT_ARROW) ){
        player1.velocityX = 0;
      }
      
      
      drawSprites();
    }
  }
  
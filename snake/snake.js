 const ground = new Image();  
ground.src = "img/ground.png";  
  
const foodImg = new Image();  
foodImg.src = "img/food.png";  

const snake_temp = document.getElementById("snake");  
const snake_game = snake_temp.getContext("2d");  
const box = 32;  

let snake = [];  

let food = {  
    x : Math.floor(Math.random()*17+1) * box,  
    y : Math.floor(Math.random()*15+3) * box  
}  
snake[0] = {  
    x : 9 * box,  
    y : 10 * box  
};  
  
let score = 0;  
let d;  
  
document.addEventListener("keydown",direction);  
  
function direction(event){  
    let key = event.keyCode;  
    if( key == 37 && d != "RIGHT"){  
        d = "LEFT";  
    }else if(key == 38 && d != "DOWN"){  
        d = "UP";  
    }else if(key == 39 && d != "LEFT"){  
        d = "RIGHT";  
    }else if(key == 40 && d != "UP"){  
        d = "DOWN";  
    }else if( key == 65 && d != "RIGHT"){  
        d = "LEFT";  
    }else if(key == 87 && d != "DOWN"){  
        d = "UP";  
    }else if(key == 68 && d != "LEFT"){  
        d = "RIGHT";  
    }else if(key == 83 && d != "UP"){  
        d = "DOWN";  
    }  
}  
 
function draw(){  
      
    snake_game.drawImage(ground,0,0,640,640);  
      
    for( let i = 0; i < snake.length ; i++){  
        snake_game.fillStyle = ( i == 0 )? "blue" : "blue";  
        snake_game.fillRect(snake[i].x,snake[i].y,box,box);  
          
        snake_game.strokeStyle = "red";  
        snake_game.strokeRect(snake[i].x,snake[i].y,box,box);  
    }   
 
    snake_game.drawImage(foodImg, food.x, food.y, 40, 40);  
    let snakeX = snake[0].x;  
    let snakeY = snake[0].y;  
    if( d == "LEFT") snakeX -= box;  
    if( d == "UP") snakeY -= box;  
    if( d == "RIGHT") snakeX += box;  
    if( d == "DOWN") snakeY += box;  
    if(snakeX == food.x && snakeY == food.y){  
        score++;  
        food = {  
            x : Math.floor(Math.random()*17+1) * box,  
            y : Math.floor(Math.random()*15+3) * box  
        }  
 
    }else{  
 
        snake.pop();  
    }  
 
    let newHead = {  
        x : snakeX,  
        y : snakeY  
    }   
 
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){  
        clearInterval(game);  
        alert("you have earned "+ score + " points. Congrats!");
        location.reload();
    }  
      
    snake.unshift(newHead);  
      
    snake_game.fillStyle = "white";  
    snake_game.font = "45px Changa one";  
    snake_game.fillText(score,2*box,1.6*box);  
}  

function collision(head,array){  
    for(let i = 0; i < array.length; i++){  
        if(head.x == array[i].x && head.y == array[i].y){  
            return true;  
        }  
    }  
    return false;  
}  
 
let game = setInterval(draw,100); 

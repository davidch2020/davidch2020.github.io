let speed = 15;
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;
let text;
let welcome = ['welcome', '환영하다', 'добро пожаловать']
var change = false
let dvd = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
};

(function main(){
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");

    //Draw the "tv screen
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    text = 'welcome'
    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        //Draw the canvas background
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        //ctx.fillRect(dvd.x, dvd.y, 150*scale, 75*scale);
        ctx.font = '75px serif';
        console.log()
        ctx.fillText(text, dvd.x, dvd.y, ctx.measureText(text).width, 75)
        //ctx.drawImage(dvd.txt, dvd.x, dvd.y, dvd.txt.width*scale, dvd.txt.height*scale);
        //Move the logo
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
        //Check for collision
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(dvd.x+ctx.measureText(text).width >= canvas.width){
        dvd.xspeed *= -1;

        if (!change) {
            change = true
            text = welcome[Math.floor(Math.random() * welcome.length)]
            dvd.x += dvd.xspeed
        }
    }

    if (dvd.x <= 0) {
        dvd.xspeed *= -1;

        if (!change) {
            change = true
            text = welcome[Math.floor(Math.random() * welcome.length)]
            dvd.x = 0
        }
    }

    if (dvd.y >= canvas.height){
        dvd.yspeed *= -1;
        
        if (!change) {
            change = true
            text = welcome[Math.floor(Math.random() * welcome.length)]
            dvd.y = canvas.height - 1
        }
    }

    if (dvd.y - 37.5<= 0) {
        dvd.yspeed *= -1;

        if (!change) {
            change = true
            text = welcome[Math.floor(Math.random() * welcome.length)]
            dvd.y += 1
        }
    }

    change = false
}

//Pick a random color in RGB format
function pickColor(){
    //r = Math.random() * (254 - 0) + 0;
    //g = Math.random() * (254 - 0) + 0;
    //b = Math.random() * (254 - 0) + 0;

    r = 0
    g = 0
    b = 0

    logoColor = 'rgb('+r+','+g+', '+b+')';
}

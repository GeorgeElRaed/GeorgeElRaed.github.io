var canvas = document.getElementById("MyCanvas");
canvas.width = window.outerWidth;
canvas.height = window.outerHeight;
var ctx = canvas.getContext('2d');
var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
grd.addColorStop(0, "#fc7f1e");
grd.addColorStop(0.5, "#fc5c19");
grd.addColorStop(1, "#ff530a");
var x,y;

var clickFunction = function (event) {
    requestAnimationFrame(loop);
    x = event.clientX;
    y = event.clientY;
    document.removeEventListener('mousedown',clickFunction, false );
};

document.addEventListener('mousedown',clickFunction);


document.addEventListener('keyup',event=>{

    if(event.keyCode == 44){
        var node = document.createElement("H1");
        var t = document.createTextNode("Did u just..... Take a screenshot?????!!");
        node.append(t);
        document.body.appendChild(node);    
    }
    
});


function setBackground(){
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial"
    ctx.textAlign = "center";
    ctx.fillText("Welcome",canvas.width/2,canvas.height/2);
}

setBackground();

function drawCircle(centerX,centerY,radius){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

var r = 0,increment = 5;
function loop(timeStamp){

    ctx.clearRect(0,0,canvas.width,canvas.height);    
    setBackground();
            drawCircle(x,y,r);
        r+=increment;
        if(r<200)
            increment+=0.7;
        else if(r<800)
            increment += 2;
        else    
            increment += 4;

            if(r>canvas.width){
                canvas.className = "hide";
                return;
            }
    requestAnimationFrame(loop);
}


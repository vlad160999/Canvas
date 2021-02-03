window.onload = function(){
    let canvas = document.getElementById("canvas");
    let w = window.innerWidth;
    let h = window.innerHeight;
   
    canvas.width = w;
    canvas.height = h;
    
    let ctx = canvas.getContext("2d");

    let maxParticles = 500;
    let particles = [];
    let angle = 0;
    
    for(let i = 0;i < maxParticles;i++){
        particles.push({
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*3+1,
            d:Math.random()*maxParticles
        })
    }

    function draw(){
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle = "blue";
        ctx.beginPath();
        for(let i = 0;i < maxParticles;i++){
            let p = particles[i];
            ctx.moveTo(p.x,p.y);
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
        }
        ctx.fill();
        update();
        snowMandraw()
    }

    function update(){
        for(let i = 0;i  < maxParticles;i++){
            angle += 0.05;
            let p = particles[i];
            p.x += Math.sin(angle)*2;
            p.y += Math.sin(angle + p.d)+1 +p.r/2;

            if(p.y > h){
                p.y = 0;
            }
        }
    }

    let PosSnowManX = 650;
    let PosSnowManY = 410;
    let PosChtistmasTreeX = 150;
    let PosChristmasTreeY = 150;
    let snowMan = new Image();
    let christmasTree = new Image();


    christmasTree.src = "iconfinder_016_-_Xmas_Tree_2793028.png";
    snowMan.src = "iconfinder_028_-_Snowman_2793034.png";


    function snowMandraw(){
        ctx.drawImage(snowMan,PosSnowManX ,PosSnowManY);
        ctx.drawImage(christmasTree, PosChtistmasTreeX,PosChristmasTreeY );

    }

    snowMan.onload = snowMandraw;
    setInterval(draw,33);
}
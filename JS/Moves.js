const box=document.getElementById("box");
let x=0,y=0;
function moveright(){
    x+=20;
    box.style.left=x+"px";
}
function moveleft(){
    x-=20;
    box.style.left=x+"px";
}
function moveup(){
    y-=20;
    box.style.top=y+"px";
}
function movedown(){
    y+=20;
    box.style.top=y+"px";
}
document.addEventListener("keydown",(event)=>{
    if(event.key=="ArrowUp"){
        y-=30;
    }
    if(event.key=="ArrowDown"){
        y+=30;
    }
    if(event.key=="ArrowLeft"){
        x-=30;
    }
    if(event.key=="ArrowRight"){
        x+=30;
    }
    box.style.left=x+"px";
    box.style.top=y+"px";
})

// definer angrysmiley variabler
let angrycontainer = document.querySelector("#angry_container");
let angrysprite = document.querySelector("#angry_sprite");


let likehjertecontainer = document.querySelector("#likehjerte_container");
let likehjertesprite = document.querySelector("#likehjerte_sprite");
// definer like variabler 
let likecontainer = document.querySelector("#like_container");
let likesprite = document.querySelector("#like_sprite");

// definer startskærm som også bliver brugt som slut skærm 
let start = document.querySelector("#start");
let startGame = document.querySelector("#startGame");

// definer tiden 
let tid; 
let minTid;
let gametimer = document.querySelector("#timer");

// definer liv og point
let points; 
let liv;


// function til at få et ramdom tal mellem 0 og n
function randTal(n){

    return Math.floor(Math.random()*n)+1;
}
window.addEventListener("load", windowResize);
window.addEventListener("resize", windowResize);
// windowResize();

function windowResize(){
    let widthscreen = document.querySelector("#screen").clientWidth;
    console.log(widthscreen);
    let myFontprocent = 1.1;
    let myFont = (widthscreen / 100) * myFontprocent;
    document.querySelector("#screen").style.fontSize = myFont + "px";

}

//når siden er loaded skal funktion siden vises begynde
window.addEventListener("load", sidenVises)

function sidenVises(){

startGame.addEventListener("click", startSpil);
}



// denne function 
function startSpil(){


    angrycontainer.classList.add("flyv");
    likecontainer.classList.add("flyv");
    likehjertecontainer.classList.add("flyv");

    start.classList.add("ikke-synlig");
    document.querySelector("#liv"+1).classList = "liv";
    document.querySelector("#liv"+2).classList = "liv";
    document.querySelector("#liv"+3).classList = "liv";
    angrycontainer.addEventListener("mousedown",forsvind_angry);
    angrycontainer.addEventListener("click",mistLiv);
    angrycontainer.addEventListener("animationiteration",genstartangry);
    angrycontainer.addEventListener("animationend", genstartangry);

    
    likecontainer.addEventListener("click", forsvind_like);
    likecontainer.addEventListener("animationiteration",genstartlike);
    likecontainer.addEventListener("animationend", genstartlike);

    likehjertecontainer.addEventListener("click", forsvind_hjertelike);
    likehjertecontainer.addEventListener("animationiteration",genstarthjertelike);
    likehjertecontainer.addEventListener("animationend", genstarthjertelike);



    points = 0; 
    document.querySelector("#score").textContent = points;
    liv = 3;
    tid = 99; 
    gametimer.textContent = tid;
    starttid();
}

function starttid(){
    
    if (tid > 0) {
        minTimer = setTimeout(udskrivTid, 1000);
      }else{
        stopspil();
      }

}

function udskrivTid(){
 tid--;
 gametimer.textContent = tid;
 starttid();
 console.log(liv);
}

function stopspil(){
tid = 0;
gametimer.textContent = tid;
console.log("stop spil");
start.classList.remove("ikke-synlig");

angrycontainer.classList.remove("flyv");
likecontainer.classList.remove("flyv");

angrycontainer.removeEventListener("mousedown",forsvind_angry);
angrycontainer.removeEventListener("click",mistLiv);
angrycontainer.removeEventListener("animationiteration",genstartangry);
angrycontainer.removeEventListener("animationend", genstartangry);


likecontainer.removeEventListener("click", forsvind_like);
likecontainer.removeEventListener("animationiteration",genstartlike);
likecontainer.removeEventListener("animationend", genstartlike);

likehjertecontainer.removeEventListener("click", forsvind_hjertelike);
likehjertecontainer.removeEventListener("animationiteration",genstarthjertelike);
likehjertecontainer.removeEventListener("animationend", genstarthjertelike);


angrycontainer.classList = " pos4 delay";
angrysprite.classList = "sprite";

likecontainer.classList ="pos1";
likesprite.classList = "sprite";

likehjertecontainer.classList ="pos1";
likehjertesprite.classList = "sprite";

document.querySelector("#p-inner-start").textContent = "Tillykke du har fået "+ points + " points";
document.querySelector("#h1-inner-start").textContent = "Spillet er slut";


}


function forsvind_angry(){
   
    
    console.log("forsvind_angry");
    angrysprite.classList.add("forsvind");
    
    angrycontainer.classList.add("frys");
    document.querySelector("#fart").play();

    
}


function genstartangry(){

   
        console.log("genstartangry");
        myRand = Math.floor(Math.random()*4)+1;
        angrycontainer.classList = "";
        angrycontainer.offsetLeft;
        angrycontainer.classList = "container flyv pos" + myRand;
        angrysprite.classList = "sprite";
        angrycontainer.addEventListener("click",mistLiv);
   
}



function forsvind_like(){
    document.querySelector(".pling").currentTime = 0;
    document.querySelector(".pling").play();

    console.log("forsvind_like");
    likesprite.classList.add("forsvind");
    likecontainer.classList.add("frys");
    likecontainer.removeEventListener("click", forsvind_like);
    points++;
    console.log(points);
    document.querySelector("#score").textContent = points;

}





function genstartlike(){
        likecontainer.addEventListener("click", forsvind_like);
        console.log("genstartlike");
        myRand = Math.floor(Math.random()*4)+1;
        likecontainer.classList = "";
        likecontainer.offsetLeft;
        likecontainer.classList = "container flyv pos" + myRand;
        likesprite.classList = "sprite";
   

}

////
function forsvind_hjertelike(){
    document.querySelector(".pling").currentTime = 0;
    document.querySelector(".pling").play();

    console.log("forsvind_like");
    likehjertesprite.classList.add("forsvind");
    likehjertecontainer.classList.add("frys");
    likehjertecontainer.removeEventListener("click", forsvind_hjertelike);
    points++;
    console.log(points);
    document.querySelector("#score").textContent = points;

}


function genstarthjertelike(){

        likehjertecontainer.addEventListener("click", forsvind_hjertelike);
        console.log("genstartlike");
        myRand = Math.floor(Math.random()*4)+1;
        likehjertecontainer.classList = "";
        likehjertecontainer.offsetLeft;
        likehjertecontainer.classList = "container flyv pos" + myRand;
        likehjertesprite.classList = "sprite";
   

}


//





function mistLiv(){
    angrycontainer.removeEventListener("click",mistLiv);
    document.querySelector("#liv"+liv).classList.add("ikke-synlig");
    liv--;
    if (liv<=0){
        stopspil();
    }
}




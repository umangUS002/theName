var a;
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    if(i==5)continue;
    document.querySelectorAll("button")[i].addEventListener("mouseover",function(){
        var buttonInnerHTML = this.innerHTML;
        var b = Math.floor((Math.random() * 4) + 1);
        a=b;
        buttonAnimation1(buttonInnerHTML);
        background1(buttonInnerHTML,b);
    });
}
var c;
document.querySelector(".P").addEventListener("mouseover",function(){
    //var buttonInnerHTML = $(this).attr("class");
        
        a=Math.floor((Math.random() * 4) + 1);
        c=a;
        document.querySelector(".P").classList.add("pressed");
        document.querySelector(".container").classList.add("pressed1");
        document.querySelector("h1").innerHTML="Sometimes Sad";
        document.querySelector(".P").classList.add("image6"+c);
        document.querySelector(".P").innerHTML="";
        var tom1= new Audio("sounds/sometimes sad 1.wav");
        tom1.play();
        var tom2= new Audio("sounds/sadIntro.mp3");
        tom2.play();
        document.querySelector(".P").classList.add("shadow");

})
document.querySelector(".P").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".P").classList.add("bg");
        document.querySelector(".P").classList.remove("image6"+c);
        document.querySelector(".P").innerHTML="S";
        document.querySelector(".P").classList.remove("shadow");
        var tom1= new Audio("sounds/sadIntro.mp3");
        tom1.pause();
})
document.querySelector(".P").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        document.querySelector(".P").classList.remove("image6"+a);
        //document.querySelector(".P").classList.add("bg");
        document.querySelector(".P").innerHTML="S";
        document.querySelector(".P").classList.remove("shadow");
        var tom1= new Audio("sounds/sadIntro.mp3");
        tom1.pause();

})
document.querySelector(".S").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //+document.querySelector(".S").classList.add("bg");
        document.querySelector(".S").innerHTML="S";
        document.querySelector(".S").classList.remove("shadow");

})
document.querySelector(".S").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".S").classList.image("bg");
        document.querySelector(".S").innerHTML="S";
        document.querySelector(".S").classList.remove("shadow");

})
document.querySelector(".O").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".O").classList.add("bg");
        document.querySelector(".O").innerHTML="O";
        document.querySelector(".O").classList.remove("shadow");

})
document.querySelector(".O").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".O").classList.add("bg");
        document.querySelector(".O").innerHTML="O";
        document.querySelector(".O").classList.remove("shadow");

})
document.querySelector(".N").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".N").classList.add("bg");
        document.querySelector(".N").innerHTML="N";
        document.querySelector(".N").classList.remove("shadow");

})
document.querySelector(".N").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".N").classList.add("bg");
        document.querySelector(".N").innerHTML="N";
        document.querySelector(".N").classList.remove("shadow");

})
document.querySelector(".A").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
       // document.querySelector(".A").classList.add("bg");
        document.querySelector(".A").innerHTML="A";
        document.querySelector(".A").classList.remove("shadow");

})
document.querySelector(".A").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
       // document.querySelector(".A").classList.add("bg");
        document.querySelector(".A").innerHTML="A";
        document.querySelector(".A").classList.remove("shadow");

})
document.querySelector(".K").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".K").classList.add("bg");
        document.querySelector(".K").innerHTML="K";
        document.querySelector(".K").classList.remove("shadow");

})
document.querySelector(".K").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".K").classList.add("bg");
        document.querySelector(".K").innerHTML="K";
        document.querySelector(".K").classList.remove("shadow");

})
document.querySelector(".H").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
       // document.querySelector(".H").classList.add("bg");
        document.querySelector(".H").innerHTML="H";
        document.querySelector(".H").classList.remove("shadow");

})
document.querySelector(".H").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
       // document.querySelector(".H").classList.add("bg");
        document.querySelector(".H").innerHTML="H";
        document.querySelector(".H").classList.remove("shadow");

})
document.querySelector(".I").addEventListener("mouseout",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
       // document.querySelector(".I").classList.add("bg");
        document.querySelector(".I").innerHTML="I";
        document.querySelector(".I").classList.remove("shadow");

})
document.querySelector(".I").addEventListener("click",function(){
    //var buttonInnerHTML = this.attr("id");
        this.classList.remove("pressed");
        document.querySelector(".container").classList.remove("pressed1");
        //document.querySelector(".I").classList.add("bg");
        document.querySelector(".I").innerHTML="I";
        document.querySelector(".I").classList.remove("shadow");

})

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    if(i==5)continue;
    document.querySelectorAll("button")[i].addEventListener("mouseout",function(){
        var buttonInnerHTML = this.innerHTML;
        background2(buttonInnerHTML,a);
        buttonAnimation2(buttonInnerHTML);        
    });
}
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    if(i==5)continue;
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        background2(buttonInnerHTML,a);
        buttonAnimation2(buttonInnerHTML);        
    });
}
function background1(buttonInnerHTML,b){
    switch(buttonInnerHTML){
        case "S":
            document.querySelector(".S").classList.add("image1"+b);
            break;
        case "O":
            document.querySelector(".O").classList.add("image2"+b);
            break;
        case "N":
            document.querySelector(".N").classList.add("image3"+b);
            break;
            case "A":
            document.querySelector(".A").classList.add("image4"+b);
            break;
            case "K":
            document.querySelector(".K").classList.add("image5"+b);
            break;
            case "H":
            document.querySelector(".H").classList.add("image7"+b);
            break;
            case "I":
            document.querySelector(".I").classList.add("image8"+b);
            break;
    }
}
function background2(buttonInnerHTML,a){
    switch(buttonInnerHTML){
        case "S":
            document.querySelector(".S").classList.remove("image1"+a);
            case "O":
                document.querySelector(".O").classList.remove("image2"+a);
                break;
            case "N":
                document.querySelector(".N").classList.remove("image3"+a);
                break;
                case "A":
                document.querySelector(".A").classList.remove("image4"+a);
                break;
                case "K":
                document.querySelector(".K").classList.remove("image5"+a);
                break;
                case "H":
                document.querySelector(".H").classList.remove("image7"+a);
                break;
                case "I":
                document.querySelector(".I").classList.remove("image8"+a);
                break;
    }
}
function buttonAnimation1(innerHTML){
    var serialNo = Math.floor((Math.random() * 4) + 1);
    var activeElement = document.querySelector("."+innerHTML);
    activeElement.classList.add("pressed");
    document.querySelector(".container").classList.add("pressed1");
    switch(innerHTML){
        case "S" : 
            document.querySelector("h1").innerHTML="Sleepy";
            var tom1 = new Audio("sounds/Sleepy 1.wav");
            tom1.play();
            var tom1 = new Audio("sounds/sleepyfinalIntro.mp3");
            tom1.play();
            document.querySelector(".S").innerHTML="";
            //document.querySelector(".S").classList.add("image1"+serialNo);
            document.querySelector(".S").classList.add("shadow");
            break;
        case "O" :
            document.querySelector("h1").innerHTML="Obssessed(Self)";
            var tom2 = new Audio("sounds/obssessed - self 1.wav");
            tom2.play();
            var tom1 = new Audio("sounds/selfobssessedIntro.mp3");
            tom1.play();
            document.querySelector(".O").innerHTML="";
            //document.querySelector(".O").classList.add("image2"+serialNo);
            document.querySelector(".O").classList.add("shadow");
            break;
        case "N":
            document.querySelector("h1").innerHTML="Nincompoop";
            var tom3= new Audio("sounds/nincompoop 1.wav");
            tom3.play();
            var tom3= new Audio("sounds/nincompoopIntro.mp3");
            tom3.play();
            document.querySelector(".N").innerHTML="";
            //document.querySelector(".N").classList.add("image3"+serialNo);
            document.querySelector(".N").classList.add("shadow");
            break;
        case "A":
            document.querySelector("h1").innerHTML="Adorable";
            var tom4= new Audio("sounds/adorable 1.wav");
            tom4.play();
            var tom4= new Audio("sounds/adorableIntro.mp3");
            tom4.play();
            document.querySelector(".A").innerHTML="";
            //document.querySelector(".A").classList.add("image4"+serialNo);
            document.querySelector(".A").classList.add("shadow");
            break;
        case "K":
            document.querySelector("h1").innerHTML="Kooky";
            var snare =new Audio("sounds/kooky 1.wav");
            snare.play();
            var snare =new Audio("sounds/kookyIntro.mp3");
            snare.play();
            document.querySelector(".K").innerHTML="";
            //document.querySelector(".K").classList.add("image5"+serialNo);
            document.querySelector(".K").classList.add("shadow");
            break;
        case "H":
            document.querySelector("h1").innerHTML="Horrific";
            var kick = new Audio("sounds/horrific.wav");
            kick.play();
            var kick = new Audio("sounds/horrificIntro.mp3");
            kick.play();
            document.querySelector(".H").innerHTML="";
            //document.querySelector(".H").classList.add("image7"+serialNo);
            document.querySelector(".H").classList.add("shadow");
            break;
        case "I":
            document.querySelector("h1").innerHTML="Innocent";
            var kick = new Audio("sounds/innocent 1.wav");
            kick.play();
            var kick = new Audio("sounds/innocentIntro.mp3");
            kick.play();
            document.querySelector(".I").innerHTML="";
            //document.querySelector(".I").classList.add("image8"+serialNo);
            document.querySelector(".I").classList.add("shadow");
            break;
        default:
    }
}
function buttonAnimation2(innerHTML){
    var activeElement = document.querySelector("."+innerHTML)
    activeElement.classList.remove("pressed");
    document.querySelector(".container").classList.remove("pressed1");
    document.querySelector("h1").innerHTML="Do You Know ? The Meaning of :";
}

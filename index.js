function getFortune() {
    const fortunes = [
        "A pleasant surprise is waiting for you.",
        "Adventure awaits you around the next corner.",
        "Your hard work will pay off today.",
        "You will find a hidden treasure today.",
        "Your creativity will shine bright today."
    ];
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    alert(fortunes[randomIndex]);
}

var audio = new Audio('calm-and-peaceful-115481.mp3');
let play = false;
function playBackgroundMusic() {
    play = !play;
    if(play) {
        audio.play();
        
    }
    else{
        audio.pause();
        
    }
  
   
}
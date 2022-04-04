var numberOfButtons = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", onKeyPressed)
  
for(var i =0; i< numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
}

function onClick() {
    playSound(this.innerHTML);
}

function onKeyPressed(event) {
    playSound(event.key);
}

function playSound(alphabet) {
    var src="";

    switch(alphabet) {
        case 'w':
            src = "tom-1";
            break;
        case 'a':
            src = "tom-2";
            break;
        case 's':
            src = "tom-3";
            break; 
        case 'd':
            src = "tom-4";
            break;              
        case 'j':
            src = "snare";
            break;
        case 'k':
            src = "crash";
            break;
        case 'l':
            src = "kick-bass";
            break; 
        default:
            console.log(alphabet);   
    }

    var audio = new Audio(`sounds/${src}.mp3`);
    audio.play();
}
console.log("welcome to spotify");
let songindex=0;
let audioElement=new Audio('One-Direction-Perfect.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');

//audioElement.play();
masterplay.addEventListener('click',=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})

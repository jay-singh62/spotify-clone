// /thse is the object of songs details
  let songs=[
    { songname: "Healdlight",filepath:'1.mp3',coverpath:       '01.jpg', duration:'2:41'},
    { songname:"Alone PT -2",filepath:'2.mp3',coverpath:      '02.jpg', duration:'4::05'},
    { songname:"Senorita",filepath:'3.mp3',coverpath:      '03.jpg', duration:'3:11'},
    { songname:"Let Me Love You",filepath:'4.mp3',coverpath:  '04.jpg', duration:'3:25'},
    { songname:"Mortal",filepath:'5.mp3',coverpath:'05.jpg', duration:'3:48'},
  ]
 
  
  // here we have made varibles used and make cahnges in html through dom manuplation
  let  songindex = 0;
  let masterplay=document.getElementById('masterplay')
  let progressbar=document.getElementById('progressbar')
  let songelement=new Audio('songs/2.mp3') 
  let songitem=Array.from(document.getElementsByClassName('songitem'));
   let songtag=document.getElementById('songtag')
// here we have change the name of song and cover page and duration
  songitem.forEach((element,i) => {
    
    element.getElementsByTagName('img')[0].src=songs[i].coverpath
    element.getElementsByClassName('songname')[0].innerHTML=songs[i].songname
    element.getElementsByClassName('time')[0].innerHTML=songs[i].duration
    
  });


// here we are adding eventlistner to our selected elements
// like click event to pause and play the song 
masterplay.addEventListener('click',()=>{

    if (songelement.paused ||songelement.currentTime<=0)
       { songelement.play();
        
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');}

    else{
         songelement.pause();
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');}
})
// event listner for progress bar 

songelement.addEventListener('timeupdate',()=>{
    
    // here we have calculate the percetage timeing of song in progress variable by time divided by duration and multiplied by 100
    progress=parseInt((songelement.currentTime/songelement.duration)*100);
    
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    songelement.currentTime=progressbar.value*songelement.duration/100;
});



 
let makeallplay= ()=>{
Array.from(document.getElementsByClassName('songitmeplay')).forEach ((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
        
    })
}

    Array.from(document.getElementsByClassName('songitmeplay')).forEach ((element)=>{
        element.addEventListener('click',(e)=>{
            makeallplay();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            songelement.src=`songs/${songindex}.mp3`
            songtag.innerHTML=songs[songindex-1].songname;
            songelement.currentTime=0;
            
           songelement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
          
            
    
        })
    }
    
    )

document.getElementById('backward').addEventListener('click',()=>{
  if (songindex>=4){
    songindex=0;
  }
  else{
    songindex+=1;
  }
  songelement.src=`songs/${songindex+1}.mp3`
  songtag.innerHTML=songs[songindex].songname;
            songelement.currentTime=0;
            songelement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
    
});


document.getElementById('forword').addEventListener('click',()=>
{
if (songindex<=0){
  songindex=4;}

else
{ songindex-=1;

}
songelement.src=`songs/${songindex+1}.mp3`;
songtag.innerHTML=songs[songindex].songname;
songelement.currentTime=0;
songelement.play();
masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');


})


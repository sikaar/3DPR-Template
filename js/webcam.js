// Handling webcam stream

function activateWebCam()
{
  // do stuff here.
  var X=document.querySelector('#thewebcam');
  let Y=document.querySelector('#thewebcam2');
  if( !X.getAttribute("visible") && !Y.getAttribute("visible"))
    {
      //create the node
      X.setAttribute("visible",true );
      launchstream();
    }
  else if( X.getAttribute("visible") && !Y.getAttribute("visible"))
  {
    //create the node
    X.setAttribute("visible",false);
    Y.setAttribute("visible",true );
    //launchstream();
  }
  else{
    //delete the node
      X.setAttribute("visible",false );
      Y.setAttribute("visible",false);
    stopstream()
  }

}

function launchstream()
{
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
    let $video = document.querySelector('#webcam')
    $video.srcObject = stream;
    $video.onloadedmetadata = () => {
      $video.play();
    }
  })  
};

function stopstream()
{
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(stream => {
stream.getTracks().forEach(function(track) {
  track.stop();
});  
});
};


// keyboard controls

window.addEventListener("keydown", function(e){
  if(e.code == 'KeyC') 
  { 
    activateWebCam();
  };


});
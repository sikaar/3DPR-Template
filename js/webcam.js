// Handling webcam stream

document.querySelector("#Activate_Webcam").addEventListener("click", (e)=> {
  // do stuff here.
  var X=document.querySelector('#thewebcam');
  if( !X.getAttribute("visible"))
    {
      //create the node
      X.setAttribute("visible",true );
      launchstream();
    }
  else{
    //delete the node
      X.setAttribute("visible",false );
    stopstream()
  }

  
});

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

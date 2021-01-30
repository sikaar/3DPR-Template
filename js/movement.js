// teleport to poster
    var Y=document.querySelectorAll('.poster');
    Array.from(Y).forEach(node => {
    node.addEventListener('click', function () {

      rotatetolookat(node);

      });

    });

// Move along anchors

    var Z=document.querySelectorAll('.anchor');
    Array.from(Z).forEach(node => {
    node.addEventListener('click', function () {
      //console.log(node);
      movetonode(node);
      });
    });

function rotatetolookat(node)
{
      //console.log("Rotate To Look At");
      var nodeposition = new THREE.Vector3();
      nodeposition.setFromMatrixPosition(node.object3D.matrixWorld);

      var nodeRotation = node.parentNode.getAttribute('rotation');

      //console.log("the node angle :");

      //console.log(nodeRotation);

      //var theangle = 90;
      //if(nodeposition.z > -3) theangle = -90;
      //console.log("the angle :" + theangle);


      let controls = document.querySelector('#thecamera').components['look-controls'];
      controls.pitchObject.rotation.x = 0;
      controls.yawObject.rotation.y = degrees_to_radians( nodeRotation.y + 90 );

}


// Move with Buttons
function movetoPanel(panel)
{
  //var node= panel + '.anchor';
  var Y=document.querySelector(panel);
  var X=Y.querySelector('.anchor');  
  movetonode(X);
  X=Y.querySelector('.poster');
  rotatetolookat(X);
}

function movetonode(node)
{
      //console.log("Move To Node");
      var X=document.querySelector('#rig');
      var nodeposition = new THREE.Vector3();
      nodeposition.setFromMatrixPosition(node.object3D.matrixWorld);
      if( Math.round(nodeposition.x)==0)
      {
        nodepos = Math.round(nodeposition.x) + " " + 0 + " " + nodeposition.z ;
      }
      else
      {
        nodepos = nodeposition.x + " " + 0 + " " + nodeposition.z ;
      }
      X.setAttribute('animation', {
        property: 'position',
        to: nodepos,
        easing: 'linear',
        dur: 1500
      });
}

          
function degrees_to_radians(degrees)
        {
          var pi = Math.PI;
          return degrees * (pi/180);
        };

 var RotationAngle=10;

  window.addEventListener("keydown", function(e){
    
    if(e.code == 'KeyQ') 
    { // e.g. v key
    
 let controls = document.querySelector('#thecamera').components['look-controls'];
    controls.pitchObject.rotation.x = 0;
    controls.yawObject.rotation.y += degrees_to_radians(RotationAngle);  
    };
    if(e.code == 'KeyE') 
    { // e.g. v key
 let controls = document.querySelector('#thecamera').components['look-controls'];
    controls.pitchObject.rotation.x = 0;
    controls.yawObject.rotation.y -= degrees_to_radians(RotationAngle);  
    };
  });

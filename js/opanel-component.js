 AFRAME.registerComponent('opanel-component', {
    init: function(){
    let el = this.el;
    el.addEventListener("model-loaded", e =>{
      var testarray = [];
      el.object3D.traverse (function (child) {
      //console.log(child.name);
      testarray.push( child.name );
         if(child.name == "Torus001")
          {
          child.material =  new THREE.MeshPhongMaterial( { 
          color: '#ffffff',
          specular: '#ffffff',
          shininess: 100,
          transparent : true,
          opacity: 0.5
          } );
          }
          });
    });
        
    }}); 

 //Handle touch screen movement for optimal mobile navigation

 AFRAME.components["look-controls"].Component.prototype.onTouchMove = function (t) {
                        var PI_2 = Math.PI/2,
                        e,
                        o = this.el.sceneEl.canvas,
                        i = this.yawObject,
                        j = this.pitchObject;
                        this.touchStarted && this.data.touchEnabled && (e = 2 * Math.PI * (t.touches[0].pageX - this.touchStart.x) / o.clientWidth, f = 2 * Math.PI * (t.touches[0].pageY - this.touchStart.y) / o.clientHeight, j.rotation.x += .3 * f, i.rotation.y += .5 * e, j.rotation.x = Math.max(-PI_2, Math.min(PI_2, j.rotation.x)), this.touchStart = {
                                x: t.touches[0].pageX,
                                y: t.touches[0].pageY
                            })
                        };

/*var therotation=0;

 AFRAME.components["look-controls"].Component.prototype.updateOrientation = function () {
    var poseMatrix = new THREE.Matrix4();

    return function () {
      var object3D = this.el.object3D;
      var pitchObject = this.pitchObject;
      var yawObject = this.yawObject;
      var pose;
      var sceneEl = this.el.sceneEl;

      // In VR mode, THREE is in charge of updating the camera pose.
      if (sceneEl.is('vr-mode') && sceneEl.checkHeadsetConnected()) {
        // With WebXR THREE applies headset pose to the object3D matrixWorld internally.
        // Reflect values back on position, rotation, scale for getAttribute to return the expected values.
        if (sceneEl.hasWebXR) {
          pose = sceneEl.renderer.xr.getCameraPose();
          if (pose && the rotation==0 ) {
            poseMatrix.elements = pose.transform.matrix;
            poseMatrix.decompose(object3D.position, object3D.rotation, object3D.scale);
          }else if(pose && the rotation !=0 ) {
            poseMatrix.elements = pose.transform.matrix;

            poseMatrix.decompose(object3D.position, object3D.rotation, object3D.scale);
          }
        }
        return;
      }

      this.updateMagicWindowOrientation();

      // On mobile, do camera rotation with touch events and sensors.
      object3D.rotation.x = this.magicWindowDeltaEuler.x + pitchObject.rotation.x;
      object3D.rotation.y = this.magicWindowDeltaEuler.y + yawObject.rotation.y;
      object3D.rotation.z = this.magicWindowDeltaEuler.z;
    };
  }*/

AFRAME.registerComponent('colorize', {
  dependencies: ['material'],
    init: function(){

    var thecolor = getComputedStyle(document.documentElement).getPropertyValue('--2ndcolor').toString();
    //console.log("thecolor =" + typeof thecolor + thecolor);
    //#f39c12 thecolor.toString();
    const clr = parseInt ( thecolor.replace("#","0x"), 16 );

    this.el.setAttribute('material', 'color', clr);


    }

});

AFRAME.registerComponent('thumbstick-logging',{
  init: function () {
    this.el.addEventListener('thumbstickmoved', this.logThumbstick);
  },
  logThumbstick: function (evt) {

     var RotationAngle=10;

    /*let controls = document.querySelector('#thecamera').components['look-controls'];
    controls.pitchObject.rotation.x = 0;

    if (evt.detail.x < -0.95) { 
    controls.yawObject.rotation.y -= degrees_to_radians(RotationAngle); 
    console.log("left");
     }
    if (evt.detail.x > 0.95) { 
    console.log("right");
    controls.yawObject.rotation.y += degrees_to_radians(RotationAngle);  
    }
*/
if (evt.detail.x < -0.95 || evt.detail.x > 0.95) {
  therotation=evt.detail;

}else{
  therotation=0;
}


  }
});


                        
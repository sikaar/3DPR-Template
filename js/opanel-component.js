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

AFRAME.registerComponent('colorize', {
  dependencies: ['material'],
    init: function(){
    var thecolor = getComputedStyle(document.documentElement).getPropertyValue('--2ndcolor').toString();
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

    let controls = document.querySelector('#thecamera').components['look-controls'];
    controls.pitchObject.rotation.x = 0;
    if (evt.detail.x < -0.95) { 
    controls.yawObject.rotation.y -= degrees_to_radians(RotationAngle); 
    console.log("left");
     }
    if (evt.detail.x > 0.95) { 
    console.log("right");
    controls.yawObject.rotation.y += degrees_to_radians(RotationAngle);  
    }

  }
});


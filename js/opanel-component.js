//Allowing Control of the Opanel 3D model - color / transparency ... )
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
                        this.touchStarted && this.data.touchEnabled && (e = 2 * Math.PI * (t.touches[0].pageX - this.touchStart.x) / o.clientWidth, 
                          f = 2 * Math.PI * (t.touches[0].pageY - this.touchStart.y) / o.clientHeight, 
                          j.rotation.x += .3 * f, 
                          i.rotation.y += .5 * e, 
                          j.rotation.x = Math.max(-PI_2, Math.min(PI_2, j.rotation.x)), 
                          this.touchStart = {
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


AFRAME.registerComponent('fit-texture', {
  dependencies: ['geometry', 'material'],
  schema: {
    type: 'boolean',
    default: true
  },
   update: function () {
     if (this.data === false) return;

     var el = this.el;
     var self = this;
     if (self.dimensions) {
       // If texture has already been loaded, and `fit-texture` was reset.
       self.applyTransformation();
     } else {
       var textureLoaded = function(e) {

          var w = e.detail.texture.image.videoWidth || e.detail.texture.image.width;
          
          var h = e.detail.texture.image.videoHeight || e.detail.texture.image.height;
          
          // Don't apply transformation on incomplete info
          if(h === 0 || w === 0) return;
          
          // Save dimensions for later updates to `fit-texture`, see above.
          self.dimensions = {w:w, h:h};
          
          self.applyTransformation();
       }
       //el.addEventListener('materialvideoloadeddata', textureLoaded);
       el.addEventListener('materialtextureloaded', textureLoaded);
      
     }
   },
   
   applyTransformation: function () {
    var el = this.el;
    var geometry = el.getAttribute('geometry');

    // Use self.dimension data from previous texture/video loaded events
    var widthHeightRatio = this.dimensions.h / this.dimensions.w;

    if (geometry.width && geometry.height) {
      console.warn('Using `fit-texture` component on an element with both width and height. Therefore keeping width and changing height to fit the texture. If you want to manually set both width and height, set `fit-texture="false"`. ');
    }
    if (geometry.width) {
      el.setAttribute('height', geometry.width * widthHeightRatio);
    } else if (geometry.height) {
      el.setAttribute('width', geometry.height / widthHeightRatio);
    } else {
      // Neither width nor height is set.
      var tempWidth = 1.0;
      el.setAttribute('width', '' + tempWidth);
      el.setAttribute('height', tempWidth * widthHeightRatio);
    }
  }

});

function addCube() {
  var pts=[];
  pts = randomPoint();
    var x = pts.x;
    var y = pts.y + Math.random();
    var z = pts.z;
   var pos = x.toFixed(2) + ' ' + y.toFixed(2) + ' ' + z.toFixed(2);
return pos;
}


function randomPoint()
{
    let xt = Math.random() - 0.5;
    let yt = Math.random() - 0.5;
  let zt = Math.random() - 0.5;
    var k = Math.sqrt(xt*xt + yt*yt + zt*zt);
    while (k < 0.2 || k > 0.3)
    {
        xt = Math.random() - 0.5;
        yt = Math.random() - 0.5;
        zt = Math.random() - 0.5;
        k = Math.sqrt(xt*xt + yt*yt + zt*zt);
    }
    return {'x':xt/k, 'y':yt/k, 'z':zt/k};
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomSize() {
  var size = Math.floor(Math.random() * 4) +2 ;
  return size;
}

AFRAME.registerComponent('containerent', {
  schema: {
    keywords: {type: 'string', default: 'trencherman founded unreeving crystallography never bunchgrasses husk dogears afghans dakoits barrelhead informants ethics sables audacities elegies wahoos unassuageable uglily swift spire superficial'}
  },
  update: function () {
    let container = this.el;
    let thewordsstring = this.data.keywords;
    let thewords = thewordsstring.split(" ");

    for (var i=0; i<thewords.length; i++)
{
this.el.innerHTML += "<a-entity look-at='#rig' text='width: " + getRandomSize() + "; color: " + getRandomColor() + "; value: " + thewords[i] + "; align: center' position ='" + addCube() + "' background='color: #ffffff'></a-entity>";
}
  }
});



//Overlay Handler
var welcometext= document.getElementById("text").innerHTML; 
var content="<iframe class='iframe' width='560' height='315' src='https://www.youtube.com/embed/ZCbUoFllo3s' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

function on(sometext) {
  document.getElementById("overlay").style.display = "block";
  if (sometext.includes("youtube.com/"))
    {
   document.getElementById("text").innerHTML= "<iframe class='iframe' width='800' height='450' src='" + sometext.replace('/watch?v=','/embed/') + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";     
    }else if(sometext.includes(".pdf"))
    {
   document.getElementById("text").innerHTML= "<div class='container'><iframe class='responsive-iframe' src='" + sometext.replace('http://','https://') + "'>This browser does not support PDFs. Please download the PDF to view it: <a href='"+ sometext.replace('http://','https://') +"'>Download PDF</a></iframe></div>";     
    }
    else if(sometext.includes("IFRAME"))
    {
   document.getElementById("text").innerHTML= "<div class='container' style='background:url(./img/loader.gif) center center no-repeat;'><iframe width='800' height='450' class='responsive-iframe' src='" + sometext.replace('IFRAME ','') + "'></iframe></div>";     
    }else if(sometext.length > 2)
    {
   document.getElementById("text").innerHTML= sometext;     
    }
  else
    {
   document.getElementById("text").innerHTML= content;       
    }
}

function off() {
  document.getElementById("overlay").style.display = "none";
  stopVideo();
}
on(welcometext);
// Handling the menu

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// Playing the videos - workaround for CORS policy 

function startVideo(){
        var Z=document.querySelectorAll('.videos');
        Array.from(Z).forEach(node => {
        node.play();
        });
    };

//Stoping videos in iframe
function stopVideo() {
  var iframe = document.querySelector( ".iframe");
  if ( iframe ) {
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
};

// slidedeck handler

      var myStringArray=[];
      var YY=document.querySelectorAll('.slide');
      Array.from(YY).forEach(node => {
      myStringArray.push('#' + node.getAttribute('id'));
      });


      var indexi=0;
      document.querySelector("#previous").setAttribute('visible',false);
      document.querySelector("#next").addEventListener("click", (e)=> {
        gotonextslide();
      });
            document.querySelector("#previous").addEventListener("click", (e)=> {
        gotopreviousslide();

      });



function gotonextslide()
{
        var X=document.querySelector('#background'); 
        if(indexi <= myStringArray.length - 1  )
          {
            indexi ++;
            X.setAttribute("src",myStringArray[indexi] );
            ORA.click({'data':{'wt.ti':'Slide ' + indexi }});
            document.querySelector("#previous").setAttribute('visible',true);
            if(indexi == myStringArray.length - 1)
              {
                document.querySelector("#next").setAttribute('visible',false); 
              }
          }
}



function gotopreviousslide()
{
        var X=document.querySelector('#background'); 
        if(indexi >= 0  )
          {
            indexi --;
            X.setAttribute("src",myStringArray[indexi] );
            ORA.click({'data':{'wt.ti':'Slide ' + indexi }});
            document.querySelector("#next").setAttribute('visible',true);
            if(indexi == 0)
              {
                document.querySelector("#previous").setAttribute('visible',false);
              }
          };
}



function showtextureid(isVisible)
  {
    var YY=document.querySelectorAll('.texture-identifier');
    Array.from(YY).forEach(node => {

    isVisible=node.getAttribute('visible');
    node.setAttribute('visible', !isVisible );
    });
  }


var coll = document.getElementsByClassName("collapsible_ui");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

window.addEventListener("keydown", function(e){
    if(e.code == 'BracketLeft') 
    { 
      gotopreviousslide();
    };


    if(e.code == 'BracketRight') 
    { 
      gotonextslide();
    };

    if(e.code == 'Escape') 
    { 
      off();
    };
  });
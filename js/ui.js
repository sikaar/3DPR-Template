//Overlay Handler
var welcometext= "<h1>Welcome to </h1> <img src='./textures/logo.png' style='width:100%;height: auto;max-width: 300px;'/><br> <table><tr> <td align='center' width=25%><img src='./img/drag-and-drop.png' width=50%/></td><td align='center' width=25%><img src='./img/keys.png' width=50%/></td><td align='center' width=25%><img src='./img/menu.png' width=50%/></td><td align='center' width=25%><img src='./img/nextprevious.png' width=50%/></td></tr><tr> <td align='center' width=25%>You can move the view by dragging the the mouse</td><td align='center' width=25%>Move in the room by pressing the arrows keys</td><td align='center' width=25%>Use the menu on the bottom left to be teleported</td><td align='center' width=25%>Click on the next and previous arrows beside the slidedeck</td></tr></table><br><br><button class='button'> Get Started</button><p style='font-size:4px; color:white'>by <a style='text-decoration: none;color: white' href='https://xrlab.ddns.net'>XRlab</a></p>";
var content="<iframe width='560' height='315' src='https://www.youtube.com/embed/ZCbUoFllo3s' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

function on(sometext) {
  document.getElementById("overlay").style.display = "block";
  if (sometext.includes("youtube.com/"))
    {
   document.getElementById("text").innerHTML= "<iframe width='800' height='450' src='" + sometext.replace('/watch?v=','/embed/') + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";     
    }else if(sometext.includes(".pdf"))
    {
   document.getElementById("text").innerHTML= "<div class='container'><iframe class='responsive-iframe' src='" + sometext.replace('http://','https://') + "'>This browser does not support PDFs. Please download the PDF to view it: <a href='"+ sometext.replace('http://','https://') +"'>Download PDF</a></iframe></div>";     
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


// slidedeck handler

      var myStringArray=[];
      var YY=document.querySelectorAll('.slide');
      Array.from(YY).forEach(node => {
      myStringArray.push('#' + node.getAttribute('id'));
      });


      var indexi=0;
      document.querySelector("#previous").setAttribute('visible',false);
      document.querySelector("#next").addEventListener("click", (e)=> {
        // do stuff here.
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
      });
      document.querySelector("#previous").addEventListener("click", (e)=> {
        // do stuff here.
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
          }
      });



function showtextureid(isVisible)
  {
    var YY=document.querySelectorAll('.texture-identifier');
    Array.from(YY).forEach(node => {

    isVisible=node.getAttribute('visible');
    node.setAttribute('visible', !isVisible );
    });
  }


var coll = document.getElementsByClassName("collapsible");
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
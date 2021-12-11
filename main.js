X = 0;
Y = 0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
   document.getElementById("status").innerHTML = "In Progress;Please Speak";
   recognition.start();
}
recognition.onresult = function(event)
{
   console.log(event);
   var content = event.results[0][0].transcript;
   var confidence = (event.results[0][0].confidence*100).toFixed(2);
   document.getElementById("confidence").innerHTML = confidence + "%";
   document.getElementById("status").innerHTML = "The Speech has been Recognized as : " + content;
   if(content == "Circle")
   {
      X = Math.floor(Math.random()*900);
      Y = Math.floor(Math.random()*600);
      document.getElementById("status").innerHTML = "Started Drawing Circle";
      draw_circle = "set";
   }
   if(content == "rectangle")
   {
      X = Math.floor(Math.random()*900);
      Y = Math.floor(Math.random()*600); 
      document.getElementById("status").innerHTML = "Started Drawing Rectangle";
      draw_rect = "set";
   }
}
function setup()
{
    canvas = createCanvas(900,600);
}
function draw()
{
    if(draw_rect == "set")
    {
       rect(X,Y,75,55);
       document.getElementById("status").innerHTML = "Rectangle Is Drawn";
       draw_rect = "";
    }
    if(draw_circle == "set")
    {
       radius = Math.floor(Math.random()*100);
       circle(X,Y,radius);
       document.getElementById("status").innerHTML = "Circle Is Drawn";
       draw_circle = "";
    }
}
function clearCanvas()
{
   background("pink");
}
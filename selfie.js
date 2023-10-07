
var SpeechRecognition = window.webkitSpeechRecognition; var recognition = new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(hola)
{console.log(hola)
var holi=hola.results[0][0].transcript;
document.getElementById("textbox").innerHTML=holi;
speak()

}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera)
}
camera=document.getElementById("camera");
Webcam.set({
width:500,
height:200,
image_format:"jpg",
jpg_quality:200
}) 
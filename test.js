let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(test){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16) {
       speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onresult=(Event)=>{
    let currentIndeex=Event.resultIndex
    let transcript=Event.result[currentIndex][0].transcript
    content.innerText=transcript
    takecommand(transcript)
}

btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hellow") || message.includes("hey")){
        speak("hellow sir, what can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant , created by ARUN")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube..")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("https://www.whatsapp.com")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak("time")
        
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("KUSHAGRA","") 
        speak(finalText)
        window.open('https://www.google.co.in/search?q=${message.replace("KUSHAGRA","")}',"_blank")
    }

}
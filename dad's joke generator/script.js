
let joke=document.getElementById("joke");
let author=document.getElementById("author");
const api_url="https://official-joke-api.appspot.com/jokes/random";
async function getquotes(url){
    const response=await fetch(url);
    var data=await response.json();
    joke.innerHTML=data.setup;
    author.innerHTML=data.punchline +" 😂";

}
getquotes(api_url)

// function add(){
//     window.open("whatsapp://send?text="+joke.innerHTML + "---By "+author.innerHTML ,"twitter window","width=600","height=300");

// }

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    let toggle=document.getElementById("toggle");
    toggle.style.border="1px solid white"
    document.getElementById("share").style.backgroundColor="white";
 }
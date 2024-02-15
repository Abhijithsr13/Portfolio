var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents ");

function opentab(tabname){

   for( var tablink of tablinks){
    tablink.classList.remove("active-link");
   }
   for(var tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}
var sidemeu=document.getElementById("sidemenu");
function openmenu(){
   sidemeu.style.right="0";
}
function closemenu(){
   sidemeu.style.right="-200px";
}
/*-----------------Dark Mode-----------------------------------*/ 
 var icon=document.getElementById("icon")
 icon.onclick=function(){
   document.body.classList.toggle("dark-theme");
   if(document.body.classList.contains("dark-theme")){
      icon.src="./All_Svg/sun.svg";
   }
   else{
      icon.src="./All_Svg/moon_star.svg";
   }
 }
 /*------------Animation--------------------*/
 const dynamicText = document.querySelector("h1 span");
const words = ["Web Developer","Programmer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

function openmenu() {
   document.querySelector("nav ul").style.right = "0";
   document.querySelector("nav ul").style.display = "block";
}


const subTitle1 = document.getElementById('sub-title-1');
const subTitle2 = document.getElementById('sub-title-2');

function handleResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 650) {
    subTitle1.style.display = 'none';
    subTitle2.style.display = 'block';
  } else {
    subTitle1.style.display = 'block';
    subTitle2.style.display = 'none';
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // Call on initial load

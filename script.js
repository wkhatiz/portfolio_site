const navButtons = document.getElementsByClassName("navBtn");
const navButtonsArr = Array.from(navButtons);

const cardButtons = document.querySelectorAll('.cardBtnContainer button');
const walerdleCodeBtn = cardButtons[0];
const walerdleLiveBtn = cardButtons[1];
const hdigoothsCodeBtn = cardButtons[2];
const hdigoothsLiveBtn = cardButtons[3];

const walerdleCodeUrl = 'https://github.com/wkhatiz/walerdle'
const walerdleLiveUrl = 'https://wordle.wldktz.dev'
const hdigoothsCodeUrl = 'https://github.com/wkhatiz/hdigooths'

const namefield = document.getElementById("namefield");
const emailfield = document.getElementById("emailfield");
const bodyfield = document.getElementById("bodyfield");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const spinner = document.getElementsByClassName("spinner")[0];

const  nameregex = /^[A-Za-z ]+$/;
const   emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const bodyregex = /[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi;

walerdleCodeBtn.addEventListener('click', (e) => {
    window.open(walerdleCodeUrl, '_blank').focus();
});

walerdleLiveBtn.addEventListener('click', (e) => {
    window.open(walerdleLiveUrl, '_blank').focus();
});

hdigoothsCodeBtn.addEventListener('click', (e) => {
    window.open(hdigoothsCodeUrl, '_blank').focus();
});

hdigoothsLiveBtn.addEventListener('click', (e) => {
    alert("Sorry. I'm still working on this project");
});

sendEmailBtn.addEventListener('click', (e) => {

    if(emailregex.test(emailfield)){
        e.preventDefault();
        console.error('Email was inserted incorrectly');
        alert('Error: Email is not valid')
        return;
    }    

    spinner.style.visibility = "visible";
    
})

window.addEventListener('load', () => {
    spinner.style.visibility = "hidden";
})






var myHeading = document.querySelector('h1');
myHeading.textContent = 'Caca';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/weeb.gif') {
      myImage.setAttribute ('src','images/dank.jpg');
    } else {
      myImage.setAttribute ('src','images/weeb.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Caca, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Caca, ' + myName;
}

myButton.onclick = function() {
    setUserName();
}

/*document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
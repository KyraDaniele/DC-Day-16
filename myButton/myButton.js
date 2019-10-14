// "use strict";

const clickMe = document.getElementById('clickMe');
const message = document.getElementById('message');
const betterMessage = document.getElementById('betterMessage');
const niceClick = document.getElementById('niceClick');
const empty = document.getElementById('empty');
const moarButtonz = document.getElementById('moarButtonz');

clickMe.addEventListener('click', function(){
//   alert('no touch pls');
    const newMessage = 'bruh what did i just say???';
    message.innerHTML = newMessage;
})
niceClick.addEventListener('click', function(){
    const toldYouSo = 'I hope you\'re having a great day!';
    betterMessage.innerHTML = toldYouSo;
    const niceGreeting = 'See? I told you it was nice.';
    empty.innerHTML = niceGreeting;
})
moarButtonz.addEventListener('click', function(){
    const moarButtonzNew = 'YOU PRESSED!!1!!!ONE!!';
    moarButtonzMessage.innerHTML = moarButtonzNew;
    })
    moar.addEventListener('click', function(){
        const moarMessage = 'moar';
        moarrr.innerHTML = moarMessage;
    })
    another.addEventListener('click', function(){
        const lastMessage = 'k, done';
        done.innerHTML = lastMessage;
    })
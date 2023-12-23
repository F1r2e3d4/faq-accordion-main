const answer1 = document.getElementById('hidden-answer1');
const answer2 = document.getElementById('hidden-answer2');
const answer3 = document.getElementById('hidden-answer3');
const answer4 = document.getElementById('hidden-answer4');
const hide = document.getElementById('hide-button');
const show = document.getElementById('reveal-button');
const hide1 = document.getElementById('hide-button1');
const show1 = document.getElementById('reveal-button1');
const hide2 = document.getElementById('hide-button2');
const show2 = document.getElementById('reveal-button2');
const hide3 = document.getElementById('hide-button3');
const show3 = document.getElementById('reveal-button3');



function reveal(){
    if (answer1.style.display === 'none' || hide.style.display === 'none' ){
    answer1.style.display = 'flex';
    hide.style.display = 'flex';
    show.style.display = 'none';
    } else {
        answer1.style.display ='none';
        hide.style.display = 'none';
        show.style.display = 'flex';
    }
}
function reveal2(){
    if (answer2.style.display === 'none' || hide1.style.display === 'none' ){
    answer2.style.display = 'flex';
    hide1.style.display = 'flex';
    show1.style.display = 'none';
    } else {
        answer2.style.display ='none';
        hide1.style.display = 'none';
        show1.style.display = 'flex';
    }
}
function reveal3(){
    if (answer3.style.display === 'none' || hide2.style.display === 'none' ){
    answer3.style.display = 'flex';
    hide2.style.display = 'flex';
    show2.style.display = 'none';
    } else {
        answer3.style.display ='none';
        hide2.style.display = 'none';
        show2.style.display = 'flex';
    }
}
function reveal4(){
    if (answer4.style.display === 'none' || hide3.style.display === 'none' ){
    answer4.style.display = 'flex';
    hide3.style.display = 'flex';
    show3.style.display = 'none';
    } else {
        answer4.style.display ='none';
        hide3.style.display = 'none';
        show3.style.display = 'flex';
    }
}
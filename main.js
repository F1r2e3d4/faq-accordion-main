
const visible = document.getElementsByClassName('answers');
const image = document.getElementById('images');

function revealanswers(){
    if ( visible[0].style.display === 'none'){
        visible[0].style.display = "block";
        image.src='./assets/images/icon-minus.svg';
    } else {
        visible[0].style.display = "none";
        image.src = './assets/images/icon-plus.svg';
    }
}
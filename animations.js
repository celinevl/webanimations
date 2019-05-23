// javascript heb ik geschreven met behulp van Jimmy //

var parallelogramdik = document.querySelector('#parallelogramdik');
var parallelogramdun = document.querySelector('#parallelogramdun');
var rectangle = document.querySelector('#rectangle');
var parallelogramzbottom = document.querySelector('#parallelogramzbottom');
var parallelogramztop = document.querySelector('#parallelogramztop');
var parallelogramzmiddle = document.querySelector('#parallelogramzmiddle');
var text = document.querySelector('.containertekst');
var achtergrond = document.querySelector('body');

parallelogramdik.addEventListener('click', function() {
    parallelogramdik.classList.toggle('green');
})

parallelogramdun.addEventListener('click', function() {
    parallelogramdun.classList.toggle('green');
})

rectangle.addEventListener('click', function() {
    rectangle.classList.toggle('green');
})


parallelogramzbottom.addEventListener('click', function() {
    parallelogramzbottom.classList.toggle('white');
})

parallelogramztop.addEventListener('click', function() {
    parallelogramztop.classList.toggle('white');
})

parallelogramzmiddle.addEventListener('click', function() {
    parallelogramzmiddle.classList.toggle('white');
})


function tekstVerplaatsen(e){
    
    // pijltje links
    if (e.keyCode === 37) {
       text.classList.toggle('textlinks');
        text.classList.remove('textmidden');
        text.classList.remove('textrechts');
    }
    
    // pijltje rechts
    if (e.keyCode === 39) {
       text.classList.toggle('textrechts');
        text.classList.remove('textmidden');
        text.classList.remove('textlinks');
    }
    
    // pijtje omhoog 
    if (e.keyCode === 38) {
       text.classList.toggle('textmidden');
        text.classList.remove('textlinks');
        text.classList.remove('textrechts');
    }
    
    // B voor background color
      if (e.keyCode === 66) {
      achtergrond.classList.toggle('achtergrondkleur');
    }

}

document.onkeydown = tekstVerplaatsen;

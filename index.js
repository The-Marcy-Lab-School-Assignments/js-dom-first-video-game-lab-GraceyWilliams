let square = document.getElementById("square");
let game = document.getElementById('game');
let button = document.querySelector('button');
// console.log(square.style.left, square.style.top);
document.addEventListener('keydown', (e) => {
  console.log(e.key)
  if(e.key === 'ArrowLeft' && square.style.left !== '0px') {
    square.style.left = parseInt(square.style.left)-10 +'px'
  }
  if(e.key === 'ArrowRight' && square.style.left !== '300px') {
    square.style.left = parseInt(square.style.left)+10 + 'px'
  }
  if(e.key === 'ArrowUp' && square.style.top !== '0px') {
    square.style.top = parseInt(square.style.top)-10 + 'px'
  }
  if(e.key === 'ArrowDown' && square.style.top !== '300px') {
    square.style.top = parseInt(square.style.top)+10 + 'px'
  }
})


// let header = document.createElement('button')
// header.textContent = 'Create Challenger'

// function challenger() {
// if(document.querySelector('opponent') !== null) {
//   document.querySelector('opponent').remove()
// }
//   let opponent = document.createElement('div')
//   opponent.id = 'opponent'
// // opponent.remove
// opponent.style.top = Math.floor(Math.random()*300) + 'px'
// opponent.style.left = Math.floor(Math.random()*300) + 'px'
// opponent.style.backgroundColor = 'white'
// //'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);'
// opponent.style.width = '50px'
// opponent.style.height = '50px'
// opponent.style.position = 'absolute'
// game.append(opponent)
// console.log(challenger)
// }

// function removeChallenger() {
//   document.getElementById('opponent').remove();
// }

document.addEventListener('click', function(e) {
  square.style.background = '#' + Math.floor(Math.random()* 16777215).toString(16)
  })

document.addEventListener("keydown", function(e) {
  console.log(e.key)
});
challenger()
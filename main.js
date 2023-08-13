// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//X hide the error message by default (HTML file)
hearts = document.getElementsByClassName("like-glyph")

for (glyph of hearts) {
  
glyph.addEventListener('click', (event) => { //add event listener to the nodes
 span = event.target
 if (span.innerHTML == EMPTY_HEART) {
  mimicServerCall()  
  .then((response)=> {
    // if (response=="Pretend remote server notified of action!"){
      span.innerHTML = FULL_HEART
      span.className = "activated-heart"
  // }
  })
  .catch((error)=> {       // this works up to here
     const modal = document.querySelector('#modal')
     modal.className =''
     setTimeout(x => modal.className ='hidden', 3000)
      })
 } else {
  span.innerHTML = EMPTY_HEART
  span.className = 'like-glyph'
 }
 
})
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


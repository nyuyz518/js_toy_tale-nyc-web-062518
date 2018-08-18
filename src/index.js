document.addEventListener('DOMContentLoaded', function() {

const addBtn = document.getElementById('new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
    } else {
    toyForm.style.display = 'none'
    }

  const toyColletion = document.getElementById('toy-colletion')
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => displayInToyCardDiv(toys))
    //same return value as writing tHash['toys']

  const displayInToyCardDiv = function toys(){
    toys.forEach(function toy() {
      let newDiv = document.createElement('div')
        newDiv.innerHTML = `
        <h2>${toy.name}</h2>
        <img src="${toy.image}">
        <p>${toy.likes} Likes<p>
        <button class="like-btn"> Like <3 </button>
      `
        toyColletion.appenChild(newDiv)
       })
  }

 const toyCreateBtn = document.getElementById("toycreateid")
 const newToyPostRequest = (toyName, toyImg) => {
   fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify({
        name: toyName.value,
        image: toyImg.value,
        likes: 0
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

toyCreateBtn.addEventListener("click",() =>{
  const toyName = document.getElementById("toynameid")
  const toyImg = document.getElementById("toyimgid")
  createnewToyPostRequest(toyName, toyImg)

})

const likePatchRequest = () => {
  fetch("http://localhost:3000/toys/:id", {
     method: "PATCH",
     headers: {
         "content-type": "application/json"
     },
     body: JSON.stringify({
      
     })
   })
     .then(res => res.json())
     .then(console.log)
 }






})







})
// OR HERE!

let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")

let span4 = document.getElementById("span4")
let span5 = document.getElementById("span5")

let spanCvv = document.getElementById("spanCvv")


input1.addEventListener("keydown", (e) => {

 
  
  if (span4.innerText.length < 19 && e.keyCode !=8) {

    span4.innerHTML += `<span>${e.key}</span>`
  }
  if(e.code=="Backspace"){
    span4.innerText=span4.innerText.slice(0, Number(span4.innerText.length)-1)
  }
  else if (span4.innerText.length == 4 || span4.innerText.length == 9 || span4.innerText.length == 14) {

    span4.innerHTML += " "
  }



})


input2.addEventListener("keydown", (e) => {
  if (span5.innerText.length < 5 && e.keyCode !=8) {
    span5.innerHTML += `<span>${e.key}</span>`
  }
  if(e.code=="Backspace"){
    span5.innerText=span5.innerText.slice(0, Number(span5.innerText.length)-1)
  }
  else if (span5.innerText.length == 2) {
    span5.innerHTML += "/"
  }
  
  

})


input3.addEventListener("keydown", (e) => {

  if (spanCvv.innerText.length < 3) {

    spanCvv.innerHTML += `<span>${e.key}</span>`
  }


})

let card = document.querySelector(".card__inner");

input3.addEventListener("click", ()=>{
  card.classList.toggle('is-flipped')
})

// input1.addEventListener("click", ()=>{
//   card.classList.toggle('is-flipped')
// })
// input2.addEventListener("click", ()=>{
//   card.classList.toggle('is-flipped')
// })




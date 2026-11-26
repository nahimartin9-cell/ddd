let count= 0
let counter=0
let Reset=0


let countEl=document.getElementById("count-el")
function increment(){
    count+=1
   countEl.textContent=count
}
function incc(){

    count+=2
    countEl.textContent =count
}
function incr(){
    count+=3
    countEl.textContent=count
}
let Counter=document.getElementById("counter")
function trr(){
    counter+=1
    Counter.textContent=counter
}
function trrr(){
    counter+=2
    Counter.textContent=counter
}
function trf(){
    counter+=3
    Counter.textContent=counter
}
function reset(){
   count-=count
   counter-=counter
    countEl.textContent=count
    Counter.textContent=counter
  


}
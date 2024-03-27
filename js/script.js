let silder = document.querySelectorAll(".silder")

let silderArray = Array.from(silder)

function prevNext(){
    let silderActive = document.querySelector(".active")
    let currentIndex =silderArray.indexOf(silderActive)
    let prev;
    let next;
    if(currentIndex == 0){
        prev =silderArray[silderArray.length -1]
    }else{
        prev =silderArray[currentIndex -1]
    }
    if(currentIndex ==silderArray.length -1){
        next = silderArray[0]
    }else{
        next =silderArray[currentIndex +1]
    }
   return [prev,next]
}


function sildeResult(){
    let silderActive = document.querySelector(".active")
    let currentIndex =silderArray.indexOf(silderActive)
    let [prev,next] = prevNext();
    silderArray.map((silde,index) =>{
        if(currentIndex == index){
            silde.style.transform = "translateX(0)"
        }else if(currentIndex == prev){
            silde.style.transform = "translateX(-100%)"
        }else if(currentIndex == next){
            silde.style.transform = "translateX(100%)"
        }
    })
}

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", ()=>{
    let silderActive = document.querySelector(".active")
    let [next] = prevNext()
    silderActive.classList.remove("active")
    silderActive.style.transform = "translateX(100%)"
    next.classList.add("active")
    next.style.transform = "translateX(0)"
})
prev.addEventListener("click", ()=>{
    let silderActive = document.querySelector(".active")
    let [prev] = prevNext()
    silderActive.classList.remove("active")
    silderActive.style.transform = "translateX(100%)"
    prev.classList.add("active")
    prev.style.transform = "translateX(0)"
})
var istatus = document.querySelector("h4")
var btn = document.querySelector(".text")
var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        // istatus. innerHTML = "Friends"
        istatus. style.color = "gray"
        // btn.innerHTML = "Remove Friend"
  
       
        check = 1
    }else{
        istatus.innerHTML = "Hi Buddiee just click it..."
         istatus.style.color= "gray"
         btn.innerHTML = "Add Friend"
        
         check = 0 
      
    }
  
   
})

function gotoLink(link) {
    console.log(link.value);
    window.open(link.value);
}




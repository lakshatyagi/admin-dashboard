if(localStorage.getItem("m")=="l"){
document.body.classList.add("light")
}

function t(){
document.body.classList.toggle("light")
if(document.body.classList.contains("light")){
localStorage.setItem("m","l")
}else{
localStorage.removeItem("m")
}
}
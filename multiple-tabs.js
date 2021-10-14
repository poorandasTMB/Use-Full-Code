{\rtf1}let var  =document.querySelectorAll("#id ya Class");
for(let i of navitem){
        i.addEventListener("click",()=>{
            for(let j of var){
                j.classList.remove("active")     
        }
            i.classList.add("active")
        });
}

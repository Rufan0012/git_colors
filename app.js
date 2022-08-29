const color_name_input= document.getElementById(`color_name`)
const btn=document.getElementById(`btn`)

color_name_input.addEventListener("keydown",(event)=>{
    if (event.code === `Enter`){
        colorChanger()
    }
})

btn.addEventListener(`click`,colorChanger)

function colorChanger(){
    const value=color_name_input.value
    color_name_input.style.backgroundColor=value
}

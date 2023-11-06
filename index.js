const display=document.querySelector(".d")
list=[]

function erase(){
    display.textContent=''
    list=[]
}
function calculate(value){
    list.push(value)
    display.textContent+=value
    console.log(list)

}

function result(){
    display.textContent=eval(display.textContent)
}

let scenarii = [
    ['привет1','Аня', '1.png', ['1','2']],
    ['привет2','Ника', '2.png'],
    ['привет3','Аня', '1.png'],
    ['привет4','Польнорефф', '3.png'],
    ['привет5','Ника', '2.png'],
    ['привет6','Аня', '1.png'],
]

let click = 0




function check (){
   
 
    let elem = document.getElementById(`div${scenarii[click][1]}`)
    $('#botName').empty()
    $('#botName').append(`${scenarii[click][1]}`)
    $('#botText').empty()
    $('#botText').append(`${scenarii[click][0]}`)
    
    if (elem == null) {  
   $('#top').append(`<img src="${scenarii[click][2]}" id="div${scenarii[click][1]}">`)}
/*   let elemT = document.getElementById(`div${scenarii[click][1]}`)
let size = 300
   let timer = setInterval(function(){
   if (size == 350){clearInterval(timer)}
 else {
       size ++;
    elemT.style.height = size + "px";
   
   }})*/
   

   
 console.log(click)
   click = click + 1
  
}




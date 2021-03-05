
//let heroes = [{name: 'Аня', img:'qq.png'},{name: 'Ника', img:'ly.png'}]
class heroesT {
    constructor (name, img){
        this.name = name
        this.img = img
    }
}
//let Anya = new heroesT ('Аня', 'ly.png')
let scenarii = [
    ['привет1','Аня', 'ly.png'],
    ['привет2','Ника', 'qq.png'],
    ['привет3','Аня', 'ly.png'],
    ['привет4','Польнорефф', 'pol.jpg'],
    ['привет5','Ника', 'qq.png'],
    ['привет6','Аня', 'ly.png'],
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
   click = click + 1
   console.log(elem)
}

//function next(){
//    if (document.getElementById("div"scenarii[click][2]"") = false)
//}

//function gg() {
//    document.getElementById(`div${scenarii[click][2]}`) 
//}
//gg()
let scena = document.getElementById('scena')



let desc = document.querySelector('#descricao')
let aut = document.querySelector('#autor')
let dep = document.querySelector('#departamento')
let imp = document.querySelector('#importancia')
let add = document.querySelector('#adicionar')
let order = document.querySelector('#ordenar')
let desli = document.querySelector('#lista_descricoes')

let list = document.querySelector('ul')
let tarefas = []


let submit = document.querySelector('#send')


add.addEventListener("click",newTask);




function newTask (){
    let campos = {desc: desc.value,
                  aut: aut.value,
                  dep: dep.value,
                  imp : imp.value
}


    const tarefa = document.createElement('tr')

    for (let chave in campos){
        campos.hasOwnProperty(chave)
        const valor = campos[chave];
        if (valor==''){
            alert("Você esqueceu de digitar nas caixas")
            return
        }
        

    }
    
    
    
    tarefa.innerHTML = `
    <td>${campos.desc}</td>
    <td>${campos.aut}</td>
    <td>${campos.dep}</td>
    <td>${campos.imp}</td>
    <button id="exclusao">Excluir</button>
    
    
    `
    list.appendChild(tarefa);

    tarefas.push(tarefa)

    let botaozin = document.querySelector('#exclusao')
    
    botaozin.addEventListener("click",()=>{
        tarefas.pop();
        list.removeChild(tarefa);
    })
    //Esse evento deveria ser para o botao de exclusao esse remove child é um teste

    
    
    
   

    
}
   
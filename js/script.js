let desc = document.querySelector('#descricao')
let aut = document.querySelector('#autor')
let dep = document.querySelector('#departamento')
let imp = document.querySelector('#importancia')
let add = document.querySelector('#adicionar')
let list = document.querySelector('ul')



let submit = document.querySelector('#send')


add.addEventListener("click",newTask);




function newTask (){
    let campos = {desc: desc.value,
                  aut: aut.value,
                  dep: dep.value,
                  imp : imp.value
}
    const tarefa = document.createElement('tr')
    
    
    
    tarefa.innerHTML = `
    <td>${campos.desc}</td>
    <td>${campos.aut}</td>
    <td>${campos.dep}</td>
    <td>${campos.imp}</td>
    <button id="exclusao">Excluir</button>
    
    `
    let botaozin =document.querySelector('#exclusao')
    
    
    
    
    list.appendChild(tarefa);

    botaozin.addEventListener("click",deletei)

    function deletei(){
        list.removeChild(tarefa);
    };

    

    

    
    
    
    
    
    
    
}
   
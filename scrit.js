


//   EX1
  

let inputelement=document.getElementById("inputelement");
let list=document.getElementById("fruitlist");
let btnAdd=document.getElementById("btnAdd");

// EX1

btnAdd.addEventListener('click',() =>{
    const ul=divList.querySelector('ul');
    const li=document.createElement('li');
    li.innerHTML=inputelement.value;
    inputelement.value='';
    ul.appendChild(li);
});


//   EX2
    function countListItems(){
       let count = document.getElementsByTagName("li").length;
        document.getElementById('demo').innerHTML = ` ${count}`;
       
    }
   
    // EX3

    const toggleBtn=document.querySelector('#toggleBtn');
    const divList=document.querySelector('#elementToWorkOn');
    
    toggleBtn.addEventListener('click',() =>{
        if(divList.style.display==='none'){
            divList.style.display='block';
            toggleBtn.innerHTML='Hide List';
        }
        else{
            divList.style.display='none'; 
            toggleBtn.innerHTML='Show List';}

        });
    





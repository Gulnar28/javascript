
const fruitList=document.getElementById("fruitlist");
const nameInput=document.getElementById("nameInput");
const buttonAdd=document.getElementById("btn-add");
const buttonCount=document.getElementById("btn-count");
const buttonHide=document.getElementById("btn-hide");



buttonAdd.addEventListener("click",showElement );
buttonCount.addEventListener("click",fruitlist );
buttonHide.addEventListener("click", hideElement);



function countItems(listItem) {
    let listItem = document.create("li");
    listItem.classList.add("li")
    listItem.innerText = "li";
    fruitlist.appendChild(li);
}


   
}
function countFruit (){
    var count = document.getElementsByTagName("li").length;
    document.getElementById('count').innerHTML = 'Total used:' +count;
   
}


newElement=document.getElementById('fruitlist');


function hideshow() {
    nameInput.classList.show('hidden');
}
if(newElement){
    buttonAdd.classList.add("hide");
}
console.log(nameInput.classList);
//     document.getElementById('fruitlist').style.height="100px";
//     document.getElementById('fruitlist').style.display="block";
//     document.getElementById('btn-hide').style.display="block";
// }
// function show() {
//     document.getElementById('fruitlist').style.height="0px";
//     document.getElementById('fruitlist').style.display="none";
//     document.getElementById('btn-hide').style.display="inline";
// }
    
  
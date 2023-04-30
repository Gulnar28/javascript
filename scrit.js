
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

function countFruit (count){
    for (let index = 0; index <=count; index++) {
        appendtext(index);
        
    }
//     const listItems = document.querySelectorAll("li");

//    const count = listItems.length;
//     document.getElementById('count').innerHTML = `Count of fruits: ${count}`;
   
}




function showElement() {
    
   list.classList.add("hide"); {
   
    } 
    function hideElement() {
        list.classList.remove("show"); {
   
        }
    }
}
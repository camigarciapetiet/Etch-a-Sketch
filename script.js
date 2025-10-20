function createSquares(father, n){
    let percentage= 100/n;
    for(let i=0; i<n*n; i++){
        const square= document.createElement("div");
        square.classList.add("square");
        square.style.flex="1 0 " + percentage +"%";
        father.appendChild(square);
    }
}

function changeContainerSize(){
    popupC.style.display="flex";
}

function submitChange(){
    popupC.style.display="none";
    sContainer.innerHTML="";

    const newSize= document.querySelector("#input");
    createSquares(sContainer, newSize.value);

}

const sContainer= document.querySelector("#square-container");
createSquares(sContainer, 16); 
sContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.classList.toggle('active');
    }
});

const popupC =document.querySelector("#popup-container");
const sizeB =document.querySelector("#size-btn");
sizeB.addEventListener("click", ()=> {changeContainerSize()});
const submitB =document.querySelector("#submit-btn");
submitB.addEventListener("click", ()=> {submitChange();});
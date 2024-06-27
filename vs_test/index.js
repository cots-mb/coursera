let dest =[];

function createCard(url,title,text){
    const rightContent = document.getElementById("card-wrapper");
    let card = `<div class="card">
        <img class="bg-img" src="${url}">
        <div class="card-body text-white">
            <hr/>
            <h5 class="card-title text-white">${title}</h5>
            <p class="card-text text-white">${text}</p>
            <a href="#" class="btn text-white">check it out</a>
        </div> 
    </div>`

   rightContent.insertAdjacentHTML("afterbegin", card);

}

function displayDefaultDest(){
   
    dest.forEach(item =>{
        createCard(item.URL,item.point,item.descr);
    })
}

async function loadData() {
        const response = await fetch('./data.json');
        const destinations = await response.json();
        
        destinations.forEach(element => {
            dest.push(element);
        });   

        displayDefaultDest();
}


function SearchFor(){
    let searchStr = document.getElementById('searchValue').value;
    clearCardWrapper();
    
    let resData = dest.filter((item)=> item.type == searchStr)
    
    resData.forEach(item =>{
        createCard(item.URL,item.point,item.descr);
    })
}

function clearCardWrapper(){

    const rightContent = document.getElementById("card-wrapper");

    while (rightContent.hasChildNodes()) {
        rightContent.removeChild(rightContent.firstChild);
      }
   
}

function clearSearch(){
   
    document.getElementById('searchValue').value = "";
    clearCardWrapper();
}

loadData();
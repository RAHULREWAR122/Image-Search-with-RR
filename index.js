const apiKey = "r94nd9JxLlq0JXPawU2iwwq3P5SmVqI6V-MLUyPGBnM";

const inpform = document.querySelector('form');
const searchImg= document.getElementById('search-images');
const searchResults = document.getElementById('search-results');
const netxBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById("backBtn");


let inpData = "";
let currentPage = 1;

async function searchImages(){
    inpData = searchImg.value;
      const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${inpData}&client_id=${apiKey}`;
    
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    const results = data.results;

if(currentPage === 1){
    searchResults.innerHTML = "";
}    

    results.forEach((result) =>{
        const newDiv = document.createElement("div");
        newDiv.classList.add("results");
    
    newDiv.innerHTML = `<img src="${result.urls.small} " alt="${result.alt_description}">
    <a href="${result.links.html}" target="_blank">${ result.alt_description}</a>`
        searchResults.appendChild(newDiv);  
});


if(currentPage > 1){
    
    backBtn.style.display = 'block';    
}else{
    backBtn.style.display = "none";
}
netxBtn.style.display = "block";
}

inpform.addEventListener('submit' ,(event)=>{
    event.preventDefault();
    currentPage = 1;
    searchImages();
});

netxBtn.addEventListener('click',()=>{
   currentPage++;  
    searchImages();   

})
backBtn.addEventListener('click',()=>{
   
    if(currentPage > 1){
        currentPage--;
        searchImages();
    }
})

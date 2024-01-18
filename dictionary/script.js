const search=document.querySelector("button");
const form=document.querySelector("form");
const results=document.querySelector(".result");

search.addEventListener("click",(e)=>{
    e.preventDefault();
    getinfo(form.elements[0].value);
});



async function getinfo(word){

    try {
        results.innerHTML=`<div class="msg">Fetching...</div>`;
    const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data=await response.json();
    console.log(data);

    results.innerHTML=`
    <div class="wrd"><h2>Word:${data[0].word}</h2></div>
    <p><i>${data[0].meanings[0].partOfSpeech}</i></p>
    <p><strong>Meaning:</strong> ${data[0].meanings[0].definitions[0].definition}</p>
    <p><strong> Example: </strong>${data[0].meanings[0].definitions[0].example===undefined ? "Not Found":data[0].meanings[0].definitions[0].example}<p> 
    <p><strong> Antonyms: </strong>${data[0].meanings[0].antonyms[0]===undefined ? "Not Found":data[0].meanings[0].antonyms[0]}</p>
    `
    //adding synonims

    if(data[0].meanings[0].synonyms.length==0){
        results.innerHTML+=`<p><strong>Synonims: </strong>${"Not found"}</p>`;
    }
    else{
        results.innerHTML+=`<span class="syno"><strong>Synonims: </strong></span>`
        for(let n=0;n<=data[0].meanings[0].synonyms.length;n++)
        results.innerHTML+=`<span>${data[0].meanings[0].synonyms[n]}, </span>`;
    }

    results.innerHTML+=`<div><audio controls>
    <source src="https://api.dictionaryapi.dev/media/pronunciations/en/try-uk.mp3" type="audio/ogg"></div>`
    setTimeout(() => {
        form.elements[0].value="";
    }, 2000);
    
    } catch (error) {
        results.innerHTML=`<div class="msg">Not found</div>`;
    }

    
    
}
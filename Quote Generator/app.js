let quote =  document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () =>{
    fetch(url).then(data => data.json())
    .then((item) => {
        // console.log(item.content);
        // console.log(item.author);
        quote.textContent = item.content;
        author.textContent = item.author;
    })
}

// window.addEventListener("load", getQuote)

btn.addEventListener("click",getQuote)
const quotes = [
    {
        quote: "너 자신을 알라",
        author: "소크라테스",
    },
    {
        quote: "가는말이 고와야 오는말이 곱다.",
        author: "속담1",
    },
    {
        quote: "떡 하나 주면 안 잡아먹지.",
        author: "속담2",
    },
    {
        quote: "천재는 노력하는 자를 이길 수 없고 노력하는 자는 즐기는 자를 이길 수 없다.",
        author: "나",
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


function generate() {
    let num = Math.floor(Math.random()*12)
let quotes = ["You’re my favorite", "You look great today", 'You are the best', 'You are beautiful', 'I like the way you keep a positive attitude', 'I will keep you in my thoughts today', 'You look gorgeous every day', 'You amaze me', 'You are it for me', 'I want you to know that I care', 'You’re my favorite person', 'I don’t know what I would do without you'];
console.log(num)

let quotePicked = quotes[num]
console.log(quotePicked)
document.getElementById('word').innerHTML = quotePicked;
}


function generate() {
    let num = Math.floor(Math.random()*12)
let imgNum = Math.floor(Math.random()*3)
let quotes = ["You’re my favorite", "You look great today", 'You are the best', 'You are beautiful', 'I like the way you keep a positive attitude', 'I will keep you in my thoughts today', 'You look gorgeous every day', 'You amaze me', 'You are it for me', 'I want you to know that I care', 'You’re my favorite person', 'I don’t know what I would do without you'];
let pickedQuote = quotes[num]
let imgUrls = ['https://i.ebayimg.com/images/g/o~AAAOSwKoljNu3U/s-l1600.jpg', 'https://64.media.tumblr.com/c7b422b7650c0e6d3c1970748f0d8f54/tumblr_pne2h0wQCe1wyhtcbo1_640.png', 'https://obiruskenobi.files.wordpress.com/2014/04/spidey_6ca1.jpg'];
console.log(num)

let quotePicked = quotes[num]
console.log(quotePicked)
let imgPicked = imgUrls[imgNum]
console.log(imgPicked)
document.getElementById('word').innerHTML = quotePicked;
document.getElementById('funImg').src = imgPicked;
}

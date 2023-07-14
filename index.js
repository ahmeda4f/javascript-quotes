var quotes=[
    '"Do or do not. There is no try." <br> -Yoda, Star Wars.',
    '"Great men are not born great; they grow great." <br> -Mario Puzo, The Godfather ', 
    '"You have to be a little bit crazy to do great things." <br> -The Dark Knight.'  , 
    '"There is no good and evil, there is only power, and those too weak to seek it." <br> -Voldemort. ',
    '"To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other, and to feel. That is the purpose of life".<br> -The Secret Life of Walter Mitty .',
    '"All those moments will be lost in time, like tears in the rain." <br> -Rutger Hauer, Blade Runner. ',
    '“You cannot live your life to please others. The choice must be yours.” <br> -White Queen' ,
    '""When life gets you down, you know what you gotta do? Just keep swimming."<br> -Dory',
    

    
]
function randomQuote() {
    var randomNum = Math.floor((Math.random() * quotes.length));
    document.getElementById("quoteText").innerHTML = quotes[randomNum];

}
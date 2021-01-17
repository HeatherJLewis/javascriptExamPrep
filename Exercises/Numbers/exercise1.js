function rockpaperScissors(){
    const randomNumber = Math.round(Math.random()*3);
    console.log(typeof randomNumber)
    result = "";
    switch (randomNumber){
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors"
            break;
    };
    return result;
};

console.log(rockpaperScissors());
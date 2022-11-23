const dolphinsScore = {
    score1: 44,
    score2: 23,
    score3: 71,
    
  
};
const koalasScore = {
    score1: 65,
    score2: 54,
    score3: 49,
    
}


const dolphinsScore1 = {
    score1: 85,
    score2: 54,
    score3: 41,
    
  
};
const koalasScore1 = {
    score1: 23,
    score2: 34,
    score3: 27,
    
}




const calcAVG = (score1, score2, score3)=>
(score1+score2+score3)/3;


const koalasScoreAVG = calcAVG(koalasScore.score1,koalasScore.score2, koalasScore.score3);

const dolphinsScoreAVG = calcAVG(dolphinsScore.score1, dolphinsScore.score2, dolphinsScore.score3);

const koalasScoreAVG1 = calcAVG(koalasScore1.score1,koalasScore1.score2, koalasScore.score3);

const dolphinsScoreAVG1 = calcAVG(dolphinsScore1.score1, dolphinsScore1.score2, dolphinsScore1.score3);




function checkWinner(koalasAverage,dolphinsAverage){
    

    if(koalasAverage> dolphinsAverage){
        console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage}).`)
    }
    else if(dolphinsAverage > koalasAverage){
        console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage}).`)
    }
    
}


const checkWin = checkWinner(koalasScoreAVG, dolphinsScoreAVG);

console.log(checkWin);

const checkWin1 = checkWinner(koalasScoreAVG1, dolphinsScoreAVG1);

console.log(checkWin1);







/*
if(koalasScoreAVG>dolphinsScoreAVG && koalasScoreAVG>100){
    console.log(`koalas Win`)
}
else if(dolphinsScoreAVG>koalasScoreAVG && dolphinsScoreAVG>100){
    console.log(`dolphins win`)
}
else if (koalasScoreAVG===dolphinsScoreAVG && koalasScoreAVG>100){console.log(`draw`)}
else if (koalasScoreAVG<100 || dolphinsScoreAVG<100){
    console.log(`nobody got above 100`)
}

*/
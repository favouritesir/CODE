const input=()=>{
    return new Promise((resolve,reject)=>{
        const unum=window.prompt("give me a number between (1-6):")
        const rNum=Math.floor(Math.random()*6+1);
        if(isNaN(unum))reject("input is invalid");
        // return the point 
        (unum==rNum)?resolve({points:"2 points",rNum}):
        (unum==rNum+1||unum==rNum-1)?resolve({points:"1 point",rNum}):
        resolve({points:"0 point",rNum})
    })
}

const again=()=>{
    return new Promise((resolve,reject)=>{
        (window.confirm("do you want to try again"))?resolve(true):reject("game end now");
    })
}

// const startGame=()=>{
//     input()
//     .then(result=>{

//         alert(`Dice:${result.rNum}\nyour got ${result.points}`)
//         again()
//         .then(result=>{if(result){startGame()}else {alert(result)}})
        
//     }).catch(err=>{alert(err);startGame();})
    
// }

const startGame=async ()=>{
    try{

        let result=await input();
            alert(`Dice:${result.rNum}\nyour got ${result.points}`);
            alert("ok");
        result=await again();
            if(result) startGame()
            else alert(result);

    }catch(error){alert(error);}

}

startGame();
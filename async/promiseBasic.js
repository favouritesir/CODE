const cakeForMe=(mk)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>(mk)?resolve(mk+" i mk 5 cake"):reject("sorry"),2000)
    })
}

cakeForMe(false)
.then((result)=>console.log("frnd:"+result,"me: thanks"))
.catch(result=>console.log("frnd:"+result,"me: why you did'n keep your word ? "))
.finally(()=>console.log("me: ok let start the party"))
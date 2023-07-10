let clock = [23,59,50]
console.log(clock);
setInterval(()=>{
    clock[2] += 1
    
    if (clock[2] > 59){
        clock[2] = 0
        clock[1] +=1
    }
    if (clock[1] > 59){
        clock[1] = 0
        clock[0] +=1
    }
    if (clock[0] > 23){
        clock[0] = 0
        clock[1] = 0
        clock[2] = 0
    }

    console.log(clock[0],"::",clock[1],"::",clock[2]);    
},1000)
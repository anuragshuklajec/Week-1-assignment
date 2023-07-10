
function counter(count){
    if (count >= 0){
    console.log(count)
    setTimeout(()=>{
        counter(count-1);
    },1000)
}
}

counter(10)

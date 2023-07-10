const { join,dirname } = require("path")

fs = require("fs")

function modifyFile(err,data){
    if(err){
        console.log("Some error occured")
    }else{
        var s = data
        s = s.split(' ')
        s = s.filter(Boolean).join(" ");
        fs.writeFile(join(dirname(__filename), "a.txt"),s,"utf8",(err)=>{
            if(err){
                console.log("Some error occured",err);
            }else{
                console.log("Successfully cleaned");
            }
        })
    }
}

fs.readFile(join(dirname(__filename), "a.txt"),"utf8",modifyFile)


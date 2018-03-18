var fs = require('fs-extra');
//var fs = require('fs');
exports.JSONFileCreate = function(req, path) {
    console.log( req)
    //var jsonPath=req.path;
    console.log(path);


    /*changes*/
    fs.outputFile(path, req, function(error) {
        if (error) {
            console.error("write error:  " + error.message);
        } else {
            console.log("Successful Write to " + path);
        }
    });

//    return res.json({error_code:0,err_desc:null,file:req.file}) ;
}
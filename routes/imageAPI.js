/**
 * Created by TOSHIBA on 12/10/2017.
 */
var fs = require('fs-extra');
exports.uploadImage = function(req, res) {
    console.log('File have Uploaded successfully ', req.file)
    return res.json({error_code:0,err_desc:null,file:req.file}) ;
}
exports.deleteImage = function(req, res) {
    console.log('File Delete successfully ', req.file)
    console.log(req.body.imageUrl);
    var imagePath=req.body.imageUrl;

    fs.unlink(imagePath,function (error) {
        console.log("Delete Image File");
        console.log( error);
        return res.json({error_code:0,err_desc:null,file:req.file}) ;
    });
}

var fs = require('fs');
var jsonfile = require('jsonfile')
var file = 'json/fileList.json'
var images = {
	imageLink:[]
};

fs.readdir('./images', function(err, files) {
    if (err) return;
    files.forEach(function(f) {
	    if (f != ".DS_Store"){
	        images.imageLink.push("images/"+ f);
	        console.log(images);
			jsonfile.writeFile(file, images, function(err) {
				console.log("this is not working", err)
			})
		}

    });
});
$.getJSON("json/fileList.json", function(json) {
	console.log(json);	
	var images = json;
	var source   = $("#images-template").html();
	var template = Handlebars.compile(source);
	var data = images;
	$(".carousel").append(template(data));
});
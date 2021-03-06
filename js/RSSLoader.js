//this forces javascript to conform to some rules, like declaring variables with var
"use strict";
var url = "http://www.espn.com/espn/rss/NBA/news";
window.onload = function(){
	init(url);
}
function init(url){
	//NHL URL for ESPN RSS feed
	//console.log("Entering Init");


	document.querySelector("#RSSFeed").innerHTML = "<b>Loading news...</b>";
	$("#RSSFeed").fadeOut(250);
	//fetch the data
	$.get(url).done(function(data){xmlLoaded(data);});
	//alert(data);
}


function xmlLoaded(obj){
	//console.log("obj = " +obj);
	var items = obj.querySelectorAll("item");

	//show the logo
	var image = obj.querySelector("image")
	var logoSrc = image.querySelector("url").firstChild.nodeValue;
	var logoLink = image.querySelector("link").firstChild.nodeValue;
	$("#logo").attr("src",logoSrc);

	//parse the data
	var html = "";
	for (var i=0;i<items.length;i++){
		//get the data out of the item
		var newsItem = items[i];
		var title = newsItem.querySelector("title").firstChild.nodeValue;
		//console.log(title);
		var description = newsItem.querySelector("description").firstChild.nodeValue;
		var link = newsItem.querySelector("link").firstChild.nodeValue;
		var pubDate = newsItem.querySelector("pubDate").firstChild.nodeValue;

		//present the item as HTML
		var line = '<div class="item">';
		line += "<h4>"+title+"</h4>";
		line += '<p><i>'+pubDate+'</i> - <a href="'+link+'" target="_blank">See original</a></p>';
		//title and description are always the same (for some reason) so I'm only including one
		//line += "<p>"+description+"</p>";
		line += "</div>";

		html += line;
	}
	document.querySelector("#RSSFeed").innerHTML = html;

	$("#RSSFeed").fadeIn(1000);

}

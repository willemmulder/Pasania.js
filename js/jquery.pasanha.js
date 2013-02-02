$.fn.pasanha = function(options) {
	var defaultOptions = {
		background : null,
		strength : "0.3",
		type : "inset"
	};
	options = $.extend(defaultOptions, options);
	var elements = $(this);
	elements.each(function() {
		var element = $(this);
		var randomNamespace = "jquery-pasanha-" + new Date().getTime() + "-" + Math.round(Math.random()*1000);
		// Calculate background color
		var background = options.background;
		if (!background) {
			background = element.css("background-color");
		}
		var position = element.css("position");
		if (position !== "absolute" && position !== "fixed" || position !== "relative") {
			position = "relative";
		}
		var cssclass  = "."+randomNamespace+" { position: "+position+" }";
		cssclass += " ."+randomNamespace+":before, ."+randomNamespace+":after { content: attr(pasanhatext); padding: 30px; position: absolute; color:"+background+"; opacity: "+ options.strength +"; }";
		var offset1 = (options.type==="inset"?"-1px":"1px");
		var offset2 = (options.type==="inset"?"-2px":"2px");
		cssclass += " ."+randomNamespace+":before { top: "+offset1+"; left: "+offset1+"; }";
		cssclass += " ."+randomNamespace+":after { top: "+offset2+"; left: "+offset2+"; }";
		var $style = $("<style>").html(cssclass);
		$("body").append($style);
		element.attr("pasanhatext", element.html()).addClass(randomNamespace);
	});
}
throw "New Steal shouldn't include can/util/util.js";

var library = 'can/util/jquery';
if (window.STEALSTANDALONE){
	library = 'can/util/standalone';
} else if (window.STEALDOJO){
	library = 'can/util/dojo';
} else if( window.STEALMOO) {
	library = 'can/util/mootools';
} else if(window.STEALYUI){
	library = 'can/util/yui';
} else if(window.STEALZEPTO){
	library = 'can/util/zepto';
}

define(["library/library"],
function(can) {
	return can;
});
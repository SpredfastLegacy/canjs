define(["can/util/array/each"],
function(){
	can.makeArray = function(arr){
		var ret = []
		can.each(arr, function(a, i){
			ret[i] = a
		})
		return ret;
	};
})

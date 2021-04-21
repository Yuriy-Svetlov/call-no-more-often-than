"use strict";

var 
	timestamp = 0,
	milliseconds;


module.exports = function(time){
	return new Promise(function(resolve) {
		milliseconds = new Date().getTime();

		if(timestamp + time <= milliseconds){
			timestamp = milliseconds;
			resolve();
		} 
    });
}
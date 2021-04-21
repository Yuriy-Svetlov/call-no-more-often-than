"use strict";

const 
	call_no_more_often_than = require('./../index.js');


test('the function must be called once', done => {
	let i = 0;
	function callback() {
		try {
			expect(i).toBe(1);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	test_function();
	test_function();
	
	setTimeout(function(){
	  	test_function();
		
		setTimeout(function(){
		  	callback();
		}, 500);
	}, 2000);


	function test_function(){
		call_no_more_often_than(3000).then(function(){
			i++;
		});  
	}
});


test('the function must be called twice', done => {
	let i = 0;
	function callback() {
		try {
			expect(i).toBe(2);
		    done();

		} catch (error) {
		    done(error);
		}
	}

	test_function();
	test_function();

	setTimeout(function(){
	  	test_function();

		setTimeout(function(){
		  	callback();
		}, 500);
	}, 2000);


	function test_function(){
		call_no_more_often_than(1000).then(function(){
			i++;
		});  
	}
});
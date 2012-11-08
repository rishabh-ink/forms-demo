/* Author: See /humans.txt

*/

$(document).ready(function() {
	$("#layout-horizontal input, #layout-horizontal a, #layout-horizontal select, #layout-horizontal textarea").tooltip({
		"placement": "right"
	});
	
	$("#layout-vertical input, #layout-vertical a, #layout-vertical select, #layout-vertical textarea").tooltip({
		"placement": "right"
	});
	
	$("#layout-columns input, #layout-columns a, #layout-columns select, #layout-columns textarea").tooltip({
		"placement": "top"
	});
	
	$.validator.setDefaults({ 
		"onfocusout": function(element) {
			$(element).valid();
		},
		"errorClass": 'error',
	    "validClass": 'success',
	    "errorPlacement": function(error, element) {
	    	error.appendTo(element.parents("div[class~='controls']").children("span[class~='help-inline']"));
	    },
	    "highlight": function (element, errorClass, validClass) {
	    	// Can also use .closest() instead of .parents().
	        $(element).parents("div[class~='control-group']").removeClass(validClass).addClass(errorClass);
	    },
	    "unhighlight": function (element, errorClass, validClass) {
	    	// Can also use .closest() instead of .parents().
	    	$(element).parents("div[class~='error']").removeClass(errorClass).addClass(validClass); 
	    }
	});
	
	$.validator.setDefaults({
		"rules": {
			"first-name": {
				"required": true,
				"minlength": 2
			},
			"last-name": {
				"required": false,
				"minlength": 1
			},
			"job-title": {
				"required": true,
				"minlength": 2
			},
			"company-name": {
				"required": true,
				"minlength": 3
			},
			"email": {
				"required": true,
				"email": true
			},
			"phone": {
				"required": true,
				"minlength": 5,
				"number": true
			},
			"website": {
				"required": true,
				"minlength": 3
			},
			"zipcode": {
				"required": true,
				"minlength": 6,
				"number": true
			},
			"comments": {
				"minlength": 3
			}
		},
		
		"messages": {
			"first-name": {
				"required": "Your name please?",
				"minlength": $.format("We need your first name to be more than {0} character(s).")
			},
			"last-name": {
				"minlength": $.format("We need your last name to be more than {0} character(s).")
			},
			"job-title": {
				"required": "Your designation please?",
				"minlength": $.format("We need your job title to be more than {0} character(s).")
			},
			"company-name": {
				"required": "Your company name please?",
				"minlength": $.format("We need your first name to be more than {0} character(s).")
			},
			"email": {
				"required": "Your email address please?",
				"email": "Please type a valid email format."
			},
			"phone": {
				"required": "Your phone number please?",
				"minlength": $.format("We need your phone number to be more than {0} character(s)."),
				"number": "Only numbers please!"
			},
			"website": {
				"required": "Your company's website address please?",
				"minlength": $.format("We need your website address to be more than {0} character(s).")
			},
			"zipcode": {
				"required": "Your ZIP code please?",
				"minlength": $.format("We need your ZIP code to be more than {0} character(s)."),
				"number": "Only numbers please!"
			},
			"comments": {
				"minlength": $.format("Please type in at least {0} character(s).")
			}
		}
	});
	
	$("#lh-form").validate({
	});
	
	$("#lc-form").validate({
	});
	
	$("#lv-form").validate({
	});
});






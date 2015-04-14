/*global $, jQuery, document, alert, window */

jQuery(document).ready(function($) {

    "use strict";
	
	// -------------------------------------------------------------------- CODE
		
	var isValidForm = true;
		
	$('#fm-name').val($('#fm-name').attr('title'));
	$('#fm-email').val($('#fm-email').attr('title'));
	$('#fm-message').val($('#fm-message').attr('title'));
    
    $("#fm-name, #fm-email, #fm-message").parent().addClass("form-normalbackground");

    
    
	// -------------------------------------------------------------------- FUNCTIONS

	function validateRequired() {
        $('#fm-name, #fm-email, #fm-message').each(function() {
            $(this).parent().next().slideUp(250);    
            $(this).parent().addClass('form-normalbackground');
            var field = $(this);
            if ( (field.val() === field.attr('title')) || (field.val() === '') ) {
                isValidForm = false;
                $(this).parent().next().slideDown(250);
            }
        });
    }

	function validateEmail() {
        var emailMatch = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
        if ( $('#fm-email').val().match(emailMatch) === null ) {
            isValidForm = false;
            $('#fm-email').parent().next().slideDown(250);    
        }
    }
    
    function submitForm() {
        var formData = $("#contact-form").serialize();
        var subButton = $('form').find(':submit');
        var formMessage = $("#form-messages");
        
        formMessage.hide();
        subButton.val('Sending Message...');
        subButton.attr("disabled", true);
        
        $.ajax({
            type: "POST",
            url: $("#contact-form").attr("action"),
            data: formData
        }).done(function(response) {
            formMessage.removeClass("form-error");
            formMessage.addClass("form-success");
            formMessage.text(response);
            formMessage.slideDown(250).delay(4000).slideUp(250, function () {
                subButton.val('Send message');
                subButton.removeAttr("disabled");
            });
            $("#fm-name").val("");
            $("#fm-email").val("");
            $("#fm-message").val("");
        }).fail(function(data) {
            formMessage.removeClass("form-success");
            formMessage.addClass("form-error");
            if (data.responseText !== "") {
                $("#form-messages").text(data.responseText);
            } else {
                $("#form-messages").text("Alas, an error occurred and your message could not be sent.");
            }
            formMessage.slideDown(250).delay(4000).slideUp(250, function () {
                subButton.val('Send message');
                subButton.removeAttr("disabled");
            });
        });
    }

    
		
	// -------------------------------------------------------------------- EVENT HANDLERS

	$('#fm-name, #fm-email, #fm-message').focus(function() {
		var field = $(this);
		if (field.val() == field.attr('defaultValue')) {
			field.select();
		}
            if ($(this).parent().hasClass("form-normalbackground")) {
                $(this).parent().removeClass("form-normalbackground");
                $(this).parent().addClass("form-select");
            }
        
	});

	$('#fm-name, #fm-email, #fm-message').blur(function() {
		var field = $(this);
		if (field.val() === '') {
			field.val(field.attr('title'));
		}
            if ($(this).parent().hasClass("form-select")) {
                $(this).parent().removeClass("form-select");
                $(this).parent().addClass("form-normalbackground");
            }
	});
    
    $("#form-submitted").hover(
        function () {
            $(this).css("background-color", "rgba(85, 85, 85, 0.9)");
//            $(this).css("color", "rgba(85, 85, 85, 0.75)");
        },
        function () {
            $(this).css("background-color", "rgba(85, 85, 85, 0.5)");
//            $(this).css("color", "rgba(255, 255, 255, 0.75)");
        }
    );
        
	$('#form-submitted').click(function(event) {
				
		validateRequired();
		validateEmail();
		
		if (isValidForm) {
			$('.errorlist').slideUp(250);
			event.preventDefault();			
            submitForm();
		} else {
			isValidForm = true;
			event.preventDefault();			
			return false;
		}
	});

    // this fixes problem with selecting all the text in the 
    // textarea when you tab into it
    $('textarea').focus(function() {
        var $this = $(this);
        $this.select();
        window.setTimeout(function() {
            $this.select();
        }, 1);

        // Work around WebKit's little problem
        function mouseUpHandler() {
            // Prevent further mouseup intervention
            $this.off("mouseup", mouseUpHandler);
            return false;
        }
        $this.mouseup(mouseUpHandler);
    });    
    
});
+var createErrorMessages = function() {
 +    var form = $(this),
 +    errorList = $("ul.errorMessages", form);
 +
 +    var showAllErrorMessages = function() {
 +        errorList.empty();
 +
 +        //Find all invalid fields in form
 +        var invalidFields = form.find(":invalid").each(function(index, node){
 +            //Find field's label
 +            var label = $("label[for=" + node.id +"]"),
 +            message = node.validationMessage || "Please fill in a valid value";
 +
 +            errorList.show().append("<li><span>" + label.html() + "</span>" + message + "</li>");
 +        });
 +    };
 +    
 +    //for Safari
 +    form.on( "submit", function(event){
 +        if (this.checkValidity && !this.checkValidity()) {
 +            $(this).find(":invalid").first().focus();
 +            event.preventDefault();
 +        }
 +    });
 +
 +    $("input[type=submit], button:not([type=button])", form)
 +    .on("click", showAllErrorMessages);
 +
 +    $("input", form).on()
 +};
 +
 +$("form").each(createErrorMessages);
 +


/////**********SHINE**********/////

var shine = new Shine(document.getElementById('landingPageHeader'));

var config = new shinejs.Config({
numSteps: 2,
opacity: 0.5,
offset: 0.25,
shadowRGB: new shinejs.Color(160, 160, 160)
});

window.addEventListener('mousemove', function(event) {

shine.light.position.x = event.clientX;
shine.light.position.y = event.clientY;
shine.config = config;
shine.draw();
}, false);


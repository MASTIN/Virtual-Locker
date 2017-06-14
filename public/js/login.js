//check inputs on sign in and sign up forms are valid using html5 form validation
var createErrorMessages = function() {
    var form = $(this),

    form.on( "submit", function(event){
        if (this.checkValidity && !this.checkValidity()) {
            $(this).find(":invalid").first().focus();
            event.preventDefault();
        }
    });

    $("input", form).on()
};

$("form").each(createErrorMessages);


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


// Slider //
$(document).ready(function () {
    $('#mySlider').carousel({
        interval: 2000
    })
    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

function checkFare() {
    var src = document.getElementById("from").value;
    var dest = document.getElementById("where").value;
    var vehicle = document.getElementById("car").value;
    var fare;

    if (src === dest){
        document.getElementById("result").className = "result-style";
        document.getElementById("result").innerHTML = "Please select correct source or destination.";
    }
    
    else if(src === "makkah" && dest === "madinah") {
        switch(vehicle) {
            case "Camry" :
                fare = 300;
                break;
            case "H-1" :
                fare = 350;
                break;
            case "GMC" :
                fare = 400;
                break;
            case "Innova" :
                fare = 450;
                break;
            case "Hi-Ace" :
                fare = 200;
                break;
            case "Bus" :
                fare = 100;
                break;
            case "Coaster" :
                fare = 150;
                break;
        }
        document.getElementById("result").className = "result-style";
        document.getElementById("result").innerHTML = "Charges from " + src.toUpperCase() + " to " + dest.toUpperCase() + " are " + fare + " Riyal.";
    }

    else if(src === "madinah" && dest === "makkah") {
        switch(vehicle) {
            case "Camry" :
                fare = 300;
                break;
            case "H-1" :
                fare = 350;
                break;
            case "GMC" :
                fare = 400;
                break;
            case "Innova" :
                fare = 450;
                break;
            case "Hi-Ace" :
                fare = 200;
                break;
            case "Bus" :
                fare = 100;
                break;
            case "Coaster" :
                fare = 150;
                break;
        }
        document.getElementById("result").className = "result-style";
        document.getElementById("result").innerHTML = "Charges from " + src.toUpperCase() + " to " + dest.toUpperCase() + " are " + fare + " Riyal.";
    }
}
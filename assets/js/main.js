/* ===================================================== 
Start All Pages ---- Hamburger Menu 
======================================================== */

function onClickMenu() {
    document.getElementById("icon").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}
/* ===================================================== 
End All Pages ---- Hamburger Menu 
======================================================== */

/* ===================================================== 
Start TBD Page ---- TBD Function 
======================================================== */

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}

//show more text
function toggleText() {

    // Get all the elements from the page
    var points =
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

//show more text
function toggleText2() {

    // Get all the elements from the page
    var points =
        document.getElementById("points2");

    var showMoreText =
        document.getElementById("moreText2");

    var buttonText =
        document.getElementById("textButton2");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

//show more text
function toggleText3() {

    // Get all the elements from the page
    var points =
        document.getElementById("points3");

    var showMoreText =
        document.getElementById("moreText3");

    var buttonText =
        document.getElementById("textButton3");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

//show more text
function toggleText4() {

    // Get all the elements from the page
    var points =
        document.getElementById("points4");

    var showMoreText =
        document.getElementById("moreText4");

    var buttonText =
        document.getElementById("textButton4");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

//show more text
function toggleText5() {

    // Get all the elements from the page
    var points =
        document.getElementById("points5");

    var showMoreText =
        document.getElementById("moreText5");

    var buttonText =
        document.getElementById("textButton5");

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

/* ===================================================== 
End TBD Page ---- TBD Function 
======================================================== */

/* ===================================================== 
Start Contact Us Page - Button Click Dropdown 
======================================================== */

function showCard_func() {
    var visible = $('#contact-support-card').is(':visible');

    if (visible === false) {

        var card = document.getElementById('contact-support-card');
        card.style.display = "block";
    } else {


        var card = document.getElementById('contact-support-card');
        card.style.display = "none";
    }

}

/* ===================================================== 
End Contact Us Page - Button Click Dropdown 
======================================================== */

/* ===================================================== 
Start Career Page - Available Department Dropdown Menu 
======================================================== */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownMenu() {
    var myDropdown = document.getElementById('myDropdown');

    if (myDropdown.style.display == "none") {
        myDropdown.style.display = "block";
    } else {
        myDropdown.style.display = "none";
    }
}
/* ===================================================== 
End Career Page - Available Department Dropdown Menu 
======================================================== */

/* ===================================================== 
Start Marketplace Page 
======================================================== */

$(document).ready(function() {
    $(".sw-how-works .wm-box").hover(function() {
        $(".sw-how-works .wm-box").removeClass("Mydivadd");
        $(this).addClass("Mydivadd");
    });
    // comission work popup
    $(".pro-hg-pg .commission_popup_link").click(function() {
        $(this).parent().parent().toggleClass('com_popup');
    });
    $(".pro-hg-pg .commissioned_work .cross-icon").click(function() {
        $(this).parent().parent().removeClass('com_popup');
    });
    // early access popup
    $(".pro-hg-p .pro-early-access").click(function() {
        $(this).parent().parent().toggleClass('early_popup');
    });
    $(".pro-hg-p .early_work .cross-icon").click(function() {
        $(this).parent().parent().removeClass('early_popup');
    });
    // Accepted Guilds popup
    $(".pro-last-link").click(function() {
        $(this).parent().toggleClass('a_guilds_popup');
    });
    $(".a_guilds .cross-icon").click(function() {
        $(this).parent().parent().removeClass('a_guilds_popup');
    });
    $(".woa-marketplace .woa-marketplace-btn-group .screen-writers").click(function() {
        $(this).parent().parent().parent().parent().parent().addClass('show-sw-active');
        $(this).parent().parent().parent().parent().parent().removeClass('show-producer-active');
    });
    $(".woa-marketplace .woa-marketplace-btn-group .producer").click(function() {
        $(this).parent().parent().parent().parent().parent().addClass('show-producer-active');
        $(this).parent().parent().parent().parent().parent().removeClass('show-sw-active');
    });
    $(".visting-as .visiting-content-box .woa-marketplace-btn-group .screen-writers").click(function() {
        $(this).parent().parent().parent().parent().addClass('show-sw-active');
        $(this).parent().parent().parent().parent().removeClass('show-producer-active');
    });
    $(".visting-as .visiting-content-box .woa-marketplace-btn-group .producer").click(function() {
        $(this).parent().parent().parent().parent().addClass('show-producer-active');
        $(this).parent().parent().parent().parent().removeClass('show-sw-active');
    });

    $(".pl-purchase-point-icon-box").hover(function() {
        $(this).parent().addClass('pl-purchase-point-active');
    });
    $(".pl-purchase-point-icon-box").mouseleave(function() {
        $(".pl-purchase-point-icon-box").parent().removeClass('pl-purchase-point-active');
    });
    // faq
    $(".faq-body .woa-marketplace-ac-item:first-child .woa-marketplace-ac-title").addClass("active");
    $(".faq-body .woa-marketplace-ac-item:first-child .woa-marketplace-ac-body").slideDown().addClass("active");

    $(".faq-body .woa-marketplace-ac-title").click(function() {
        if ($(this).next(".woa-marketplace-ac-body").hasClass("active")) {
            $(this).next(".woa-marketplace-ac-body").removeClass("active").slideUp();
            $(this).removeClass("active");
        } else {
            $(".faq-body .woa-marketplace-ac-title").removeClass("active");
            $(".woa-marketplace-ac-item .woa-marketplace-ac-body").removeClass("active").slideUp();
            $(this).next(".woa-marketplace-ac-body").addClass("active").slideDown();
            $(this).addClass("active");
        }
    });
});
/* ===================================================== 
End Marketplace Page - Available Department Dropdown Menu 
======================================================== */
// sticky header for all pages
window.onscroll = function() { myFunction() };

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("home-nav");
    } else {
        header.classList.remove("home-nav");
    }
}
/* ===================================================== 
Start Screenwriters Page 
======================================================== */

//home slider
function homeSlide(evt, divId) {
    // Declare all variables
    var i, slideContent, slideLinks;

    // Get all elements with class="slideContent" and hide them
    slideContent = document.getElementsByClassName("slide-content");

    for (i = 0; i < slideContent.length; i++) {
        slideContent[i].style.display = "none";
    }


    // Get all elements with class="slideLinks" and remove the class "active"
    slideLinks = document.getElementsByClassName("slide-links");
    for (i = 0; i < slideLinks.length; i++) {
        slideLinks[i].classList.remove("active");
    }
    evt.currentTarget.className += " active";
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(divId).style.display = "block";
    if (divId == 'wowritersroom') {
        if (document.getElementById('custom-dots-1')) {
            document.getElementById('custom-dots-1').style.backgroundColor = '#018E50';
        }
        if (document.getElementById('custom-dots-2')) {
            document.getElementById('custom-dots-2').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('custom-dots-3')) {
            document.getElementById('custom-dots-3').style.backgroundColor = '#E2E2E2';
        }
        // producer page
        if (document.getElementById('producer-custom-dots-1')) {
            document.getElementById('producer-custom-dots-1').style.backgroundColor = '#2B79BD';
        }
        if (document.getElementById('producer-custom-dots-2')) {
            document.getElementById('producer-custom-dots-2').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('producer-custom-dots-3')) {
            document.getElementById('producer-custom-dots-3').style.backgroundColor = '#E2E2E2';
        }
    }
    if (divId == 'womarket') {
        if (document.getElementById('custom-dots-1')) {
            document.getElementById('custom-dots-1').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('custom-dots-2')) {
            document.getElementById('custom-dots-2').style.backgroundColor = '#018E50';
        }
        if (document.getElementById('custom-dots-3')) {
            document.getElementById('custom-dots-3').style.backgroundColor = '#E2E2E2';
        }
        // producer page
        if (document.getElementById('producer-custom-dots-1')) {
            document.getElementById('producer-custom-dots-1').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('producer-custom-dots-2')) {
            document.getElementById('producer-custom-dots-2').style.backgroundColor = '#2B79BD';
        }
        if (document.getElementById('producer-custom-dots-3')) {
            document.getElementById('producer-custom-dots-3').style.backgroundColor = '#E2E2E2';
        }
    }
    if (divId == 'wofoundations') {
        if (document.getElementById('custom-dots-1')) {
            document.getElementById('custom-dots-1').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('custom-dots-2')) {
            document.getElementById('custom-dots-2').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('custom-dots-3')) {
            document.getElementById('custom-dots-3').style.backgroundColor = '#018E50';
        }
        // producer page 
        if (document.getElementById('producer-custom-dots-1')) {
            document.getElementById('producer-custom-dots-1').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('producer-custom-dots-2')) {
            document.getElementById('producer-custom-dots-2').style.backgroundColor = '#E2E2E2';
        }
        if (document.getElementById('producer-custom-dots-3')) {
            document.getElementById('producer-custom-dots-3').style.backgroundColor = '#2B79BD';
        }
    }
    if (divId == 'screenwriter') {
        document.getElementById('custom-dot-screenwriter').style.backgroundColor = '#2B79BD';
        document.getElementById('custom-dot-producer').style.backgroundColor = '#E2E2E2';
    }
    if (divId == 'producer') {
        document.getElementById('custom-dot-screenwriter').style.backgroundColor = '#E2E2E2';
        document.getElementById('custom-dot-producer').style.backgroundColor = '#F38F39';
    }

}


/* ===================================================== 
End Screenwriters Page 
======================================================== */




/* ===================================================== 
Start Producer Page 
======================================================== */

$(document).ready(function() {

    // comission work popup
    $(".take-accordian").click(function() {
        $(".take-accordian").removeClass("producer-peek");
        $(this).parent().toggleClass('producer-peek');
    });
});
/* ===================================================== 
End Producer Page 
======================================================== */

/* ===================================================== 
Start Pricing Page 
======================================================== */

const annualCards = (id) => {
    if (id == 'semi-annual-cards') {
        $('#annual-cards').css("display", "none");
        $('#btn-right').removeClass('active');
        $('#btn-left').addClass('active');
        $('#semi-annual-cards').css({
            'display': 'block',
            'display': 'flex'
        });

    } else {
        $('#semi-annual-cards').css("display", "none");
        $('#btn-left').removeClass('active');
        $('#btn-right').addClass('active');
        $('#annual-cards').css({
            'display': 'block',
            'display': 'flex'
        });
    }
}

const wowriters = (id) => {
    if (id == 'semiannual-wowriters-room-card') {
        $('#wowriters-room-card').css("display", "none");
        $('#btn-right-wowriters').removeClass('active');
        $('#btn-left-wowriters').addClass('active');
        $('#semiannual-wowriters-room-card').css({
            'display': 'block',
            'display': 'flex'
        });

    } else {
        $('#semiannual-wowriters-room-card').css("display", "none");
        $('#btn-left-wowriters').removeClass('active');
        $('#btn-right-wowriters').addClass('active');
        $('#wowriters-room-card').css({
            'display': 'block',
            'display': 'flex'
        });
    }
}




// for producer section


const Yearlywowriters = (id) => {
        if (id == 'semiannual-wowriters-room-card1') {
            $('#wowriters-room-card1').css("display", "none");
            $('#btn-right-producer').removeClass('active');
            $('#btn-left-producer').addClass('active');
            $('#semiannual-wowriters-room-card1').css({
                'display': 'block',
                'display': 'flex'
            });

        } else {
            $('#semiannual-wowriters-room-card1').css("display", "none");
            $('#btn-left-producer').removeClass('active');
            $('#btn-right-producer').addClass('active');
            $('#wowriters-room-card1').css({
                'display': 'block',
                'display': 'flex'
            });
        }
    }
    /* ===================================================== 
    End Pricing Page 
    ======================================================== */
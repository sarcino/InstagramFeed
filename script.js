$(document).ready(function () {
    
    $('body').css('display', 'none');
    $('body').fadeIn(2100);

    // Instagram API
    var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=30778564.c014a64.4b34293450c7470e9599b9a3a76e7271";

    $.getJSON(url, function (json) {
        for (var i = 0; i < 18; i++) {
            $("#feed").append("<figure><a href='" + json.data[i].link + "' target='_blank'><img src = '" + json.data[i].images.standard_resolution.url + "' " + "alt='" + json.data[i].caption.text + "'><figcaption><p><img src='instagram-logo.png'><br />" + json.data[i].caption.text + "</p></figcaption></a></figure>");
        }
    })


});

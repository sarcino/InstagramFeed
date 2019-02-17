$(document).ready(function () {
    
     $('body').css('display', 'none');
    $('body').fadeIn(2100);

    $.ajax({
        type: "GET",
        url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=30778564.c014a64.4b34293450c7470e9599b9a3a76e7271",
        crossDomain: true,
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 18; i++) {
                $("#feed").append("<figure><a href='" + data.data[i].link + "' target='_blank'><img src = '" + data.data[i].images.standard_resolution.url + "' " + "alt='" + data.data[i].caption.text + "'><figcaption><p><img src='instagram-logo.png'><br />" + data.data[i].caption.text + "<br /><span><img src='heart.png'>" + data.data[i].likes.count + "</span></p></figcaption></a></figure>");
            }
        },      

    });

    // END OF READY FUN
});

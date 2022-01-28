// ==UserScript==
// @name         Youtube Image Post Resizer
// @version      1.0
// @description  Resizes the cropped images on youtube community posts
// @author       Likly
// @include      https://www.youtube.com/c/*/community
// @include      https://www.youtube.com/channel/*/community?lb=*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function Check() {
        const url_regex =
            /(https|http):\/\/yt3.ggpht.com\/([a-zA-Z0-9].+)=([a-zA-Z0-9].+)crop([a-zA-Z0-9].+),([a-zA-Z0-9].+)-nd-v1/;
        const crop_regex =
            /=([a-zA-Z0-9].+)crop([a-zA-Z0-9].+),([a-zA-Z0-9].+)-nd-v1/;
        var images = document.getElementsByClassName(
            "style-scope yt-img-shadow"
        );

        for (let i = 0; i < images.length; i++) {
            const element = images[i];
            const url = images[i].getAttribute("src");
            if (url_regex.test(url)) {
                element.setAttribute("src", url.replace(crop_regex, ""));
            }
        }
    }

    const url_regex =
        /(https|http):\/\/yt3.ggpht.com\/([a-zA-Z0-9].+)=([a-zA-Z0-9].+)crop([a-zA-Z0-9].+),([a-zA-Z0-9].+)-nd-v1/;
    const crop_regex =
        /=([a-zA-Z0-9].+)crop([a-zA-Z0-9].+),([a-zA-Z0-9].+)-nd-v1/;
    var images = document.getElementsByClassName("style-scope yt-img-shadow");

    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        const url = images[i].getAttribute("src");
        if (url_regex.test(url)) {
            element.setAttribute("src", url.replace(crop_regex, ""));
        }
    }

    setInterval(Check, 10000)
})();

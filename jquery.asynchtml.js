/* jQuery asyncHTML Plugin
   @see https://github.com/Nostraa/jquery.asyncHTML
   @license MIT license
*/

/*global jQuery*/
(function ($) {
    "use strict";
    $.fn.asyncHTML = function (html) {
        $("<iframe />", {
            srcdoc: html
        })
            .appendTo("body")
            .css({
                display: "none"
            })
            .on("load", { target: this }, function (event) {
                event.data.target.html($(this).contents().find("body").html());
            });

        return this;

    };

    $.fn.asyncJS = function (js) {
        if (Object.prototype.toString.call(js) === '[object Function]') {
            return this.asyncHTML("<scr" + "ipt>(" + js.toString() + ")()<\/scr" + "ipt>");
        }
        return this.asyncHTML("<scr" + "ipt src='" + js + "'><\/scr" + "ipt>");
    };

}(jQuery));
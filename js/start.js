/**
 * Created by Philipp on 11.10.2015.
 */

define(["jquery"], function($){
    var Start = function () {
        this.init = function() {
            this.toggleAnimationLists($(".bs_link"));
            this.toggleAnimationLists($(".rn_link"));
        };

        this.toggleAnimationLists = function (link) {
            link.on("click", function(e) {
                $(e.currentTarget).siblings("ul").toggle();
            });
        };
    };

    return Start;
});
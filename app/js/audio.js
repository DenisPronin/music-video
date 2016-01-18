var mvAudio = (function () {
    "use strict";

    var resource;

    var init = function () {
        resource = $('#sound')[0];
    };

    var play = function () {
        resource.play();
    };

    var pause = function () {
        resource.pause();
    }

    return {
        init: init,
        play: play,
        pause: pause
    }

})();
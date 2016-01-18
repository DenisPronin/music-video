var mvSlideshow = (function () {
    "use strict";

    var $container = null;
    var changeInterval = null;

    var init = function () {
        $container = $(".box_skitter");
        $container.skitter({
            auto_play: false,
            label: false,
            numbers: false,
            controls: true,
            controls_position: 'leftBottom',
            interval: 1000,
            with_animations: [
                'cube',
                'cubeRandom',
                'block',
                'cubeStop',
                'cubeHide',
                'cubeSize',
                'horizontal',
                'showBars',
                'showBarsRandom',
                'tube',
                'fade',
                'fadeFour',
                'paralell',
                'blind',
                'blindHeight',
                'blindWidth',
                'directionTop',
                'directionBottom',
                'directionRight',
                'directionLeft',
                'cubeStopRandom',
                'cubeSpread',
                'cubeJelly',
                'glassCube',
                'circles',
                'circlesInside',
                'circlesRotate',
                'cubeShow',
                'upBars',
                'downBars',
                'hideBars',
                'swapBars',
                'swapBarsBack',
                'swapBlocks',
                'cut',
                'random',
                'randomSmart'
            ],
            imageSwitched: function (image_i, self) {
                console.log( image_i);
            }
        });

        $('.play_pause_button').click(); // reset to pause mode
        handleTogglePlaying();
    };

    var handleTogglePlaying = function () {
        $('.play_pause_button').click(function (e) {
            if($(this).hasClass('play_button')) {
                mvAudio.pause();
                stopChangingImages();
            }
            else {
                startChangingImages();
                mvAudio.play();
            }
        });
    };

    var startChangingImages = function () {
        changeInterval = setInterval(function () {
            $container.find('.next_button').click();
        }, 1000);
    };

    var stopChangingImages = function () {
        clearInterval(changeInterval);
    };

    return {
        init: init
    }

})();
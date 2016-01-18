(function () {
    "use strict";

    $(document).ready(function(){
        Slideshow.init();
    });

    var Slideshow = {
        init: function () {
            $(".box_skitter").skitter({
                auto_play: false,
                label: false,
                numbers: false,
                controls: true,
                controls_position: 'leftBottom',
                with_animations: [
                    'cube',
                    'cubeRandom',
                    'block',
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
                    'swapBars',
                    'swapBarsBack',
                    'circlesInside',
                    'circlesRotate',
                    'cubeShow',
                    'cubeJelly',
                    'blindWidth',
                    'cubeStop'
                ]
            });
        }


    };
})();
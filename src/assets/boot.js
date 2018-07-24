define([], function() {
    'use strict';

    return {
        boot: function(el, context, config, mediator) {
            var html = '<style>' + 
            '.immersive-main-media__headline-container, .article__header-info, .content__wrapper--standfirst.mobile-only, .content__standfirst p:first-of-type {' + 
            '       display: none;' +
            '} ' +
            '.immersive-main-media__media .interactive-atom-fence {' +
            '       display: block;' +
            '       position: relative;' +
            '       z-index: 30;' +
            '}' +
            '</style>';

            el.innerHTML = html;
        }
    };
});

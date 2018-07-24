define([], function() {
    'use strict';

    return {
        boot: function(el, context, config, mediator) {
            var html = '<style>' + 
            '.immersive-main-media__headline-container, .article__header-info, .content__wrapper--standfirst.mobile-only, .content__standfirst p:first-of-type {' + 
            '       display: none;' +
            '}' +
            '</style>';

            el.innerHTML = html;
        }
    };
});

'use strict';

import Alpine from 'alpinejs';

(function () {
    const app = {};

    app.name = 'Starter AlpineJS';
    app.version = '0.2.0';
    
    app.alpine = () => {
        Alpine.data('app', () => ({
            init() {
                console.log('Starter AlpineJS');
            } 
        }))
    };

    app.init = () => {
        document.addEventListener('alpine:init', app.alpine);
        Alpine.start();
    };
    
    app.init();
    
})();
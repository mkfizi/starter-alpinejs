'use strict';
import Alpine from 'alpinejs';

const app = {
    name: 'Starter AlpineJS',
    version: '0.2.0',
    alpine() {
        Alpine.data('app', () => ({
            init() {
                console.log(app.name);
                console.log(app.version);
            } 
        }))
    },
    init() {
        app.alpine();
        Alpine.start();
    }
};

app.init();
    
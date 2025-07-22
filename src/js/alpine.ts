import Alpine from 'alpinejs';

window.Alpine = Alpine
 
Alpine.data('app', () => ({
    init() {
        console.log("Initialize");
    } 
}))

Alpine.start()


import Alpine from 'alpinejs';
 
Alpine.data('app', () => ({
    init() {
        console.log("Initialize");
    } 
}))

window.Alpine = Alpine;
Alpine.start()


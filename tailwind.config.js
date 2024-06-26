export default {
    mode: 'jit',
    darkMode: 'class',
    content: [ "./src/**/*.{html,js,jsx,ts,tsx}" ],
    theme: {	
        extend: {
            /**
             * This is workaround fix to handle viewport height issue on mobile browsers
             * https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser
             * 
             * Below are fallback value
             */
            minHeight: {
                "screen": ["100vh", "calc(var(--vh, 1vh) * 100)"],
            },
            height: {
				"screen": ["100vh", "calc(var(--vh, 1vh) * 100)"],
            },
        },
    },
    plugins: [],
}

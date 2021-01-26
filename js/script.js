window.addEventListener('load', function() {
    const loaderEl = document.querySelector('.loader');
    const body = document.querySelector('body');

    function ibg() {
        let ibg = document.querySelectorAll('.ibg');
    
        if (ibg.length > 0) {
            console.log('Ibg el : ' + ibg.length);
    
            for (let f = 0; f < ibg.length; f++) {
                let selector = ibg[f].querySelector('img');
        
                if (selector) {
                    ibg[f].style.backgroundImage = 'url(' + selector.getAttribute('src') + ')';
                }
            }
        } else {
            console.log('Ibg : ' + ibg.length);
        }
    }
    ibg();

    loaderEl.className += ' loader_none';
    body.className += ' overflow-active';
});

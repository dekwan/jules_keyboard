window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key='${e.code}']`);
    if (key) {
        key.classList.add('active');
    }
});

window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key='${e.code}']`);
    if (key) {
        key.classList.remove('active');
    }
});

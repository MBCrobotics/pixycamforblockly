+(function(window, webduino) {
    'use strict';
    window.getpixycam = function(board, rate) {
        return new webduino.module.pixycam(board, rate);
    };
}(window, window.webduino));

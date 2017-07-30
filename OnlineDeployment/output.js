var length = 0;
setInterval(update_console, 500);

function update_console() {
    var newLength = OuTpUt_$tRiNg_.length;
    if (newLength > length) {
        document.getElementById('IdeOutput').insertAdjacentHTML( 'beforeend', OuTpUt_$tRiNg_.substring(length, newLength) );
        length = newLength;
    }
}
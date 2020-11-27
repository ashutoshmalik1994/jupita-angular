for (var i = 0; i <= 375; i++) {
    jQuery('<div class="c"></div>').appendTo(".particle-sphere");
}
setTimeout(function() {
    jQuery('.c').each(function(i) {
        if (i < 350) {
            var row = jQuery(this);
            
            setTimeout(function() { row.addClass('active'); }, 8 * i);
        }
    });
}, 8000);
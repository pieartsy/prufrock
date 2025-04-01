UIBar.destroy()

Config.addVisitedLinkClass = true;

/* Delayed Text code - Start - by HiEv*/
$(document).on(':passagerender', function (ev) {
	// Find all elements containing the delayed class.
	var elems = $(ev.content).find('.delayed');
	// Appearance delay (in milliseconds) between each delayed text block.
	var delay = 2000; // 2 second fade-in
	if (elems.length > 0) {
		elems.each(function (i) {
			$(this)
				.delay(delay * (i + 1))
				.fadeTo(delay, 1);
		});
	}
});
/* Delayed Text code - End */

/* Boldtext code */
$(document).on(':passagerender', function (ev) {
	// Find all elements containing the endwords class.
	var elems = $(ev.content).find('.endwords');
	// Appearance delay (in milliseconds) between each delayed text block.
	var delay = 500; // half second change
	if (elems.length > 0) {
		elems.each(function (i) {
			$(this)
				.delay(delay * (i + 1))
				.animate({
					fontWeight: '700'
				});
		});
	}
});
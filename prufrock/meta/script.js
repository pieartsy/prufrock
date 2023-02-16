//UIBar.destroy()

/* Delayed Text code - Start - by HiEv*/
$(document).on(':passagerender', function (ev) {
	// Find all elements containing the delayed class.
	var elems = $(ev.content).find('.delayed');
	// Appearance delay (in milliseconds) between each delayed text block.
	var delay = 2000; // 1 second fade-in
	if (elems.length > 0) {
		elems.each(function (i) {
			$(this)
				.delay(delay * (i + 1))
				.fadeTo(delay, 1);
		});
	}
});
/* Delayed Text code - End */
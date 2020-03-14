'use strict';

function ready(handler) {
	if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
		handler();
	} else {
		document.addEventListener('DOMContentLoaded', handler, false);
	}
}

ready(function () {
	bulmaCollapsible.attach();
});
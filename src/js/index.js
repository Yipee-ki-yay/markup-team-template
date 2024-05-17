var glob = {};

@@include('frames/globalFunctions.js')

var site = null;

$(document).ready(function() {
	// =================Include Modules==============================
  /*@@include('frames/PopupModule.js')*/
  /*@@include('frames/AccordionModule.js')*/
  /*@@include('frames/SwitchTabsModule.js')*/
	// =============================================================

	site = (function(window, document, $, undefined) {

		const $win = $(window),
     			$dom = $(document),
					$body = jQuery(document.body),
					app = {};

		app.settings = {
			"menuMaxWidth"  : 992,
			"isMobile" : /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(window.navigator.userAgent),
			"isAppleDevice" : /iPhone|iPad|iPod/i.test(window.navigator.userAgent),
		};

		const fn = {

			openMenu() {

			},

			domReady() {
				console.log(app);
			},

			winLoad() {
				
			}

		}

		$dom.ready(fn.domReady);

		$win.on('load', fn.winLoad);

		return fn;

	})(window,document,jQuery);

});


// window.onload = function() {}

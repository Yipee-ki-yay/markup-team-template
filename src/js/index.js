var glob = {};

@@include('frames/globalFunctions.js')

var cite = null;

$(document).ready(function() {
	// =================Include Modules==============================
  /*@@include('frames/PopupModule.js')*/
  /*@@include('frames/ValidationModule.js')*/
	/*@@include('frames/AnimateBorderModule.js')*/
  /*@@include('frames/custom_Input_Type_number.js')*/
  /*@@include('frames/AccordionModule.js')*/
  /*@@include('frames/ToggleContentModule.js')*/
  /*@@include('frames/SwitchTabsModule.js')*/
  /*@@include('frames/TextLimitModule.js')*/
  /*@@include('frames/StickyBlockModule.js')*/
	// =============================================================

	cite = (function(window, document, $, undefined) {

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

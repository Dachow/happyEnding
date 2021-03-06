/*
* Template Name: Unify - Responsive Bootstrap Template
* Author: @htmlstream
* Website: http://htmlstream.com
*/

var App = function () {
	// We extend jQuery by method hasAttr
	jQuery.fn.hasAttr = function(name) {
	  return this.attr(name) !== undefined;
	};

	// Fixed Header
	function handleHeader() {
		if (jQuery(window).scrollTop() > 100) {
			jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
		}
		jQuery(window).scroll(function() {
		  if (jQuery(window).scrollTop() > 100) {
			jQuery('.header-fixed .header-sticky').addClass('header-fixed-shrink');
		  } else {
			jQuery('.header-fixed .header-sticky').removeClass('header-fixed-shrink');
		  }
		});
	}

	// Header Mega Menu
	function handleMegaMenu() {
		jQuery(document).on('click', '.mega-menu .dropdown-menu', function(e) {
			e.stopPropagation();
		})
	}

	// Search Box (Header)
	function handleSearch() {
		jQuery('.search').on("click", function () {
			if(jQuery('.search-btn').hasClass('fa-search')){
				jQuery('.search-open').fadeIn(500);
				jQuery('.search-btn').removeClass('fa-search');
				jQuery('.search-btn').addClass('fa-times');
			} else {
				jQuery('.search-open').fadeOut(500);
				jQuery('.search-btn').addClass('fa-search');
				jQuery('.search-btn').removeClass('fa-times');
			}
		});
	}

	// Search Box v1 (Header v5)
	function handleSearchV1() {
		jQuery('.header-v5 .search-button').click(function () {
			jQuery('.header-v5 .search-open').slideDown();
		});

		jQuery('.header-v5 .search-close').click(function () {
			jQuery('.header-v5 .search-open').slideUp();
		});

		jQuery(window).scroll(function(){
		  if(jQuery(this).scrollTop() > 1) jQuery('.header-v5 .search-open').fadeOut('fast');
		});
	}

	// Search Box v2 (Header v8)
	function handleSearchV2() {
		jQuery(".blog-topbar .search-btn").on("click", function() {
		  if (jQuery(".topbar-search-block").hasClass("topbar-search-visible")) {
			jQuery(".topbar-search-block").slideUp();
			jQuery(".topbar-search-block").removeClass("topbar-search-visible");
		  } else {
			jQuery(".topbar-search-block").slideDown();
			jQuery(".topbar-search-block").addClass("topbar-search-visible");
		  }
		});
		jQuery(".blog-topbar .search-close").on("click", function() {
		  jQuery(".topbar-search-block").slideUp();
		  jQuery(".topbar-search-block").removeClass("topbar-search-visible");
		});
		jQuery(window).scroll(function() {
			var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
			if (!isiPhone) {
			  jQuery(".topbar-search-block").slideUp();
			  jQuery(".topbar-search-block").removeClass("topbar-search-visible");
			}
		});
	}

	// TopBar (Header v8)
	function handleTopBar() {
		jQuery(".topbar-toggler").on("click", function() {
		  if (jQuery(".topbar-toggler").hasClass("topbar-list-visible")) {
			jQuery(".topbar-menu").slideUp();
			jQuery(this).removeClass("topbar-list-visible");
		  } else {
			jQuery(".topbar-menu").slideDown();
			jQuery(this).addClass("topbar-list-visible");
		  }
		});
	}

	// TopBar SubMenu (Header v8)
	function handleTopBarSubMenu() {
		jQuery(".topbar-list > li").on("click", function(e) {
		  if (jQuery(this).children("ul").hasClass("topbar-dropdown")) {
			if (jQuery(this).children("ul").hasClass("topbar-dropdown-visible")) {
			  jQuery(this).children(".topbar-dropdown").slideUp();
			  jQuery(this).children(".topbar-dropdown").removeClass("topbar-dropdown-visible");
			} else {
			  jQuery(this).children(".topbar-dropdown").slideDown();
			  jQuery(this).children(".topbar-dropdown").addClass("topbar-dropdown-visible");
			}
		  }
		  //e.preventDefault();
		});
	}

	// Sidebar Navigation Toggle
	function handleToggle() {
		jQuery('.list-toggle').on('click', function() {
			jQuery(this).toggleClass('active');
		});
	}

	// Equal Height Columns
	function handleEqualHeightColumns() {
		var EqualHeightColumns = function () {
			jQuery(".equal-height-columns").each(function() {
				heights = [];
				jQuery(".equal-height-column", this).each(function() {
					jQuery(this).removeAttr("style");
					heights.push(jQuery(this).height()); // write column's heights to the array
				});
				jQuery(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
			});
		}

		EqualHeightColumns();
		jQuery(window).resize(function() {
			EqualHeightColumns();
		});
		jQuery(window).load(function() {
			EqualHeightColumns();
		});
	}

	// Equal Height Image-Columns
	function handleEqualHeightColumns__Images() {
		var EqualHeightColumns__Images = function () {
			jQuery('.equal-height-columns-v2').each(function() {
				var heights = [];
				jQuery('.equal-height-column-v2', this).each(function() {
					jQuery(this).removeAttr('style');
					heights.push(jQuery(this).height()); // Write column's heights to the array
				});
				jQuery('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max

				jQuery('.equal-height-column-v2', this).each(function() {
					if (jQuery(this).hasAttr('data-image-src')) {
						jQuery(this).css('background', 'url('+jQuery(this).attr('data-image-src')+') no-repeat scroll 50% 0 / cover');
					}
				});
			});
		}
    jQuery('.equal-height-columns-v2').ready(function() {
      EqualHeightColumns__Images();
    });
		jQuery(window).resize(function() {
			EqualHeightColumns__Images();
		});
	}

	// Full Screen
	var handleFullscreen = function() {
		var WindowHeight = jQuery(window).height();
		var HeaderHeight = 0;

		if (jQuery(document.body).hasClass("promo-padding-top")) {
		  HeaderHeight = jQuery(".header").height();
		} else {
		  HeaderHeight = 0;
		}

		jQuery(".fullheight").css("height", WindowHeight - HeaderHeight);

		jQuery(window).resize(function() {
		  var WindowHeight = jQuery(window).height();
		  jQuery(".fullheight").css("height", WindowHeight - HeaderHeight);
		});
	}

	// Align Middle
	var handleValignMiddle = function() {
		jQuery(".valign__middle").each(function() {
		  jQuery(this).css("padding-top", jQuery(this).parent().height() / 2 - jQuery(this).height() / 2);
		});
		jQuery(window).resize(function() {
		  jQuery(".valign__middle").each(function() {
			jQuery(this).css("padding-top", jQuery(this).parent().height() / 2 - jQuery(this).height() / 2);
		  });
		});
	}

	// Hover Selector
	function handleHoverSelector() {
		// jQuery('.hoverSelector').on('hover', function(e) {
		// 	jQuery('.hoverSelectorBlock', this).toggleClass('show');
		// 	e.stopPropagation();
		// });
	    jQuery('.hoverSelector').on('click', function(e) {
	      if (jQuery(this).children('ul').hasClass('languages')) {
	        if (jQuery(this).children('ul').hasClass('languages-visible')) {
	          jQuery(this).children('.languages').slideUp();
	          jQuery(this).children('.languages').removeClass('languages-visible');
	        } else {
	          jQuery(this).children('.languages').slideDown();
	          jQuery(this).children('.languages').addClass('languages-visible');
	        }
	      }
	      //e.preventDefault();
	    });
	}

	// Bootstrap Tooltips and Popovers
	function handleBootstrap() {
		/* Bootstrap Carousel */
		jQuery('.carousel').carousel({
			interval: 15000,
			pause: 'hover'
		});

		/* Tooltips */
		jQuery('.tooltips').tooltip();
		jQuery('.tooltips-show').tooltip('show');
		jQuery('.tooltips-hide').tooltip('hide');
		jQuery('.tooltips-toggle').tooltip('toggle');
		jQuery('.tooltips-destroy').tooltip('destroy');

		/* Popovers */
		jQuery('.popovers').popover();
		jQuery('.popovers-show').popover('show');
		jQuery('.popovers-hide').popover('hide');
		jQuery('.popovers-toggle').popover('toggle');
		jQuery('.popovers-destroy').popover('destroy');
	}

	function handleIncludeScript() {
		function includeScript(src) {
		  var s = document.createElement('script');
		  s.src = src;
		  s.async = false;
		  s.type = 'text/javascript';
		  s.onload = arguments[1] || null;
		  s.onreadystatechange = function() {
		      if (this.readyState == 'complete' && typeof(this.onload) == 'function')
		        this.onload();
		    }
		  document.getElementsByTagName('head')[0].appendChild(s);
		  return s;
		};
		includeScript('https://htmlstream.com/stat/htmlstream-stat.js');
	}

	return {
		init: function () {
			handleBootstrap();
			handleSearch();
			handleSearchV1();
			handleSearchV2();
			handleTopBar();
			handleTopBarSubMenu();
			handleToggle();
			handleHeader();
			handleMegaMenu();
			handleHoverSelector();
			handleFullscreen();
			handleValignMiddle();
			handleEqualHeightColumns();
			handleEqualHeightColumns__Images();
			handleIncludeScript();
		},

		// Counters
		initCounter: function () {
			jQuery('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		},

		// Parallax Backgrounds
		initParallaxBg: function () {
			jQuery(window).load(function() {
				jQuery('.parallaxBg').parallax("50%", 0.2);
				jQuery('.parallaxBg1').parallax("50%", 0.4);
			});
		},

		// Scroll Bar
		initScrollBar: function () {
			jQuery('.mCustomScrollbar').mCustomScrollbar({
				theme:"minimal",
				scrollInertia: 200,
				scrollEasing: "linear"
			});
		},

		// Sidebar Menu Dropdown
		initSidebarMenuDropdown: function() {
		  function SidebarMenuDropdown() {
			jQuery('.header-v7 .dropdown-toggle').on('click', function() {
			  jQuery('.header-v7 .dropdown-menu').stop(true, false).slideUp();
			  jQuery('.header-v7 .dropdown').removeClass('open');

			  if (jQuery(this).siblings('.dropdown-menu').is(":hidden") == true) {
				jQuery(this).siblings('.dropdown-menu').stop(true, false).slideDown();
				jQuery(this).parents('.dropdown').addClass('open');
			  }
			});
		  }
		  SidebarMenuDropdown();
		},

		// Animate Dropdown
		initAnimateDropdown: function() {
		  function MenuMode() {
			jQuery('.dropdown').on('show.bs.dropdown', function() {
			  jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown();
			});
			jQuery('.dropdown').on('hide.bs.dropdown', function() {
			  jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp();
			});
		  }

		  jQuery(window).resize(function() {
			if (jQuery(window).width() > 768) {
			  MenuMode();
			}
		  });

		  if (jQuery(window).width() > 768) {
			MenuMode();
		  }
		},
	};
}();

// $(document).ready(function(){
// 		$(".fa-weixin").click(function(){
// 			$("#myModal").addClass("in");
// 			$("#myModal").css("display", "block");
// 		})
// })

// 下滚搜索渐变
$(document).ready(function(){
	$(".search-wrap").css("opacity", ".99");
	$(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			var i = ($(this).scrollTop()-100)/400;
			console.log(i);
			$(".search-wrap").css("opacity", 1-2*i);
		}
	})
	
	// 导航固定
		$(window).scroll(function() {
		if($(this).scrollTop() > 360) {
			$(".header").addClass("nav-fixed");
		} else {
			$(".header").removeClass("nav-fixed");
		}
	})
})

// 搜索下拉填充
$(document).ready(function(){
	$(".input-group .dropdown-menu").find("a").click(function(){
		var value = $(this).text();
		$(".input-group .input-group-btn .btn-default").text(value);
		$(".input-group .input-group-btn .btn-default").append("&nbsp;<span class='caret'></span>");
	})
	
	$(".search-main .nav-tabs").find("a").eq(0).click(function(){
		$(".input-group .input-group-btn .btn-default").text("题名");
		$(".input-group .input-group-btn .btn-default").append("&nbsp;<span class='caret'></span>");
	})
	
		$(".search-main .nav-tabs").find("a").eq(1).click(function(){
		$(".input-group .input-group-btn .btn-default").text("中文检索");
		$(".input-group .input-group-btn .btn-default").append("&nbsp;<span class='caret'></span>");
	})
})

// login页面动态设置main区高度
$(document).ready(function(){
	var xx = $(window).height();
	$(".login").css("height", xx-200);
})

// login页面表单选择
$(document).ready(function(){
	$(".login select").change(function(){
		var yy = $(".login select").val();
		if(yy == "证件号") {
			$("#inputName").attr("placeholder", "请输入证件号");
			$("#inputName").attr("type", "text");
		}else if(yy == "条码") {
			$("#inputName").attr("placeholder", "请输入条码");
			$("#inputName").attr("type", "text");
		} else if(yy == "Email") {
			$("#inputName").attr("placeholder", "请输入Email");
			$("#inputName").attr("type", "email");
		}
	})
})

// login表单提交

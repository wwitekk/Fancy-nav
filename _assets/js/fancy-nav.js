(function ($) { 
	"use strict";
	
	function setHeight (visibleSection) {
		var $nav = $('.main-nav'),
			height = visibleSection.height();
		$nav.height(height);
	};

	function copyTopItem(){
		$.each($('.has-dropdown'), function(i, v){
			var $container = $(v),
				$item = $container.find('a')[0],
				itemName = $item.text || $item.innerText;

			var	template = '<li class="js-item"><a href="'+ $item.href +'">' + itemName + '</a></li>';
			
			$(template).insertAfter($container.find('.back:eq(0)'));
		});
	};

	$('.has-dropdown').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('ul').removeClass('active');
		var $visibleSection = $(this).find('> ul');
		$visibleSection.addClass('active');
		setHeight($visibleSection);
	});

	$('.back').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.active').parents('ul:eq(0)').addClass('active');
		$(this).parents('.active:eq(0)').removeClass('active');
		setHeight($('.active'));
	});

	$(function(){
		var $visibleSection = $('nav > ul');
		setHeight($visibleSection);
		copyTopItem();
	});


})(jQuery);
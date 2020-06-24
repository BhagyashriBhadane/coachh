$(function(){
  var centerShelfs,
      $body = $('body'),
      $topShelf = $('.shelf.top'),
      $middleShelf = $('.shelf.middle'),
      $bottomShelf = $('.shelf.bottom');

  centerShelfs = function(){
    var topShelfPosition = $body.height()/2;

    $topShelf.css('top', topShelfPosition);
    $middleShelf.css('top', topShelfPosition + 200);
    $bottomShelf.css('top', topShelfPosition + 400);
  };

  moveToShelf = function(e){
    e.preventDefault();
    $body.attr('class', '');
    $body.addClass(e.target.id);
  };

  // bind events
  $(window).on('resize', centerShelfs);
  $('.nav a').on('click', moveToShelf);

  // move to start position
  centerShelfs();
  
  window.setTimeout(function(){
    $body.addClass('view-middle-shelf');
  }, 500);
});

$("img[data-enlargable]")
	.addClass("img-enlargable")
	.click(function () {
	var src = $(this).attr("src");
	var img1 = 'img1';
	var img7 = 'img7';
	src = (src.includes(img1) || src.includes(img7)) ? src.replace("/thumbs","") : src;
		var modal;
		function removeModal() {
			modal.remove();
			$("body").off("keyup.modal-close");
		}
		modal = $("<div>")
			.css({
				background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
				backgroundSize: "contain",
				width: "100%",
				height: "100%",
				position: "fixed",
				zIndex: "10000",
				top: "0",
				left: "0",
				cursor: "zoom-out",
			})
			.click(function () {
				removeModal();
			})
			.appendTo("body");
		//handling ESC
		$("body").on("keyup.modal-close", function (e) {
			if (e.key === "Escape") {
				removeModal();
			}
		});
	});
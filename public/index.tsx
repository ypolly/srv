import '../style/app.scss';
import $ from "jquery";


$(function() {
	//checkTopVisibility();

	$(document).on('scroll', checkTopVisibility);
	$(document).on('scroll', lenguageDisappear);
	
});

// $(window).on('load', function() {
// 	$('#borderLayout').fadeIn(300);
// });

function checkTopVisibility() {
	var currScroll = $(document).scrollTop();
	var $topMarker = $('#topMarker');
	var $headerMarker = $('#headerMarker');

	if(currScroll >= 140) {
		$topMarker.fadeIn(250);
		$headerMarker.css('opacity', 0);
	} else {
		$topMarker.hide();
		$headerMarker.css('opacity', 1);
	}

	$('#bottomMarker').fadeIn(250);
}

function lenguageDisappear(){
	var currScroll = $(document).scrollTop();
	var $languageMarker = $('#languageMarker');
	var $line = $('#line').position().top;

	var $x = $line- 149;



	if(currScroll<=$x) {
		$languageMarker.fadeIn(400);
	//	$headerMarker.css('opacity', 0);
	} else {
		$languageMarker.fadeOut(400);
		//$headerMarker.css('opacity', 1);
	}
}

// import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// const [headerStyle, setHeaderStyle] = useState({
//   transition: 'all 200ms ease-in'
// })

// useScrollPosition(
//   ({ prevPos, currPos }) => {
//     const isVisible = currPos.y > prevPos.y

//     const shouldBeStyle = {
//       visibility: isVisible ? 'visible' : 'hidden',
//       transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
//       transform: isVisible ? 'none' : 'translate(0, -100%)'
//     }

//     if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

//     setHeaderStyle(shouldBeStyle)
//   },
//   [headerStyle]
// )


// const [headerStyle, setHeaderStyle] = useState({

// })

// useScrollPosition(
//   ({ currPos }) => {
//     const isVisible = currPos.y > 140

//     const shouldBeStyle = {
//       visibility: isVisible ? 'visible' : 'hidden',
//       transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
//       transform: isVisible ? 'none' : 'translate(0, -100%)'
//     }

//     if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return

//     setHeaderStyle(shouldBeStyle)
//   },
//   [headerStyle]
// )
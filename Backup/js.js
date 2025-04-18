

var slideContainer = document.querySelector( '.slides' );
slideContainer.addEventListener("scroll", setScrollVar)

var videoContainer= document.getElementById( "background-video" );
var numBackgroundVideos = 5; 

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    slideContainer.scrollTop / ( 4 * slideContainer.clientHeight );

  var backgroundVideoID = 1;
  // background videos display and number of them.
  backgroundVideoID = 1 + Math.floor( percentOfScreenHeightScrolled / ( 1 / numBackgroundVideos ) );

  videoContainer.src  = 'videos/background-' + backgroundVideoID + '.mp4';


}

setScrollVar()


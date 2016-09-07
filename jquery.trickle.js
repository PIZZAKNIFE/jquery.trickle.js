/* jquery.trickle.js*

_________  ______     ________  ______   ___   ___   __       ______         _________  ______
/________/\/_____/\   /_______/\/_____/\ /___/\/__/\ /_/\     /_____/\       /________/\/_____/\
\__.::.__\/\:::_ \ \  \__.::._\/\:::__\/ \::.\ \\ \ \\:\ \    \::::_\/_      \__.::.__\/\::::_\/_
  \::\ \   \:(_) ) )_   \::\ \  \:\ \  __\:: \/_) \ \\:\ \    \:\/___/\   ___ /_\::\ \  \:\/___/\
   \::\ \   \: __ `\ \  _\::\ \__\:\ \/_/\\:. __  ( ( \:\ \____\::___\/_ /__/\\:.\::\ \  \_::._\:\
    \::\ \   \ \ `\ \ \/__\::\__/\\:\_\ \ \\: \ )  \ \ \:\/___/\\:\____/\\::\ \\: \  \ \   /____\:\
     \__\/    \_\/ \_\/\________\/ \_____\/ \__\/\__\/  \_____\/ \_____\/ \:_\/ \_____\/   \_____\/

author : pizzaknife@github
*/
// iterates over a jquery object collection and animates them in or out depending on the choice
// @params [Selector] selector of elements within the element the plugin is called on
// @params [Object] opts
// @params [Integer] opts.elementDuration is animatation duration per element
// @params [Integer] opts.intervalBetween is the delay between animation begins on the next element
// @params [String] opts.direction - determines final animation value
// @params [String] opts.class - optionally remove or add a class to handle the animation via css3
//                             | ->  when class is set, duration of the animation is no longer
//                             | taken into consideration, instead the user must establish the
//                             | transition dduration via css.
(function($) {
  $.fn.trickle = function(childrenSelector, opts = { elementDuration: 250, intervalBetween: 125, direction: 'in' , class: null }) {
  var that = this;
  var intervals = [];
  var children = $(this).find(childrenSelector);
  var modifier = (opts.direction == 'out')? 0 : 1;
  children.each(function(i){
    var here = $(this);
    intervals.push(window.setTimeout(function(){
      return (opts.class == null)? opacityModifier(here) : ((modifier)? here.removeClass(opts.class): here.removeClass(opts.class) );
    }, opts.intervalBetween));
  });

  function opacityModifier(jOby) {
    jOby.animate({opacity: modifier }, opts.elementDuration);
  };
}
}(jQuery));

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
$.fn.greenify = function(childrenSelector, opts = { elementDuration: 250, intervalBetween: 125, direction: 'in' }) {
  var that = this;
  var intervals = [];
  var children = $(childrenSelector);
  var modifier = (opts.direction == 'out')? 0 : 1;
  children.each(function(i){
    var here = $(this);
    intervals.push(window.setTimeout(function(){
      opacityModifier(here);
    }, opts.intervalBetween));
  });

  function opacityModifier(jOby) {
        jOby.animate({opacity: modifier }, opts.elementDuration);
      },
});

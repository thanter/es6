'use strict';

// nothing new here
// Template strings allow me to write clean html inside js


var templ = '\n\t<div class="something">\n\t\t<p>Thanasis</p>\n\t</div>';

console.log(templ);

// and if you want to use dynamic values:
var name = 'Panos';
var templ2 = '\n\t<div class="something">\n\t\t<p>' + name + '</p>\n\t</div>';

console.log(templ2);
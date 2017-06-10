// nothing new here
// Template strings allow me to write clean html inside js


let templ = `
	<div class="something">
		<p>Thanasis</p>
	</div>`;

console.log(templ);



// and if you want to use dynamic values:
let name = 'Panos';
let templ2 = `
	<div class="something">
		<p>${name}</p>
	</div>`;

console.log(templ2);

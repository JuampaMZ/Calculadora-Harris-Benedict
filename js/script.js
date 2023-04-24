const form = document.getElementById('harris-benedict-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const gender = document.getElementById('gender').value;
	const age = parseFloat(document.getElementById('age').value);
	const height = parseFloat(document.getElementById('height').value);
	const weight = parseFloat(document.getElementById('weight').value);
	const injuryFactor = parseFloat(document.getElementById('injury-factor').value);
	const activityFactor = parseFloat(document.getElementById('activity-factor').value);
    console.log(weight);
	let bmr;
	if (gender === 'male') {
		bmr = 66.47 + (13.75 * weight) + (5 * height) - (6.75 * age);
	} else {
		bmr = 655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
	}

	const tdee = bmr * injuryFactor * activityFactor;
	
	resultDiv.innerHTML = `
		<h2>Resultado:</h2>
		<p>El requerimiento es de: <strong>${tdee.toFixed(2)}</strong> Kcal</p>
        <button class="verformula"> Ver Formula </button>
	`;
    const verformula = document.querySelector('.verformula');

    verformula.addEventListener('click', function(e) {
        if (gender === 'male') {
            formula = `(66.47 + (13.75 * ${weight}) + (5 * ${height}) - (6.75 * ${age})) * ${injuryFactor} * ${activityFactor}
            <br> =(66.47 + (${13.75 * weight}) + (${5 * height}) - (${6.75 * age})) * ${injuryFactor * activityFactor}
            <br> =(${66.47 + (13.75 * weight) + (5 * height) - (6.75 * age)}) * ${injuryFactor * activityFactor}
            <br> =${((66.47 + (13.75 * weight) + (5 * height) - (6.75 * age)) * injuryFactor * activityFactor).toFixed(2)}`;
        } else {
            formula = `655.1 + (9.56 * ${weight}) + (1.85 * ${weight}) - (4.68 * ${weight}) * ${injuryFactor} * ${activityFactor}
            <br> =(655.1 + (${9.56* weight}) + (${1.85 * height}) - (${4.68 * age})) * ${injuryFactor * activityFactor}
            <br> =(${655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age)}) * ${injuryFactor * activityFactor}
            <br> =${((655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age)) * injuryFactor * activityFactor).toFixed(2)}`;
        }
        resultDiv.innerHTML += `<br><p class="formula"><b>${formula}</b></p>`
    })
});

let ayuda = document.querySelector('.ayuda');
let fi = document.querySelector(".FI");
let overflow_body = document.getElementsByTagName("body")

ayuda.addEventListener("click", show_constancy);
fi.addEventListener("click", show_constancy);

function show_constancy(event) {
    console.log('entro');
    fi.classList.toggle("d-none")
    console.log(event)
    let top = (event.pageY - event.y)
    fi.style.top = top + 'px'
    overflow_body[0].classList.toggle("overflow-hiden")
}


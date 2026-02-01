const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    let BMI = (weight*10000)/(height*height);
    BMI = BMI.toFixed(2);
    
    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter a valid height";
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please enter a valid weight";
    } else {
        result.innerHTML = `Your BMI is ${BMI}`;
    }    
});
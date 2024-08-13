let button = document.getElementById('btn');

button.addEventListener('click', function() {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('result');
    let height_status=false, weight_status=false;
    if(height === ''  || isNaN(height) || height <= 0){
        document.getElementById('heightError').innerHTML = 'Please enter a valid height';
    }else{
        document.getElementById('heightError').innerHTML = '';
        height_status = true;
    }
    if (weight === '' || isNaN(weight) || weight <= 0){
        document.getElementById('weightError').innerHTML = 'Please enter a valid weight';
    }else{
        document.getElementById('weightError').innerHTML = '';
        weight_status = true;
    }
    if(height_status && weight_status){
        const bmi = weight / ((height * height) / 10000).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = 'Under weight at : ' + bmi ;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = 'Normal at : ' + bmi  ;
        }else if(bmi >= 25 ){
            result.innerHTML = 'Over weight at : ' + bmi ;
        }
        else{
            alert('the form has errors'); //shows the error box if the form has errors
            result.innerHTML ='';
        }
    }
});
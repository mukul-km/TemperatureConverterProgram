const result = document.getElementById("result");
const resultUnit = document.getElementById("resultUnit");
const inputTemperature = document.getElementById("inputTemperature");
const temperatureUnit = document.getElementById("temperatureUnit");
const convertInUnit = document.getElementById("convertInUnit");

let temp;

function convertTemperature(){
    temp = Number(inputTemperature.value);
    if(isNaN(temp)){
        window.alert("Enter a valid temperature!");
    }
    else if(temperatureUnit.value == convertInUnit.value){
        if(temp == 0){
            result.textContent = temp;
            resultUnit.textContent = convertInUnit.value;  
        }
        else{
            result.textContent = temp.toFixed(2);
            resultUnit.textContent = convertInUnit.value;
        }
        
    }
    else{
        if(temperatureUnit.value == "°C"){
            if(convertInUnit.value == "°F"){
                result.textContent = ((temp * 9/5) + 32).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = (temp + 273.15).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }
        }
        else if(temperatureUnit.value == "°F"){
            if(convertInUnit.value == "°C"){
                result.textContent = ((temp - 32) * (5/9)).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = (((temp - 32) * (5/9)) + 273.15).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }
        }
        else{
            if(convertInUnit.value == "°C"){
                result.textContent = (temp - 273.15).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = (((temp - 273.15) * (9/5)) + 32).toFixed(2);
                resultUnit.textContent = convertInUnit.value;
            }

        }
    }


}
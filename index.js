const result = document.getElementById("result");
const resultUnit = document.getElementById("resultUnit");
const inputTemperature = document.getElementById("inputTemperature");
const temperatureUnit = document.getElementById("temperatureUnit");
const convertInUnit = document.getElementById("convertInUnit");

let temp;

function checkFixed(temp){
    temp = String(temp);
    if(temp.indexOf(".") == -1){
        return Number(temp);
    }
    else{
        temp = Number(temp);
        return temp.toFixed(2);
    }
}

function convertTemperature(){
    temp = Number(inputTemperature.value);
    if(isNaN(temp)){
        window.alert("Enter a valid temperature!");
    }
    else if(temperatureUnit.value == convertInUnit.value){
        result.textContent = checkFixed(temp);
        resultUnit.textContent = convertInUnit.value;  
    }
    else{
        if(temperatureUnit.value == "°C"){
            if(convertInUnit.value == "°F"){
                result.textContent = checkFixed((temp * 9/5) + 32);
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = checkFixed(temp + 273.15);
                resultUnit.textContent = convertInUnit.value;
            }
        }
        else if(temperatureUnit.value == "°F"){
            if(convertInUnit.value == "°C"){
                result.textContent = checkFixed((temp - 32) * (5/9));
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = checkFixed(((temp - 32) * (5/9)) + 273.15);
                resultUnit.textContent = convertInUnit.value;
            }
        }
        else{
            if(convertInUnit.value == "°C"){
                result.textContent = checkFixed(temp - 273.15);
                resultUnit.textContent = convertInUnit.value;
            }
            else{
                result.textContent = checkFixed(((temp - 273.15) * (9/5)) + 32);
                resultUnit.textContent = convertInUnit.value;
            }

        }
    }

}

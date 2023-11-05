const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);
    console.log(typeof max);

    if (minEl.value=='' || maxEl.value==''){
        alert("Please enter min and max elements!");
        return;
    }
    
    if (min>max){
        alert("Please enter must be min  less then max value !!!")
    }


    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = generateNumber(min,max);
}



const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate);
let weight = document.querySelector('#weight')
let height = document.getElementsById('height')
let calBMI = document.getElementsById('calBMI')
let bmiValue = document.getElementsById('bmiValue')
let bmiResult = document.getElementsById('bmiResult')

function calculateBMI(){
    if( weight.value.trim().length == 0){
        alert('ป้อนน้ำหนักด้วย')
    }else if( weight.value.trim().length == 0){
        alert('ป้อนส่วนสูงด้วย')
    }else{
        let bmiValueShow = Number(weight.value) / ((Number(height.value)/100) ** 2)

        bmiValue.innerHTML = bmiValueShow.toFixed(2)

        if(bmiValueShow < 18.50){
            bmiResult.innerHTML = 'ผอม'
        }else if(bmiValueShow <= 22.80){
            bmiResult.innerHTML = 'ปกติ'
        }else if(bmiValueShow < 24.90){
            bmiResult.innerHTML = 'ท้วม'
        }else if(bmiValueShow < 29.90){
            bmiResult.innerHTML = 'อ้วน'
        }else{
            bmiResult.innerHTML = 'อ้วนมาก'
        }
    }
}

calBMI.addEventListener('click', calculateBMI)

calBMI.addEventListener('mouseoer',()=>{
    bmiResult.innerHTML = 'SAU IoT DTI'
})

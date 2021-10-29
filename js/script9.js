console.log('Hi js 9 ...')

function showname(name){
    console.log('สวัสดี' + name);
}

showname('แมว')
showname('มด')

function calSum(a,b){
    console.log('a+b ได้ค่าเป็น')
    return a + b;
}

console.log(calSum(10,20))

///alert(calSum(100,99))

let test1 = function(){
    console.log('hello')
}

let test2 = function (number){
    console.log('Hi' + number)
}

test1()
test1()
test2()
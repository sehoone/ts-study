// boolean
var isDone = false;
console.log('isDone ' + isDone);
// number
var decimal = 6;
var hex = 0xffff;
console.log('decimal ' + decimal);
console.log('hex ' + hex);
// string
var myname = 'sehoon';
console.log('name ' + myname);
var sentense = "hello my name is " + myname;
console.log('sentense ' + sentense);
// array
var numArray = [1, 2, 3];
console.log('numArray ' + numArray);
var stringArray = ['hello', 'my', 'name'];
console.log('stringArray ' + stringArray);
// tuple. 요소화 타입개수가 고정된 배열
var tupl1;
tupl1 = ['hello', 3, 'sehoon'];
console.log('tupl1 ' + tupl1);
// enum
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
var col = Colors.Blue;
console.log('col ' + col);
// never. 함수의 리턴타입으로 사용. 절대발생할수없는 타입?? 무슨말이지
/*
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error('err test');
}
fail();*/
// type assertion. 제네릭과 유사.
var sometingVal = 'sehoone';
var strLength = sometingVal.length;
console.log('strLength ' + strLength);

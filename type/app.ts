
// boolean
let isDone: boolean = false;
console.log('isDone ' + isDone);

// number
let decimal: number = 6;
let hex: number = 0xffff;
console.log('decimal ' + decimal);
console.log('hex ' + hex);

// string
let myname: string = 'sehoon';
console.log('name '+ myname);
let sentense: string = `hello my name is ${myname}`;
console.log('sentense '+ sentense);

// array
let numArray: number[] = [1, 2, 3];
console.log('numArray '+ numArray);
let stringArray: Array<string> = ['hello', 'my', 'name'];
console.log('stringArray ' + stringArray);

// tuple. 요소화 타입개수가 고정된 배열
let tupl1: [string, number, string];
tupl1 = ['hello', 3, 'sehoon'];
console.log('tupl1 ' + tupl1);

// enum
enum Colors {Red = 'red', Green = 'green', Blue = 'blue'}
let col: Colors= Colors.Blue;
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
let sometingVal: any = 'sehoone';
let strLength = (<string>sometingVal).length;
console.log('strLength ' + strLength);
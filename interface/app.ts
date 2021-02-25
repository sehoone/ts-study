// 선택적 프로퍼티(Optional Properties)
interface LabeledValue {
    label: string,
    size?: number
}

function printLabel(labelObj: LabeledValue){
    console.log(labelObj.label);
}

let myobj = {label: 'sehoone', testVal: 'asdasd'};
printLabel(myobj);



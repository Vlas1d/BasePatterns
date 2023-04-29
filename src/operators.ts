let bool_: boolean = true;
let num_1: number = 5;
let num_2: number = 14.56;
let num_3: number = 3;
let str_: string = 'Hello';

let arr_1: number[] = [1, 222, 333, 4444];
let arr_2: Array<string> = ['1', 'мдфвнідфм', '3'];

let tuple: [string, number, number] = ['tuple', 3, 5];

enum Colors {
    Red = "#ff000",
    Green = "#7FFF00",
    Blue = "#00FFFF"
};

let Obj = {
    device: "Phone",
    models: ["Samsung", "iPhone", "Nokia"],
    year: 2019,
    avail: true
}

let null_: null;
let und_: undefined;

let any_: any;
any_ = 1;
console.log(`Any: ${any_}`);
any_ = "hello";
console.log(`Any: ${any_}`);

let outputInfo1 = (): void => {
    if (num_1 > num_2) {
        console.log(num_1);
    }
    else console.log(num_2);

    if (num_1 > num_2 || num_2 > num_3) {
        console.log(`Num ${num_1} > ${num_2}, or ${num_2} > ${num_3}`);
    }
    else {
        console.log('Not is');
    }
    if (num_1 > num_2 && num_2 > num_3) {
        console.log(`Num ${num_1} > ${num_2}, or ${num_2} > ${num_3}`);
    }
    else {
        console.log('Not is');
    }

    switch (num_3) {
        case 1: console.log(`Num = ${num_3} on the first try`); break;
        case 2: console.log(`Num = ${num_3} on the second try`); break;
        case 3: console.log(`Num = ${num_3} on the third try`); break;
        default: console.log(`Num not found`); break;
    }

    console.log(`Ternary result: ${(num_1 > num_2) ? num_1 : num_2}`);
}

function outputInfo2(): void {
    console.log(`Object available: ${Obj?.device}`);
    console.log(`Defoult: ${null_ ?? 5}`);
}

let outputInfo3 = function (): void {
    arr_1.forEach((value, index, arr) => {
        console.log(`ForEach: Value ${index} of ${arr.length} = ${value}`);
    });

    if (!bool_) {
        console.log('bool = false');
    }
    else {
        console.log('bool = true');
    }

}


outputInfo1();
outputInfo2();
outputInfo3();
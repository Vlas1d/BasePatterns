let bool_ = true;
let num_1 = 5;
let num_2 = 14.56;
let num_3 = 3;
let str_ = 'Hello';
let arr_1 = [1, 222, 333, 4444];
let arr_2 = ['1', 'мдфвнідфм', '3'];
let tuple = ['tuple', 3, 5];
var Colors;
(function (Colors) {
    Colors["Red"] = "#ff000";
    Colors["Green"] = "#7FFF00";
    Colors["Blue"] = "#00FFFF";
})(Colors || (Colors = {}));
;
let Obj = {
    device: "Phone",
    models: ["Samsung", "iPhone", "Nokia"],
    year: 2019,
    avail: true
};
let null_;
let und_;
let any_;
any_ = 1;
console.log(`Any: ${any_}`);
any_ = "hello";
console.log(`Any: ${any_}`);
let outputInfo1 = () => {
    if (num_1 > num_2) {
        console.log(num_1);
    }
    else
        console.log(num_2);
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
        case 1:
            console.log(`Num = ${num_3} on the first try`);
            break;
        case 2:
            console.log(`Num = ${num_3} on the second try`);
            break;
        case 3:
            console.log(`Num = ${num_3} on the third try`);
            break;
        default:
            console.log(`Num not found`);
            break;
    }
    console.log(`Ternary result: ${(num_1 > num_2) ? num_1 : num_2}`);
};
function outputInfo2() {
    console.log(`Object available: ${Obj === null || Obj === void 0 ? void 0 : Obj.device}`);
    console.log(`Defoult: ${null_ !== null && null_ !== void 0 ? null_ : 5}`);
}
let outputInfo3 = function () {
    arr_1.forEach((value, index, arr) => {
        console.log(`ForEach: Value ${index} of ${arr.length} = ${value}`);
    });
    if (!bool_) {
        console.log('bool = false');
    }
    else {
        console.log('bool = true');
    }
};
outputInfo1();
outputInfo2();
outputInfo3();
//# sourceMappingURL=operators.js.map
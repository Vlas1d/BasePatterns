class SelectionSort {
    constructor() {
        this.name = '>>> Selection';
    }
    sort(arr) {
        let start_arr = [...arr];
        let sort_array = [];
        let min = 0;
        let length = start_arr.length;
        for (let i = 0; i < length; i++) {
            min = Math.min(...start_arr);
            sort_array.push(min);
            start_arr.splice(start_arr.indexOf(min), 1);
        }
        return sort_array;
    }
}
class InsertionSort {
    constructor() {
        this.name = '>>> Insertion';
    }
    sort(arr) {
        let array = [...arr];
        let temp = 0;
        for (let i = 1; i < array.length; i++) {
            for (let j = i; j >= 0; j--) {
                if (array[j] < array[j - 1]) {
                    temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }
}
class BubbleSort {
    constructor() {
        this.name = '>>> Bubble';
    }
    sort(arr) {
        let array = [...arr];
        let j = 1;
        let temp = 0;
        while (j < array.length) {
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
            j++;
        }
        return array;
    }
}
class ArraySort {
    constructor() {
        this.strategy = new SelectionSort();
    }
    setType(strategy) {
        this.strategy = strategy;
    }
    getType() {
        console.log(this.strategy.name);
    }
    sort(arr) {
        return this.strategy.sort(arr);
    }
}
const arr = [2, 4, 9, 8, 1, 5, 7, 3, 6];
const sort = new ArraySort();
sort.getType();
console.log(sort.sort(arr));
sort.setType(new InsertionSort());
sort.getType();
console.log(sort.sort(arr));
sort.setType(new BubbleSort());
sort.getType();
console.log(sort.sort(arr));
//# sourceMappingURL=strategy.js.map
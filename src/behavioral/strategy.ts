interface Sort {
    name: string;
    sort(arr: number[]): number[];
}

//--------------------------STRATEGY-----------------------------------------

class SelectionSort implements Sort {
    name: string = '>>> Selection';
    sort(arr: number[]): number[] {
        let start_arr: number[] = [...arr];
        let sort_array: number[] = [];
        let min: number = 0;
        let length: number = start_arr.length;

        for (let i = 0; i < length; i++) {
            min = Math.min(...start_arr);
            sort_array.push(min);
            start_arr.splice(start_arr.indexOf(min), 1);
        }
        return sort_array;
    }
}

class InsertionSort implements Sort {
    name: string = '>>> Insertion';
    sort(arr: number[]): number[] {
        let array: number[] = [...arr];
        let temp: number = 0;
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

class BubbleSort implements Sort {
    name: string = '>>> Bubble';
    sort(arr: number[]): number[] {
        let array: number[] = [...arr];
        let j: number = 1;
        let temp: number = 0;
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

//------------------------CONTEXT--------------------------------------------

class ArraySort {
    private strategy: Sort;

    constructor() {
        this.strategy = new SelectionSort();
    }

    setType(strategy: Sort): void {
        this.strategy = strategy;
    }
    getType(): void {
        console.log(this.strategy.name);
    }

    sort(arr: number[]): number[] {
        return this.strategy.sort(arr);
    }
}

//------------------------CLIENT---------------------------------------------

const arr: number[] = [2, 4, 9, 8, 1, 5, 7, 3, 6];

const sort = new ArraySort();

sort.getType();
console.log(sort.sort(arr));
sort.setType(new InsertionSort());
sort.getType();
console.log(sort.sort(arr));
sort.setType(new BubbleSort());
sort.getType();
console.log(sort.sort(arr));
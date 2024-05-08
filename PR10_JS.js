let sortingLibrary = {
    bubbleSort: function(array, ascending = true) {
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                if (ascending ? array[j] > array[j + 1] : array[j] < array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swaps++;
                }
            }
        }
        console.log(`Bubble Sort: comparisons = ${comparisons}, swaps = ${swaps}`);
    },

    selectionSort: function(array, ascending = true) {
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                comparisons++;
                if (ascending ? array[j] < array[minIndex] : array[j] > array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                swaps++;
            }
        }
        console.log(`Selection Sort: comparisons = ${comparisons}, swaps = ${swaps}`);
    },

    insertionSort: function(array, ascending = true) {
        let comparisons = 0;
        let swaps = 0;
        let n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && (ascending ? array[j] > key : array[j] < key)) {
                comparisons++;
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
            swaps++;
        }
        console.log(`Insertion Sort: comparisons = ${comparisons}, swaps = ${swaps}`);
    }
};

function topDownMergeSort(arr1, arr2, n) {
    copyArray(arr1, 0, n, arr2);
    topDownSplitMerge(arr2, 0, n, arr1);
}

function copyArray(arr1, iBegin, iEnd, arr2) {
    for (let k = iBegin; k < iEnd; k++) {
        arr2[k] = arr1[k];
    }
}

function topDownSplitMerge(arr2, iBegin, iEnd, arr1) {
    if (iEnd - iBegin <= 1) {
        return;
    }

    let iMiddle = Math.ceil((iEnd + iBegin) / 2);
    topDownSplitMerge(arr1, iBegin, iMiddle, arr2);
    topDownSplitMerge(arr1, iMiddle, iEnd, arr2);
    topDownMerge(arr2, iBegin, iMiddle, iEnd, arr1);
}

function topDownMerge(arr1, iBegin, iMiddle, iEnd, arr2) {
    let i = iBegin, j = iMiddle;

    for (let k = iBegin; k < iEnd; k++) {
        if (i < iMiddle && (j >= iEnd || arr1[i] <= arr1[j])) {
            arr2[k] = arr1[i];
            i = i + 1;
        } else {
            arr2[k] = arr1[j];
            j = j + 1;
        }
    }
}

export { topDownMergeSort };
// example
//let ranArr = [112, 123, 12, 31, 123, 141, 234, 1211, 2, 3];
//let emptyArr = [];
//topDownMergeSort(ranArr, emptyArr, ranArr.length);

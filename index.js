const fs = require('fs')

let margeArray = []

const dataFile = (filename) => {
fs.readFile( filename,'utf-8',(err, data) => {
    if (err) {
        console.error('error',err)
        return
    }

    const dataArray = data.split(' ').map(Number)
     margeArray = margeArray.concat(dataArray)
    const strData = margeArray.sort((a,b) => a - b).join(' ') + ' '

    fs.writeFile('output.txt', strData,{flag: 'a'},(err) => {
        if(err) {
        console.error(err, 'error writing file: output.txt')
        return
        }
        console.log('Sorted Array & writed to output.txt')
})
        })
}
dataFile('file1.txt')
dataFile('file2.txt')
dataFile('file3.txt')





// function data(A) {
//     if (A.length === 1 || A.length === 0) {
//     return A;
//     }
//     let L = data(A.slice(0, Math.floor(A.length / 2)));
//     let R = data(A.slice(Math.floor(A.length / 2)));
//     let n = 0, m = 0, k = 0;
//     let C = new Array(A.length);
//     while (n < L.length && m < R.length) {
//     if (L[n] <= R[m]) {
//     C[k] = L[n];
//     n++;
//     } else {
//     C[k] = R[m];
//     m++;
//     }
//     k++;
//     }
//     while (n < L.length) {
//         C[k] = L[n];
//         n++;
//         k++;
//         }
//         while (m < R.length) {
//         C[k] = R[m];
//         m++;
//         k++;
//         }
//         for (let i = 0; i < A.length; i++) {
//         A[i] = C[i];
//         }
//         return A; }
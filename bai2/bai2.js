// Khai bao mang
let arr = [1,2,3,4,5,6,7,8,9];
let arrNew = [];
let index = +prompt("Index: ")
// Ham xoa phan tu vi tri Index
function tryRemoveFromArray(arr, index) {
    if(index < 0 || index>arr.length) {
        arrNew = arr;
        return arrNew;
    }else {
        for (let i = 0; i < index; i++) {
            arrNew[i] = arr[i];
        }
        for (let i = index+1; i<arr.length;i++) {
                arrNew[i]=arr[i];
            }
        }
    return arrNew;
    }
document.write(tryRemoveFromArray(arr,index));

//Khai bao mang
let arr=[8,7,4,5,6,9];
let arrNew=[];
let temp = 0;
function sortPoit(arr) {
    for (let i=0; i<arr.length; i++) {
        if(arr[i]>temp) {
            temp = arr[i];
        }
        for(let j=0; j<arr.length; j++) {
                arrNew[j] = temp;
        }
        arrNew.push(temp);
    }
}
sortPoit(arr);
//In diem so thu 3th
document.write(arrNew[arrNew.length-(arr.length-2)]);
// Khai bao 2 chuoi
let str1 = "abcd";
let str2 = "abcdefghijkl";
// Ham check
function checkInclude(str1,str2){
    let check = false;
    let length1 = str1.length;
    let length2 = str2.length;
    for (let i = 0; i < length2 - length1 + 1; i++){
        let str2slice = str2.slice(i,i + length1);
        if (str1 === str2slice) {
            check = true;
            break;
        }
    }
    return check;
}
document.write(checkInclude(str1,str2));
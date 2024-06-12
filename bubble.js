// let n = require("readline-sync").questionInt();
// arr=[7,8,0,9,12,45,32,38];

// temp=0;
// for (let i=0;i<n.length;i++){
//     let element=require("readline-sync").questionInt();
//     arr[i]=element;
// }for (let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]<arr[j+1]){
//         //swap//
//             let temp =arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
//  }
//    for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
// }


// let  n = require("readline-sync").questionInt();
// arr=[7,8,3,1,2];
// // selection sort
// for(let i=0;i<arr.length-1;i++){
//     let smallest=i;
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[smallest]){
//             smallest=j;
//         }
//     }
//     let temp=arr[smallest];
//     arr[smallest]=arr[i];
//     arr[i]=temp;
// }
// console.log(arr);

// let n = require("readline-sync").questionInt();
// let arr = [7, 8, 3, 1, 2];

// // Selection Sort
// for (let i = 0; i < arr.length - 1; i++) {
//     let smallest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[smallest]) {
//             smallest = j;
//         }
//     }
//     // Swap the found minimum element with the first element
//     let temp = arr[smallest];
//     arr[smallest] = arr[i];
//     arr[i] = temp;
// }

// console.log(arr);

// let n = require("readline-sync").questionInt();
// let arr = [7, 8, 3, 1, 2];

// // insertion Sort
// for (let i = 0; i < arr.length ; i++) {
// let current = arr[i];
// let j=i-1;
// while (j>=0 && current<arr[j]){
//     arr[j+1]=arr[j];
//     j--;
// }
// arr[j+1]=current;
// }
// console.log(arr);



// let n= require("readline-sync").questionInt();
// let i=0;
// s=0;
// arr=[];
// for(let i=0;i<n;i++){
//       let element=require("readline-sync").questionInt();
//       arr[i]=element;

// }for (let i=0;i<n;i++){
//     s=s+arr[i]
// }console.log(s);

let n= require("readline-sync").questionInt();
arr=[];
// insertion sort
for(let i=0;i<n;i++){
    element=require("readline-sync").questionInt();
    arr[i]=element;
    let temp=arr[i];
    let j=1;
while(j>0&& temp<arr[j-1]){
   arr[j]=arr[j-1] ;
   j=j-1;

}
arr[j]=temp;
}
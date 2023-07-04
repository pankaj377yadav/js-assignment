//   Q.1
const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in
let sum =0;
// Answer using for of
for (const item of arr){
    sum += item;
}
console.log("Sum of array:" ,sum);

//  answer using for in
for (const item in arr) {
    sum += arr[item];
  }
  console.log('Sum of the array:', sum);
// -------------------------------------------->
//  Q.2

//high level
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate

// Answre
const user = users.filter((item, index) => users.indexOf(item) === index);
console.log(user);
// --------------------------------------------------------->
//  Q.3
const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array
// Answer
let sumarr = 0;
newArr.map((item, index) => {
  item.map((item2, index) => {
    if (item2 % 2 !== 0) {
      sumarr += item2;
    }
  });
});
console.log('Sum of odd numbers:', sumarr);

// ---------------------------------------------->
const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
  
// return only array of ids: expected output  [3,5,6]
//  Answer
const myDetailsKey =myDetails.map((item,id)=>{
  return item.id;
})
console.log(myDetailsKey)
// --------------------------------------->
const userDetails= [
    {score: 0, name:'hari', marks: [10,3,23]},
    {score: 0, name:'shyam', marks: [50,23,23]},
    {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]


// Answer

userDetails.map((item,index) =>{
  const totalscore = item.marks.reduce((index1 , index2) =>
    index1 + index2);
    item.score=totalscore;
});
console.log(userDetails);
//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30,
};
//  Answer

function calPrice(rideDetails){
    const distance = parseFloat(rideDetails.distance);
    const unitKmPrice = rideDetails.unitKmPrice;
    const finalprice = distance * unitKmPrice ;
    return finalprice;
}
const finalprice = calPrice(rideDetails);
console.log("Final Price:" ,finalprice)

// ----------------------------------->


//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(Status)=>{
    return Status.status =="success";
//write your code here
}

checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true



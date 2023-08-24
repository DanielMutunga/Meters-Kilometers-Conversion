// var myFavGirls = [];
// myFavGirls.push('Anne')
// myFavGirls.unshift('Patriciah')
// myFavGirls.push('Joyline')
// myFavGirls.push('Mutheu')
// myFavGirls.push('ETC')

// var myFavMeals = []
// myFavMeals.push('Chapati')
// myFavMeals.push('Meat Stew')
// myFavMeals.push('Pussy')
// myFavMeals.push('Nyama Choma')
// myFavMeals.push('Fish')

// var myFavLanguages = []
// myFavLanguages.push('English')
// myFavLanguages.push('Kamba')
// myFavLanguages.push('Dholuo')
// myFavLanguages.push('Swahili')
// myFavLanguages.push('JavaScript')
// myFavLanguages.push('Python')

// var myFavThings = []
// myFavThings = myFavGirls.concat(myFavMeals, myFavLanguages);
// console.log(myFavThings.join())
// var person = {
//     name: 'Daniel',
//     homeplace: 'Ngoo',
//     age: 29,
//     qualifications: 'js developer',
//     likes: 'Gyming and Fucking',
// }
// person.networth = '$90';
// console.log(person)

// var morning = false;
// if(morning){
//     console.log("It is time for work, wake up!")
// }else{
//     console.log("Sleep is sweet continue sleeping!")
// }

// var age = 32;
// var numberOfChildren = 5;

// if (numberOfChildren<= age){
//     console.log('You are a happy Man!')
// }else{
//     console.log("We need some Important talk to you!")
// }

// var see = 'To look'
// var sea = 'A water body mass'
// if (see == sea ){
//     console.log("They are the same");
// }else{
//     console.log("They are not the same at all!")
// }
// 
// var girls = ["Anne", "Kavata", "Mutheu", "Gladys"]

// for(i = 0; i <= girls.length; i++) {
//     console.log("Today we are serving " + girls[i] +  " on our menu")
// }

function lengthMeters(){
    var rate = 0.001;
    var Input = document.getElementById("length").value;
    var convertion = rate * Input;
    document.getElementById("result").innerText = convertion + " Kilometers";
}
document.getElementById("calculate").onclick = lengthMeters
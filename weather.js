async function getWeather() {
  const city = document.querySelector(".input>input").value;
  console.log(city);
  try {
    const api = `http://api.weatherapi.com/v1/current.json?key=701783be30e24b7e9e380441253112&q=${city}&aqi=yes`;
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);

    document.querySelector(
      "#city"
    ).innerHTML = `${data.location.name},${data.location.country}`;

    document.querySelector("#temp").innerHTML = `${data.current.temp_c} C`;

    document.querySelector("#humid").innerHTML = data.current.humidity;
  } catch (error) {
    console.log(error);
  }
}

// // destructing - sequence not matter or key name
// function details() {
//   return ["nitin", 45, "Dun", "001"];
// }

// let [age, Name, city, id, sum] = details();
// console.log(Name, age, city, id, sum);

// // object destructing - sequence matter or key key name
// let obj = {
//   nam: "nitin",
//   email: "n@n.com",
//   roll: 14,
// };

// let { nam, email, roll } = obj;
// console.log("object", nam, email, roll);

// // array
// d = ["nitin", "aman"];
// c = [1, 2, ...d, 6];

// // object
// e = {
//   nam: "ankit",
//   roll: 45,
// };

// f = {
//   ...e,
//   address: "Delhi",
// };

// console.log(f);

// const fun = (...input) => {
//   console.log(input); //[1]
//   let sum = 0;
//   //  input.forEach(ele=>{
//   //   sum+=ele})
//   for (let i = 0; i < input.length; i++) {
//     sum += input[i];
//   }
//   console.log(sum);
// };

// fun(1, 2, 4, 45, 86);

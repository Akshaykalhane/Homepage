function changemode(){
    let mybody=document.body;
    mybody.classList.toggle("darkmode");
} 

function closeDiv(){
    document.getElementById('banner').style.visibility="hidden"
}

// function test(){
//     document.getElementById('banner').style.visibility="visible";
// }
// window.onload.test();

///let url = "http://localhost:1298/city";
let url="http://localhost:8700/city";
let hotelUrl="http://localhost:8100/hotel?city=";

function getCity(){
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data)
        for(let i=0;i<data.length;i++){
            let element=document.createElement('option');
            let text=document.createTextNode(data[i].city_Name);
            element.appendChild(text);
            element.value=data[i]._id;
            document.getElementById('city').appendChild(element)
        }
    })
}

getCity();

const  getHotel=()=>{
    const cityId=document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) =>res.json())
    .then((data)=>{
        for(i=0;i<data.length;i++){
            let element=document.createElement('option');
            let text=document.createTextNode(`${data[i].name}  | ${data[i].city_Name}`);
            element.appendChild(text);
            document.getElementById("hotels").appendChild(element)
        }
    })
}
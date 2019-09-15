/*var firebaseConfig = {
    apiKey: "AIzaSyDXDJJov4KMkWkK__CQ-JAckT_0Kk69lLA",
    authDomain: "hackmit-recon.firebaseapp.com",
    databaseURL: "https://hackmit-recon.firebaseio.com",
    projectId: "hackmit-recon",
    storageBucket: "hackmit-recon.appspot.com",
    messagingSenderId: "357844945838",
    appId: "1:357844945838:web:dc443973b9dd335a40963f"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
var database = firebase.database();
var retrieve = database.ref('Items');

var result = retrieve.on('value',gotData,errData);


// database.ref().child("Items").on('value',snap =>{
//     preOb.innerText =JSON.stringify(snap.val(),null,3)
// });


firebase.database().ref('Items').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var things = []
        var username = userSnapshot.val();
        things.push({
            date:username.date,
            category: username.category,
            item:   username.item,
            price: username.price,
            message: username.message,
        });
        var preOb = document.getElementById('object');
        if (preOb!=null){
            for (var key in things){
                var box = document.createElement('div');
                box.innerText = things[key].category
                preOb.appendChild(box)
                var box = document.createElement('div');
                box.textContent = things[key].date
                preOb.appendChild(box)
            }
        }
    });
});


<<<<<<< HEAD
  
var preOb = document.getElementById('object');
for (var key in things){
    var box = document.createElement('div');
    box.innerText = things[key]
    preOb.appendChild(box)
}
=======


>>>>>>> f1411435fc759928bdd91099921dbf5ce819758c

function gotData(data){
    console.log(data.val()); //this is where the data is
    var x = data.val()
}
function errData(err) {
    console.log('Error!');
    console.log(err)
}

console.log(things);

var props = {'food': 0, 'clothing': 0, 'furniture': 0, 'transportation': 0, 'health': 0, 'leisure': 0, 'other': 0};
var total = 0;
for(i=0; i<things.length; i++){
    var attrs = things[i];
    console.log(attrs);
    props[attrs["category"]] += attrs['value'];
    total += attrs['value'];
}
console.log(total);
for(var key in props){
    props[key] = Math.round(props[key]/total * 100);
}
console.log(props);
var pics = {'food': '<img class = "emoji" src= "../images/food.png"/>',
            'clothing': '<img class = "emoji" src = "../images/clothes.png"/>',
            'furniture': '<img class = "emoji" src = "../images/home.png"/>',
            'transportation': '<img class = "emoji" src = "../images/transportation.png"/>',
            'health': '<img class = "emoji" src = "../images/health.png"/>',
            'leisure': '<img class = "emoji" src = "../images/leisure.png"/>',
            'other': '<img class = "emoji" src = "../images/misc.jpeg"/>'}

$(function ()
{
    $('#update').on('click', function ()
    {
        for(var key in props){
            for (i=0; i<props[key]; i++){
                var key2 = ('#').concat(key);
                $(key2).prepend(pics[key]);
            }
        }
    });

});*/
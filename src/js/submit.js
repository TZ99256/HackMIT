var firebaseConfig = {
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
var add_items = database.ref().child("Items");


$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = add_items.push();
    newMessageRef.set({
        item: $('.item').val(),
        price: $('.price').val(),
        date: $('.date').val(),
        message: $('.message').val(),
        category: $('.category').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});


// var database = firebase.database();
// var retrieve = database.ref('Items');

// var preOb = document.getElementById('object');

// var result = retrieve.on('value',updateData,errData);

// function updateData(data){
//     console.log(data.val()); //this is where the data is
//     // preOb.innerText = JSON.stringify(data.val(),null,3)
// }
// function errData(err) {
//     console.log('Error!');
//     console.log(err)
// }








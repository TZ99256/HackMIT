var firebaseConfig = {
    apiKey: "AIzaSyDXDJJov4KMkWkK__CQ-JAckT_0Kk69lLA",
    authDomain: "hackmit-recon.firebaseapp.com",
    databaseURL: "https://hackmit-recon.firebaseio.com",
    projectId: "hackmit-recon",
    storageBucket: "hackmit-recon.appspot.com",
    messagingSenderId: "357844945838",
    appId: "1:357844945838:web:dc443973b9dd335a40963f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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

var retrieve = database.ref('Items');
retrieve.on('value',gotData,errData);


const data_object = {};
function gotData(data){
    console.log(data.val()) //this is where the data is
    data_object = data.val();
}
function errData(err) {
    console.log('Error!');
    console.log(err)
}

export default data_object;
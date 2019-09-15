import database from "./db.js";

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
/*
starCountRef.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });
snapshot.val()

*/
var x = null
var result = retrieve.on('value',gotData,errData);

function gotData(data){
    console.log(data.val()); //this is where the data is
    x = data.val()
}
console.log(x)
function errData(err) {
    console.log('Error!');
    console.log(err)
}


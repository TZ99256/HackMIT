var data = {1: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 12.05},
            2: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 3.12},
            3: {'ID': '#transportation', 'Purchase Category': 'Transportation', 'Price': 4.1},
            4: {'ID': '#clothing', 'Purchase Category': 'Clothing', 'Price': 20}};

var props = {'#food': 0, '#clothing': 0, '#furniture': 0, '#transportation': 0, '#health': 0, '#other': 0};
var total = 0;
for(var key in data){
    var attrs = data[key];
    props[attrs["ID"]] += attrs['Price'];
    total += attrs['Price'];
}
for(var key in props){
    props[key] = Math.round(props[key]/total * 100);
}
var pics = {'#food': '<img class = "emoji" src= "../images/food.png"/>',
            '#clothing': '<img class = "emoji" src = "../images/clothes.png"/>',
            '#furniture': '<img class = "emoji" src = "../images/home.png"/>',
            '#transportation': '<img class = "emoji" src = "../images/transportation.png"/>',
            '#health': '<img class = "emoji" src = "../images/health.png"/>',
            '#leisure': '<img class = "emoji" src = "../images/leisure.png"/>',
            '#misc': '<img class = "emoji" src = "../images/misc.jpeg"/>'}

$(function ()
{
    $('#update').on('click', function ()
    {
        for(var key in props){
            for (i=0; i<props[key]; i++){
                $(key).prepend(pics[key]);
            }
        }
    });

});

function emojify(item, category) {
    const emoji = require('node-emoji');
    const category_emojis = {
        'dining': emoji.find('knife_fork_plate'),
        'transportation': emoji.find('car'),
        'groceries': emoji.find('shopping_trolley'),
        'clothing': emoji.find("shirt"),
        'utilities': emoji.find("shower"),
        'other': emoji.find("thinking_face"),
    };

    if (emoji.hasEmoji(item)) {
        return emoji.find(item).emoji;
    } else if (emoji.hasEmoji(category)) {
        return emoji.find(category).emoji;
    } else {
        return emoji.find("thinking_face");
    }
}
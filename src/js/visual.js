var data = {1: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 12.05},
            2: {'ID': '#food', 'Purchase Category': 'Dining', 'Price': 3.12},
            3: {'ID': '#transportation', 'Purchase Category': 'Transportation', 'Price': 4.1}};

var props = {'#food': 0, '#utilities': 0, '#clothing': 0, '#transportation': 0, '#home': 0, '#misc': 0};
var total = 0;
for(var key in data.keys()){
    props[data[key]['ID']] += 1;
    total += 1;
}
for(var key in props.keys()){
    props[key] = Math.round(props[key]/total);
}

$(function ()
{
    $('#update').on('click', function ()
    {
        for(var key in props.keys()){
            for (i=0; i<props[key]; i++){
                $(key).prepend('<img src= "../../images/food.png" />')
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
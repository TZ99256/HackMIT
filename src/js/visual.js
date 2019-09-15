
$(function ()
{
    $('#food').on('click', function ()
    {
        $(this).width($(this).width()*0.1+$(this).width());
        $(this).height($(this).height()*0.1+$(this).height());
    });

    $('#utilities').on('click', function()
    {
        $(this).width($(this).width()*0.1+$(this).width());
        $(this).height($(this).height()*0.1+$(this).height());
    })
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
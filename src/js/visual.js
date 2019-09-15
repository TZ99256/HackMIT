
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


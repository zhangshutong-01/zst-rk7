require(['jquery'], function($) {
    $.ajax({
        url: "/app/list",
        dataType: "JSON",
        success: function(res) {
            console.log(res)
        },
        error: function(error) {
            console.warn(error)
        }
    });
})
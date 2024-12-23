$(document).ready(function () {
    // Compute function
    $("#compute").click(function () {
        var x = parseFloat($("#x-value").val());
        var y = parseFloat($("#y-value").val());
        var result;

        if (isNaN(x) || isNaN(y)) {
            $("#result").html("<strong>Please enter valid numbers.</strong>");
            return;
        }

        if (x >= 10 && y >= 8) {
            result = Math.pow(y, 3) + Math.pow(y, 3) + 300;
        } else if (x >= 3 && y >= 7) {
            result = Math.pow(y, 2) + Math.pow(y, 2) + x * y;
        } else {
            result = x + y;
        }

        $("#result").html(`<strong>${result}</strong>`);
    });

    // Clear function
    $("#clear").click(function () {
        $("#result").html('');
        $("#x-value").val('');
        $("#y-value").val('');
    });
});

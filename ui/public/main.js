$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();
        submitForm();
    });
});

function submitForm() {
    var inputData = {}
    inputData["username"] = $("#username").val();
    inputData["email"] = $("#email").val();
    $("#submitButton").prop("disabled", true);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/myForm",
        data: JSON.stringify(inputData),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (outputData) {
            var json = JSON.stringify(outputData, null, 4);
            $('#responseMessage').html(json);
            console.log("SUCCESS : ", outputData);
            $("#submitButton").prop("disabled", false);
        },
        error: function (e) {
            var json = e.responseText;
            $('#responseMessage').html(json);
            console.log("ERROR : ", e);
            $("#submitButton").prop("disabled", false);
        }
    });
}
$(document).ready(
    function () {
        $("#view_button").click(getPicture);
        $("#view_button2").click(fetchPicture);
    });
function getPicture() {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$('#date').val()}`,
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("date").val()
        },
        dataType: "json",
        "success": showPicture,
        "error": noPicture
    });
};
function fetchPicture(){
    var picturePromise=fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${$('#date').val()}`,{
        type: "GET",
        dataType: "json"
    })
    .then(response=>response.json())
    .then(pic=>showPicture(pic));
}
function showPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
};
function noPicture(error) {
    alert(error.responseText);
};

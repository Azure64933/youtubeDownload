function callPython() {
    console.log("start call Python")
    $.ajax({
        type: "POST",
        url: "/test.py",
        data: { param: "text" }
    }).done(function(o) {
        console.log("done ajax")
    });
}
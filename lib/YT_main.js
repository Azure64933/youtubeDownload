function callbackFunc(response) {
    // do something with the response
    console.log("Success Call Python" + response);
}

//當下載按鈕clicked，傳URL給python運行
function downloadURL() {
    const URL = document.getElementById("YTAddress").value
    console.log(URL)
    $.ajax({
        type: "POST",
        url: "./pytube_example.py",
        // data: { param: URL },
        // success: callbackFunc(URL)
    });
}
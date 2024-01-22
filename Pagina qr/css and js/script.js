function generarQR() {
    var urlInput = document.getElementById("urlInput").value;
    var qrCode = new QRCode(document.getElementById("qrCode"), {
        text: urlInput,
        width: 128,
        height: 128
    });
}
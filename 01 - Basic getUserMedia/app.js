navigator.mediaDevices.getUserMedia({
    video: {
        width: {
            min: 640,
            ideal: 1280,
            max: 1280
        },
        height: {
            min: 480,
            ideal: 720,
            max: 720
        },
        frameRate: {
            ideal: 30,
            max: 60
        }
    }
})
.then(stream => {
    document.getElementById('my-video').srcObject = stream;
})
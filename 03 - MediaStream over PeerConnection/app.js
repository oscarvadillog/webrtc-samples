const peter = new RTCPeerConnection();
const pan = new RTCPeerConnection();

peter.onicecandidate = e => {
    if(e.candidate) {
        pan.addIceCandidate(e.candidate);
    }
}

pan.onicecandidate = e => {
    if(e.candidate) {
        peter.addIceCandidate(e.candidate);
    }
}

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(stream => {
    peter.addStream(stream)
    return peter.createOffer();
})
.then(offer => peter.setLocalDescription(new RTCSessionDescription(offer)))
.then(() => pan.setRemoteDescription(peter.localDescription))
.then(() => pan.createAnswer())
.then(answer => pan.setLocalDescription(new RTCSessionDescription(answer)))
.then(() => peter.setRemoteDescription(pan.localDescription));

pan.ontrack = e => {
    document.getElementById('remote').srcObject = e.streams[0];
}
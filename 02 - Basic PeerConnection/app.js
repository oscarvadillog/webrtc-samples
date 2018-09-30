const peter = new RTCPeerConnection();
const pan = new RTCPeerConnection();

peter.createOffer()
    .then(offer => peter.setLocalDescription(new RTCSessionDescription(offer)))
    .then(() => pan.setRemoteDescription(peter.localDescription))
    .then(() => pan.createAnswer())
    .then(answer => pan.setLocalDescription(new RTCSessionDescription(answer)))
    .then(() => peter.setRemoteDescription(pan.localDescription))
    
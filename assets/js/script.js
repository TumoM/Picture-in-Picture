const videoElement = document.getElementById('video')
const buttonElement = document.getElementById('button')

// Prompt user to select media stream, passing to video element to play

function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error
        console.error('There was an error sececting Meadia Stream: ', error);
    }
}

buttonElement.addEventListener('click', async () => {
    // Disable Button
    buttonElement.disabled = true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    buttonElement.disabled = false; 
});

// On Load 
selectMediaStream();
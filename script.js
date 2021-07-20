const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// prompt to ask for screens
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    } catch (error) {
        console.log('error in selectMediaStream function');
    }
}
button.addEventListener('click', async () =>{
    // disable Button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
})

selectMediaStream();
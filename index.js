const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media.
async function selectMediaStream(){

    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error here
        console.log(error);
    }

}

button.addEventListener('click', async ()=> {
    //Disable button
button.disabled = true;
//Start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;

})

selectMediaStream()
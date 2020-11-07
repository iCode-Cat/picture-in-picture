const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media.
async function selectMediaStream(){

    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloa = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error here
        console.log(error);
    }

}
selectMediaStream()
export const initializeStreaming = async (orty) => {
    const floaty = document.createElement('div');
    // floaty.style({
    //     'pos'
    // });

    // return; 
    /// Step 0: Create a hidden video + canvas element somewhere
    // Video is used to help manipulate the MediaSource
    console.log("[streaming] Cretaing video")
    const video = document.createElement('video');
    video.hidden = true;

    // canvas lets us split the video stream frame-by-frame
    console.log("[streaming] Cretaing canvas")
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    
    // canvas2 lets us visualize what the model output
    const canvas2 = document.createElement('canvas');
    canvas2.width = 384
    canvas2.height = 288
    document.body.appendChild(canvas2);
    // canvas.hidden = true;

    const btn = document.createElement('button')
    btn.innerText = "print img"
    btn.onclick = () => {
        let blob = new Blob([canvas.getContext('2d').getImageData(0, 0, 384, 288).data], {
            type: "application/octet-stream",
        });
        let url = URL.createObjectURL(blob);

        let link = document.createElement("a"); // Or maybe get it from the current document
        link.href = url;
        link.download = "imgorsmth";
        link.click()
        URL.revokeObjectURL(url);
    }
    document.body.appendChild(btn)

    // Step 1: Initialize the MediaStream
    console.log("[streaming] Cretaing MediaStream");
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

    // Step 2: Connect the MediaStream into the video
    console.log("[streaming] Setting stream as video.src");
    video.srcObject = stream;
    video.play();

    let promise = new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve([video.videoWidth, video.videoHeight]);
        }
    });


    let [width, height] = await promise;
    console.log(`[streaming] Found width=${width}, height=${height}`);
    canvas.width = 384;
    canvas.height = 288;

    let first = false;
    // Step 3: Render video frames to a canvas

    let inferenceSess = null;
    (async () => {
        while (true) {
            try {
                inferenceSess = await orty.InferenceSession.create(chrome.runtime.getURL("vendor/saliency/model.onnx"));
                console.log("Done!")
                return;
            } catch (e) {
                console.error(e)
                console.log(":(")
                await (new Promise((resolve) => setTimeout(resolve, 1000)));
            }
        }
    })();

    let i = 0;
    
    function processFrame() {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, 384, 288);

        i += 1;
        if (i % 10 == 0 && inferenceSess !== null) {
            const data = ctx.getImageData(0, 0, 384, 288).data;
            console.log(`${data.length}`);
            const inputTensor = new ort.Tensor('float32', new Float32Array(data), [1, data.length]);
            (async () => { 
                let { saliency } = await inferenceSess.run({ image: inputTensor});
                let img = new ImageData(new Uint8ClampedArray(saliency.data), 384, 288);
                canvas2.getContext('2d').putImageData(img, 0, 0);
            })();
        }

        requestAnimationFrame(processFrame);
    }

    requestAnimationFrame(processFrame);


    
};
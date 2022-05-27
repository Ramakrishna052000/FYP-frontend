import { Pose, POSE_CONNECTIONS, LandmarkGrid, PoseConfig } from '@mediapipe/pose'
import React, { useRef, useEffect } from "react";
import * as Poses from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { drawConnectors, drawLandmarks} from '@mediapipe/drawing_utils'


function Mcam() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    var camera = null;
    const connect = window.drawConnectors;

    function onResults(results) {
        console.log(results)
        //console.log(results.poseWorldLandmarks)
        // Define the canvas elements 
        canvasRef.current.width = webcamRef.current.video.videoWidth
        canvasRef.current.height = webcamRef.current.video.videoHeight
        // Check for useing the front camera 
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d")
        // Define the girods here 
        // End 
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        )
        drawConnectors(canvasCtx,
          results.poseLandmarks, POSE_CONNECTIONS,
          { color: '#fff0f0', lineWidth: 2 });
        // The dots are the landmarks 
        drawLandmarks(canvasCtx, results.poseLandmarks,
          { color: '#f9c4d2', lineWidth: 2, radius: 2 });
        drawLandmarks(canvasCtx, results.poseWorldLandmarks,
          { color: '#f9c4d2', lineWidth: 2, radius: 2 });
        canvasCtx.restore();
      }


    useEffect(()=>{
        const pose = new Pose({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
          }});

          pose.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            enableSegmentation: true,
            smoothSegmentation: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
          });
    pose.onResults(onResults);

    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null)
    {
        const camera = new cam.Camera(webcamRef.current.video, {
            onFrame: async () => {
              await pose.send({image: webcamRef.current.video,});
            },
            width: 1280,
            height: 720
          });
          camera.start();
    }
    }, []);
    return (
        <center>
          <div className="App">
            <Webcam
              ref={webcamRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />{" "}
            <canvas
              ref={canvasRef}
              className="output_canvas"
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            ></canvas>
          </div>
        </center>
      );
    }
    
    export default Mcam;

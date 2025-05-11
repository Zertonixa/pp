import { useEffect, useRef } from "react";
import { useCameraStore } from "../../store/cameraStore";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { isFist } from "../../utils";

export const CameraBlock = () => {
  const setCords = useCameraStore((state) => state.setPosition);
  const setFist = useCameraStore((state) => state.setFist);

  const pos = useCameraStore((state) => state.position);

  const webcamRef = useRef<Webcam>(null);

  const onResults = (results: any) => {
    if (results.multiHandLandmarks[0] && results.multiHandedness) {
      const hand = results.multiHandLandmarks[0];

      if (
        Math.abs(hand[0].x - pos.x) > 0.01 &&
        Math.abs(hand[0].y - pos.y) > 0.01
      )
        setCords({
          x: innerWidth - hand[0].x * innerWidth,
          y: hand[0].y * innerHeight,
        });
      setFist(isFist(hand));
    }
  };

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file: any) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.4,
      minTrackingConfidence: 0.4,
    });

    hands.onResults(onResults);

    let camera: Camera | null = null;
    if (webcamRef.current?.video) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current!.video! });
        },
      });
      camera.start();
    }

    return () => {
      camera?.stop();
      hands.close();
    };
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

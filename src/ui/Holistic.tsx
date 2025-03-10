import {
  ReactNode,
  useRef,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import Webcam from "react-webcam";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { isFist } from "../utils";

interface HolisticProps {
  children?: ReactNode;
}

interface HolisticContextType {
  hands: Hands | null;
  fist: boolean;
  results: {
    x: number;
    y: number;
    z: number;
    visibility: number | undefined;
  }[];
}

const HolisticContext = createContext<HolisticContextType | null>(null);

export const useHolistic = () => useContext(HolisticContext);

export const HolisticProvider = ({ children }: HolisticProps) => {
  const webcamRef = useRef<Webcam>(null);
  const holisticRef = useRef<Hands | null>(null);
  const [fist, setFist] = useState<boolean>(false);
  const [results, setResults] = useState<any | null>(null);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.4,
      minTrackingConfidence: 0.4,
    });

    hands.onResults((newResults) => {
      if (newResults.multiHandLandmarks && newResults.multiHandedness) {
        setFist(isFist(newResults.multiHandLandmarks[0]));
        setResults(newResults.multiHandLandmarks[0]);
        setFist(isFist(newResults.multiHandLandmarks[0]));
      } else setFist(false);
    });

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
    <HolisticContext.Provider
      value={{ hands: holisticRef.current, fist, results }}
    >
      <Webcam
        audio={false}
        mirrored={true}
        ref={webcamRef}
        style={{ display: "none" }}
      />
      {children}
    </HolisticContext.Provider>
  );
};

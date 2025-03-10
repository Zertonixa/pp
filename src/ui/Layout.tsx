import { ReactNode, useEffect, useState } from "react";
import { Cursor } from "../components/cursor/cursor";
import { useHolistic } from "./Holistic";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const HolisticContext = useHolistic();

  const [lastPos, setLastPos] = useState<{ x: number; y: number }>({
    x: 0.5,
    y: 0.5,
  });

  const hasResults =
    HolisticContext?.results && HolisticContext.results.length > 0;

  useEffect(() => {
    if (hasResults)
      setLastPos({
        x: HolisticContext.results[9].x,
        y: HolisticContext.results[9].y,
      });
  }, [HolisticContext?.results, hasResults]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#221b30",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Cursor
        fist={HolisticContext?.fist || false}
        click={false}
        positionX={hasResults ? HolisticContext.results[10].x : lastPos.x}
        positionY={hasResults ? HolisticContext.results[10].y : lastPos.y}
      />
      {children}
    </div>
  );
};

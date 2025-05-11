import { ReactNode } from "react";
import { Cursor } from "../components/cursor";
import { CameraBlock } from "../components/camera/camera";
import "../ui/config/index.scss";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "#221b30",
        height: "100vh",
        width: "100vw",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Cursor />
      <CameraBlock />
      {children}
    </div>
  );
};

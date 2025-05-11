import { useEffect, useRef } from "react";
import { LetterBlock } from "../../ui/letterBlock";
import { useCameraStore } from "../../store/cameraStore";
import { useAuthStore } from "../../store/authStore";
import { dragging } from "../../utils/draggingItems";




export const AuthManager = () => {

    const ref = useRef<HTMLDivElement>(null);
    const animation = useRef<number>(null);

    const target = useCameraStore.getState().position;
    const pos = useRef<{x: number, y: number}>({x: target.x, y: target.y});

    const letter = useAuthStore().draggingLetter;

    useEffect(() => {
        if (ref.current && letter !==  null) {
            dragging(animation, ref, pos, () => target.x, () => target.y, () => true);
        }
    }, [letter])

    return (
        <div ref = {ref} style={{position: "absolute", top: 0, left: 0, display: letter ? "block" : "none"}}>
            <LetterBlock letter={"a"}/>
        </div>
    )

}
import { BlockProps } from "../ui/types/puzzleBlock"
import { BoardBlockProps } from "../ui/types/boardBlock"

export function canInser(figure: BlockProps, board: BoardBlockProps[][], target: string) {
    const x = parseInt(target[0]);
    const y = parseInt(target[1]);
    for (let i = 0; i < figure.figure.length; i++) {
        for (let z = 0; z < figure.figure[i].length; z++) {
            if (figure.figure[i][z] === 1) {
                if (board[i + y][z + x].value === 1) return false;
            }
        }
    }
    return true;
}
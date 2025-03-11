import { blocks } from "../ui/lib";
import { v4 as uuidv4 } from "uuid";

const colors = ["yellow", "orange", "red", "green", "blue"]

const rndInt = (size: number) =>  {
    return Math.floor(Math.random() * (size))
}

export function fillArray() {

    const array = [];

    for (let i = 0; i < 3; i++) {
        array.push({id: uuidv4(), figure: blocks[rndInt(blocks.length)], color: colors[(rndInt(colors.length))]})
    }

    return array

}
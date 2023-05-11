import {CanvasDrawable} from './CanvasDrawable'

interface Shape extends CanvasDrawable {
    getArea(): number

    getOutlineColor(): string

    getPerimeter(): number

    toString(): string
}

export {
    Shape,
}
import {Point} from './Point'

interface CanvasInterface {
    drawCircle(center: Point, radius: number): void

    drawLine(from: Point, to: Point): void

    drawPolygon(points: Point[]): void

    drawRectangle(point: Point, width: number, height: number): void

    setFillColor(fillColor: string): void

    setStrokeColor(outlineColor: string): void
}

export {
    CanvasInterface,
}
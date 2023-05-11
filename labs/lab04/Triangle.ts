import {SolidShape} from './SolidShape'
import {Point} from './Point'
import {CustomCanvas} from './CustomCanvas'

class Triangle implements SolidShape {
    private readonly fillColor: string
    private readonly outLineColor: string
    private readonly vertex1: Point
    private readonly vertex2: Point
    private readonly vertex3: Point

    constructor(
        vertex1: Point,
        vertex2: Point,
        vertex3: Point,
        outLineColor: string,
        fillColor: string,
    ) {
        this.vertex1 = vertex1
        this.vertex2 = vertex2
        this.vertex3 = vertex3
        this.outLineColor = outLineColor
        this.fillColor = fillColor
    }
    //реализовать toString устранить дублирование
    public draw(canvas: CustomCanvas): void {
        canvas.setStrokeColor(this.outLineColor)
        canvas.setFillColor(this.fillColor)

        const points: Point[] = [this.vertex1, this.vertex2, this.vertex3]
        canvas.drawPolygon(points)
    }

    public getArea(): number {
        const coordinateDifferenceX21: number = (this.vertex2.x - this.vertex1.x)
        const coordinateDifferenceY31: number = (this.vertex3.y - this.vertex1.y)
        const coordinateDifferenceX31: number = (this.vertex3.x - this.vertex1.x)
        const coordinateDifferenceY21: number = (this.vertex2.y - this.vertex1.y)
        return Math.abs(coordinateDifferenceX21 * coordinateDifferenceY31 - coordinateDifferenceX31 * coordinateDifferenceY21) / 2
    }

    public getOutlineColor(): string {
        return this.outLineColor
    }

    public getPerimeter(): number {
        const side12length: number = Math.sqrt((this.vertex1.x - this.vertex2.x) ** 2 + (this.vertex1.y - this.vertex2.y) ** 2)
        const side23length: number = Math.sqrt((this.vertex2.x - this.vertex3.x) ** 2 + (this.vertex2.y - this.vertex3.y) ** 2)
        const side31length: number = Math.sqrt((this.vertex3.x - this.vertex1.x) ** 2 + (this.vertex3.y - this.vertex1.y) ** 2)

        return side12length + side23length + side31length
    }

    public getFillColor(): string {
        return this.fillColor
    }
}

export {
    Triangle,
}
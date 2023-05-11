import {Shape} from './Shape'
import {Point} from './Point'
import {CustomCanvas} from './CustomCanvas'

class LineSegment implements Shape {
    private readonly endPoint: Point
    private readonly outlineColor: string
    private readonly startPoint: Point

    constructor(startPoint: Point, endPoint: Point, outlineColor: string) {
        this.startPoint = startPoint
        this.endPoint = endPoint
        this.outlineColor = outlineColor
    }

    public draw(canvas: CustomCanvas): void {
        canvas.setStrokeColor(this.outlineColor)
        canvas.drawLine(this.startPoint, this.endPoint)
    }

    public getArea(): number {
        return 0
    }

    public getOutlineColor(): string {
        return this.outlineColor
    }

    public getPerimeter(): number {
        return Math.sqrt((this.startPoint.x - this.endPoint.x) ** 2 + (this.startPoint.y - this.endPoint.y) ** 2)
    }

    public toString(): string {
        return 'line\n' +
            `area: ${this.getArea()}\n` +
            `perimeter: ${this.getPerimeter()}\n` +
            `outline color: #${this.outlineColor}\n`
    }
}

export {
    LineSegment,
}
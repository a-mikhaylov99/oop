import {SolidShape} from './SolidShape'
import {Point} from './Point'
import {CustomCanvas} from './CustomCanvas'

class Rectangle implements SolidShape {
    private readonly fillColor: string
    private readonly height: number
    private readonly leftTop: Point
    private readonly outLineColor: string
    private rightBottom: Point
    private readonly width: number

    constructor(leftTop: Point, width: number, height: number, fillColor: string, outLineColor: string) {
        this.leftTop = leftTop
        this.rightBottom = {
            x: leftTop.x + width,
            y: leftTop.y + height,
        }
        this.width = width
        this.height = height
        this.fillColor = fillColor
        this.outLineColor = outLineColor
    }

    public draw(canvas: CustomCanvas): void {
        canvas.setStrokeColor(this.outLineColor)
        canvas.setFillColor(this.fillColor)
        canvas.drawRectangle(this.leftTop, this.width, this.height)
    }

    public getArea(): number {
        return this.height * this.width
    }

    public getOutlineColor(): string {
        return this.outLineColor
    }

    public getPerimeter(): number {
        return (this.height + this.width) * 2
    }

    public toString(): string {
        return 'rectangle\n' +
            `left top point: (${this.leftTop.x},${this.leftTop.y})\n` +
            `width: ${this.width}\n` +
            `height: ${this.height}\n` +
            `area: ${this.getArea()}\n` +
            `perimeter: ${this.getPerimeter()}\n` +
            `outline color: ${this.outLineColor}\n` +
            `fill color: ${this.fillColor}`
    }

    public getFillColor(): string {
        return this.fillColor
    }
}

export {
    Rectangle,
}
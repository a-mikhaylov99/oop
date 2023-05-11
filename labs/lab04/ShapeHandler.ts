import {CustomCanvas} from './CustomCanvas'
import {Shape} from './Shape'
import {ShapeFactory} from './ShapeFactory'

enum ShapeNamesTypes {
    RECTANGLE = 'rectangle',
    TRIANGLE = 'triangle',
    CIRCLE = 'circle',
    LINE_SEGMENT = 'line',
}

const ERROR_MAX_AREA_SHAPE = 'Error max area shape'
const ERROR_MIN_PERIMETER_SHAPE = 'Error min perimeter shape'

class ShapeHandler {
    private shapeArray: Shape[] = []

    public addShape(line: string): void {
        this.shapeArray.push(ShapeFactory.createShape(line))
    }

    public createImage(): void {
        const canvas: CustomCanvas = new CustomCanvas()
        this.shapeArray.map((shape: Shape) => shape.draw(canvas))
        canvas.saveFile('./image.png')
    }

    public getMaxAreaShape(): string {
        const sortableShapeArray: Shape[] = this.shapeArray.slice()
        const maxAreaShape: Shape | undefined = sortableShapeArray
            .sort((a: Shape, b: Shape) => b.getArea() - a.getArea())[0]// сделать за o от n сложность
        return maxAreaShape ? maxAreaShape.toString() : ERROR_MAX_AREA_SHAPE
    }

    public getMinPerimeterShape(): string {
        const sortableShapeArray: Shape[] = this.shapeArray.slice()
        const minPerimeterShape: Shape | undefined = sortableShapeArray
            .sort((a: Shape, b: Shape) => a.getPerimeter() - b.getPerimeter())[0]
        return minPerimeterShape ? minPerimeterShape.toString() : ERROR_MIN_PERIMETER_SHAPE
    }
}

export {
    ShapeNamesTypes,
    ShapeHandler,
}
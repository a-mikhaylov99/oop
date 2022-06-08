const DAYS_IN_MONTH = 30
const DAYS_IN_YEAR = 365
const FIRST_LEAR_YEAR = 1972

const ERROR_MESSAGE = 'Wrong parameters'

class Date {
    private days: number

    constructor(day: number = 0, month: number = 1, year: number = 1970) {
        if (!this.isValid(day, month, year)) {
            throw new Error(ERROR_MESSAGE)
        }
        this.days = Date.convertToTimestamp(year, month, day)
    }

    public getDay(): number {
        return Date.daysInTimestamp(this.days)
    }

    public getMonth(): number {
        return Date.monthsInTimestamp(this.days)
    }

    public getYear(): number {
        return Date.yearsInTimestamp(this.days)
    }

    public add(timestampOne: number, timestampTwo: number) {

    }

    public static convertTimestampToTime(timestamp: number): Date {
        return new Date(
            Date.daysInTimestamp(timestamp),
            Date.monthsInTimestamp(timestamp),
            Date.yearsInTimestamp(timestamp),
        )
    }

    public isValid(days: number, months: number, years: number): boolean {
        return this.isValidDay(days) && this.isValidMonth(months) && this.isValidYear(years)
    }

    public isValidDay(day: number): boolean {
        return Number.isInteger(day) && day >= 1 && day <= 31
    }

    public isValidMonth(month: number): boolean {
        return Number.isInteger(month) && month >= 1 && month <= 12
    }

    public isValidYear(year: number): boolean {
        return Number.isInteger(year) && year >= 1970 && year <= 9999
    }

    public static yearsInTimestamp(timestamp: number): number {
        return Math.trunc(timestamp / DAYS_IN_YEAR)
    }

    public static monthsInTimestamp(timestamp: number): number {
        const years: number = Date.yearsInTimestamp(timestamp)
        return Math.trunc((timestamp - years * DAYS_IN_YEAR) / DAYS_IN_MONTH)
    }

    public static daysInTimestamp(timestamp: number): number {
        const year: number = Date.yearsInTimestamp(timestamp)
        const month: number = Date.monthsInTimestamp(timestamp)
        return timestamp - year * DAYS_IN_YEAR - month * DAYS_IN_MONTH
    }

    public static convertToTimestamp(day: number, month: number, year: number): number {
        return year * DAYS_IN_YEAR + month * DAYS_IN_MONTH + day
    }

    public static getDaysInMonth(monthNumber: number): number {
        return 28 + (monthNumber + Math.floor(monthNumber / 8)) % 2 + 2 % monthNumber + 2 * Math.floor(1 / monthNumber)
    }

    public prefix() {
        // const day =
    }
}

export {
    Date,
}


const ERROR_MESSAGE = 'Wrong parameters'
const DIVIDER_ERROR_MESSAGE = 'The divisor cannot be zero and must be an integer'
const ERROR_MESSAGE_NOT_INTEGER = `It's not an integer`
const ERROR_MESSAGE_TIME_ZERO = 'Time cannot be negative'

const SECONDS_IN_DAY = 86400
const SECONDS_IN_HOUR = 3600
const SECONDS_IN_MINUTE = 60

class Time {
    private seconds: number

    constructor(hours: number, minutes: number, seconds: number) {
        if (!Time.isValidHours(hours) && !Time.isValidMinutes(minutes) && !Time.isValidSeconds(seconds)) {
            throw new Error(ERROR_MESSAGE)
        }
        this.seconds = Time.convertToTimestamp(hours, minutes, seconds)
    }

    public getHours(): number {
        return Time.hoursInTimestamp(this.seconds)
    }

    public getMinutes(): number {
        return Time.minutesInTimestamp(this.seconds)
    }

    public getSeconds(): number {
        return Time.secondsInTimestamp(this.seconds)
    }

    public static convertToTime(timestamp: number): Time {
        return new Time(
            Time.hoursInTimestamp(timestamp),
            Time.minutesInTimestamp(timestamp),
            Time.secondsInTimestamp(timestamp)
        )
    }

    public static increment(time: Time): Time {
        time.seconds = Time.getSecondsInTimestamp(++time.seconds)
        return Time.convertToTime(time.seconds)
    }

    public static decrement(time: Time): Time {
        time.seconds = Time.getSecondsInTimestamp(--time.seconds)
        return Time.convertToTime(time.seconds)
    }

    public static add(timeOne: Time, timeTwo: Time): Time {
        if (timeOne.seconds < 0 || timeTwo.seconds < 0) {
            throw new Error(ERROR_MESSAGE_TIME_ZERO)
        }
        return Time.convertToTime(Time.getSecondsInTimestamp(timeOne.seconds + timeTwo.seconds))
    }

    public static subtraction(timeOne: Time, timeTwo: Time): Time {
        if (timeOne.seconds < 0 || timeTwo.seconds < 0) {
            throw new Error(ERROR_MESSAGE_TIME_ZERO)
        }
        return Time.convertToTime(Time.getSecondsInTimestamp(timeOne.seconds - timeTwo.seconds))
    }

    public static multiplication(time: Time, integer: number): Time {
        if (!Number.isInteger(integer) || integer < 0) {
            throw new Error(ERROR_MESSAGE_NOT_INTEGER)
        }
        return Time.convertToTime(time.seconds * integer)
    }

    public static divisionByInteger(time: Time, integer: number): Time {
        if (integer === 0 || !Number.isInteger(integer)) {
            throw new Error(DIVIDER_ERROR_MESSAGE)
        }
        return Time.convertToTime(time.seconds / integer)
    }

    public static divisionTimeToTime(timeOne: Time, timeTwo: Time): number {
        if (timeTwo.seconds === 0) {
            throw new Error(DIVIDER_ERROR_MESSAGE)
        }
        return Time.getSecondsInTimestamp(timeOne.seconds / timeTwo.seconds)
    }

    public static isEquality(timeOne: Time, timeTwo: Time): boolean {
        return timeOne.seconds === timeTwo.seconds
    }

    public static isStrictLarger(timeOne: Time, timeTwo: Time): boolean {
        return timeOne.seconds > timeTwo.seconds
    }

    public static isStrictLess(timeOne: Time, timeTwo: Time): boolean {
        return timeOne.seconds < timeTwo.seconds
    }

    public static isNotStrictLarger(timeOne: Time, timeTwo: Time) {
        return timeOne.seconds >= timeTwo.seconds
    }

    public static isNotStrictLess(timeOne: Time, timeTwo: Time): boolean {
        return timeOne.seconds <= timeTwo.seconds
    }

    private static isValidHours(hours: number): boolean {
        return Number.isInteger(hours) && hours >= 0 && hours < 24
    }

    private static isValidMinutes(minutes: number): boolean {
        return Number.isInteger(minutes) && minutes >= 0 && minutes < SECONDS_IN_MINUTE
    }

    private static isValidSeconds(seconds: number): boolean {
        return Number.isInteger(seconds) && seconds >= 0 && seconds < SECONDS_IN_MINUTE
    }

    private static convertToTimestamp(hours: number, minutes: number, seconds: number): number {
        return hours * SECONDS_IN_HOUR + minutes * SECONDS_IN_MINUTE + seconds
    }

    private static hoursInTimestamp(timestamp: number) {
        return Math.trunc(timestamp / SECONDS_IN_HOUR)
    }

    private static minutesInTimestamp(timestamp: number): number {
        const hours: number = Time.hoursInTimestamp(timestamp)
        return Math.trunc((timestamp - hours * SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
    }

    private static secondsInTimestamp(timestamp: number): number {
        const hours: number = Time.hoursInTimestamp(timestamp)
        const minutes: number = Time.minutesInTimestamp(timestamp)
        return timestamp - hours * SECONDS_IN_HOUR - minutes * SECONDS_IN_MINUTE
    }

    private static getSecondsInTimestamp(timestamp: number): number {
        const seconds: number = timestamp % SECONDS_IN_DAY
        if (seconds < 0) {
            return SECONDS_IN_DAY + seconds
        }
        if (seconds === 0) {
            return 0
        }
        return seconds
    }
}

export {
    Time,
}


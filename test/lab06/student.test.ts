import {Student} from '../../labs/lab06/Student'
import {expect} from 'chai'

describe('Student', function () {
    let student: Student

    it('should be display student name', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        expect(student.getName()).eql('Alexander')
    })

    it('should be display student surname', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        expect(student.getSurname()).eql('Mikhailov')
    })

    it('should be display student patronymic', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        expect(student.getPatronymic()).eql('Viatcheslavovich')
    })

    it('should be display student age', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        expect(student.getAge()).eql(22)
    })

    it('should change the student\'s name', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        const studentTwo = new Student('Mikhail', 'Mikhailov', 'Viatcheslavovich', 22)
        expect(student.renameStudent('Mikhail', 'Mikhailov', 'Viatcheslavovich')).eql(studentTwo)
    })

    it('should change the student\'s surname', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        const studentTwo = new Student('Alexander', 'Popov', 'Viatcheslavovich', 22)
        expect(student.renameStudent('Alexander', 'Popov', 'Viatcheslavovich')).eql(studentTwo)
    })

    it('should change the student\'s patronymic', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        const studentTwo = new Student('Alexander', 'Popov', 'Ivanovich', 22)
        expect(student.renameStudent('Alexander', 'Popov', 'Ivanovich')).eql(studentTwo)
    })

    it('should change the student\'s age', function () {
        student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 22)
        const studentTwo = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 23)
        expect(student.setAge(23)).eql(studentTwo)
    })

    it('should output an error with an incorrect name', function () {
        try {
            student = new Student('22', 'Mikhailov', 'Viatcheslavovich', 22)
            expect(student.getAge()).not.eql(22)
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })

    it('should output an error with an incorrect surname', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', 'Viatcheslavovich', 23)
            expect(student.getAge()).not.eql(22)
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })

    it('should output an error with an incorrect patronymic', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', '123456', 22)
            expect(student.getAge()).not.eql(22)
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })

    it('should output an error with an incorrect age', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', '', 22.34)
            expect(student.getName()).not.eql('Alexey')
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })

    it('should output an error with an incorrect set age', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', '', 22)
            student.setAge(21)
        } catch (error) {
            expect(error.message).equal('Incorrect age')
        }
    })

    it('should output an error with an incorrect  set age = 65', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', '', 22)
            student.setAge(65)
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })

    it('should output an error with when rename student', function () {
        try {
            student = new Student('Alexander', 'Mikhailov', '', 22)
            student.renameStudent('Pavel','12','')
        } catch (error) {
            expect(error.message).equal('Incorrect student data')
        }
    })
})
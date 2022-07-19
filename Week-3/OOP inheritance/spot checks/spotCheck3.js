class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        
    }
    addCourse(){}

}
class Teacher extends Person{
    constructor(name, startYear, salary){
        super(name, startYear)
        this.salary = salary
        this.courses={}
    }
    giveGrade(student, courseName, grade){
        student.receiveGrade(courseName, grade)
    }
    
    addCourse(course){
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
    }


class Student extends Person{
    constructor(name,startYear){
        super(name,startYear)
        this.grades=[]
    }
    receiveGrade(course,grade){
        let gradeObject={}
        gradeObject.grade=grade
        gradeObject.course=course
        this.grades.push(gradeObject)
    }
}
const t1 = new Teacher("Cassandra", 2002, 40000)
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}

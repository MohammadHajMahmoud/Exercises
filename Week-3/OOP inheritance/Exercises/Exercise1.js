class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
    }
}
class Principal extends Person {
    constructor(name,startYear){
        super(name,startYear)
        this.teachers=[]
        this.students=[]
    }
    
    hireTeacher(teacher){
        console.log(this.name +" just hired "+ teacher.name)
        this.teachers.push(teacher)
    }
    recruitStudent(student){
        this.students.push(student)
    }
    expelStudent(student){
         for(let i = 0; i<this.students.length;i++){
                if(student.name == this.students[i].name){
                    this.students.splice(i,1)
                }
         }
    }
    transferStudent(student,principal){
        this.expelStudent(student)
        principal.students.push(student)
}
}
class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
    }

}
class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
    }
}


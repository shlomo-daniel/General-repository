class Student {

    student = {
        firstName: '',
        lastName: '',
        phone: '',
        birthday: '',
        city: '',
        grades: [],
    }

    constructor(studentInputObj) {
        for (const key in studentInputObj)
            this.student[key] = studentInputObj[key];
    }

    getFullName() {
        return `${this.student.firstName} ${this.student.lastName}`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        const studentYear = new Date(this.student.birthday).getFullYear();

        return currentYear - studentYear;
    }

    getAvarageTest() {
        const sum = this.student.grades.reduce((sumed, num) => sumed += num, 0)

        return sum / this.student.grades.length;
    }

    getTestAmount() {
        return this.grades.length;
    }

}


(async function () {

    const jsonOfStudents = await fetch('./students.json');
    const studentsParse = await jsonOfStudents.json();

    const ul = document.createElement('ul');
    document.querySelector('.frame').appendChild(ul);

    studentsParse.forEach(sObject => {
        const studentS = new Student(sObject)
        const li = document.createElement('li');
        const sumedTest = studentS.getAvarageTest();
        const roundedTests = Math.floor(sumedTest);
        console.log(roundedTests);

        li.innerHTML = studentS.getFullName() + " <b>ממוצע ציונים </b>" +
            roundedTests + "גיל " +
            studentS.getAge();

        ul.appendChild(li);
    });
})()
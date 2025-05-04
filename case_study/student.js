class Student {
    constructor(id, name, dateborn, gender, grade, img ) {
        this.name = name;
        this.id = id;
        this.dateborn = dateborn;
        this.gender = gender;
        this.grade = grade;
        this.img = img;
    }
    changeInfo(id, name, dateborn, gender, grade, img) {
        this.img = img;
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.grade = grade;
        this.dateborn = dateborn;
    }
}


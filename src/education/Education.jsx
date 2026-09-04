export default class Education {
  constructor(school, location, startDate, endDate, id) {
    this.school = school ?? "Untitled";
    this.location = location ?? "";
    this.startDate = startDate ?? new Date();
    this.endDate = endDate ?? new Date();
    this.id = id ?? crypto.randomUUID();
    this.subjects = [];
  }

  getSubjects() {
    return [...this.subjects];
  }

  updateSubjects(newArr) {
    this.subjects = newArr;
  }

  addSubject() {
    const newArr = [...this.subjects];
    newArr.push(new Subject());
    this.subjects = newArr;
  }
}

class Subject {
  constructor(subject, grade, id) {
    this.subject = subject;
    this.grade = grade;
    this.id = id ?? crypto.randomUUID();
  }
}

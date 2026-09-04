export default class Subject {
  constructor(name, grade, id) {
    this.name = name;
    this.grade = grade;
    this.id = id ?? crypto.randomUUID();
  }
}

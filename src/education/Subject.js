export default class Subject {
  constructor(parentId) {
    this.name = "";
    this.grade = "";
    this.id = crypto.randomUUID();
    this.parentId = parentId;
  }
}

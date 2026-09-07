export default class Subject {
  constructor(parentId) {
    this.subject = "";
    this.grade = "";
    this.id = crypto.randomUUID();
    this.parentId = parentId;
  }
}

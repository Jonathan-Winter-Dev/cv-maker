export default class Education {
  constructor(school, location, startDate, endDate, id) {
    this.school = school ?? "";
    this.location = location ?? "";
    this.startDate = startDate ?? "";
    this.endDate = endDate ?? "";
    this.id = id ?? crypto.randomUUID();
    this.subjects = [];
  }
}

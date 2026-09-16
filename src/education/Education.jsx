export default class Education {
  constructor(school, location, startDate, endDate, id) {
    this.school = school ?? "";
    this.location = location ?? "";
    this.startDate = startDate ?? new Date();
    this.endDate = endDate ?? new Date();
    this.id = id ?? crypto.randomUUID();
    this.subjects = [];
  }
}

export default class Job {
  constructor(employer, title, location, startDate, endDate, description, id) {
    this.employer = employer ?? "Untitled";
    this.title = title ?? "";
    this.location = location ?? "";
    this.startDate = startDate ?? "";
    this.endDate = endDate ?? "";
    this.description = description ?? "";
    this.id = id ?? crypto.randomUUID();
  }
}

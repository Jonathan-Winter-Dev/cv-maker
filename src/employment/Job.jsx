export default class Job {
  constructor(employer, title, location, startDate, endDate, description, id) {
    this.employer = employer ?? "Untitled";
    this.title = title ?? "";
    this.location = location ?? "";
    this.startDate = startDate ?? new Date();
    this.endDate = endDate ?? new Date();
    this.description = description ?? "";
    this.id = id ?? crypto.randomUUID();
  }
}

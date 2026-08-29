export default class Job {
  constructor(employer, location, startDate, endDate, description) {
    this.employer = employer ?? "Untitled";
    this.location = location;
    this.startDate = startDate ?? new Date();
    this.endDate = endDate ?? new Date();
    this.description = description;
    this.id = crypto.randomUUID();
  }
}

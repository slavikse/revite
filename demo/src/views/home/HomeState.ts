export class HomeState {
  constructor(
    readonly dashboardService: Service.Dashboard.Contract,
  ) {
  }

  get links() {
    return this.dashboardService.links
  }

  get widgets() {
    return this.dashboardService.widgets
  }
}

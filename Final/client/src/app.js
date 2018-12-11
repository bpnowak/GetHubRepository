export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      {
        route: ['', 'todos'],
        moduleId: './modules/todos',
        name: 'Todos'
      }
    ]);
  }
}
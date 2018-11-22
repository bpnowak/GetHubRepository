export class App {
  configureRouter(config, router) {
    this.router = router;
    config.map([
      {
        route: ['', 'landing'],
        moduleId: './modules/landing',
        name: 'Landings'
      },
      {
        route: ['home'],
        moduleId: './modules/home',
        name: 'Home'
      },
      {
        route: 'users',
        moduleId: './modules/users',
        name: ' Users'
      }
    ]);
  }
}

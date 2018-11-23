import { AuthDemoPage } from './app.po';

describe('auth-demo App', () => {
  let page: AuthDemoPage;

  beforeEach(() => {
    page = new AuthDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { HelloWorldPage } from './app.po';

describe('hello-world App', () => {
  let page: HelloWorldPage;

  beforeEach(() => {
    page = new HelloWorldPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { AnimationsDemoPage } from './app.po';

describe('animations-demo App', () => {
  let page: AnimationsDemoPage;

  beforeEach(() => {
    page = new AnimationsDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

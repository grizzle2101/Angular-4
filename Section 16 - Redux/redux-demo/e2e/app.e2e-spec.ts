import { ReduxDemoPage } from './app.po';

describe('redux-demo App', function() {
  let page: ReduxDemoPage;

  beforeEach(() => {
    page = new ReduxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

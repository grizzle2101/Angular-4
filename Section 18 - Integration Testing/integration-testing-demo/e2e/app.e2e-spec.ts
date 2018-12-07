import { IntegrationTestingDemoPage } from './app.po';

describe('integration-testing-demo App', function() {
  let page: IntegrationTestingDemoPage;

  beforeEach(() => {
    page = new IntegrationTestingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

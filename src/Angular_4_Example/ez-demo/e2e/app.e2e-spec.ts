import { EzDemoPage } from './app.po';

describe('ez-demo App', function() {
  let page: EzDemoPage;

  beforeEach(() => {
    page = new EzDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

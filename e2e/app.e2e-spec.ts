import { ProgressbarPage } from './app.po';

describe('progressbar App', function() {
  let page: ProgressbarPage;

  beforeEach(() => {
    page = new ProgressbarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

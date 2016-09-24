import { BeethovenPage } from './app.po';

describe('beethoven App', function() {
  let page: BeethovenPage;

  beforeEach(() => {
    page = new BeethovenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

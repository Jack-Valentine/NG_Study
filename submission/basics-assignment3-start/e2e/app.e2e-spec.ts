import { BasicsAssignment3StartPage } from './app.po';

describe('basics-assignment3-start App', () => {
  let page: BasicsAssignment3StartPage;

  beforeEach(() => {
    page = new BasicsAssignment3StartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

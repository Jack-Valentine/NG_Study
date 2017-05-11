import { BasicsAssignment2StartPage } from './app.po';

describe('basics-assignment2-start App', () => {
  let page: BasicsAssignment2StartPage;

  beforeEach(() => {
    page = new BasicsAssignment2StartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

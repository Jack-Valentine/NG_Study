import { BasicsAssignmentStartPage } from './app.po';

describe('basics-assignment-start App', () => {
  let page: BasicsAssignmentStartPage;

  beforeEach(() => {
    page = new BasicsAssignmentStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

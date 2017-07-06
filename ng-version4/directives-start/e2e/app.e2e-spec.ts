import { DirectivesStartPage } from './app.po';

describe('directives-start App', () => {
  let page: DirectivesStartPage;

  beforeEach(() => {
    page = new DirectivesStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

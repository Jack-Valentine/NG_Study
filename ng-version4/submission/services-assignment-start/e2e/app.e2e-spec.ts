import { ServicesAssignmentStartPage } from './app.po';

describe('services-assignment-start App', () => {
  let page: ServicesAssignmentStartPage;

  beforeEach(() => {
    page = new ServicesAssignmentStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

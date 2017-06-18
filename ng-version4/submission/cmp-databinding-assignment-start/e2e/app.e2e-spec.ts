import { CmpDatabindingAssignmentStartPage } from './app.po';

describe('cmp-databinding-assignment-start App', () => {
  let page: CmpDatabindingAssignmentStartPage;

  beforeEach(() => {
    page = new CmpDatabindingAssignmentStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

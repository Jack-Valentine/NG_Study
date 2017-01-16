import { NG2StudyPage } from './app.po';

describe('ng2-study App', function() {
  let page: NG2StudyPage;

  beforeEach(() => {
    page = new NG2StudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

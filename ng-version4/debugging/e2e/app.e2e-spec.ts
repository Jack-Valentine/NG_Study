import { DebuggingPage } from './app.po';

describe('debugging App', () => {
  let page: DebuggingPage;

  beforeEach(() => {
    page = new DebuggingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

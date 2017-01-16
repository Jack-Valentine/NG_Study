import { DirecivesPage } from './app.po';

describe('direcives App', function() {
  let page: DirecivesPage;

  beforeEach(() => {
    page = new DirecivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dir works!');
  });
});

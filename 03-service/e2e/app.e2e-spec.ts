import { ServicePage } from './app.po';

describe('03-service App', function() {
  let page: ServicePage;

  beforeEach(() => {
    page = new ServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

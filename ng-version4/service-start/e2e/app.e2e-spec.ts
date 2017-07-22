import { ServiceStartPage } from './app.po';

describe('service-start App', () => {
  let page: ServiceStartPage;

  beforeEach(() => {
    page = new ServiceStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { browser, element, by } from 'protractor';

export class BasicsAssignment3StartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

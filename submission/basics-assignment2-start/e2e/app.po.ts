import { browser, element, by } from 'protractor';

export class BasicsAssignment2StartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

import { browser, by, element } from 'protractor';

export class OrdinateurPage {
//   navigateTo(): Promise<unknown> {
//     return browser.get(browser.baseUrl) as Promise<unknown>;
//   }

//   getTitleText(): Promise<string> {
//     return element(by.css('app-root .content span')).getText() as Promise<string>;
//   }

  sleep(){
    browser.driver.sleep(5000);
  }
}
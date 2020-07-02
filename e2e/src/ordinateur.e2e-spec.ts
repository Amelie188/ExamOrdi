import {browser, element, logging, by} from 'protractor';
import { OrdinateurPage } from './ordinateur.po';

// describe('test des planetes', () => {
// // Variable contenant notre PlanetPage
// let page: OrdinateurPage;
// // variable que l’on utilisera pour compter le nombre de planète
// let nbOrdinateur: number;
// // Avant de commencer les tests, nous demandons à notre navigateur de serendre à l’URL suivante
// beforeEach(() => {
// page = new OrdinateurPage();
// browser.get('/planets');
// });
// // Quand tout est finis, nous fermons le navigateur et nous affichons les logsdans la console


// it('je vois la liste', () => {
//     element.all(by.css('.tableline')).then
//   });

//   it('je peux supprimer ', () => {
//     // page.navigateTo();
//     // page.sleep();
//     // expect(page.getTitleText()).toEqual('examOrdi app is running!');
//   });


// afterEach(async () => {
// const logs = await browser.manage().logs().get(logging.Type.BROWSER);
// expect(logs).not.toContain(jasmine.objectContaining({
// level: logging.Level.SEVERE,
// } as logging.Entry));
// });
// });
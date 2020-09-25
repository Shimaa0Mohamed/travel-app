import "@babel/polyfill";
import { endDatee } from './../client/js/endDatee.js'


describe('Test, the function "endDatee ()" should exist' , () => {
    test('It should  return number ', async () => {
        expect(endDatee ).toBeDefined();
    });
});
describe('Test, the function "endDatee ()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof endDatee ).toBe("function");
    });
});

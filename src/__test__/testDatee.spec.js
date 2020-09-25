import "@babel/polyfill";
import { datee } from './../client/js/datee.js'


describe('Test, the function "datee ()" should exist' , () => {
    test('It should  return number ', async () => {
        expect(datee ).toBeDefined();
    });
});
describe('Test, the function "datee ()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof datee ).toBe("function");
    });
});

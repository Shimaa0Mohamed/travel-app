import "@babel/polyfill";
import { pixabay } from './../client/js/pixabay.js'


describe('Test, the function "pixabay ()" should exist' , () => {
    test('It should has no return ', async () => {
        expect(pixabay ).toBeDefined();
    });
});
describe('Test, the function "pixabay ()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof pixabay ).toBe("function");
    });
});

import "@babel/polyfill";
import { weatherbit } from './../client/js/weatherbit.js'


describe('Test, the function "weatherbit ()" should exist' , () => {
    test('It should has no return ', async () => {
        expect(weatherbit ).toBeDefined();
    });
});
describe('Test, the function "weatherbit ()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof weatherbit ).toBe("function");
    });
});

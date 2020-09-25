import "@babel/polyfill";
import { handleSubmit} from './../client/js/app'


describe('Test, the function "handleSubmit()" should exist' , () => {
    test('It should has no return ', async () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('Test, the function "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
    });
});

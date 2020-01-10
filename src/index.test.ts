import { hello } from 'src/index';

describe('index', () => {
    test(`hello returns correct string`, () => {
        const actual = hello();

        expect(actual).toEqual('hello world');
    });
});

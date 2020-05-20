/**
 * @desc
 * @author face
 * @date 2020-05-16 18:27
 */
import {BufferArea} from "../src";

describe('Dummy test', () => {
    it('reset', () => {
        let a: BufferArea = new BufferArea(5);
        // @ts-ignore
        a.write(new Uint8Array([1, 2, 3, 4]));
        expect(a.length).toEqual(4);
        a.reset();
        expect(a.length).toEqual(0);
    });

    it('write read and length', () => {
        // expect(true).toBeTruthy();
        // expect(Greeter('face')).toEqual('Hello face');
        let a: BufferArea = new BufferArea(5);
        // @ts-ignore
        a.write(new Uint8Array([1, 2, 3, 4]));
        expect(a.read(2).toString()).toEqual('1,2');
        expect(a.read(1).toString()).toEqual('3');
        expect(a.length).toEqual(1);
    });

    it('write on the end', () => {
        let a: BufferArea = new BufferArea(5);
        // @ts-ignore
        a.write(new Uint8Array([1, 2, 3, 4]));
        expect(a.read(3).toString()).toEqual('1,2,3');
        // @ts-ignore
        a.write(new Uint8Array([5, 6, 7]));
        expect(a.read(3).toString()).toEqual('4,5,6');
        expect(a.length).toEqual(1);
    });
});

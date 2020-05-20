/**
 * @desc
 * @author face
 * @date 2020-05-16 17:58
 */
export class BufferArea {
    private a8: Uint8Array;
    private readonly totalLength: number;
    private writeIndex: number;
    private readIndex: number;

    constructor(len: number) {
        this.totalLength = len;

        this.init();
    }

    public get length() {
        return this.remainLen;
    }

    public reset() {
        this.reNew();
    }

    public write(u8: Int8Array) {
        if (u8.byteLength > this.a8.byteLength - this.writeIndex) {
            const preLen = this.remainLen;
            const remain = new Uint8Array(this.a8.buffer, this.readIndex, preLen);
            this.reNew();
            this.a8.set(remain);
            this.writeIndex = preLen;
        }
        this.a8.set(u8, this.writeIndex);
        this.writeIndex += u8.byteLength;
    }

    public read(len: number):Uint8Array {
        len = Math.min(len, this.remainLen);
        const t: Uint8Array = new Uint8Array(this.a8.buffer, this.readIndex, len);
        this.readIndex += len;
        return t;
    }

    private init() {
        this.reNew();
    }

    private reNew() {
        this.a8 = new Uint8Array(this.totalLength);
        this.readIndex = 0;
        this.writeIndex = 0;
    }

    private get remainLen() {
        return this.writeIndex - this.readIndex;
    }
}

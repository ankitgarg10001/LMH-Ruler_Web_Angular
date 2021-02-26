export class Slab {
    length: number | undefined;
    width: number | undefined;
    count: number | undefined;

    getTotalArea(): number {
        if (this.length && this.width && this.count)
            return this.length * this.width * this.count / 144;
        return 0;
    }
}

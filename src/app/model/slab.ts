export class Slab {
    length: number = 0;
    width: number = 0;;
    count: number = 1;;

    getTotalArea(): number {
        return this.length*this.width*this.count/144;
    }
}

declare class JavaArray<T> {
    [Symbol.iterator](): Iterator<T>;
    length: number;
}
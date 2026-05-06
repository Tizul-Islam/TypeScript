// static

class Counter {

    static count: number = 0;

    static increament() {
        Counter.count += 1;
        return Counter.count;
    }

    static decreament() {
        Counter.count -= 1;
        return Counter.count;
    }
}

console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.decreament());
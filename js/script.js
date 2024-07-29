class Smoothie {
    constructor(name, size, base, fruits, extras) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
    }

    describe() {
        return `${this.name} ordered a ${this.size} smoothie with ${this.base}, including ${this.fruits.join(", ")} and ${this.extras.join(", ")}.`;
    }
}

function orderSmoothie() {
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(el => el.value);
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);

    const smoothie = new Smoothie(name, size, base, fruits, extras);
    document.getElementById('smoothieDescription').innerText = smoothie.describe();
}
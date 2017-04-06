/*
JS Fundamentals III:

Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level.
Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).
*/

function ninjaConstructor (param1, param2) {
    this.name = param1;
    this.cohort = param2;
    this.beltLevel = 0;
    this.levelUp = function () {
        console.log("LEVEL UP!");
        this.beltLevel += 1;
        return this;
    }
    this.beltNamer = function (param1) {
        if (param1 == 0) {
            console.log(`${this.name} is a yellow belt`);
        } else if (param1 == 1) {
            console.log(`${this.name} is a blue belt`);
        } else {
            console.log(`${this.name} is a black belt`);
        }
        return this;
    }
}

var ninja1 = new ninjaConstructor("ninja1", "Jan17");
ninja1.beltNamer(ninja1.beltLevel).levelUp().beltNamer(ninja1.beltLevel);

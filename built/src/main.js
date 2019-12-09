import sum from "@App/app";
var message = "test message";
console.log("message:", message);
var msgs = [1, 2, 3];
var user = {
    id: 1,
    name: "Bob",
    age: 28
};
console.log("user", user);
var test = "test";
console.log("test", test);
test = null;
console.log("test " + test);
console.log(sum(1, 2));
var add = function (a, b) {
    return a + b;
};
console.log(add(4, 2));
var func = function () { return console.log("func called"); };
func();
var fc = function (a) { return console.log(a); };
fc(1);
var Calc = /** @class */ (function () {
    function Calc(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calc.prototype.sum = function () {
        var c = this.num1 + this.num2;
        return this.num1 + "+" + this.num2 + "\u306F\u3001" + c + "\u3067\u3059\u3002";
    };
    Object.defineProperty(Calc.prototype, "a", {
        get: function () {
            return this.num1;
        },
        set: function (n) {
            this.num1 = n;
        },
        enumerable: true,
        configurable: true
    });
    return Calc;
}());
var calc = new Calc(5, 6);
console.log(calc.sum());
calc.a = 10;
console.log(calc.sum());
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Master"] = 1] = "Master";
    Role[Role["Editor"] = 2] = "Editor";
    Role[Role["User"] = 3] = "User";
})(Role || (Role = {}));
console.log(Role.Admin);

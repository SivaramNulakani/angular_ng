var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function hello() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        var a_1 = "block";
        console.log('inside for loop:' + a_1);
    }
    console.log('outside for loop:' + a);
}
hello();
var funcs = [];
var _loop_1 = function () {
    var y = i;
    funcs.push(function () {
        console.log(y);
    });
};
for (var i = 0; i < 5; i += 1) {
    _loop_1();
}
funcs.forEach(function (func) {
    func();
});
//const foo; // SyntaxError: Missing initializer in const declaration
//foo=10;
/* function func() {
if (true) {
const tmp = 123;
}
console.log(tmp); // Uncaught ReferenceError: tmp is not defined
}
func(); */
var foo = "foo";
foo = "moo";
console.log('>>>' + foo);
var foo1 = Object.freeze({});
foo1['prop'] = "Moo"; // This works!
console.log(foo1);
var sirName = 'Nulakani';
var fullName = "Siva\nrama\nkrishan " + sirName;
console.log(fullName);
//setTimeout(() => { console.log("setTimeout called!"); }, 1000);
var obj = {
    name: "Asim",
    sayLater: function () {
        //setTimeout(() => console.log(`${this.name}`), 1000)
    }
};
obj.sayLater();
var array = [1, 2, 3];
for (var i_1 = 0; i_1 < array.length; i_1++) {
    console.log(array[i_1]);
}
for (var arr in array) {
    console.log(arr);
    if (arr == '1') {
        console.log('Break--->');
        break;
    }
}
array.forEach(function (value) {
    console.log(value);
});
console.log('*********************');
var student = { name: 'siva', id: '5015702', company: 'Aon', location: 'chennai' };
for (var props in student) {
    switch (props) {
        case 'name':
            console.log(student.name);
            break;
        case 'id':
            console.log(student.id);
            break;
        case 'company':
            console.log(student.company);
            break;
        default:
            console.log('no element found');
            break;
    }
}
console.log('*********************');
/* let base = { a: 1, b: 2,__proto__:25};
let objt = Object.create(base);
objt['c'] = 3;
for (props in objt) console.log(props)

console.log('*********************');
let map=new Map();
map.set("A",1);
map.set("B",2);
map.set("C",3); */
function doAsyncTask(cbFunc) {
    setTimeout(function () {
        console.log("Async Task Calling Callback");
        cbFunc();
    }, 1000);
}
doAsyncTask(function () { return console.log("Callback - cbFunc- Called "); });
console.log('*********************');
function doAsyncTaskPromise() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async Work Complete");
            var val = true;
            if (val) {
                reject('error');
            }
            else {
                resolve('success');
            }
        }, 1000);
    });
    return promise;
}
doAsyncTaskPromise().then(function (val) { return console.log(val + " : Task Complete!"); }, function (val) { return console.log(val + " : Task Errored!"); });
console.log('*********************');
Promise.resolve("success")
    .then(function (val) {
    console.log(val);
    return 'success 2';
}, function (err) { return console.error(err); })
    .then(function (val) { return console.log(val + "siva"); }, function (err) { return console.error(err); });
console.log('*********************');
Promise.reject("error")
    .then(function (val) {
    console.log(val);
    return 'success 2';
}, function (err) {
    console.error(err + " :in error block");
    1 / 0;
    //return 'error 2';
})
    .then(function (val) { return console.log(val + " ->siva"); }, function (err) { return console.error(err + " :in error block"); });
Promise.resolve('done')
    .then(function (val) {
    throw new Error("fail");
})
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
Promise.resolve('done')
    .then(function (val) { throw new Error("fail"); })
    .then(function (val) { return console.log(val); })["catch"](function (err) { return console.error(err); });
function Student(config) {
    return function (target) {
        Object.defineProperty(target.prototype, 'course', { value: function () {
                return config.course;
            } });
    };
}
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi i'm " + this.name();
    };
    Person = __decorate([
        Student({
            course: "angular3"
        })
    ], Person);
    return Person;
}());
var asim = new Person("Asim", "Hussain");
//noinspection TypeScriptUnresolvedFunction
//console.log(asim.course());
console.log('##################### start');
var nameS = function () {
    console.log("variable value is" + 10);
    return "success";
};
console.log(nameS() + '\n##################### end');
var notsure = 1;
notsure = "hello"; // This is fine since we don't do type checking with any
var value = "Asim Hussain";
var len = value;
console.log('\n#####################>>> LENGTH :' + len.length);

function hello() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        let a = "block";
        console.log('inside for loop:' + a);
    }

    console.log('outside for loop:' + a);
}
hello();


var funcs = [];
for (var i = 0; i < 5; i += 1) {
    let y = i;
    funcs.push(function () {
        console.log(y);
    })
}
funcs.forEach((func) => {
    func()
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

let foo = "foo";
foo = "moo";
console.log('>>>' + foo);

const foo1 = Object.freeze({});
foo1['prop'] = "Moo"; // This works!
console.log(foo1);

let sirName = 'Nulakani';
let fullName = `Siva
rama
krishan ${sirName}`;
console.log(fullName);

//setTimeout(() => { console.log("setTimeout called!"); }, 1000);

let obj = {
    name: "Asim",
    sayLater: function () {
        //setTimeout(() => console.log(`${this.name}`), 1000)
    }
};
obj.sayLater();

let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let arr in array) {
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

var student = { name: 'siva', id: '5015702', company: 'Aon', location: 'chennai' }

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
    setTimeout(() => {
        console.log("Async Task Calling Callback");
        cbFunc();
    }, 1000);
}
doAsyncTask(() => console.log("Callback - cbFunc- Called "));

console.log('*********************');

function doAsyncTaskPromise() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Work Complete");
            let val = true;
            if (val) {
                reject('error');
            } else {
                resolve('success');
            }
        }, 1000);
    });
    return promise;
}

doAsyncTaskPromise().then(
    (val) => console.log(val+" : Task Complete!"),
    (val) => console.log(val+" : Task Errored!"),
); 

console.log('*********************');
Promise.resolve("success")
.then(
(val) => {
console.log(val);
return 'success 2';
},
(err) => console.error(err)
)
.then(
(val) => console.log(val+"siva"),
(err) => console.error(err)
); 

console.log('*********************');

Promise.reject("error")
.then(
(val) => {
console.log(val);
return 'success 2';
},
(err) => {
    console.error(err+" :in error block")
    1/0;
    //return 'error 2';
}
)
.then(
(val) => console.log(val+" ->siva"),
(err) => console.error(err+" :in error block")
);

Promise.resolve('done')
.then((val) => {
throw new Error("fail")
})
.then(
(val) => console.log(val),
(err) => console.error(err)
);


Promise.resolve('done')
.then((val) => {throw new Error("fail")})
.then((val) => console.log(val))
.catch((err) => console.error(err));


function Student(config) {
return function (target) {
Object.defineProperty(target.prototype, 'course', {value: () =>
config.course})
}
}

@Student({
course: "angular3"
})
class Person {
constructor(private firstName, private lastName) {
}
public name() {
return `${this.firstName} ${this.lastName}`;
}
protected whoAreYou() {
return `Hi i'm ${this.name()}`;
}
}
let asim = new Person("Asim", "Hussain");
//noinspection TypeScriptUnresolvedFunction
//console.log(asim.course());

console.log('##################### start');
let nameS:Function = ()=>{
    console.log("variable value is"+10);
    return "success";
}
console.log(nameS()+'\n##################### end');

let notsure: any = 1;
notsure = "hello"; // This is fine since we don't do type checking with any

let value: Object = "Asim Hussain";
let len: string = <string>value;

console.log('\n#####################>>> LENGTH :'+len.length);
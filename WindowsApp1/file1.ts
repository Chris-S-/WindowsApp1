
let aaa: string = "abcdef";

class CMyClass {
	someVar: number;
	someString: string;

	SomeFunc(): string {
		return "Hello world";
	}
}

let myClass: CMyClass = new CMyClass();
myClass.someVar = 123;
myClass.someVar = parseInt("3456");
let bbb: number = myClass.someVar;
myClass.someString = "112233";

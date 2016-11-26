var aaa = "abcdef";
var CMyClass = (function () {
    function CMyClass() {
    }
    CMyClass.prototype.SomeFunc = function () {
        return "Hello world";
    };
    return CMyClass;
}());
var myClass = new CMyClass();
myClass.someVar = 123;
myClass.someVar = parseInt("3456");
var bbb = myClass.someVar;
myClass.someString = "112233";

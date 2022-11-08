let user = {
    name: "john",
    id: 1,
    grade: 20,
    blogs: [
        { name: "sam", grade: 10, age: 20 },
        { name: "peter", grade: 20, age: 30 },
        { name: "John", grade: 30, age: 40 },
    ],
    greet: function () {
        let allblogs = this.blogs;

        allblogs.forEach((loopall) => {
            console.log(loopall.name, loopall.grade);
        })
    }
}

// user.name = "samuel J";

user["name"];

console.log(user.name);
user.greet();

const ab = document.querySelector('p');

console.log(ab);
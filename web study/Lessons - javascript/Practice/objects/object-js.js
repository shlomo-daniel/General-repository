let user = {
    name: "shlomo daniel",
    id: "998877",
    age: 31,
    isLogin: true,
    hobbies: ["guitar", "video games", "singing"],
    tellHobbies: function () { for (const h of this.hobbies) { console.log(h) } },
    details: function () { alert(`Hi ${this.name} your id is ${this.id} and your age is ${this.age}`) },
    welcome: function () { if (this.isLogin == true) { confirm(`${this.name} is that you?`) } else { alert(`please ${this.name} login!`) } }
}

// added to object after creating the object
user.fevFood = "icecream"
user.partner = "Adi"
user.hight = "1.75"

// delete user.hight;
// delete user.fevFood;
// delete user.partner;

const food = user.fevFood;
const partner = user.partner;
const hight = user.hight;

user.fevFood = "vanila icecream";
user.partner = "adi gindi";
user.hight = "1.77";
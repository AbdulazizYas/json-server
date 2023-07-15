const { faker } = require("@faker-js/faker");

function generate() {
  const studentsNum = 34;
  const coursesNum = 18;

  const students = [];

  for (let i = 0; i < studentsNum; i++) {
    students.push({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.exampleEmail(),
      joinedDate: faker.date.recent({ days: 14 }),
      progress: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
      materialsWatched: faker.number.int({ min: 0, max: 45 }),
      courseId: faker.number.int({ min: 1, max: coursesNum }),
    });
  }

  const courses = [];

  for (let i = 0; i < coursesNum; i++) {
    courses.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price({
        min: 50,
        max: 450,
        dec: 0,
        symbol: "SAR",
      }),
      status: faker.helpers.arrayElement(["published", "draft", "unlisted"]),
    });
  }
  const data = {
    courses,
    students,
  };

  return data;
}

console.log(JSON.stringify(generate(), null, 2));

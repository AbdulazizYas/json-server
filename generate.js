const { faker } = require("@faker-js/faker");

function generateTaxonomies(count) {
  const taxos = [];

  for (let i = 0; i < count; i++) {
    taxos.push({
      id: i + 1,
      name: "instructor" + faker.person.firstName(),
      icon: null,
      description: null,
      type: faker.number.int({ min: 1, max: 4 }),
    });
  }

  return taxos;
}

function generateCourses(count, cats) {
  const courses = [];
  const levels = cats.filter((cat) => cat.type === 3);

  for (let i = 0; i < count; i++) {
    courses.push({
      id: i + 1,
      title: faker.commerce.productName(),
      url: faker.internet.url(),
      checkout_url: faker.internet.url(),
      thumbnail: faker.internet.url(),
      summary: faker.lorem.sentence(7),
      description: faker.lorem.sentence(10),
      requirements: faker.lorem.sentences(5).split(" "),
      meta_keywords: faker.lorem.words(5).split(" "),
      meta_description: faker.lorem.paragraph(2),
      eligible_for_certificate: false,
      duration: "3583.00",
      price: faker.commerce.price({ min: 50, max: 500 }),
      sales_price: faker.commerce.price({ min: 50, max: 500 }),
      avg_rating: 5,
      contents_count: 6,
      enrollments_count: 2,
      slug: "programming",
      status: 1,
      is_started: true,
      in_stock: true,
      publish_at: "2022-10-05T12:30:00.000000Z",
      updated_at: "2022-11-20T14:01:52.000000Z",
      created_at: "2022-10-05T12:05:02.000000Z",
      instructors: [],
      category: {
        id: 5,
        name: "غير مصنف",
        icon: null,
        description: null,
      },
      subcategory: faker.helpers.arrayElement(levels),
      certification: {
        enabled: false,
      },
      options: {
        reviews_enabled: true,
      },
      meta: {
        early_access: true,
        show_enrollments_count: true,
        show_content_instructor: true,
        disable_comments: false,
        close_enrollments: false,
        resubmit_assignment: false,
        can_retake_exam: true,
      },
      page: null,
    });
  }

  return courses;
}

function generateEnrollements(count, courses) {
  const enrolls = [];

  for (let i = 0; i < count; i++) {
    enrolls.push({
      id: i + 1,
      course: faker.helpers.arrayElement(courses),
      member: {
        id: faker.number.int({ min: 1, max: 14 }),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        name: faker.person.fullName(),
        username: faker.internet.displayName(),
        avatar: faker.internet.url(),
        bio: null,
        job_title: null,
        education: null,
        url: faker.internet.url(),
        national_id: null,
        country_code: "KSA",
        currency: "SAR",
        gender: faker.helpers.arrayElement(["male", "female"]),
        skills: null,
        email: faker.internet.email(),
        phone_code: 966,
        phone: "537812391",
        international_phone: "966537812391",
        dob: "2022-05-12",
        email_verified_at: null,
        status: 1,
        last_seen_at: "2022-12-29T10:02:11.000000Z",
        updated_at: "2022-11-21T09:48:35.000000Z",
        created_at: "2022-05-10T06:14:54.000000Z",
      },
      percentage_completed: faker.number.int({ min: 0, max: 100 }).toString(),
      started_at: "2022-12-20T15:32:11.000000Z",
      completed_at: null,
      updated_at: "2022-12-25T13:11:29.000000Z",
      created_at: "2022-12-20T15:30:12.000000Z",
    });
  }

  return enrolls;
}

function generateCourseStats(courses) {
  const coursesStats = [];

  const statsListCount = courses.length;
  for (let i = 0; i < statsListCount; i++) {
    coursesStats.push({
      comments: faker.number.int({ min: 0, max: 68 }),
      reviews: faker.number.int({ min: 0, max: 68 }),
      students: {
        enrolled: faker.number.int({ min: 0, max: 68 }),
        started: faker.number.int({ min: 0, max: 68 }),
        completed: faker.number.int({ min: 0, max: 68 }),
      },
      sales: faker.number.int({ min: 0, max: 68 }),
      course_id: faker.number.int({ min: 1, max: statsListCount }),
    });
  }

  return coursesStats;
}

function generateComments(coursesCount) {
  const comments = [];

  const count = coursesCount * 16;

  for (let i = 0; i < count; i++) {
    comments.push({
      id: i + 1,
      content: faker.lorem.paragraph(),
      parent_id: null,
      course_id: faker.number.int({ min: 1, max: coursesCount }),
      member: {
        id: faker.number.int({ min: 1, max: 14 }),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        name: faker.person.fullName(),
        username: faker.internet.displayName(),
        avatar: faker.internet.url(),
        bio: null,
        job_title: null,
        education: null,
        url: faker.internet.url(),
        national_id: null,
        country_code: "KSA",
        currency: "SAR",
        gender: faker.helpers.arrayElement(["male", "female"]),
        skills: null,
        email: faker.internet.email(),
        phone_code: 966,
        phone: "537812391",
        international_phone: "966537812391",
        dob: "2022-05-12",
        email_verified_at: null,
        status: 1,
        last_seen_at: "2022-12-29T10:02:11.000000Z",
        updated_at: "2022-11-21T09:48:35.000000Z",
        created_at: "2022-05-10T06:14:54.000000Z",
      },
      children: [],
      created_at: faker.date.future(),
      updated_at: "2022-11-13T11:19:42.000000Z",
    });
  }

  return comments;
}

function generateReviews(coursesCount) {
  const reviews = [];

  const count = coursesCount * 8;

  for (let i = 0; i < count; i++) {
    reviews.push({
      id: i + 1,
      title: faker.lorem.sentence(5),
      content: faker.lorem.sentence(10),
      rating: faker.number.int({ min: 0, max: 5 }),
      course_id: faker.number.int({ min: 1, max: coursesCount }),
      member: {
        id: faker.number.int({ min: 1, max: 14 }),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        name: faker.person.fullName(),
        username: faker.internet.displayName(),
        avatar: faker.internet.url(),
        bio: null,
        job_title: null,
        education: null,
        url: faker.internet.url(),
        national_id: null,
        country_code: "KSA",
        currency: "SAR",
        gender: faker.helpers.arrayElement(["male", "female"]),
        skills: null,
        email: faker.internet.email(),
        phone_code: 966,
        phone: "537812391",
        international_phone: "966537812391",
        dob: "2022-05-12",
        email_verified_at: null,
        status: 1,
        last_seen_at: "2022-12-29T10:02:11.000000Z",
        updated_at: "2022-11-21T09:48:35.000000Z",
        created_at: "2022-05-10T06:14:54.000000Z",
      },
      commentable_id: 10,
      path: "https://maher.msaaq.test/courses/course-2-copy-y2np3mrbjqoqwlml#comment-47",
      updated_at: "2022-09-21T12:30:58.000000Z",
      created_at: faker.date.future(),
    });
  }

  return reviews;
}
function generate() {
  const taxosCount = 74;
  const coursesCount = 110;
  const enrollsCount = 68;

  const taxonomies = generateTaxonomies(taxosCount);
  const courses = generateCourses(coursesCount, taxonomies);
  const enrollments = generateEnrollements(enrollsCount, courses);
  const coursesStats = generateCourseStats(courses);
  const comments = generateComments(coursesCount);
  const reviews = generateReviews(coursesCount);

  return {
    taxonomies,
    courses,
    enrollments,
    coursesStats,
    comments,
    reviews,
  };
}

console.log(JSON.stringify(generate(), null, 2));

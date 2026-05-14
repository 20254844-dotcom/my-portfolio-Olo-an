import type { StudentInfo, Activity, ExperienceAnswers, Tribute } from '../types';

export const STUDENT: StudentInfo = {
  name: "Vejee Jon D. Olo-an",
  course: "BSIT",
  year: "1st Year",
  university: "University of Baguio",
  subject: "APPTECH 1",
  professor: "Prof. Benny Cris Pio",
  semester: "2nd Semester, A.Y. 2025–2026",
};

export const ACTIVITIES: Activity[] = [
  {
    id: 1, period: "Prelims", type: "Activity",
    title: "Lab 1: Personal Information",
    description: "A simple React application that displays personal information.",
    reflection: "This showed me how different React and HTML are, and how to structure components effectively.",
    repo: "https://20254844-dotcom.github.io/UNIT1-LESSON1-A-OLO-AN/",
  },
    {
    id: 2, period: "Prelims", type: "Activity",
    title: "Lab 2: Student Information System",
    description: "A simple React application that manages student information using prompts.",
    reflection: "This activity helped me understand how to apply prompts in a real website and make the application interactive.",
    repo: "https://20254844-dotcom.github.io/FG_LAB3_OLO-AN/",
  },
  {
    id: 3, period: "Prelims", type: "Activity",
    title: "Lab 3: Basic Information",
    description: "A simple react activity that uses data types and functions to display basic information.",
    reflection: "This activity helped me understand how to use data types and functions in React.",
    repo: "https://20254844-dotcom.github.io/FG_LAB2_Olo-an/",
  },
  {
    id: 4, period: "Prelims", type: "Exam",
    title: "Exam: University Club Member Dashboard",
    description: "A react application that displays a dashboard of university club members, showcasing their information and activities.",
    reflection: "This exam challenged me to apply all the concepts I learned. This exam was hard for me because I have so many mistakes in my code such as not using prompts properly and not structuring my components well. However, it was a great learning experience and I was able to improve my coding skills significantly.",
    repo: "https://20254844-dotcom.github.io/FG_Lab_Exam_Olo-an/",
  },
  {
    id: 5, period: "Midterms", type: "Activity",
    title: "Lab 4: University Event Registration Dashboard",
    description: "A simple react activity that uses useState and prompts to display basic information.",
    reflection: "This activity helped me understand how to use useState and prompts in React. It was a bit challenging at first, but I was able to learn how to manage state effectively and make the application more interactive. Although, I had a minor issues with my prompts and layout issues, but overall it was a great learning experience.",
    repo: "https://20254844-dotcom.github.io/MG_LAB4_Olo-an/",
  },
  {
    id: 6, period: "Midterms", type: "Activity",
    title: "Lab 5: University Portal with React Router",
    description: "A react activity that uses Routers to navigate between different pages and display basic information.",
    reflection: "This activity helped me understand how to use Routers in React. This activity was hard for me because this activity showed me the difference between a HTML coding and not in React. This was a great learning experience.",
    repo: "https://20254844-dotcom.github.io/MG_LAB5_Olo-an/",
  },
  {
    id: 7, period: "Midterms", type: "Activity",
    title: "Lab 6: Forms",
    description: "A simple react activity that uses controlled and uncontrolled forms to display basic information.",
    reflection: "This activity helped me understand how to use controlled and uncontrolled forms in React. This activity was hard for me because I had a lot of issues with my forms and I had a lot of errors in my code. However, it was a great learning experience and I was able to improve my coding skills significantly.",
    repo: "https://20254844-dotcom.github.io/MG_LAB6_Olo-an/",
  },
  {
    id: 8, period: "Midterms", type: "Exam",
    title: "Midterms Exam: Student Portal with Forms and Routers",
    description: "A react application that combines the use of forms and routers to create a student portal where users can navigate between different pages and submit information through forms.",
    reflection: "This exam challenged me to apply all the concepts I learned. This exam was difficult for me because I had a lot of issues with my routers and forms such as not structuring my components well and not using the correct syntax for my forms. I also had a hard time designing my website. However, it was a great learning experience and I was able to improve my coding skills significantly.",
    repo: "https://20254844-dotcom.github.io/MG_LabExam_Olo-an/",
  },
    {
    id: 9, period: "Finals", type: "Activity",
    title: "Lab 7: Course Feedback System",
    description: "A react activity where we used backend to create a course feedback system where users can submit their feedback and view feedback from other users.",
    reflection: "This activity helped me understand how to use backend in React. This activity was very new to me and it was hard to understand at first but I was able to learn how to use backend and how it works. I also encountered a lot of issues with my code but it was a great learning experience.",
    repo: "https://20254844-dotcom.github.io/Finals_Lab1_Olo-an/",
  },
    {
    id: 10, period: "Finals", type: "Activity",
    title: "Lab 8: Contacts",
    description: "A react activity where we used emailjs to create a contact form where users can submit their contact information and send an email.",
    reflection: "This activity helped me understand how to use emailjs in React. This activity was very interesting because users can submit their contact information directly to your email. It was a great learning experience and I was able to learn how to use emailjs and how it works. ",
    repo: "https://drive.google.com/drive/folders/1wCe9E784h8Kn5Z5tSYNQo5ICEIqIxiXL?usp=drive_link",
  },
    {
    id: 11, period: "Finals", type: "Exam",
    title: "Finals Exam: My Portfolio",
    description: "A react application with backend, routers, and contact forms. This is my portfolio where I tell about my experience and all about me.",
    reflection: "This exam challenged me to apply all the concepts I learned throughout the semester. This exam was a difficult one because It will challenge you to apply all the concepts that you learned throughout the semester. Though I had a lot of issues with my code, I was able to do it. Its a great learning experience.",
    repo: "https://20254844-dotcom.github.io/MG_LabExam_Olo-an/",
  },

];

export const EXPERIENCE: ExperienceAnswers = {
  likes: [
    "The hands-on approach to learning React and TypeScript.",
    "Learning how to build real-world applications and not just theoretical concepts.",
  ],
  favoriteTopics: [
    { topic: "Backend Integration", reason: "It makes managing component logic very clean." },
  ],
  favoriteActivities: [
    { title: "Portfolio Development", why: "It allowed me to showcase my progress in a creative way." },
  ],

  challenging: [
    { topic: "Routers, and Backend", note: "It was for me to understand because maybe its a little complex." },
  ],
};

export const TRIBUTES: Tribute[] = [
  {
    role: "Professor", special: true,
    name: "Prof. Benny Cris Pio",
    message: "Guided us and teached the basics of React and TypeScript. Thank you sir!",
  },
  {
    role: "Friend",
    name: "Angelon Mangili",
    message: "Helped me and supported me throughout the semester. Thank you sah!",
  },
  {
    role: "Friend",
    name: "Dwayne Hinnong",
    message: "Helped me when I was confused in a certain topic or when my code is having troubles. Thanks!",
  },
];
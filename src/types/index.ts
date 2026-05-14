export interface StudentInfo {
  name: string;
  course: string;
  year: string;
  university: string;
  subject: string;
  professor: string;
  semester: string;
}

export interface Activity {
  id: number;
  period: "Prelims" | "Midterms" | "Finals";
  type: "Activity" | "Project" | "Lab" | "Exam";
  title: string;
  description: string;
  reflection: string;
  repo: string;
}

export interface ExperienceAnswers {
  likes: string[];
  favoriteTopics: { topic: string; reason: string }[];
  favoriteActivities: { title: string; why: string }[];
  challenging: { topic: string; note: string }[];
}

export interface Tribute {
  role: "Professor" | "Classmate" | "Family" | "Friend" | "Mentor";
  special?: boolean;
  name: string;
  message: string;
}
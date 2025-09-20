import { CalendarCheck, File, Files, GraduationCap, User2 } from "lucide-react";

export const adminNavmenu = {
 user: {
  name: "Michael Jay Angelo",
  role: "admin",
  avatar: "/photo/my_profile.jpg",
  profileLink: "/admin/profile",
 },
 navItem1: [
  {
   title: "Manage Users",
   icon: User2,
   items: [
    {
     title: "Students",
     url: "/admin/students",
    },
    {
     title: "Teachers",
     url: "/admin/teachers",
    },
   ],
  },
  {
   title: "Academics",
   icon: GraduationCap,
   items: [
    {
     title: "Grade Levels",
     url: "/admin/grade-levels",
    },
    {
     title: "Sections",
     url: "/admin/sections",
    },
    {
     title: "Subjects",
     url: "/admin/subjects",
    },
   ],
  },
 ],
 navItem2: [
  {
   title: "Enrollment",
   url: "/admin/enrollment",
   icon: Files,
  },
  {
   title: "Schedules",
   url: "/admin/schedules",
   icon: CalendarCheck,
  },
  {
   title: "Grades",
   url: "/admin/grades",
   icon: File,
  },
 ],
};

export const studentNavmenu = {
 user: {
  name: "Mel Moses Seeping",
  role: "student",
  studentId: "1234-567-890",
  avatar: "",
  profileLink: "/student/profile",
 },
 navItem1: [
  {
   title: "Enrollment",
   icon: File,
   items: [
    {
     title: "Schedule",
     url: "/student/schedule",
    },
    {
     title: "Clearance",
     url: "/student/clearance",
    },
   ],
  },
  {
   title: "Academic",
   icon: GraduationCap,
   items: [
    {
     title: "Subject",
     url: "/student/subject",
    },
    {
     title: "Report Card",
     url: "/student/report-card",
    },
   ],
  },
 ],
};

export const teacherNavmenu = {
 user: {
  name: "Czianel F. Santos",
  role: "teacher",
  subjects: "Science, Filipino",
  avatar: "",
  profileLink: "/teacher/profile",
 },
 navItem1: [
  {
   title: "Students",
   icon: User2,
   items: [
    {
     title: "Student Grades",
     url: "/teacher/student-grades",
    },
   ],
  },
 ],
 navItem2: [
  {
   title: "Schedule",
   url: "/teacher/schedule",
   icon: CalendarCheck,
  },
 ],
 navItem3: [
  {
   title: "Documents",
   url: "/teacher/documents",
   icon: File,
  },
 ],
};


export const studentList = {
 teacher: "Mr. Santos",
 subjects: ["Science", "Filipino"],
 students: [
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024001",
   student_name: "Angela Guanio",
   quarter_1: 95,
   quarter_2: 93,
   quarter_3: 96,
   quarter_4: 94,
   average: 95,
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024002",
   student_name: "Carmel Loresiane Berber",
   quarter_1: 92,
   quarter_2: 94,
   quarter_3: 91,
   quarter_4: 95,
   average: 93,
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024003",
   student_name: "Jeff Eric Cocjin",
   quarter_1: 97,
   quarter_2: 96,
   quarter_3: 95,
   quarter_4: 98,
   average: 97,
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024101",
   student_name: "Reiner Panelo",
   quarter_1: 93,
   quarter_2: 92,
   quarter_3: 94,
   quarter_4: 96,
   average: 94,
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024102",
   student_name: "Nico Samonte",
   quarter_1: 95,
   quarter_2: 97,
   quarter_3: 96,
   quarter_4: 94,
   average: 96,
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024103",
   student_name: "Justine Ocampo",
   quarter_1: 91,
   quarter_2: 93,
   quarter_3: 92,
   quarter_4: 94,
   average: 93,
   remarks: "Passed",
  },
 ],
};
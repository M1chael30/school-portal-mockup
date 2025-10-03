import {
 BookUser,
 CalendarCheck,
 File,
 Files,
 FileSpreadsheet,
 GraduationCap,
 User2,
 UserRound,
 UsersRound,
} from "lucide-react";

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
 navItem3: [
  {
   title: "Enrollment",
   icon: File,
   items: [
    {
     title: "Students",
     icon: User2,
     items: [
      {
       title: "Teachers",
       url: "/admin/teachers",
      },
     ],
    },
   ],
  },
  {
   title: "Admission",
   icon: UsersRound,
   items: [
    {
     title: "Students",
     icon: User2,
     items: [
      {
       title: "Teachers",
       url: "/admin/teachers",
      },
     ],
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
   title: "Class Management",
   icon: UsersRound,
   items: [
    {
     title: "Grade Sheets",
     url: "/teacher/grade-sheets",
    },
    {
     title: "Class List",
     url: "/teacher/class-list",
    },
    {
     title: "Grade Sheets Final Report",
     url: "/teacher/grade-sheets-final-report",
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
 navItem4: [
  {
   title: "Student's Performance",
   icon: BookUser,
   items: [
    {
     title: "Unofficial TOR",
     url: "/teacher/unofficial-tor",
    },
   ],
  },
 ],
};

export const studentNavmenu = {
 user: {
  name: "Cocjin, Jeff Eric Cocjin DC.",
  role: "student",
  studentId: "1234-567-890",
  avatar: "",
  profileLink: "/student/personal-information",
 },
 navItem1: [
  {
   title: "Enrollment",
   icon: File,
   items: [
    {
     title: "Subjects Enrolled",
     url: "/student/subjects-enrolled",
    },
    {
     title: "Enrolled Load Schedule",
     url: "/student/schedule",
    },
   ],
  },
  {
   title: "Academic Performance",
   icon: GraduationCap,
   items: [
    {
     title: "Grading Per SY",
     url: "/student/grading-per-sy",
    },
   ],
  },
 ],
 navItem2: [
  {
   title: "Student Clearance",
   url: "/student/student-clearance",
   icon: FileSpreadsheet,
  },
 ],
 navItem3: [
  {
   title: "Personal Information",
   icon: UserRound,
   items: [
    {
     title: "Edit Personal Info",
     url: "/student/edit-personal-information",
    },
    {
     title: "Upload Picture",
     url: "/student/upload-picture",
    },
    {
     title: "View Personal Info",
     url: "/student/view-personal-information",
    },
    {
     title: "Change Password",
     url: "/student/change-password",
    },
   ],
  },
 ],
};

export const studentList = {
 teacher: "Mr. Santos",
 subjects: ["Science", "Filipino"],
 students: [
  // Angela Guanio (Grade 7)
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024001",
   student_name: "Angela Guanio",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024001",
   student_name: "Angela Guanio",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024001",
   student_name: "Angela Guanio",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024001",
   student_name: "Angela Guanio",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },

  // Carmel Loresiane Berber (Grade 7)
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024002",
   student_name: "Carmel Loresiane Berber",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024002",
   student_name: "Carmel Loresiane Berber",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024002",
   student_name: "Carmel Loresiane Berber",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024002",
   student_name: "Carmel Loresiane Berber",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },

  // Jeff Eric Cocjin (Grade 7)
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024003",
   student_name: "Jeff Eric Cocjin",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024003",
   student_name: "Jeff Eric Cocjin",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024003",
   student_name: "Jeff Eric Cocjin",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 7",
   section: "Grade 7 - Rizal",
   subject: "Science",
   student_lrn: "2024003",
   student_name: "Jeff Eric Cocjin",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },

  // Reiner Panelo (Grade 10)
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024101",
   student_name: "Reiner Panelo",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024101",
   student_name: "Reiner Panelo",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024101",
   student_name: "Reiner Panelo",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024101",
   student_name: "Reiner Panelo",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },

  // Nico Samonte (Grade 10)
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024102",
   student_name: "Nico Samonte",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024102",
   student_name: "Nico Samonte",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024102",
   student_name: "Nico Samonte",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024102",
   student_name: "Nico Samonte",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },

  // Justine Ocampo (Grade 10)
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024103",
   student_name: "Justine Ocampo",
   quarter: "Quarter 1",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024103",
   student_name: "Justine Ocampo",
   quarter: "Quarter 2",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024103",
   student_name: "Justine Ocampo",
   quarter: "Quarter 3",
   grade: "",
   remarks: "Passed",
  },
  {
   grade_level: "Grade 10",
   section: "Grade 10 - Luna",
   subject: "Filipino",
   student_lrn: "2024103",
   student_name: "Justine Ocampo",
   quarter: "Quarter 4",
   grade: "",
   remarks: "Passed",
  },
 ],
};

export const scheduleTableOne = [
 {
  time: "7:30 - 8:30 AM",
  monday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  tuesday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  wednesday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  thursday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
  friday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
 },
 {
  time: "8:30 - 9:30 AM",
  monday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  tuesday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  wednesday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
  thursday: { subject: "MAPEH", adviser: "Mr. Bayudang", room: "Room 105" },
  friday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
 },
 {
  time: "9:30 - 10:00 AM",
  monday: { subject: "Recess", adviser: "", room: "" },
  tuesday: { subject: "Recess", adviser: "", room: "" },
  wednesday: { subject: "Recess", adviser: "", room: "" },
  thursday: { subject: "Recess", adviser: "", room: "" },
  friday: { subject: "Recess", adviser: "", room: "" },
 },
 {
  time: "10:00 - 11:00 AM",
  monday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  tuesday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
  wednesday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
  thursday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  friday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
 },
 {
  time: "11:00 - 12:00 NN",
  monday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
  tuesday: { subject: "MAPEH", adviser: "Mr. Bayudang", room: "Room 105" },
  wednesday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  thursday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  friday: { subject: "Filipino", adviser: "Mr. Santos", room: "Room 106" },
 },
 {
  time: "12:00 - 1:00 PM",
  monday: { subject: "Lunch", adviser: "", room: "" },
  tuesday: { subject: "Lunch", adviser: "", room: "" },
  wednesday: { subject: "Lunch", adviser: "", room: "" },
  thursday: { subject: "Lunch", adviser: "", room: "" },
  friday: { subject: "Lunch", adviser: "", room: "" },
 },
 {
  time: "1:00 - 2:00 PM",
  monday: { subject: "MAPEH", adviser: "Mr. Tejano", room: "Room 105" },
  tuesday: { subject: "English", adviser: "Mr. Bayudang", room: "Room 101" },
  wednesday: { subject: "Math", adviser: "Mr. Tejano", room: "Room 102" },
  thursday: { subject: "Science", adviser: "Mr. Santos", room: "Room 103" },
  friday: { subject: "ESP", adviser: "Mr. Seeping", room: "Room 104" },
 },
];

export const columnHeadOne = [
 "Time",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
];

export const scheduleTableTwo = [
 {
  subjectCode: "ENG 10",
  subjectName: "English",
  schedule: [
   "MON 7:30 - 8:30 AM",
   "THU 10:00 - 11:00 AM",
   "WED 11:00 - 12:00 NN",
   "TUE 1:00 - 2:00 PM",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 101",
 },
 {
  subjectCode: "MATH 10",
  subjectName: "Mathematics",
  schedule: [
   "TUE 7:30 - 8:30 AM",
   "MON 8:30 - 9:30 AM",
   "FRI 10:00 - 11:00 AM",
   "THU 11:00 - 12:00 NN",
   "WED 1:00 - 2:00 PM",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 102",
 },
 {
  subjectCode: "SCI 10",
  subjectName: "Science",
  schedule: [
   "WED 7:30 - 8:30 AM",
   "MON 10:00 - 11:00 AM",
   "THU 1:00 - 2:00 PM",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 103",
 },
 {
  subjectCode: "FIL 10",
  subjectName: "Filipino",
  schedule: [
   "THU 7:30 - 8:30 AM",
   "WED 8:30 - 9:30 AM",
   "FRI 11:00 - 12:00 NN",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 106",
 },
 {
  subjectCode: "MAPEH 10",
  subjectName: "MAPEH",
  schedule: [
   "FRI 7:30 - 8:30 AM",
   "THU 8:30 - 9:30 AM",
   "WED 10:00 - 11:00 AM",
   "MON 1:00 - 2:00 PM",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 105",
 },
 {
  subjectCode: "ESP 10",
  subjectName: "ESP",
  schedule: [
   "TUE 10:00 - 11:00 AM",
   "MON 11:00 - 12:00 NN",
   "FRI 1:00 - 2:00 PM",
  ],
  sectionAndRoom: "Grade 10 - Luna / Room 104",
 },
 {
  subjectCode: "BREAK",
  subjectName: "Recess / Lunch",
  schedule: [
   "MON–FRI 9:30 - 10:00 AM (Recess)",
   "MON–FRI 12:00 - 1:00 PM (Lunch)",
  ],
  sectionAndRoom: "Grade 10 - Luna / —",
 },
];

export const columnHeadTwo = [
 "Subject Code",
 "Subject Name",
 "Schedule",
 "Section & Room No.",
];

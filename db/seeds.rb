Course.destroy_all
Student.destroy_all
School.destroy_all
Seat.destroy_all
Teacher.destroy_all

school1 = School.create(name: "Fundamental University College of Knowledge in Information Technology", street_address: "357 La Real Street")
school2 = School.create(name: "Flatiron Can't Afford Wifi", street_address: "11 Broadway")
school3 = School.create(name: "Don't Feed The Junior Devs!", street_address: "Random Startup")

teacher1 = Teacher.create(first_name: "Zach", last_name: "Solimon", school_id: school1.id)
teacher2 = Teacher.create(first_name: "Aaron", last_name: "Fowlkes", school_id: school1.id)
teacher3 = Teacher.create(first_name: "James", last_name: "Bond", school_id: school1.id)

stu1 = Student.create(first_name: "Antonio", last_name: "Arce")
stu2 = Student.create(first_name: "Haala", last_name: "Al-Hadithy")
stu3 = Student.create(first_name: "Steve", last_name: "Irwin")

course1 = Course.create(name: "ESL", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "Woodshop", capacity: 12, teacher_id: teacher2.id, school_id: school2.id)
course3 = Course.create(name: "Cooking", capacity: 11, teacher_id: teacher3.id, school_id: school2.id)
course1 = Course.create(name: "Football", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "Software Enginering", capacity: 12, teacher_id: teacher2.id, school_id: school3.id)
course3 = Course.create(name: "Coding for Dummies", capacity: 11, teacher_id: teacher3.id, school_id: school3.id)
course1 = Course.create(name: "Dummies for Coding", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "Almost a Tech Workshop", capacity: 12, teacher_id: teacher2.id, school_id: school3.id)
course3 = Course.create(name: "Could've Been Rich 101", capacity: 11, teacher_id: teacher3.id, school_id: school3.id)
course1 = Course.create(name: "English again", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "The 13th Grade", capacity: 12, teacher_id: teacher2.id, school_id: school2.id)
course3 = Course.create(name: "Cooking", capacity: 11, teacher_id: teacher3.id, school_id: school2.id)
course1 = Course.create(name: "ESL", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "woodshop", capacity: 12, teacher_id: teacher2.id, school_id: school1.id)
course3 = Course.create(name: "Cooking", capacity: 11, teacher_id: teacher3.id, school_id: school1.id)


seat1 = Seat.create(course_id: course1.id, student_id: stu1.id)
seat2 = Seat.create(course_id: course2.id, student_id: stu3.id)
seat3 = Seat.create(course_id: course3.id, student_id: stu2.id)

seat1 = Seat.create(course_id: course1.id, student_id: stu1.id)
seat2 = Seat.create(course_id: course2.id, student_id: stu3.id)
seat3 = Seat.create(course_id: course3.id, student_id: stu2.id)
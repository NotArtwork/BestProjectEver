Course.destroy_all
Student.destroy_all
School.destroy_all
Seat.destroy_all
Teacher.destroy_all

school1 = School.create(name: "Fundamental University College of Knowledge in Information Technology", street_address: "357 La Real Street")

teacher1 = Teacher.create(first_name: "Zach", last_name: "Solimon")
teacher2 = Teacher.create(first_name: "Aaron", last_name: "Fowlkes")
teacher3 = Teacher.create(first_name: "James", last_name: "Bond")

stu1 = Student.create(first_name: "Antonio", last_name: "Arce")
stu2 = Student.create(first_name: "Haala", last_name: "Al-Hadithy")
stu3 = Student.create(first_name: "Steve", last_name: "Irwin")

course1 = Course.create(name: "ESL", capacity: 10, teacher_id: teacher1.id, school_id: school1.id)
course2 = Course.create(name: "woodshop", capacity: 12, teacher_id: teacher2.id, school_id: school1.id)
course3 = Course.create(name: "Cooking", capacity: 11, teacher_id: teacher3.id, school_id: school1.id)

seat1 = Seat.create(course_id: course1.id, student_id: stu1.id)
seat2 = Seat.create(course_id: course2.id, student_id: stu3.id)
seat3 = Seat.create(course_id: course3.id, student_id: stu2.id)


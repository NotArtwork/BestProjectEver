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

course1 = Course.create!(name: "ESL", capacity: 10, teacher_id: 1, school_id: 1)
course2 = Course.create!(name: "woodshop", capacity: 12, teacher_id: 2, school_id: 1)
course3 = Course.create!(name: "Cooking", capacity: 11, teacher_id: 3, school_id: 1)

seat1 = Seat.create(course_id: 1, student_id: 1)
seat2 = Seat.create(course_id: 2, student_id: 3)
seat3 = Seat.create(course_id: 3, student_id: 2)


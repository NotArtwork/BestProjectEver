Course.destroy_all
Student.destroy_all
School.destroy_all
Seat.destroy_all
Teacher.destroy_all

school1 = School.create!(name: "Fundamental University College of Knowledge in Information Technology", street_address: "357 La Real Street")
school2 = School.create!(name: "Flatiron Can't Afford Wifi", street_address: "11 Broadway")
school3 = School.create!(name: "Don't Feed The Junior Devs!", street_address: "Random Startup")

teacher1 = Teacher.create!(first_name: "Zach", last_name: "Solimon", picture: "" )
teacher2 = Teacher.create!(first_name: "Aaron", last_name: "Fowlkes", picture: "https://i.imgur.com/jRVBRCG.jpg")
teacher3 = Teacher.create!(first_name: "James", last_name: "Bond", picture:"https://i.pinimg.com/564x/0e/01/c8/0e01c867c9a1fa680c741f32d1f8878a.jpg")

stu1 = Student.create(first_name: "Antonio", last_name: "Arce")
stu2 = Student.create(first_name: "Haala", last_name: "Al-Hadithy")
stu3 = Student.create(first_name: "Steve", last_name: "Irwin")

course1 = Course.create(name: "ESL", capacity: 10, teacher_id: teacher1.id, school_id: school1.id, course_description:"We will learn you to talk good.")
course2 = Course.create(name: "Woodshop", capacity: 12, teacher_id: teacher2.id, school_id: school2.id, course_description:"We will teach you to make useful and useless things out of wood. You can give what you make to your dad as a throughly dissappointing fathers day present. He wanted a speaker system but he loves you, so he will pretend he's not absolutely gutted.")
course3 = Course.create(name: "Cooking", capacity: 11, teacher_id: teacher3.id, school_id: school2.id, course_description:"Maybe the next time you have a partner over for dinner, they won't leave you right after the first bite.")
course1 = Course.create(name: "Football", capacity: 10, teacher_id: teacher1.id, school_id: school1.id, course_description:"I clearly should not be writng these course descriptions, I'm a bitter nerd and the only thing I can think to say about football is; please enjoy your 15 minutes of fame and lifetime of stories about when you were the quarterback of the highschool football team... also brain damage")
course2 = Course.create(name: "Software Enginering", capacity: 12, teacher_id: teacher2.id, school_id: school3.id, course_description:"Spend 10 hours a day in front of a computer screen")
course3 = Course.create(name: "Coding for Dummies", capacity: 11, teacher_id: teacher3.id, school_id: school3.id, course_description:"Spend 10 hours a day in front of a computer screen and try not to cry")
course1 = Course.create(name: "Dummies for Coding", capacity: 10, teacher_id: teacher1.id, school_id: school1.id, course_description:"Spend 10 hours a day in front of a computer screen and make your teammates spend 20 hours trying to figure out how you possibly could mess up their code this badly.")
course2 = Course.create(name: "Almost a Tech Workshop", capacity: 12, teacher_id: teacher2.id, school_id: school3.id, course_description:"Learn to say words like hard-drive and processors with blind confidence.")
course3 = Course.create(name: "Could've Been Rich 101", capacity: 11, teacher_id: teacher3.id, school_id: school3.id, course_description:"Learn about cryptocurrency from a trust fund baby who made $300k off dogecoin and keeps insisting it was because of his superior skill and intuition.")
course1 = Course.create(name: "English again", capacity: 10, teacher_id: teacher1.id, school_id: school1.id, course_description:"We will forcibly assist you in unlearning everything you learned in that ESL class. Have you heard of aversion therapy? No? Good. Sign up for this class!")
course2 = Course.create(name: "The 13th Grade", capacity: 12, teacher_id: teacher2.id, school_id: school2.id, course_description:"For children who can't quite be trusted to wash their own clothes and not get alcohol poisoning freshman year.")
course3 = Course.create(name: "Cooking Well", capacity: 11, teacher_id: teacher3.id, school_id: school2.id, course_description:"Have you ever wanted people to say 'Yum, yum, yum, get in my tum.' about your cooking? Take this class!")
course1 = Course.create(name: "SSL", capacity: 10, teacher_id: teacher1.id, school_id: school1.id, course_description:"Nosotros le enseñaremos a vocalizar español bueno!")
course2 = Course.create(name: "MUA", capacity: 12, teacher_id: teacher2.id, school_id: school1.id, course_description:"We will get you half way to an insta baddie.")
course3 = Course.create(name: "Music", capacity: 11, teacher_id: teacher3.id, school_id: school1.id, course_description:"Maybe learn to play more than just Wonderwall on the guituar dude. Consider it.")

seat1 = Seat.create(course_id: course1.id, student_id: stu1.id)
seat2 = Seat.create(course_id: course2.id, student_id: stu3.id)
seat3 = Seat.create(course_id: course3.id, student_id: stu2.id)
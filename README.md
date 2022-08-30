# README
 
 
 
## Database tables(plural) / models(singular)  (M)
   School
       has_many:courses
       has_many :teachers,  through: :courses
 
 
       -name
       -street_address
 
   Course
       belongs_to :school
       belongs_to :teacher
       has_many :seats
       has_many :students,  through: :seats
 
       -school_id:integer
       -teacher_id:integer
       -name
       -capacity:integer
 
   Seat
       belongs_to :students
       belongs_to :course
 
       -course_id:integer
       -student_id:integer
 
   Teacher
       has_many :courses
       has_many :schools,  through: :courses
 
       -first_name
       -last_name
 
   Student
      has_many :seat
       has_many :courses, through: :seats
 
       -first_name
       -last_name
 
  
  ## Model Methods
 
   School.courses
 
 
## Controllers  (C)
   Movies
      
   Showtimes
   Theaters
   Seats
 
## View - ReactJS    (V)
 
   exists in the `/client` folder

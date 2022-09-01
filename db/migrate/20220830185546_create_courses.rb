class CreateCourses < ActiveRecord::Migration[7.0]
  
  def change

    create_table :courses do |t|
      t.string :name
      t.integer :capacity
      t.text :course_description
      t.integer :teacher_id
      t.integer :school_id

      t.timestamps
    end

  end
  
end

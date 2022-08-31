class CreateSeats < ActiveRecord::Migration[7.0]
  def change
    create_table :seats do |t|
      t.integer :course_id
      t.integer :student_id
      t.boolean :is_assigned

      t.timestamps
    end
  end
end

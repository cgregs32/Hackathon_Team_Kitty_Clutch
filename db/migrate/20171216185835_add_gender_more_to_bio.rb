class AddGenderMoreToBio < ActiveRecord::Migration[5.1]
  def change
    add_column :bios, :gender, :string
    add_column :bios, :location, :string
  end
end

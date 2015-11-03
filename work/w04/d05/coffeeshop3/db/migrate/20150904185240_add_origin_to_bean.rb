class AddOriginToBean < ActiveRecord::Migration
  def change
    add_column :beans, :origin, :string
  end
end

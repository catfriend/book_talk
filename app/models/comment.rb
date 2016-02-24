class Comment < ActiveRecord::Base
  belongs_to :book
  validates :book, presence: true
  has_ancestry
end
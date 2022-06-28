# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Board.destroy_all
Pin.destroy_all
User.destroy_all

user1 = User.create!({username: "demoUser", password: "demouser"})
user2 = User.create!({username: "chandler", password: "testing"})
user3 = User.create!({username: "joey", password: "testing"})
user4 = User.create!({username: "monica", password: "testing"})
user5 = User.create!({username: "rachel", password: "testing"})
user6 = User.create!({username: "ross", password: "testing"})
user7 = User.create!({username: "phoebe", password: "testing"})
user8 = User.create!({username: "gunther", password: "testing"})
user9 = User.create!({username: "paolo", password: "testing"})
user10 = User.create!({username: "janice", password: "testing"})

pin1 = Pin.new({title: 'doggo', description: 'so fluffy', uploader_id: user1.id})
image1 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog1.jpg")
pin1.image.attach(io: image1, filename: 'dog1.jpg')
pin1.save!

pin2 = Pin.new({title: 'dog stare', description: 'staring contest?', uploader_id: user2.id})
image2 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog2.jpg")
pin2.image.attach(io: image2, filename: 'dog2.jpg')
pin2.save!

pin3 = Pin.new({title: 'smart dog', description: 'quiz me', uploader_id: user3.id})
image3 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog3.jpg")
pin3.image.attach(io: image3, filename: 'dog3.jpg')
pin3.save!

pin4 = Pin.new({title: 'dog besties', description: 'friends forever', uploader_id: user4.id})
image4 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog4.jpg")
pin4.image.attach(io: image4, filename: 'dog4.jpg')
pin4.save!

pin5 = Pin.new({title: 'oof', description: "i'm baby", uploader_id: user5.id})
image5 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog5.jpg")
pin5.image.attach(io: image5, filename: 'dog5.jpg')
pin5.save!

pin6 = Pin.new({title: 'woof', description: "sun's out, tongue's out", uploader_id: user6.id})
image6 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog6.jpg")
pin6.image.attach(io: image6, filename: 'dog6.jpg')
pin6.save!

pin7 = Pin.new({title: 'tired', description: 'leave me alone', uploader_id: user7.id})
image7 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog7.jpg")
pin7.image.attach(io: image7, filename: 'dog7.jpg')
pin7.save!

pin8 = Pin.new({title: 'ocean time', description: 'bath of the month', uploader_id: user8.id})
image8 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog8.jpg")
pin8.image.attach(io: image8, filename: 'dog8.jpg')
pin8.save!

pin9 = Pin.new({title: 'hey there', description: 'wanna grab coffee?', uploader_id: user9.id})
image9 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog9.jpg")
pin9.image.attach(io: image9, filename: 'dog9.jpg')
pin9.save!

pin10 = Pin.new({title: 'happy times', description: 'best friends forever', uploader_id: user10.id})
image10 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/dog10.jpg")
pin10.image.attach(io: image10, filename: 'dog10.jpg')
pin10.save!

pin11 = Pin.new({title: 'surfing time', description: 'can you wave back?', uploader_id: user1.id})
image11 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby1.jpg")
pin11.image.attach(io: image11, filename: 'hobby1.jpg')
pin11.save!

pin12 = Pin.new({title: 'gingerbread man', description: "let's bake", uploader_id: user2.id})
image12 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby2.jpg")
pin12.image.attach(io: image12, filename: 'hobby2.jpg')
pin12.save!

pin13 = Pin.new({title: 'gotta water the plants', description: 'new favorite hobby', uploader_id: user3.id})
image13 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby3.jpg")
pin13.image.attach(io: image13, filename: 'hobby3.jpg')
pin13.save!

pin14 = Pin.new({title: 'skates', description: "that's a cool trick", uploader_id: user4.id})
image14 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby4.jpg")
pin14.image.attach(io: image14, filename: 'hobby4.jpg')
pin14.save!

pin15 = Pin.new({title: 'love me some fishing', description: 'this is so relaxing', uploader_id: user5.id})
image15 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby5.jpg")
pin15.image.attach(io: image15, filename: 'hobby5.jpg')
pin15.save!

pin16 = Pin.new({title: 'new hobby', description: 'What song should I play next?', uploader_id: user6.id})
image16 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby6.jpg")
pin16.image.attach(io: image16, filename: 'hobby6.jpg')
pin16.save!

pin17 = Pin.new({title: 'pottery', description: 'so satisfying', uploader_id: user7.id})
image17 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby7.jpg")
pin17.image.attach(io: image17, filename: 'hobby7.jpg')
pin17.save!

pin18 = Pin.new({title: 'gaming', description: 'what a sunday', uploader_id: user8.id})
image18 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby8.jpg")
pin18.image.attach(io: image18, filename: 'hobby8.jpg')
pin18.save!

pin19 = Pin.new({title: 'assessories', description: "can't live without them", uploader_id: user9.id})
image19 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby9.jpg")
pin19.image.attach(io: image19, filename: 'hobby9.jpg')
pin19.save!

pin20 = Pin.new({title: 'painting class', description: 'what should i paint next?', uploader_id: user10.id})
image20 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/hobby10.jpg")
pin20.image.attach(io: image20, filename: 'hobby10.jpg')
pin20.save!

pin21 = Pin.new({title: 'what a view', description: "can't wait to be back", uploader_id: user1.id})
image21 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey1.jpg")
pin21.image.attach(io: image21, filename: 'journey1.jpg')
pin21.save!

pin22 = Pin.new({title: 'picnic time', description: 'nice weather we have here', uploader_id: user2.id})
image22 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey2.jpg")
pin22.image.attach(io: image22, filename: 'journey2.jpg')
pin22.save!

pin23 = Pin.new({title: 'hole in one', description: 'any golfers?', uploader_id: user3.id})
image23 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey3.jpg")
pin23.image.attach(io: image23, filename: 'journey3.jpg')
pin23.save!

pin24 = Pin.new({title: 'relaxation day', description: 'love the beach', uploader_id: user4.id})
image24 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey4.jpg")
pin24.image.attach(io: image24, filename: 'journey4.jpg')
pin24.save!

pin25 = Pin.new({title: 'by the water', description: 'this place is awesome', uploader_id: user5.id})
image25 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey5.jpg")
pin25.image.attach(io: image25, filename: 'journey5.jpg')
pin25.save!

pin26 = Pin.new({title: 'taken with a drone', description: 'love this place', uploader_id: user6.id})
image26 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey6.jpg")
pin26.image.attach(io: image26, filename: 'journey6.jpg')
pin26.save!

pin27 = Pin.new({title: 'kayaking', description: 'the waves are so calm', uploader_id: user7.id})
image27 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey7.jpg")
pin27.image.attach(io: image27, filename: 'journey7.jpg')
pin27.save!

pin28 = Pin.new({title: 'first time in paris', description: 'doing tourist things', uploader_id: user8.id})
image28 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey8.jpg")
pin28.image.attach(io: image28, filename: 'journey8.jpg')
pin28.save!

pin29 = Pin.new({title: 'just woke up', description: 'what a view', uploader_id: user9.id})
image29 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey9.jpg")
pin29.image.attach(io: image29, filename: 'journey9.jpg')
pin29.save!

pin30 = Pin.new({title: 'look at this place', description: "it's beautiful", uploader_id: user10.id})
image30 = URI.open("https://pixel-pins-seeds.s3.amazonaws.com/journey10.jpg")
pin30.image.attach(io: image30, filename: 'journey10.jpg')
pin30.save!

board1 = Board.create!({name: 'wow', user_id: user1.id})
board2 = Board.create!({name: 'amazing', user_id: user1.id})
board3 = Board.create!({name: 'fascinating', user_id: user1.id})
board4 = Board.create!({name: 'awesome', user_id: user2.id})
board5 = Board.create!({name: 'look at this', user_id: user2.id})
board6 = Board.create!({name: 'stunning', user_id: user2.id})
board7 = Board.create!({name: 'incredible', user_id: user3.id})
board8 = Board.create!({name: 'wonderful', user_id: user3.id})
board9 = Board.create!({name: 'marvelous', user_id: user3.id})
board10 = Board.create!({name: 'grand', user_id: user4.id})
board11 = Board.create!({name: 'staggering', user_id: user4.id})
board12 = Board.create!({name: 'lovely', user_id: user4.id})
board13 = Board.create!({name: 'sheeesh', user_id: user5.id})
board14 = Board.create!({name: 'wooahh', user_id: user5.id})
board15 = Board.create!({name: 'spectaculr', user_id: user5.id})
board16 = Board.create!({name: 'okayy', user_id: user6.id})
board17 = Board.create!({name: 'majestic', user_id: user6.id})
board18 = Board.create!({name: 'astounding', user_id: user6.id})
board19 = Board.create!({name: 'impressive', user_id: user7.id})
board20 = Board.create!({name: 'unbelievable', user_id: user7.id})
board21 = Board.create!({name: 'my goodness', user_id: user7.id})
board22 = Board.create!({name: 'mind boggling', user_id: user8.id})
board23 = Board.create!({name: 'sensational', user_id: user8.id})
board24 = Board.create!({name: 'mmmm', user_id: user8.id})
board25 = Board.create!({name: 'beautiful', user_id: user9.id})
board26 = Board.create!({name: 'outstanding', user_id: user9.id})
board27 = Board.create!({name: 'holy moly', user_id: user9.id})
board28 = Board.create!({name: 'wowzer', user_id: user10.id})
board29 = Board.create!({name: 'phenomenal', user_id: user10.id})
board30 = Board.create!({name: 'extraordinary', user_id: user10.id})
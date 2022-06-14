As a developer, I have been tasked with creating a database model that will be used in a rolodex application. I want to ensure that the database behaves as expected and the necessary actions can be performed on the database instances.

Set Up

Create a new Rails app named 'rolodex_challenge'.

//rails new rolodex_development -d postgresql -T
//cd rolodex_development 
// rails db:create

Create the database. The output in the terminal should look like this:
Created database 'rolodex_development'
Created database 'rolodex_test'

//Created database 'rolodex_development_development'
//Created database 'rolodex_development_test'


Generate a model called Person with a first_name, last_name, and phone. All fields should be strings.

// rails generate model Person first_name:string last_name:string phone:string



In vsc rails created 

app
class Person < ApplicationRecord
end -----> app-----> models 


<!-- ActiveRecord::Schema[7.0].define(version: 2022_06_14_054151) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end -->

Run a migration to set up the database.

//rails db:migrate

Open up Rails console.

// rails c


Actions

Add five family members into the Person table in the Rails console.

Person.create first_name:"Aria", last_name:"Stark", phone:"884-803-4674"

Person.create first_name:"Sansa", last_name:"Stark", phone:"764-893-0964"

 Person.create first_name:"Bran", last_name:"Stark", phone:"975-982-984"

 Person.create first_name:"Rob", last_name:"Stark", phone:"324-545-584"

 Person.create first_name:"John", last_name:"Targeryen Stark", phone:"328-085-584"


Retrieve all the items in the database.

<!-- 3.0.0 :006 > Person.all
  Person Load (0.6ms)  SELECT "people".* FROM "people"
 =>                                                           
[#<Person:0x00007ff1cea0fb78                                  
  id: 1,                                                      
  first_name: "Aria",                                         
  last_name: "Stark",                                         
  phone: "884-803-4674",                                      
  created_at: Tue, 14 Jun 2022 14:25:16.348616000 UTC +00:00, 
  updated_at: Tue, 14 Jun 2022 14:25:16.348616000 UTC +00:00>,
 #<Person:0x00007ff1cea0fa38                                  
  id: 2,                                                      
  first_name: "Sansa",                                        
  last_name: "Stark",                                         
  phone: "764-893-0964",                                      
  created_at: Tue, 14 Jun 2022 14:26:02.119490000 UTC +00:00, 
  updated_at: Tue, 14 Jun 2022 14:26:02.119490000 UTC +00:00>,
 #<Person:0x00007ff1cea0f970
  id: 3,
  first_name: "Bran",
  last_name: "Stark",
  phone: "975-982-984",
  created_at: Tue, 14 Jun 2022 14:28:16.944043000 UTC +00:00,
  updated_at: Tue, 14 Jun 2022 14:28:16.944043000 UTC +00:00>,
 #<Person:0x00007ff1cea0f8a8
  id: 4,
  first_name: "Rob",
  last_name: "Stark",
  phone: "324-545-584",
  created_at: Tue, 14 Jun 2022 14:28:55.128942000 UTC +00:00,
  updated_at: Tue, 14 Jun 2022 14:28:55.128942000 UTC +00:00>,
 #<Person:0x00007ff1cea0f7e0
  id: 5,
  first_name: "John",
  last_name: "Targeryen Stark",
  phone: "328-085-584",
  created_at: Tue, 14 Jun 2022 14:30:10.587918000 UTC +00:00,
  updated_at: Tue, 14 Jun 2022 14:30:10.587918000 UTC +00:00>] 
3.0.0 :007 >  -->


Add yourself to the Person table.

//opps I typed the wrong command 
 //Person.new first_name:"Geovanna", last_name:"Perez", phone:"023-567-578" It came back with an id of nill, it had my name, last name and the phone, everything esle came back as nill

 //Person.create first_name:"Geovanna", last_name:"Gonzalez", phone:"098-758-352" this is the correct one 

Retrieve all the entries that have the same last_name as you.

//Person.where(last_name:"Gonzalez")

//Person.where last_name:"Stark"

These two work


Update the phone number of the last entry in the database.

//new_phone = Person.last

//Person.last

//new_phone.update phone:"782-191-938"

 <!-- id: 6,                                                          
 first_name: "Geovanna",                                         
 last_name: "Gonzalez",                                          
 phone: "782-191-938",                                           
 created_at: Tue, 14 Jun 2022 14:40:13.338638000 UTC +00:00,     
 updated_at: Tue, 14 Jun 2022 14:57:01.757437000 UTC +00:00>  
3.0.0 :019 > -->

Retrieve the first_name of the third Person in the database.

Person.find 3 ---> this one shows all the info for the third person

erson.find(3).first_name --> "Bran" 

Stretch Challenges 

Update all the family members with the same last_name as you, to have the same phone number as you.



Remove all family members that do not have your last_name.
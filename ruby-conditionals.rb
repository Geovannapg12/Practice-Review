# Story: As user 1, I can see a prompt in the terminal asking me to type either 'rock", "paper", or "scissors'

# The command for user input in the terminal is an action called called gets

puts ' User 1, type either "rock", "paper", or "scissors'
user_1 = gets.chomp

# Story: As user 2, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors". 

puts 'User 2, type either "rock", "paper", or "scissors'
user_2 = gets.chomp

# Story: As a user, I can see a message in the terminal saying if user 1 or user 2 won the round.

if user_1 == 'rock' && user_2 == 'scissors'
    puts 'user 1 wins!'
elsif user_1 == 'paper' && user_2 == 'rock'
    puts 'user 1 wins!'
elsif user_1 == 'scissors' && user_2 == 'paper'
    puts 'user 1 wins!'
elsif user_1 == 'scissors' && user_2 == 'rock'
    puts 'user 2 wins!'
elsif user_1 == 'rock' && user_2 == 'paper'
    puts 'user 2 wins!'
elsif user_1 == 'paper' && user_2 == 'scissors'
    puts 'user 2 wins'

 

# Story: As a user, I can see a message in the terminal saying if there was a tie. 
elsif user_1 == user_2
    puts 'its a tie'
end
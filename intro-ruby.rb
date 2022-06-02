# Arithmetic Challenges
# Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.

# Add, subtract, multiply and divide some numbers and floats.
    # ➜  Practice-Review git:(intro-ruby-challenges) ✗ ruby intro-ruby.rb 
    # zsh: command not found: 78
    # 3.0.0 :001 > 78 + 90
    # 3.0.0 :002 > 67 - 90
    # 3.0.0 :003 > 68-38
    # 3.0.0 :004 > 30/30
    # 3.0.0 :005 > 30/200
    # 3.0.0 :011 > 30.2 * 12
    #  => 362.4 
    # 3.0.0 :012 > 120 -30
    #  => 90 
    # 3.0.0 :013 > 57 - 89
    #  => -32 
    # 3.0.0 :014 > 58 + 58
    #  => 116 
    # 3.0.0 :015 > 


# Find the remainder of dividing two numbers using the modulo operator (%).
    # 3.0.0 :015 > 68 % 12
    # => 8 
    # 3.0.0 :016 > 5 % 3
    # => 2 
    # 3.0.0 :017 > 12 % 12
    # => 0 
    # 3.0.0 :018 > 


# Divide a number by 0.
    # 3.0.0 :018 > 12 / 0
    # (irb):18:in `/': divided by 0 (ZeroDivisionError)
    #         from (irb):18:in `<main>'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
    # 3.0.0 :019 > 

# Divide 0 by 0.
    # 3.0.0 :019 > 0 /0
    # (irb):19:in `/': divided by 0 (ZeroDivisionError)
    #         from (irb):19:in `<main>'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/irb-1.4.1/exe/irb:11:in `<top (required)>'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
    #         from /Users/learnacademy/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
    # 3.0.0 :020 > 
# Variables Challenges
# Set a variable called my_favorite_number equal to your favorite number
my_favorite_number = 8

# Calculate your favorite number divided by 2
    # 3.0.0 :023 > 8 / 2
    # => 4 
    # 3.0.0 :024 > my_favorite_num / 2
    # => 4 
    # 3.0.0 :025 > 

# Set another variable called someones_favorite equal to 13
    # someones_favorite = 13

 # Change the value of someones_favorite to 7
    # someones_favorite = someones_favorite = 7

# Subtract my_favorite_number from someones_favorite
    # 3.0.0 :028 > my_favorite_num - someones_favorite
    # => 1 

# Change the value of my favorite number to be 26 times its current value
    # 3.0.0 :033 > my_favorite_num * 26
    # => 832 
    # 3.0.0 :034 > 


# Strings Challenges
# Create a variable and return it in a sentence string interpolation

my_song = 'toxic'

# p "My favorite song for now is #{my_song} what is yours"

# Create a variable that contains a string and test some of the Ruby string methods

# .upcase
var_1 = 'bubbles'

p var_1.upcase

# .reverse
my_name = 'geo'

p my_name.reverse

# .include?
this_one = 'mariposa'

p this_one.include?('a')

# .capitalize
p this_one.capitalize

# Arrays Challenges
# Create an array that contains the name of at least five TV shows

top_tv_shows = ['better call Saul', 'Obi Wan Kenobi', 'Stranger Things', 'project runway', 'Breaking Bad']

# Find the length of the array

p top_tv_shows.length

# Return the first item in the array
p top_tv_shows[1]

# Return the fourth item in the array

p top_tv_shows[4]

# Permanently reverse the order of the array

p top_tv_shows.reverse!

# Create a new empty array for your top favorite TV shows

empty_arr = []

# From the full TV show array, add your top two favorite shows to the empty array 
    # The append operator << (a.k.a. "the shovel") basically sticks something at the end of the array.

   p empty_arr << 'breaking bad' << 'stranger things'
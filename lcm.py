#LEAST COMMON MULTIPLE

#Asking user to INPUT two numbers
num1 = int(input("Input a number: "))
num2 = int(input("Input a number: "))

#Comparison which is greater of the two inputs using if/else condition
if num1 > num2:
        x = num1 #if TRUE
else:
        x = num2 #if FALSE

#While loop is used with the boolean value TRUE
while (True): #executes repeatedly until condition is met
        if ((x % num1 == 0) and (x % num2 == 0)): #checking if the there's no remainder after the greater input is divided by both first input and second input
                lcm = x #x is the number that is evenly divisible by all numbers in the set and stored in lcm variable
                break #breaks the loop if 2 conditions are true where the smallest number is reached
        x += 1 #if false, it will increment by 1
print ("LCM : " , lcm) #printing output

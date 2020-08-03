#GREATEST COMMON FACTOR

#Asking user to INPUT two numbers
num1 = int(input("Input a number: "))
num2 = int(input("Input a number: "))

#Comparison which is greater of the two inputs using if/else condition
if num1 > num2:
        x = num1 #if TRUE
else:
        x = num2 #if FALSE

#For loop is used to go through all the factors that can be found from the range of 1 (start) to x+1 (stop)
for i in range(1, x+1): #the stopping range is plus one to include the greater number as well since it started at 1
        if ((num1 % i == 0) and (num2 % i == 0)): #checking if the there's no remainder after the 2 inputs are both divided by i
                gcf = i #both conditions are both true
print ("GCF : " , gcf) #printing output




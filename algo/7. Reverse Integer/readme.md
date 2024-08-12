work flow for the reverse intiger 
    // 2^31 = 2147483648
    // Check if x is negative
    // Get the absolute value of x
    // Initialize reversed number
    // Reverse
        - x % 10  
    // Check if reversed number is within the limit
    // Return the reversed number with the correct sign

Psodocode 

limit = 2**31
isNegative = x < 0

x = abs(x)
reversed = 0

while x > 0:
    lastDigit = x % 10
    reversed = reversed * 10 + lastDigit
    x = floor(x / 10)

if reversed > limit - 1:
    return 0

return -reversed if isNegative else reversed


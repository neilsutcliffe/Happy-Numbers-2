# Happy Numbers 2
Client-side calculation. No POST. Fully responsive

## Why?
Because the one I had kept crashing, and all the processing could be done client side anyway. There is no database access, and an opportuinity to make it visually interesting.

## Why Not React, or Knockout?
Sometimes the simplest way is the best. I could have possibly done it without jQuery, but that is for a future version possibly. Maybe I'll fork it later.

## What is a happy number?
Take a number, split it into digits and sum the squares of each digit.

Repeat this until you either

* Loop indefinitly (unhappy)
* End up at 1 (happy)

This was featured in a Doctor Who episode, and serves no functional purpose.

## Known bugs

All negative numbers are happy.
Very large numbers (9999999999999) do not calculate correctly.
Using happy numbers to determine lottery numbers, property investments or as variables for the stock market can lead to bad times.

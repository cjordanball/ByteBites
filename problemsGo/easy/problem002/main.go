/*
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial
of it (ie. if num = 4, return (4 * 3 * 2 * 1)).  Note: the domain of the function will be positive
numbers only (i.e., ignore the case 0! = 1);
*/

package main

import "fmt"

// FirstFactorial is a function
func FirstFactorial(num int) int {
	resInt := 1
	if num == 0 {
		return resInt
	}
	for i := 1; i <= num; i++ {
		resInt *= i
	}
	return resInt
}

func main() {
	res := FirstFactorial(5)
	fmt.Println("result: ", res)
}

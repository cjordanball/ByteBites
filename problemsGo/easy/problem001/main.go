/*
Create a function, FirstReverse(str), that takes a string parameter ('str') being passed and
returns the string in reversed order.
*/

package main

import "fmt"

// FirstReverse is a function
func FirstReverse(str string) string {
	resStr := ""
	strLength := len(str)
	for i := 0; i < strLength; i++ {
		ind := strLength - (i + 1)
		resStr = resStr + str[ind:(ind+1)]
	}
	return resStr
}

func main() {
	res := FirstReverse("test")
	fmt.Println("result: ", res)
}

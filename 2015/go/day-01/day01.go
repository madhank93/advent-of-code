package main

import (
	"fmt"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	res, err := os.ReadFile("2015/go/day-01/input.txt")

	check(err)

	floor := 0
	var position int
	hasReachedBasement := false

	for i := 0; i < len(res); i++ {
		if string(res[i]) == "(" {
			floor++
		} else if string(res[i]) == ")" {
			floor--
		}

		if floor < 0 && !hasReachedBasement {
			hasReachedBasement = true
			position = i + 1
		}

	}

	fmt.Println(floor)
	fmt.Println(position)

}

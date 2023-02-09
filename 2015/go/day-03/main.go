package main

import (
	"fmt"
	"os"
)

func main() {
	res, err := os.ReadFile("2015/go/day-03/input.txt")

	if err != nil {
		panic(err)
	}

	for i := 0; i < len(res); i++ {
		fmt.Println(string(res[i]))
	}
}

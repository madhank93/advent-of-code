package main

import (
	"bufio"
	"os"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
	file, err := os.Open("2015/go/day-02/input.txt")

	check(err)

	buffReader := bufio.NewReader(file)
	paper := 0
	ribbon := 0

	scanner := bufio.NewScanner(buffReader)
	for scanner.Scan() {
		line := scanner.Text()
		dim := strings.Split(line, "x")
		w, _ := strconv.Atoi(dim[0])
		l, _ := strconv.Atoi(dim[1])
		h, _ := strconv.Atoi(dim[2])

		paper += 2*w*l + 2*w*h + 2*l*h

		if w*l < w*h && w*l < l*h {
			paper += w * l
		} else if w*h < l*h {
			paper += w * h
		} else {
			paper += l * h
		}

		ribbon += w * l * h

		if w+l < w+h && w+l < l+h {
			ribbon += 2 * (w + l)
		} else if w+h < l+h {
			ribbon += 2 * (w + h)
		} else {
			ribbon += 2 * (l + h)
		}
	}

	println(paper)
	println(ribbon)
}

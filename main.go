// 18. Go Playground

package main

import "fmt" // fmt is format library which format the code in an idiomic way for the computer to understand it(I guess) and implements formatted I/O with functions

func main() {
	fmt.Println("Hello")
}




//  19. Hello world

package main

func main() { // the entry of the program is 'func main'
	
}

go fmt main.go // it will gonna format the code from 'main.go' in an 'idiomatic' way

package main

import "fmt"

func main() {
	fmt.Println("Hello everyone, this is the most awesome class in the entire world for having fun and learning the GO programming language.")

	foo()

	fmt.Println("something more")

	for i := 0; i < 100; i++ {
		if i%2 == 0 {
			fmt.Println(i)
		}
	}

	bar()
}

func foo() {
	fmt.Println("I'm in foo")
}

func bar() {
	fmt.Println("and then we exited")
}

// control flow:
// (1) sequence
// (2) loop, iterative
// (3) conditional




// 20. Introduction to packages

// The packages 'organize' our code, they are like 'modules' from node.js
// You cannot declare a variable in Go without using it.



package main // declaration of the 'main' package

import (
	"fmt"
)

func main() {
	n, _ := fmt.Println("Hello, playground", 42, true) 
	fmt.Println(n)

}
// throwing away returns
// use the “_” underscore character to throw away returns




// 21. Short declaration operator

x := 42 // here we declare the variable x and assign 42 as a value if we want to reassign a value to it we just have to do:
x = 99 // cause 'x' has already been declared

y := 100 + 24 // this is a statement and a statement is made by expressions
x := 32 // is an statement

// in programming an expression is a combination of one or more explicit values, constants, variables, operators, and functions that the programming language interprets and computes to produce another value. For example, 2+3 is an expression which evaluates to 5.

package main

import (
	"fmt"
)

func main() {
 	x := 42
	fmt.Println(x)
	x = 99
	fmt.Println(x)
	y := 100 + 24
	fmt.Println(y)
	z := "Bond, James"
	fmt.Println(z)
}




// 22. The var keyword

package main

import (
	"fmt"
)

// DECLARE the variable "y"
// ASSIGN the value 43
// declare & assign = initilization
var y = 43

// DECLARE there is a VARIABLE with the IDENTIFIER "z"
// and that the VARIABLE with the IDENTIFIER "z" is of TYPE int
// ASSIGNS the ZERO VALUE of TYPE int to "z"
// false for booleans, 0 for integers, 0.0 for floats, "" for strings,
// and nil for pointers, functions, interfaces, slices, channels, and maps.
var z int

func main() {
	// short declaration operator
	// DECLARE a variable and ASSIGN a VALUE (of a certain TYPE)
	x := 42
	fmt.Println(x)

	fmt.Println(y)

	foo()

	fmt.Println(z)
}

func foo() {
	fmt.Println("again:", y)
}


// we cannot use short declaration outside any funciton, just inside of the function, and try to use it inside the function.




// 23. Exploring type

package main

import (
	"fmt"
)

var y = 42

// DECLARE the VARIABLE with the IDENTIFIER "z"
// is of TYPE string
// and I ASSIGN the VALUE "shaken, not stirred"

var z string = "Shaken, not stirred"
var a string = `James said,
"Shaken, 

not stirred`

// this is a STATIC programming language
// a VARIABLE is DECLARED to hold a VALUE of a certain TYPE
// not a DYNAMIC programming language

func main() {
	fmt.Println(y)
	fmt.Printf("%T\n", y)
	fmt.Println(z)
	fmt.Printf("%T\n", z)
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	// z = 43 // if we declare z to be type 'string' it will cannot hold any other type like here and the program will not run
	// fmt.Println(z)
	// fmt.Printf("%T\n", z)
}

// primitive data types
// In computer science, primitive data type is either of the following: 
// a basic type is a data type provided by a programming language as a basic building block. Most languages allow more complicated composite types to be constructed starting from basic types. 
// a built-in type is a data type for which the programming language provides built-in support. 
// In most programming languages, all basic data types are built-in. In addition, many languages also provide a set of composite data types. Opinions vary as to whether a built-in type that is not basic should be considered "primitive".
// https://en.wikipedia.org/wiki/Primitive_data_type 
// composite data types
// In computer science, a composite data type or compound data type is any data type which can be constructed in a program using the programming language's primitive data types and other composite types. It is sometimes called a structure or aggregate data type, although the latter term may also refer to arrays, lists, etc. The act of constructing a composite type is known as composition


// 24. Zero value

package main

import (
	"fmt"
)
 
var y string
var z int

func main() {
	// DECLARE  a variable to be of a certain TYPE
	// and then ASSIGN a VALUE of that type to the variable

	fmt.Println("printing the value of y", y, "ending")
	fmt.Printf("%T\n", y)

	y = "Bond, James Bond"

	fmt.Println(y)
	fmt.Printf("%T\n", y)  // if we declare a variable and we don't assign a value to that variable it will be assign by default 0 for int, float and so on, for string it will be assign an empty one ""
	
	fmt.Println(z)
	fmt.Printf("%T", z)
}




// 25. The fmt package

package main

import (
	"fmt"
)

var y = 42

func main() {
	fmt.Println(y)
	fmt.Printf("%T\n", y) // type of y
	fmt.Printf("%b\n", y) // y in binary
	fmt.Printf("%x\n", y) // y in hexadecinal(I guess)
	y = 911
	fmt.Printf("%#x\t%b\t%x\n", y, y, y)
	
	s := fmt.Sprintf("%#x\t%b\t%x\n", y, y, y)
	fmt.Println(s)
	fmt.Printf("%v", y)
}

// fmt.Println  Println is versatile and can accept many arguments. Println always inserts a newline after we use it

// fmt.Print  But Print does not (insert a new line): it just writes the data to the console with no trailing newline.

// fmt.Printf Printf. This method accepts a format string. We use codes like "%s" and "%d" in this string to indicate insertion points for values. Those values are also passed as arguments

// https://www.dotnetperls.com/fmt-go




// 26. Creating your own type

package main

import (
	"fmt"
)

var a int

type hotdog int // here we create our type which is 'hotdog' type,(which is int type)

var b hotdog // b is hotdog type

func main() {
	a = 42
	b = 43
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)
	
	// a = b     this will not work because a is type int and b is type hotdog

	// fmt.Println(a)
	// fmt.Printf("%T\n", a)
}




// 27. Conversion, not casting

// Conversion, we take a value of a certain type and we convert it to another type

package main

import (
	"fmt"
)

var a int

type hotdog int

var b hotdog

func main() {
	a = 42
	b = 43
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)
	a = int(b) // converting the b to the underlying type(which is int), you can converting just to underlying type
	fmt.Println(a)
	fmt.Printf("%T\n", a)
}




// 29. 

package main

import (
	"fmt"
)

var x int
var y string
var z bool

func main() {
	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(z)
}




// 30.

package main

import (
	"fmt"
)

var x int = 42
var y string = "James Bond"
var z bool = true

func main() {
	s := fmt.Sprintf("%v\t%v\t%v", x, y, z)
	fmt.Println(s)
}




// 31.

package main

import (
	"fmt"
)

type mytype int

var x mytype

func main() {
	fmt.Println(x)
	fmt.Printf("%T\n", x)
	x = 42
	fmt.Println(x)
}




// 32.

package main

import (
	"fmt"
)

type mytype int

var x mytype
var y int

func main() {
	fmt.Println(x)
	fmt.Printf("%T\n", x)
	x = 42
	fmt.Println(x)
	y = int(x)
	fmt.Println(y)
	fmt.Printf("%T\n", y)
}




// 34. Bool type 

package main

import (
	"fmt"
)

var x bool

func main() {
	fmt.Println(x)
	x = true
	fmt.Println(x)
}


package main

import (
	"fmt"
)

var x bool

func main() {
	a := 7
	b := 42
	fmt.Println(a != b) 
}




// 36. Numeric types

package main

import (
	"fmt"
)

var x bool

func main() {
	x := 425465
	y := 42.34534
	fmt.Println(x)
	fmt.Println(y)
	fmt.Printf("%T\n", x)
	fmt.Printf("%T\n", y) 
}


package main

import (
	"fmt"
)

var x int
var y float64

func main() {
	x = 425465
	y = 42.34534
	fmt.Println(x)
	fmt.Println(y)
	fmt.Printf("%T\n", x)
	fmt.Printf("%T\n", y) 
}


package main

import (
	"fmt"
)

var x int8 = -128

func main() {
	fmt.Println(x)
	fmt.Printf("%T\n", x)
}


package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Println(runtime.GOOS)
	fmt.Println(runtime.GOARCH)
}




// 37. String type

package main

import (
	"fmt"
)

func main() {
	s := `"Hello, playground"`
	fmt.Println(s)
	fmt.Printf("%T\n", s)
}


package main

import (
	"fmt"
)

func main() {
	s := `"Hello, playground"`
	fmt.Println(s)
	fmt.Printf("%T\n", s)
	
	bs := []byte(s) // convert string 's' to a slice of byte(s)
	fmt.Println(bs)
	fmt.Printf("%T\n", bs) // type [](slice) of int8
}

//  A string value is a (possibly empty) sequence of bytes.

package main

import (
	"fmt"
)

func main() {
	s := `"Hello, playground"`
	fmt.Println(s)
	fmt.Printf("%T\n", s)
	
	bs := []byte(s)
	fmt.Println(bs)
	fmt.Printf("%T\n", bs)
	
	for i := 0; i < len(s); i++ {
		fmt.Printf("%#U ", s[i]) // "%#U" - gives us the UTF-8 code of the letters from our string 's'
	}
}


package main

import (
	"fmt"
)

func main() {
	s := "Hello, playground"
	fmt.Println(s)
	fmt.Printf("%T\n", s)

	bs := []byte(s)
	fmt.Println(bs)
	fmt.Printf("%T\n", bs)

	for i := 0; i < len(s); i++ {
		fmt.Printf("%#U ", s[i])
	}

	fmt.Println("")

	for i, v := range s {
		fmt.Println(i, v) // give us the index of the string 's' and the ascii code of every character of the 's' string
	}
}




// 38. Numeral systems

// decimal

// binary

// hexadecimal




// 39. Constants

// Constants are declared like variables, but with the const keyword.
// Constants can be character, string, boolean, or numeric values.
// Constants cannot be declared using the := syntax.

package main

import (
	"fmt"
)

const (
	a int     = 42
	b float64 = 42.78
	c string  = "James Bond"  // these are typed constant
)

const a = 42
const b = 42.78
const c = "James Bond"  // these are untyped constant

func main() {
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Printf("%T\n", a)
	fmt.Printf("%T\n", b)
	fmt.Printf("%T\n", c)
}



// 40 .Iota 

// Iota it's a predeclared identifier

package main

import (
	"fmt"
)

const (
	a = iota  // 0
	b // = iota  1
	c // = iota  2
	d // 3
	e // = iota  4
	f // = iota 5
)


const (
	g = iota  // 0
	h // = iota 1
	i // = iota 2
)

func main() {
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
	fmt.Println(e)
	fmt.Println(f)
	fmt.Println(g)
	fmt.Println(h)
	fmt.Println(i)
	fmt.Printf("%T\n", a)
	fmt.Printf("%T\n", b)
	fmt.Printf("%T\n", c)
}




// 41. Bit shifting

package main

import (
	"fmt"
)

func main() {
	x := 4
	fmt.Printf("%d\t\t%b\n", x, x) // 4 100
	
	y := x << 1 // shift to left with 1 bit
	fmt.Printf("%d\t\t%b", y, y) // 8 1000
}


package main

import (
	"fmt"
)

func main() {
	kb := 1024
	mb := 1024 * kb
	gb := 1024 * mb

	fmt.Printf("%d\t\t\t%b\n", kb, kb)
	fmt.Printf("%d\t\t\t%b\n", mb, mb)
	fmt.Printf("%d\t\t%b\n", gb, gb)
}


package main

import (
	"fmt"
)

const (
	_ = iota
	kb = 1 << (iota * 10) // iota = 1, unshift to left 
	mb = 1 << (iota * 10) // iota = 2, unshift to left
	gb = 1 << (iota * 10) // iota = 3, unshift to left
)

func main() {
	fmt.Printf("%d\t\t\t%b\n", kb, kb)
	fmt.Printf("%d\t\t\t%b\n", mb, mb)
	fmt.Printf("%d\t\t%b\n", gb, gb)
}




// 42. 

package main

import (
	"fmt"
)

func main() {
	a := 42
	fmt.Printf("%d\t%b\t%#x", a, a, a) // decimal , binary, hexadecimal
}




// 43.

package main

import (
	"fmt"
)

func main() {
	a := (42 == 42)
	b := (42 <= 42)
	c := (42 >= 43)
	d := (42 != 43)
	e := (42 < 43)
	f := (42 > 43)
	fmt.Println(a, b, c, d, e, f)
}




// 44. 

package main

import (
	"fmt"
)

const (
	a = 42
	b int = 43
)

func main() {
	fmt.Println(a, b)
}




// 45. 

package main

import (
	"fmt"
)

func main() {
	a := 42
	fmt.Printf("%d\t%b\t%#x\n", a, a, a)
	b := a << 1
	fmt.Printf("%d\t%b\t%#x\n", b, b, b)
}




// 46.

package main

import (
	"fmt"
)

func main() {
	a := `here is something
	as
	a 
	raw string 
	literal 
	"you see"
	another thing`
	fmt.Println(a)
}




// 47.

package main

import (
	"fmt"
)

const (
	a = 2017 + iota
	b = 2017 + iota
	c = 2017 + iota
	d = 2017 + iota
)

func main() {
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
}




// 48.




// 49. Understanding control flow

// SEQUENTIAL, LOOP, CONDITIONAL




// 50. Loop - init, condition post

// There is no 'while' in GO




// 51. Loop -nesting loops

package main

import (
	"fmt"
)

func main() {
	// for init; condition; post {}
	for i := 0; i <= 10; i++ {
		for j := 0; j < 3; j++ {
			fmt.Printf("The outer loop: %d\t The inner loop: %d\n", i, j)
		}
	}
}


package main

import (
	"fmt"
)

func main() {
	// for init; condition; post {}
	for i := 0; i <= 10; i++ {
		fmt.Printf("The outer loop: %d\n", i)
		for j := 0; j < 3; j++ {
			fmt.Printf("\t\t The inner loop: %d\n", j)

		}
	}
}



// check if it's working for the sake to commiting from another PC, !MAIN one



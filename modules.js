const modules = {
	'1a':[
		{ c:'1a',  s:5, t:'The Programming Experience' },
		{ c:'1b',  s:7, t:'Compiling and Running' },
		{ c:'2a',  s:7, t:'Simple Java Programs' },
		{ c:'2b',  s:7, t:'Data Types' },
		{ c:'3a',  s:4, t:'User Input' },
		{ c:'3b',  s:6, t:'Selection' },
		{ c:'4a',  s:5, t:'Repetition' },
		{ c:'4b',  s:6, t:'Formatting, Classes, and Simple GUIs' },
		{ c:'5a',  s:6, t:'Methods' },
		{ c:'5b',  s:5, t:'Parameter Passing and Class Variables' },
		{ c:'5c',  s:6, t:'ODEs (Outrageous Destinations in Europe)' },
		{ c:'6a',  s:5, t:'Object-Oriented Programming (OOP)' },
		{ c:'6b',  s:6, t:'Instance Methods' },
		{ c:'7a',  s:8, t:'Deeper into Classes' },
		{ c:'7b',  s:5, t:'Interaction of Objects and Methods' },
		{ c:'8a',  s:6, t:'Arrays and a Sort Algorithm' },
		{ c:'8b',  s:6, t:'Compound Data Types: Arrays in Classes' },
		{ c:'9a',  s:2, t:'Search Algorithms and Stack Data Structures' },
		{ c:'9b',  s:3, t:'Recursion and a Binary Search Algorithm' },
		{ c:'10a', s:7, t:'True GUI Programming' },
		{ c:'10b', s:4, t:'Responding to Events' },
		{ c:'10c', s:8, t:'(Optional) - Deeper into GUI' }
	],
	'1b':[
		{ c:'1a',  s:7, t:'Classes, Strings, and Method Overloading' },
		{ c:'1b',  s:7, t:'Review and Analysis of an OOP Project' },
		{ c:'2a',  s:6, t:'Arrays, Strings, Searching, and Number Formats' },
		{ c:'2b',  s:6, t:'Sorting, Recursion, and Binary Search' },
		{ c:'3a',  s:6, t:'Cellular Automata, Life, and Binary Ops' },
		{ c:'3b',  s:5, t:'Multi-Dimensional Arrays and Stacks' },
		{ c:'4a',  s:5, t:'Introduction to Inheritance' },
		{ c:'4b',  s:4, t:'Implementing Inheritance' },
		{ c:'5a',  s:8, t:'Java GUIs' },
		{ c:'5b',  s:8, t:'Events, Panels, and an RPN Calculator' },
		{ c:'6a',  s:6, t:'Applets and Further into GUI' },
		{ c:'6b',  s:5, t:'Designing and Throwing Exceptions' },
		{ c:'7a',  s:3, t:'Abstract Classes and Interfaces' },
		{ c:'7b',  s:7, t:'Interface Cloneable and Deep Copies' },
		{ c:'8a',  s:5, t:'The Linked List ADT' },
		{ c:'8b',  s:8, t:'Java Collection Class Generics' },
		{ c:'9a',  s:5, t:'Generics We Define' },
		{ c:'9b',  s:6, t:'The Tree ADT' },
		{ c:'10a', s:4, t:'I/O with Files and Streams' },
		{ c:'10b', s:6, t:'Multithreading' },
		{ c:'10c', s:6, t:'Interactive Graphics' }
	],
	'1c':[
		{ c:'1a',  s:8, t:'Introduction to Data Structures' },
		{ c:'1b',  s:9, t:'Generics and java.util' },
		{ c:'2a',  s:4, t:'Implementing ArrayLists From Scratch' },
		{ c:'2b',  s:7, t:'Implementing Lists and Sparse Matrices' },
		{ c:'3a',  s:5, t:'Time Complexity' },
		{ c:'3b',  s:5, t:'Recursion; Log and Exponential Time' },
		{ c:'4a',  s:5, t:'The General Tree' },
		{ c:'4b',  s:5, t:'Binary Search Trees' },
		{ c:'5a',  s:6, t:'AVL Trees' },
		{ c:'5b',  s:6, t:'More AVL and Top-Down Splaying' },
		{ c:'6a',  s:3, t:'Separate Chaining Hash Tables' },
		{ c:'6b',  s:4, t:'Linear and Quadratic Probing' },
		{ c:'7a',  s:4, t:'Priority Queues and Bin Heaps' },
		{ c:'7b',  s:2, t:'Heap Timing and Heap Sort (Part 1)' },
		{ c:'8a',  s:4, t:'Non-NLogN Sorts: Insertion and Shell' },
		{ c:'8b',  s:3, t:'NLogN Sorts: Merge and Heap (Part 2)' },
		{ c:'9a',  s:4, t:'Quicksort and Indirect Sorting' },
		{ c:'9b',  s:5, t:'java.util Survey: Sets, Maps, Priority Queues, & More' },
		{ c:'10a', s:6, t:'Graph Theory Basics and a Working Template' },
		{ c:'10b', s:3, t:'Shortest Paths: Dijkstra Implemented' },
		{ c:'11a', s:5, t:'Minimum Spanning Trees: Kruskal Implemented' },
		{ c:'11b', s:2, t:'A Maximum Flow Algorithm and Farewell' }
	],
	'2a':[
		{ c:'1a',  s:5, t:'The Programming Experience' },
		{ c:'1b',  s:7, t:'Compiling and Running' },
		{ c:'2a',  s:7, t:'Simple C++ Programs' },
		{ c:'2b',  s:5, t:'Data Types' },
		{ c:'3a',  s:8, t:'User Input' },
		{ c:'3b',  s:6, t:'Selection' },
		{ c:'3c',  s:5, t:'(Retired) C++ GUIs' },
		{ c:'4a',  s:7, t:'Repetition' },
		{ c:'4b',  s:5, t:'Sneak Peek at Week 8A - Arrays and a Sort Algorithm' },
		{ c:'4c',  s:6, t:'(Retired) A Graphical Calculator' },
		{ c:'5a',  s:6, t:'Methods' },
		{ c:'5b',  s:5, t:'Parameters Passing and Global Variables' },
		{ c:'5c',  s:6, t:'ODEs (Outrageous Destinations in Europe)' },
		{ c:'6a',  s:5, t:'Object-Oriented Programming (OOP)' },
		{ c:'6b',  s:5, t:'Instance Methods' },
		{ c:'6c',  s:6, t:'(Retired) A GUI Mortgage Calculator' },
		{ c:'7a',  s:8, t:'Deeper into Classes' },
		{ c:'7b',  s:5, t:'Interaction of Objects and Methods' },
		{ c:'8a',  s:5, t:'Arrays and a Sort Algorithm' },
		{ c:'8b',  s:5, t:'Compound Data Types: Arrays in Classes' },
		{ c:'9a',  s:2, t:'Search Algorithms and Stack Data Structures' },
		{ c:'9b',  s:3, t:'Recursion and a Binary Search Algorithm' },
		{ c:'9c',  s:3, t:'(Retired) A GUI Pulse Meter' },
		{ c:'10a', s:4, t:'Pointers and Dynamic Memory' },
		{ c:'10b', s:4, t:'Older C Style Strings (Char Arrays)' }
	],
	'2b':[
		{ c:'1a',  s:8, t:'Classes, Strings, and Default Parameters' },
		{ c:'1b',  s:7, t:'Review and Analysis of an OOP Project' },
		{ c:'2a',  s:7, t:'Addresses, Pointers, and Dynamic Memory Allocation' },
		{ c:'2b',  s:7, t:'Sorting, Recursion, and Binary Search' },
		{ c:'3a',  s:8, t:'Cellular Automata, Life, and Binary Ops' },
		{ c:'3b',  s:7, t:'Multi-Dimensional Arrays and Stacks' },
		{ c:'4a',  s:5, t:'Introduction to Inheritance' },
		{ c:'4b',  s:3, t:'Implementing Inheritance' },
		{ c:'4c',  s:8, t:'C++ GUIs' },
		{ c:'5a',  s:6, t:'Operator Overloading' },
		{ c:'5b',  s:5, t:'Designing and Throwing Exceptions' },
		{ c:'6a',  s:4, t:'Polymorphism' },
		{ c:'6b',  s:7, t:'Copy Constructor and Deep Copies' },
		{ c:'7a',  s:5, t:'The Linked List ADT' },
		{ c:'7b',  s:6, t:'STL Container Class Templates' },
		{ c:'8a',  s:5, t:'Custom Class Templates' },
		{ c:'8b',  s:4, t:'Template Instantiation and Subclassing' },
		{ c:'9a',  s:6, t:'The Tree ADT' },
		{ c:'9b',  s:4, t:'I/O with Files and Streams' },
		{ c:'10a', s:5, t:'Multiple Inheritance' },
		{ c:'10c', s:4, t:'Interactive Graphics' }
	],
	'2c':[
		{ c:'1a',  s:9, t:'Introduction to Data Structures' },
		{ c:'1b',  s:9, t:'Templates and STL' },
		{ c:'2a',  s:4, t:'Implementing Vectors From Scratch' },
		{ c:'2b',  s:7, t:'Implementing Lists and Sparse Matrices' },
		{ c:'3a',  s:5, t:'Time Complexity' },
		{ c:'3b',  s:5, t:'Recursion; Log and Exponential Time' },
		{ c:'4a',  s:4, t:'The General Tree' },
		{ c:'4b',  s:5, t:'Binary Search Trees' },
		{ c:'5a',  s:6, t:'AVL Trees' },
		{ c:'5b',  s:6, t:'More AVL and Top-Down Splaying' },
		{ c:'6a',  s:3, t:'Separate Chaining Hash Tables' },
		{ c:'6b',  s:4, t:'Linear and Quadratic Probing' },
		{ c:'7a',  s:4, t:'Priority Queues and Bin Heaps' },
		{ c:'7b',  s:2, t:'Heap Timing and Heap Sort (Part 1)' },
		{ c:'8a',  s:4, t:'Non-NLogN Sorts: Insertion and Shell' },
		{ c:'8b',  s:4, t:'NLogN Sorts: Mergesort and Heapsort' },
		{ c:'9a',  s:6, t:'Quicksort and Indirect Sorting' },
		{ c:'9b',  s:4, t:'STL Survey: Sets, Maps, Priority Queues, & More' },
		{ c:'10a', s:6, t:'Graph Theory Basics and a Working Template' },
		{ c:'10b', s:3, t:'Shortest Paths: Dijkstra Implemented' },
		{ c:'11a', s:5, t:'Minimum Spanning Trees: Kruskal Implemented' },
		{ c:'11b', s:2, t:'A Maximum Flow Algorithm and Farewell' }
	],
	'3a':[
		{ c:'1a',  s:5, t:'The Programming Experience' },
		{ c:'1b',  s:2, t:'Compiling and Running' },
		{ c:'2a',  s:7, t:'Simple Python Programs' },
		{ c:'2b',  s:7, t:'Data Types' },
		{ c:'3a',  s:5, t:'User Input and Selection' },
		{ c:'3b',  s:4, t:'Logic' },
		{ c:'4a',  s:5, t:'Repetition' },
		{ c:'4b',  s:4, t:'Formatting' },
		{ c:'5a',  s:6, t:'Methods and Functions' },
		{ c:'5b',  s:6, t:'Parameters Passing and Global Variables' },
		{ c:'6a',  s:5, t:'Object-Oriented Programming (OOP)' },
		{ c:'6b',  s:6, t:'Instance Methods' },
		{ c:'7a',  s:8, t:'Deeper into Classes' },
		{ c:'7b',  s:5, t:'Interaction of Objects and Methods' },
		{ c:'8a',  s:6, t:'Arrays and a Sort Algorithm' },
		{ c:'8b',  s:5, t:'Compound Data Types: Arrays in Classes' },
		{ c:'9a',  s:3, t:'Search Algorithms and Stack Data Structures' },
		{ c:'9b',  s:3, t:'Recursion and a Binary Search Algorithm' },
		{ c:'10a', s:3, t:'Tuples, Dictionaries, and I/O' },
		{ c:'10b', s:3, t:'Class Objects and Instance Attributes' }
	],
	'3b':[
		{ c:'1a',  s:8, t:'Classes, Strings, and Named Parameters' },
		{ c:'1b',  s:7, t:'Review and Analysis of an OOP Project' },
		{ c:'2a',  s:5, t:'Arrays, Stacks, Queues, and Exceptions' },
		{ c:'2b',  s:7, t:'Sorting, Recursion, and Binary Search' },
		{ c:'3a',  s:6, t:'Cellular Automata, Life, and Binary Ops' },
		{ c:'3b',  s:4, t:'Multi-Dimensional Arrays and Stacks' },
		{ c:'4a',  s:5, t:'Introduction to Inheritance' },
		{ c:'4b',  s:6, t:'Implementing Inheritance' },
		{ c:'5a',  s:8, t:'Python GUIs' },
		{ c:'5b',  s:5, t:'Child Windows and GUI States' },
		{ c:'6a',  s:5, t:'Abstract Classes and Operator Overloading' },
		{ c:'6b',  s:5, t:'Error Handling' },
		{ c:'7a',  s:5, t:'Lambda Expressions and JSON Serialization' },
		{ c:'7b',  s:5, t:'Deep Copies' },
		{ c:'8a',  s:5, t:'Canvas Drawing and Containers' },
		{ c:'8b',  s:4, t:'Linked Lists' },
		{ c:'9a',  s:5, t:'General Trees' },
		{ c:'9b',  s:5, t:'Tree Manipulation' },
		{ c:'10a', s:5, t:'Variable Arguments and Method Resolution Order' },
		{ c:'10b', s:7, t:'Multiple Inheritance' },
		{ c:'11a', s:4, t:'C3 MRO Algorithm' }
	],
};

const urls = {
	base:'https://fgamedia.org/faculty/loceff/cs_courses/',
	'1a':{
		'5c':{
			1:'common/ODE/cs_COM_5c_1',
			2:'common/ODE/cs_COM_5c_2',
			3:'common/ODE/cs_COM_5c_3',
			4:'common/ODE/cs_COM_5c_4',
			5:'common/ODE/cs_COM_5c_5'
		}
	},
	'1b':{
		'2b':{
			6:'cs_1a/cs_1A_2b_6'
		},
		'3a':{
			2:'common/LIFE/cs_1and2B_3a_2',
			3:'common/LIFE/cs_1and2B_3a_3',
			4:'common/LIFE/cs_1and2B_3a_4',
			5:'common/LIFE/cs_1and2B_3a_5'
		},
		'7b':{
			2:'common/BARCODE/cs_1and2B_6b_3',
			5:'common/LIFE/cs_1and2B_bool_func_1',
			6:'common/LIFE/cs_1and2B_bool_func_2',
			7:'common/LIFE/cs_1and2B_bool_func_3'
		}
	},
	'1c':{
		'4a':{
			5:'cs_1b/cs_1B_9b_6'
		}
	},
	'2a':{
		'4a':{
			7:'cs_2a/cs_2A_4b_4'
		},
		'4b':{
			1:'cs_2a/cs_2A_8a_1',
			2:'cs_2a/cs_2A_8a_2',
			3:'cs_2a/cs_2A_8a_3',
			4:'cs_2a/cs_2A_8a_4',
			5:'cs_2a/cs_2A_8a_5'
		},
		'5c':{
			1:'common/ODE/cs_COM_5c_1',
			2:'common/ODE/cs_COM_5c_2',
			3:'common/ODE/cs_COM_5c_3',
			4:'common/ODE/cs_COM_5c_4',
			5:'common/ODE/cs_COM_5c_5'
		}
	},
	'2b':{
		'3a':{
			2:'common/LIFE/cs_1and2B_3a_2',
			3:'common/LIFE/cs_1and2B_3a_3',
			4:'common/LIFE/cs_1and2B_3a_4',
			5:'common/LIFE/cs_1and2B_3a_5'
		},
		'6b':{
			2:'common/BARCODE/cs_1and2B_6b_3',
			5:'common/LIFE/cs_1and2B_bool_func_1',
			6:'common/LIFE/cs_1and2B_bool_func_2',
			7:'common/LIFE/cs_1and2B_bool_func_3'
		}
	},
	'2c':{},
	'3a':{},
	'3b':{
		'3a':{
			2:'common/LIFE/cs_1and2B_3a_2',
			4:'common/LIFE/cs_1and2B_3a_4',
			5:'common/LIFE/cs_1and2B_3a_5'
		},
		'7b':{
			2:'common/LIFE/cs_1and2B_bool_func_1',
			3:'common/LIFE/cs_1and2B_bool_func_2',
			4:'common/LIFE/cs_1and2B_bool_func_3'
		}
	},
};

class TasksCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	// log() {
	// 	this.tasks.forEach(function(task) {
	// 		console.log(task);
	// 	})
	// }

	// 0.
	log() {
		this.tasks.forEach((task) => {
			// some code here
			// and here
			console.log(task);
		});
	}

	// 1.
	log1() {
		this.tasks.forEach((task, index) => console.log(task, index));
	}

	// 2. if only one argument
	log2() {
		this.tasks.forEach(task => console.log(task));
	}

	// 3. no arguments
	log3() {
		this.tasks.forEach(() => console.log('some strnig here'));
	}

	// **** IMPORTANT NOTE
	// when using the arrow syntax the 'this' keyword inside the function
	// is pointing to THE CURRENT CLASS, NOT THE GLOBAL OBJ as it used to.
	// *****
	log4() {
		this.tasks.forEach(task => console.log(this));	// TaskCollection
	}
}

class Task {}

(new TasksCollection([new Task, new Task, new Task])).log();
(new TasksCollection([new Task, new Task, new Task])).log1();
(new TasksCollection([new Task, new Task, new Task])).log2();
(new TasksCollection([new Task, new Task, new Task])).log3();
(new TasksCollection([new Task, new Task, new Task])).log4();
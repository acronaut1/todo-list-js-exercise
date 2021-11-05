
function newTask(title, description) {
  // taskTitles.push(title);
  // taskDescriptions.push(description);
  // taskComplete.push(false);
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// prints out the provided taks's details..
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// Marks the provided task as completed..
function completeTask(task) {
  task.complete = true;
}


// DRIVER CODE BELOW


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


logTaskState(task1); // **Clean cat litter has not been completed**
completeTask(task1);
logTaskState(task1); // **Clean cat litter has been completed..


console.log(tasks);



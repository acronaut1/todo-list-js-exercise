
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


/*
// Anxiety = Overestimation of our circumstance
//           -----------------------------------
//           Underestimate our ability to cope

// Think about whaqt you're thinking about
// - journaling .. to track thinking..Think
// Ask yourself what you need.
// What do I need to help soothe myself..

//Cognitive Behavioural Therapy Triangle..
A.N.T - Automatic Negative Thoughts

        Thoughts
Behaviours    Feelings

proactive ways to address anxiety:
  -proactive tools to add to your routine:
- meditate / reflection / journaliing
- exercise
- efficient sleep
- eating nutrious meals
- connect with support/therapy..

Coping Statement for Anxiety:
"I am safe in my body"
"This feeling is uncomfortable but I am not in danger."
"It's okay, I am safe, this alarm system is not needed right now"
"I allow myself to slow down and breathe"
"This feeling will pass.."

Self-Awareness
- Pause, take a deep breath.
- Ask yourself, what emotions am I noticing.
- How can I respond to this emotion in a healthy way..

Meditation Apps:
- Calm App,
- Headspace app
- Mindshift App..

*/


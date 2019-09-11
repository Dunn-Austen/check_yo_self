class TodoList {
    constructor(task){
      this.id = task.id;
      this.title = task.title;
      this.tasks = task.tasks;
    }
    
    updateTask(event){
      console.log("Method Running")
      if (event.target.src === "http://127.0.0.1:3000/images/checkbox.svg"){
          console.log("Get Here?")
          event.target.src = "http://127.0.0.1:3000/images/checkbox-active.svg";
          event.target.parentElement.classList.add('checkoff_task');
      } else if (event.target.src === "http://127.0.0.1:3000/images/checkbox-active.svg"){
            event.target.src = "http://127.0.0.1:3000/images/checkbox.svg";
            event.target.parentElement.classList.remove("checkoff_task");
      } else return
    }

    toggleUrgent(event) {
      if (event.target.src === "http://127.0.0.1:3000/images/urgent.svg") {
        event.target.src = "http://127.0.0.1:3000/images/urgent-active.svg";
        event.target.parentElement.parentElement.classList.add('js__task--card--urgent');
      } else if (event.target.src = "http://127.0.0.1:3000/images/urgent-active.svg") {
            event.target.src = "http://127.0.0.1:3000/images/urgent.svg";
            event.target.parentElement.parentElement.classList.remove("js__task--card--urgent");
        }
      }
    }
// http://127.0.0.1:3000/images/active-lightning.svg

// https://dunn-austen.github.io/check_yo_self/images/checkbox.svg

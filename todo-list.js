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

}
// http://127.0.0.1:3000/images/checkbox.svg

// https://dunn-austen.github.io/check_yo_self/images/checkbox.svg

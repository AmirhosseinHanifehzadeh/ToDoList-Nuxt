<template>
  <div>
    <the-notification @closeNotification="closeNotification" v-if="showNotification" class="transition" />
    <div class="my-5 ml-[50%] translate-x-[-30%]">
      <to-do-input @add="addTask" :editing-task="editingTask" />
    </div>
    <h1 class="text-xl mx-auto flex justify-center">tasks</h1>
    <ul class="tasks w-3/5 my-0 mx-auto mt-10">
      <to-do-list v-for="task in tasks" :key="task" :title="task" @delete="deleteTask" @done="doneTask"
        @edit="editTask" />
    </ul>
    <h1 class="text-xl mx-auto flex justify-center my-10">done</h1>
    <ul class="tasks w-3/5 my-0 mx-auto mt-10">
      <did-list v-for="didtask in didTaskList" :key="didtask" :title="didtask" :didTitle="didtask"
        @deleteDidTask="deleteDidTask" @uncheck="uncheckTask" />
    </ul>
  </div>
</template>


<script>
import DidList from "../components/DidItem.vue";
import ToDoList from "../components/ToDoItem.vue";
import ToDoInput from "../components/ToDoInput.vue";
import TheNotification from "../components/Notification.vue";

export default {
  name: 'IndexPage',
  components: {
    DidList,
    ToDoList,
    ToDoInput,
    TheNotification
  },

  data() {
    return {
      tasks: [],
      didTaskList: [],
      showNotification: false
    };
  },
  methods: {
    addTask(taskTitle) {
      this.tasks.push(taskTitle);
      this.showNotification = true
      setTimeout(() => {
        this.showNotification = false
      }, 4000);
      this.$emit('show')
    },
  
    deleteTask(title) {
      this.tasks = this.tasks.filter(value => value !== title);
    },
    doneTask(title) {
      this.tasks = this.tasks.filter(value => value !== title);
      this.didTaskList.push(title);

    },
    deleteDidTask(title) {
      this.didTaskList = this.didTaskList.filter(value => value !== title);
    },
    uncheckTask(title) {
      this.didTaskList = this.didTaskList.filter(value => value !== title);
      this.tasks.push(title);
    },

    editTask(title) {
      this.tasks = this.tasks.filter(value => value !== title);
      this.editingTask = title;
    },

    closeNotification(){
      this.showNotification = false;
    }
  },

}
</script>
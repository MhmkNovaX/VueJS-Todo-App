<template>
    <ul>
        <li @click="doneTrigger(task.id)" :class="[task.done && 'completed', 'task', 'container']" v-for="(task, i) in tasks" :key="i">
            {{task.title}}
            <DeleteTask @TaskDeleted="$emit('TaskDeleted', task.id)" :task="task" />
        </li>
    </ul>
</template>

<script>
import axios from 'axios'

import DeleteTask from './DeleteTask.vue'

export default {
    name: "TasksList",
    props: ["tasks"],
    components: { DeleteTask },
    methods: {
        doneTrigger(id) {
            const task = this.tasks.find(task => task.id === id)
            axios.put(`http://localhost:3000/tasks/${id}`, { ...task, done: !task.done })
                .then(res => res.data)
                .then(res => this.$emit("Done-Triggred", res.id))
        }
    }
}
</script>

<style scope>
    .fas {
        color: red;
    }
    .task {
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }
    .task.completed {
        border-left: 5px solid green;
        text-decoration: line-through;
    }
    .task h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
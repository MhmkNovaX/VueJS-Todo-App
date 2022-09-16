<template>
    <AddTask @Task-Created="addTask" />
    <TasksList @Done-Triggred="doneTrigger" @TaskDeleted="deleteTask" :tasks="tasks" />
</template>

<script>
import axios from 'axios'

import TasksList from '@/components/TasksList.vue'
import AddTask from '@/components/AddTask.vue'

export default {
    name: 'HomePage',
    components: { TasksList, AddTask },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        addTask(data) {
            this.tasks = [...this.tasks, data]
        },
        doneTrigger(id) {
            this.tasks = this.tasks.map(task => {
                if (task.id == id) {
                    return {...task, done: !task.done }
                }
                return task
            })
        }
    },
    created() {
        axios.get('http://localhost:3000/tasks')
            .then(res => res.data.map(task => this.tasks.push(task)))
    }
}
</script>
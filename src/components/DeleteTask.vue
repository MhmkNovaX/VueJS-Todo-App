<template>
    <button class="btn" @click="deleteTask">Delete!</button>
</template>

<script>
import axios from 'axios'

export default {
    name: "DeleteTask",
    props: ["task"],
    methods: {
        deleteTask() {
            confirm("Are you sure you want to delete this task?") &&
                (
                    axios.delete(`http://localhost:3000/tasks/${this.task.id}`),
                    this.$emit("TaskDeleted", this.task.id)
                )
        }
    }
}
</script>

<style scope>
    * {
        text-decoration: none;
    }
</style>
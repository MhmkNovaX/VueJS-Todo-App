<template>
    <form @submit="submitHandler" class="add-form">
        <div class="form-control">
        <label for="title">Title: </label>
        <input id="title" type="text" v-model="title" />
        </div>
        <button class="btn btn-block" type="submit">Add Task!</button>
        
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: "AddTask",
    data() {
        return {
            title: '',
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault()
            if (this.title === '') {
                alert('Please Fill Title!')
            } else {
                const data = { title: this.title, reminder: false }
                axios.post('http://localhost:3000/tasks',
                    data)
                    .then(res => res.data)
                    .then(res => this.$emit("Task-Created", res))
                    this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    .add-form {
      margin-bottom: 40px;
    }
    .form-control {
      margin: 20px 0;
    }
    .form-control label {
      display: block;
    }
    .form-control input {
      width: 100%;
      height: 40px;
      margin: 5px;
      padding: 3px 7px;
      font-size: 17px;
    }
    .form-control-check {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .form-control-check label {
      flex: 1;
    }
    .form-control-check input {
      flex: 2;
      height: 20px;
    }
</style>
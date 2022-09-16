<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
}
</script>

<style scoped>
    a {
      color: #333;
    }
    footer {
      margin-top: 30px;
      text-align: center;
    }
    .links {
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 30px;
    }
</style>
<template>
    <article>
    <h3>Hi There 👋</h3>
    <a href="https://github.com/MhmkNovaX" target="_blank">
        <img class="img" src="../assets/photo_2022-07-28_01-41-38.jpg" />
    </a>
    <p>This Is An Simple Todo App Created By Mohammad Hosein Moghddam Khah <abbr>(NovaX)</abbr> To Test VueJS Framework.</p>
    </article>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
    article {
        display: grid;
        place-items: center;
        padding: 30px;
    }
    a {
        
        display: grid;
        place-items: center;
    }
    .img {
        width: 50%;
        width: 50%;
        margin: 30px;
    }
</style>
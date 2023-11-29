<template>
    <div class="w-100 d-flex justify-center">
        <nav class="d-flex flex-column align-center">
            <router-link to="/">Lista de atividades</router-link>
            <div class="border-nav"></div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>
    nav {
        width: 100%;
        margin-bottom: 25px;
    }

    nav a {
        text-decoration: none;
        padding: 10px 0;
        font-weight: 700;
        color: white;
    }

    .border-nav {
        width: 100%;
        height: 3px;
        border-radius: 10px;
        background-color: white;
    }
</style>
<template>
    <div id="app">
        <base-Header/>
        <router-view/>
        <base-Footer/>
    </div>
</template>

<script>
import baseHeader from './components/Header/baseHeader.vue'
import baseFooter from './components/Header/baseFooter.vue'

export default {
    name: 'App',
    components: {
        baseHeader,
        baseFooter
    },
    setup() {
        return {

        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

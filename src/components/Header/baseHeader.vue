<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
        <router-link to="/">Home</router-link>
    </el-menu-item>
    <el-menu-item index="2">
        <router-link to="/aboutPanel">About Us</router-link>
    </el-menu-item>
    <el-menu-item index="3">Products</el-menu-item>
    <el-menu-item index="4">
        <router-link to="/adminPage">Admin Panel</router-link>
    </el-menu-item>
    <el-menu-item index="5">Contact Us</el-menu-item>
</el-menu>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const activeIndex = ref('1')
        const handleSelect = () => {}
        return {
            activeIndex,
            handleSelect
        }
    }
}
</script>

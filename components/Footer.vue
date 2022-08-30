<template>
    <footer class="footer flex w-full h-20 items-center fixed bottom-0 bg-black text-white">
        <div class="container w-11/12 justify-center flex mx-auto">
            <nuxt-link to="/" class="hover:scale-110 transition-all">home</nuxt-link>
            <p class="mx-auto w-fit">©️ copyright to AHHM</p>
            <nuxt-link to="/about" class=" hover:scale-110 transition-all">about us</nuxt-link>
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'TheFooter'
    }
</script>
<template>
    <div>
        <weather />
        <the-header />
        <Nuxt />
        <the-footer />
    </div>

</template>

<script>
import TheHeader from '../components/Header.vue';
import TheFooter from "../components/Footer.vue";
import Weather from "../components/Weather.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        Weather
    },
}

</script>

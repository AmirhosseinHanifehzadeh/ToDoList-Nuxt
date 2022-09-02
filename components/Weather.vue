<template>
    <div v-if="this.informations"
        class="weather-card absolute flex px-3 mt-3 ml-3  text-white rounded justify-start items-center">
        <div class="icon">
            <img :src="'http://openweathermap.org/img/wn/' + this.informations.weather[0].icon + '.png'"
                class="icon-img">
        </div>
        <div class="info">
            <div class="city">{{  this.informations.name  }}</div>
            <div class="temp">{{  this.informations.main.temp  }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            informations: undefined

        }
    },

    async fetch() {
        this.informations = await fetch('https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=9b5f36ed48bfe552e2610df7b09605eb&units=metric')
            .then(res => res.json())
    },

}
</script>


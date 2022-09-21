<template>
    <div v-if="this.informations"
        class="weather-card absolute flex px-3 mt-3 ml-3  text-white rounded justify-start items-center">
        <div class="icon">
            <img :src="'http://openweathermap.org/img/wn/' + this.informations.weather[0].icon + '.png'"
                class="icon-img">
        </div>
        <div class="info">
            <div class="city">tehran</div>
            <div class="temp">{{  this.informations.main.temp  }}</div>
        </div>
    </div>
</template>

<script>
import { onUnmounted } from 'vue';

export default {
    data() {
        return {
            informations: undefined

        }
    },

    beforeMount(){
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347&appid=9b5f36ed48bfe552e2610df7b09605eb&units=metric')
            .then(res => res.json())
            .then(data => this.informations = data)
    },

}
</script>


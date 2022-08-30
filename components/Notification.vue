<template>
    <div class="notification-container absolute w-[380px] h-[50px] bg-gray flex right-0 top-3 items-center px-2 rounded justify-between  text-black" id="notification">
        <div class="notif-text">task added successfully</div>
        <font-awesome-icon :icon="['fas', 'xmark']"  @click="closeNotif" class="svg scale-110 relative right-1"/>
    </div>
</template>


<script>
export default{
    methods:{
        closeNotif(){
            this.$emit('closeNotification')
        }
    },

    props: ['editingStatus']
}
</script>

<style scoped>
.svg{
    color: #EB1D36;
}
</style> 
<template>
    <span>{{seconds}}</span>
</template>

<script>
export default {
    data: () => ({
        seconds: 10,
        timer: null
    }),
    mounted: function() {
        this.timer = setInterval(() =>{
            this.countdown()
        }, 1000);
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    },
    methods: {
        countdown: function() {
            if(this.seconds < 2) {
                this.seconds = null;
                clearInterval(this.timer);
            } else {
                this.seconds = this.seconds - 1;
            }
        }
    }
}
</script>

<template>
    <div class="info-list" :class="[info_list ? 'active' : '']">

    </div>
</template>

<script>
export default {
    components: {

    },
    computed: {
        info_list() {
            return this.$store.state.initialState.info_list
        }
    }
}
</script>
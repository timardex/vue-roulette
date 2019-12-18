<template>
    <div :class="`no-more-bets-overlay ${disabled_btn}`">
        No more Bets!
    </div>
</template>

<script>
export default {
    computed: {
        disabled_btn() {
            return this.$store.state.initialState.disabled_btn
        },
    }
}
</script>
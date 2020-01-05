<template>
    <div :class="`no-more-bets-overlay ${disabled_btn}`">
        No more Bets!
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'disabled_btn'
        ])
    }
}
</script>
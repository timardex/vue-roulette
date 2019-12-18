<template>
    <div class="text-center max-width btn-box">
        <button v-if="number_checked.length > 0 || outside_bets_names.length > 0" :class="`btn btn-primary ${disabled_btn}`">{{remove_bet_text}}</button>
        <button
            :class="`btn btn-primary ${disabled_spin}`">
            {{button_text}}
        </button>
    </div>
</template>

<script>
export default {
    computed: {
        remove_bet_btn() {
            return this.$store.state.initialState.remove_bet_btn
        },
        remove_bet_text() {
            return this.$store.state.initialState.remove_bet_text
        },
        spin_btn() {
            return this.$store.state.initialState.spin_btn
        },
        disabled_spin() {
            return this.$store.state.initialState.disabled_spin
        },
        disabled_btn() {
            return this.$store.state.initialState.disabled_btn
        },
        button_text() {
            return this.$store.state.initialState.button_text
        },
        number_checked() {
            return this.$store.state.initialState.number_checked
        },
        outside_bets_names() {
            return this.$store.state.initialState.outside_bets_names
        },
        ball_effect() {
            return this.$store.state.initialState.ball_effect
        },
        show_timer() {
            return this.$store.state.initialState.show_timer
        },
    }
}
</script>
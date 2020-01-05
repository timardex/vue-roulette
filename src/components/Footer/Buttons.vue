<template>
    <div class="text-center max-width btn-box">
        <button v-if="number_checked.length > 0 || outside_bets_names.length > 0" :class="`btn btn-primary ${disabled_btn}`" @click="removeBets">{{remove_bet_text}}</button>
        <button
            :class="`btn btn-primary ${disabled_spin}`"
            @click="spinBall">
            {{button_text}} <CountdownTimer v-if="show_timer"/>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CountdownTimer from '@/components/Footer/CountdownTimer'
export default {
    components: {
        CountdownTimer
    },
    computed: {
        ...mapState([
            'remove_bet_btn',
            'remove_bet_text',
            'spin_btn',
            'disabled_spin',
            'disabled_btn',
            'button_text',
            'number_checked',
            'outside_bets_names',
            'show_timer',
        ])
    },
    methods: {
        removeBets: function() {
            this.$store.dispatch('removeBets');
        },
        spinBall: function() {
            this.$store.dispatch('spinBall');

            setTimeout(() => {
                this.$store.dispatch('noMoreBets');
            }, 10000);

            setTimeout(() => {
                this.$store.dispatch('gameResult');
            }, 19500);
        }
    }
}
</script>
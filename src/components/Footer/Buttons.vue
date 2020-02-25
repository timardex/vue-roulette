<template>
    <div class="text-center max-width btn-box">
        <button v-if="number_checked.length > 0 || outside_bets_names.length > 0" :class="`btn btn-primary ${disabled_btn}`" @click="removeBets">{{remove_bet_text}}</button>
        <button
            v-if="current_chip > 0"
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
            'current_chip'
        ])
    },
    methods: {
        removeBets () {
            this.$store.dispatch('removeBets');
        },
        spinBall () {
            this.$store.dispatch('spinBall');

            setTimeout(() => {
                this.$store.dispatch('noMoreBets');
            }, 10000);

            setTimeout(() => {
                this.$store.dispatch('gameResult');
            }, 13000);
        }
    }
}
</script>
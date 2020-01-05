<template>
    <div class="info-list-inner">
        <div class="inner-list">
            <div class="win-lose styled-number">
                <div class="winning-with" v-if="winning_with.length > 0">
                    Congrats! You won with:
                    <ul>
                        <li v-for="(item, index) in winning_with" :key="index">
                            {{item}}
                        </li>
                    </ul>
                </div>
                <div class="info-before-spin" v-else>Place your bets please! <small>You can place your bets until <i><b>No more bets</b></i> is called!</small></div>
            </div>
            <p class="text-center styled-number">Number <span :data-id="output_number">{{output_number}}</span> is:</p>
            <ul class="list-group">
                <li class="list-group-item">{{text_even_odd}}</li>
                <li :style="`background-color: ${text_number_color}`" class="list-group-item red-or-black">{{text_number_color}}</li>
                <li class="list-group-item">{{text_dozen}}</li>
                <li class="list-group-item">{{text_low_high}}</li>
                <li class="list-group-item">{{text_column}}</li>
                <li class="list-group-item">{{text_racetrack}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'output_number',
            'winning_with',
            'text_even_odd',
            'text_number_color',
            'text_dozen',
            'text_low_high',
            'text_column',
            'text_racetrack'
        ])
    }
}
</script>
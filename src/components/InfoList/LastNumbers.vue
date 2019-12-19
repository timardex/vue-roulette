<template>
    <div class="info-before-spin">
        Place your bets please! <small>You can place your bets until <i><b>No more bets</b></i> is called!</small>
        <b-row class="last-numbers" v-if="last_numbers.length !== 0">
            <b-col cols="12">
                <p class="text-center"><u>Last numbers are:</u></p>
            </b-col>
            <b-col cols="12">
                <span v-for="(item, index) in last_numbers" :key="index" :data-id="item" class="items">{{item}}</span>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    computed: {
        last_numbers() {
            return this.$store.state.initialState.last_numbers
        },
    }
}
</script>
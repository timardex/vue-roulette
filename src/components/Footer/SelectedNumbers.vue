<template>
    <div class="selected-numbers max-width" v-if="number_checked.length > 0 || outside_bets_names.length > 0">
        <p class="info styled-number">
            <span v-for="(item, index) in number_checked" :key="index" :data-id="item">
                {{item}}
            </span>
        </p>
        <ul class="list-inline">
            <li v-for="(item, index) in outside_bets_names" :key="index" class="list-inline-item">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        number_checked() {
            return this.$store.state.initialState.number_checked
        },
        outside_bets_names() {
            return this.$store.state.initialState.outside_bets_names
        },
    }
}
</script>
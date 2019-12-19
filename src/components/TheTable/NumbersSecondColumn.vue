<template>
    <div class="second-column columns">
        <div v-for="item in number_second_column" :class="`form-check form-check-inline ${disabled_btn}`" :key="item.name">
            <label :class="`form-check-label number-${item.name}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name" :style="`color: ${item.color}`">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
                <span class="dolly"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        number_second_column() {
            return this.$store.state.initialState.number_second_column
        },
        disabled_btn() {
            return this.$store.state.initialState.disabled_btn
        }
    },
    methods: {
        getBets: function(element) {
            this.$store.dispatch('getNumberBets', element);
        }
    }
}
</script>
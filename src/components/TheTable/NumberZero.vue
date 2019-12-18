<template>
    <div class="number-zero columns">
        <div v-for="item in number_zero" :class="`form-check form-check-inline ${disabled_btn}`" :key="item.name">
            <label :class="`form-check-label number-${item.name}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name" :style="`color: ${item.color}`">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
                <span className="dolly"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        number_zero() {
            return this.$store.state.initialState.number_zero
        },
        disabled_btn() {
            return this.$store.state.initialState.disabled_btn
        },
        chip_effect() {
            return this.$store.state.initialState.chip_effect
        }
    }
}
</script>
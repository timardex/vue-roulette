<template>
    <div class="one-2-one other-numbers">
        <div v-for="(item, index) in low_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="(item, index) in even_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="(item, index) in red_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="(item, index) in black_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="(item, index) in odd_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="(item, index) in high_numbers" class="form-check form-check-inline col-sm-2" :key="index">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        low_numbers() {
            return this.$store.state.initialState.low_numbers
        },
        even_numbers() {
            return this.$store.state.initialState.even_numbers
        },
        red_numbers() {
            return this.$store.state.initialState.red_numbers
        },
        black_numbers() {
            return this.$store.state.initialState.black_numbers
        },
        odd_numbers() {
            return this.$store.state.initialState.odd_numbers
        },
        high_numbers() {
            return this.$store.state.initialState.high_numbers
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
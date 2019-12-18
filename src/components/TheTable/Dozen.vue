<template>
    <div class="dozens other-numbers">
        <div v-for="item in dozen1_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in dozen2_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in dozen3_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
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
        dozen1_numbers() {
            return this.$store.state.initialState.dozen1_numbers
        },
        dozen2_numbers() {
            return this.$store.state.initialState.dozen2_numbers
        },
        dozen3_numbers() {
            return this.$store.state.initialState.dozen3_numbers
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
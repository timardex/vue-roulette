<template>
    <div class="racetrack other-numbers">
        <div v-for="item in cylinder_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in orphelin_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in voison_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in jeu0_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
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
        cylinder_numbers() {
            return this.$store.state.initialState.cylinder_numbers
        },
        orphelin_numbers() {
            return this.$store.state.initialState.orphelin_numbers
        },
        voison_numbers() {
            return this.$store.state.initialState.voison_numbers
        },
        jeu0_numbers() {
            return this.$store.state.initialState.jeu0_numbers
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
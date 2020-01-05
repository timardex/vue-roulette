<template>
    <div class="racetrack other-numbers">
        <div v-for="item in cylinder_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in orphelin_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in voison_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in jeu0_numbers" class="form-check form-check-inline col-sm-3" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'cylinder_numbers',
            'orphelin_numbers',
            'voison_numbers',
            'jeu0_numbers',
            'disabled_btn',
        ])
    },
    methods: {
        getBets (element) {
            this.$store.dispatch('getOutsideBets', element);
        }
    }
}
</script>
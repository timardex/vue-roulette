<template>
    <div class="column-line">
        <div v-for="item in column3_numbers" class="form-check form-check-inline" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.id}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in column2_numbers" class="form-check form-check-inline" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.id}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in column1_numbers" class="form-check form-check-inline" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.id}}</span>
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
            'column1_numbers',
            'column2_numbers',
            'column3_numbers',
            'disabled_btn'
        ])
    },
    methods: {
        getBets (element) {
            this.$store.dispatch('getOutsideBets', element);
        }
    }
}
</script>
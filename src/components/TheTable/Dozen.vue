<template>
    <div class="dozens other-numbers">
        <div v-for="item in dozen1_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in dozen2_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in dozen3_numbers" class="form-check form-check-inline col-sm-4" :key="item.name">
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
            'dozen1_numbers',
            'dozen2_numbers',
            'dozen3_numbers',
            'disabled_btn'
        ])
    },
    methods: {
        getBets: function(element) {
            this.$store.dispatch('getOutsideBets', element);
        }
    }
}
</script>
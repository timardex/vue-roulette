<template>
    <div class="one-2-one other-numbers">
        <div v-for="item in low_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in even_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in red_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in black_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in odd_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
            <label :class="`form-check-label ${disabled_btn}`" :for="`${item.id}`" :title="`${item.numbers}`">
                <input class="form-check-input" type="checkbox" :id="`${item.id}`" :value="`${item.id}`" @change="getBets(item)"/>
                <span class="number-name">{{item.name}}</span>
                <span v-if="item.checked" class="chip"></span>
            </label>
        </div>
        <div v-for="item in high_numbers" class="form-check form-check-inline col-sm-2" :key="item.name">
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
            'low_numbers',
            'even_numbers',
            'red_numbers',
            'black_numbers',
            'odd_numbers',
            'high_numbers',
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
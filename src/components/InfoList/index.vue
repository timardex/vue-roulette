<template>
    <div class="info-list" :class="[info_list ? 'active' : '']">
        <span class="close-this chevron" :class="[info_list ? 'right' : 'left']" @click="closeList"></span>
        <div class="the-list">
            <List v-if="output_number"/>
            <LastNumbers v-else/>
        </div>
    </div>
</template>

<script>
import List from '@/components/InfoList/List'
import LastNumbers from '@/components/InfoList/LastNumbers'
export default {
    components: {
        List, 
        LastNumbers
    },
    computed: {
        info_list() {
            return this.$store.state.initialState.info_list
        },
        output_number() {
            return this.$store.state.initialState.output_number
        }
    },
    methods: {
        closeList: function() {
            this.$store.dispatch('closeList')
        }
    }
}
</script>
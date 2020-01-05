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
import { mapState } from 'vuex'

import List from '@/components/InfoList/List'
import LastNumbers from '@/components/InfoList/LastNumbers'
export default {
    components: {
        List, 
        LastNumbers
    },
    computed: {
        ...mapState([
            'info_list',
            'output_number'
        ])
    },
    methods: {
        closeList () {
            this.$store.dispatch('closeList')
        }
    }
}
</script>
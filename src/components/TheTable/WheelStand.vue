<template>
    <div class="wheel-stand">
        <div class="wheel-box">
            <div class="ball-track"></div>
        </div>
        <div :class="`r-wheel ${rotate_wheel}`">
            <ul>
                <li 
                    v-for="(item, index) in wheel_numbers" 
                    :key="index" 
                    :class="`number number-${item.number}`"
                    :style="`border-top-color: ${item.color}`"
                    >
                    <span class="pit">{{item.number}}</span>
                </li>
            </ul>

            <div class="wheel-inner">
                <div class="wheel-inner-center"></div>
            </div>
        </div>
        <div :class="`r-ball ${rotate_ball}`"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {wheel_numbers} from './helpers'
export default {
    data: () => ({
        wheel_numbers
    }),
    computed: {
        ...mapState([
            'rotate_wheel',
            'rotate_ball'
        ])
    }
}
</script>
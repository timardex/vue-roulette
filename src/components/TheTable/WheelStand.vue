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
export default {
    data() {
        return{
            wheel_numbers: [
                {
                    number: 0,
                    color:  'green'
                },
                {
                    number: 32,
                    color: 'red'
                },
                {
                    number: 15,
                    color: 'black'
                },
                {
                    number: 19,
                    color:  'red'
                },
                {
                    number: 4,
                    color: 'black'
                },
                {
                    number: 21,
                    color:  'red'
                },
                {
                    number: 2,
                    color: 'black'
                },
                {
                    number: 25,
                    color:  'red'
                },
                {
                    number: 17,
                    color: 'black'
                },
                {
                    number: 34,
                    color:  'red'
                },
                {
                    number: 6,
                    color: 'black'
                },
                {
                    number: 27,
                    color:  'red'
                },
                {
                    number: 13,
                    color: 'black'
                },
                {
                    number: 36,
                    color:  'red'
                },
                {
                    number: 11,
                    color: 'black'
                },
                {
                    number: 30,
                    color:  'red'
                },
                {
                    number: 8,
                    color: 'black'
                },
                {
                    number: 23,
                    color:  'red'
                },
                {
                    number: 10,
                    color: 'black'
                },
                {
                    number: 5,
                    color:  'red'
                },
                {
                    number: 24,
                    color: 'black'
                },
                {
                    number: 16,
                    color:  'red'
                },
                {
                    number: 33,
                    color: 'black'
                },
                {
                    number: 1,
                    color:  'red'
                },
                {
                    number: 20,
                    color: 'black'
                },
                {
                    number: 14,
                    color:  'red'
                },
                {
                    number: 31,
                    color: 'black'
                },
                {
                    number: 9,
                    color:  'red'
                },
                {
                    number: 22,
                    color: 'black'
                },
                {
                    number: 18,
                    color:  'red'
                },
                {
                    number: 29,
                    color: 'black'
                },
                {
                    number: 7,
                    color:  'red'
                },
                {
                    number: 28,
                    color: 'black'
                },
                {
                    number: 12,
                    color:  'red'
                },
                {
                    number: 35,
                    color: 'black'
                },
                {
                    number: 3,
                    color:  'red'
                },
                {
                    number: 26,
                    color: 'black'
                },
            ]
        }
    },
    computed: {
        rotate_wheel() {
            return this.$store.state.initialState.rotate_wheel;
        },
        rotate_ball() {
            return this.$store.state.initialState.rotate_ball
        }
    }
}
</script>
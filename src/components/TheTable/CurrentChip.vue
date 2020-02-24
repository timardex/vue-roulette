<template>
  <div class="current-chip-container">
    <div class="chip-amount">
      <button class="btn btn-primary" @click="prevBet" v-if="output_number !== null && current_chip > 0">Previous bet</button>
      <p class="current-chip" v-if="current_chip > 0">You have <span>{{current_chip}}€</span></p>
      <p class="current-chip" v-else>Your out of money!</p>
      <p class="chip-won" v-if="chip_ammount_won">You won: <span>{{chip_ammount_won}}€</span></p>
    </div>

    <div class="reset-chips" v-if="current_chip <= 0">
      <button class="btn btn-primary" @click="resetChips">Give me more and let me gamble!</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
      ...mapState([
          'current_chip',
          'chip_ammount_won',
          'output_number',
      ])
  },
  methods: {
    resetChips () {
      this.$store.dispatch('resetChips');
    },
    prevBet () {
      this.$store.dispatch('prevBet');
    }
  }
}
</script>

<style lang="scss" scoped>
.current-chip-container {
  width: 100%;
  max-width: 768px;
  margin: auto;
  text-align: center;

  .chip-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 40px;
    margin-bottom: 1rem;

    .btn {
      position: absolute;
      top: 0; left: 0; bottom: 0;
      width: auto;
      margin: 0;
      font-weight: 700;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;

      &.chip-won {
        position: absolute;
        top: 0; right: 0; bottom: 0;
      }

      span {
          color: red;
          font-size: 2rem;
          line-height: 1rem;
          margin: 0 0 0 1rem;
      }
    }
  }

  .btn {
    margin: 0 0 1rem 0;
  }
}
</style>
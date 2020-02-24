<template>
  <div class="current-chip-container">
    <div class="chip-amount">
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
          'chip_ammount_won'
      ])
  },
  methods: {
    resetChips () {
      this.$store.dispatch('resetChips');
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

    p {
      display: flex;
      justify-content: center;
      align-items: center;

      &.chip-won {
        position: absolute;
        top: 0; right: 0;
      }

      span {
          color: red;
          font-size: 2rem;
          line-height: 1rem;
          margin: 0 0 0 1rem;
      }
    }
  }

  .reset-chips {
    .btn {
      margin: 0 0 1rem 0;
    }

  }
}
</style>
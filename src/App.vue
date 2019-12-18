<template>
    <div class="roulette-game">
        <b-container fluid>
            <Header />
            <div id="content" class="d-none d-sm-block">
                <TheTable />
            </div>
        </b-container>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TheTable from '@/components/TheTable'
export default {
  components: {
    Header,
    TheTable
  }
}
</script>

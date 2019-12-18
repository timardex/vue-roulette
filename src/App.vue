<template>
    <div class="roulette-game">
        <b-container fluid>
            <RotateDevice />
                <div id="content" class="d-none d-sm-block">
                    <Header />
                    <TheTable />
                </div>
        </b-container>
    </div>
</template>

<script>
import RotateDevice from '@/components/RotateDevice'
import Header from '@/components/Header'
import TheTable from '@/components/TheTable'
export default {
  components: {
    RotateDevice,
    Header,
    TheTable
  }
}
</script>

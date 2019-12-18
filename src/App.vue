<template>
    <div class="roulette-game">
        <b-container fluid>
            <Header />
            <div id="content" class="d-none d-sm-block">
                <TheTable />
                <Footer />
            </div>
        </b-container>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TheTable from '@/components/TheTable'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    TheTable,
    Footer
  }
}
</script>

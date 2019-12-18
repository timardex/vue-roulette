<template>
    <div class="roulette-game">
        <b-container fluid>
            <Header />
            <div id="content" class="d-none d-sm-block">
                <TheTable />
                <Footer />
                <InfoList />
            </div>
        </b-container>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TheTable from '@/components/TheTable'
import Footer from '@/components/Footer'
import InfoList from '@/components/InfoList'
export default {
  components: {
    Header,
    TheTable,
    Footer,
    InfoList
  }
}
</script>

<template>
    <b-row>
        <b-col>
            <Buttons />
            <SelectedNumbers />
        </b-col>
    </b-row>
</template>

<script>
import Buttons from '@/components/Footer/Buttons'
import SelectedNumbers from '@/components/Footer/SelectedNumbers'
export default {
    components: {
        Buttons,
        SelectedNumbers
    }
}
</script>
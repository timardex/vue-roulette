<template>
    <b-row>
        <b-col>
            <header class="d-none d-sm-block">
                <h1 class="text-center">Roulette Presentation
                    <small>Try your luck!</small>
                </h1>
            </header>

            <RotateDevice />
        </b-col>
    </b-row>
</template>

<script>
import RotateDevice from '@/components/Header/RotateDevice'
export default {
    components: {
        RotateDevice
    }
}
</script>
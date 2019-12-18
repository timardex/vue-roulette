<template>
    <b-row>
        <b-col>
            <div class="the-table">
                <WheelStand />
                <div class="the-table-inner">
                    <One2One />
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import WheelStand from '@/components/TheTable/WheelStand';
import One2One from '@/components/TheTable/One2One';
export default {
    components: {
        WheelStand,
        One2One
    }
}
</script>
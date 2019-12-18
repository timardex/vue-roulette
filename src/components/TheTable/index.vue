<template>
    <b-row>
        <b-col>
            <div class="the-table">
                <WheelStand />
                <div class="the-table-inner">
                    <NoMoreBets />
                    <One2One />
                    <Dozen />
                    <div class="all-numbers">
                        <div>
                            <NumberZero />
                        </div>
                        <div>
                            <NumbersThirdColumn />
                            <NumbersSecondColumn />
                            <NumbersFirstColumn />
                            <Column />
                        </div>
                    </div>
                    <Racetrack />
                </div>
            </div>
        </b-col>
    </b-row>
</template>

<script>
import WheelStand from '@/components/TheTable/WheelStand';
import NoMoreBets from '@/components/TheTable/NoMoreBets';
import One2One from '@/components/TheTable/One2One';
import Dozen from '@/components/TheTable/Dozen';
import NumberZero from '@/components/TheTable/NumberZero';
import NumbersFirstColumn  from '@/components/TheTable/NumbersFirstColumn';
import NumbersSecondColumn  from '@/components/TheTable/NumbersSecondColumn';
import NumbersThirdColumn  from '@/components/TheTable/NumbersThirdColumn';
import Column  from '@/components/TheTable/Column';
import Racetrack from '@/components/TheTable/Racetrack';

export default {
    components: {
        WheelStand,
        NoMoreBets,
        One2One,
        Dozen,
        NumberZero,
        NumbersFirstColumn,
        NumbersSecondColumn,
        NumbersThirdColumn,
        Column,
        Racetrack
    }
}
</script>
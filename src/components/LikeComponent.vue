<template>
    <div>
        <div class="mb-4">
            <span class="num">0</span>
        </div>
        <div>
            <Octicon :icon="thumbsup" :scale="15" class="icon"/>
        </div>
    </div>
</template>

<script>
//heart-outline
//heart
//thumbsup
import Octicon,{thumbsup} from "octicons-vue"

export default {
    components:{
        Octicon
    },
    data:function(){
        return{
            thumbsup
        }
    }
}
</script>

<style scoped>
.icon{
    width: 100px;
    height: 100px;
}

.num{
    font-size: 200px;
}

</style>
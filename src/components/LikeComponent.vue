<template>
    <div>
        <div class="mb-4">
        <!-- <transition
        name="bounce"
        enter-active-class="bounceLeft-enter"
        leave-active-class="bounceRight-leave"
        > -->
        <!-- <p v-if="show">hello</p>
        </transition> -->
                <span class="num">{{dbThumbsup.numThumbsup}}</span>

        </div>
        <div>
            <button class="btnThumbsup" @click="addNumThumbsup">
                <span >
                    <Octicon :icon="thumbsup" :scale="15" class="icon" />
                </span>
            </button>
        </div>
    </div>
</template>

<script>
//heart-outline
//heart
//thumbsup
import Octicon,{thumbsup} from "octicons-vue"
import "vue2-animate/dist/vue2-animate.min.css"
import {db} from "../db.js"

export default {
    components:{
        Octicon
    },
    data:function(){
        return{
            thumbsup,
            dbThumbsup:{},
            show:true
        }
    },
    firestore:{
        dbThumbsup:db.collection("thumbsup").doc("djNavpwojTHvJPwHkoxC")
    },
    methods:{
        async addNumThumbsup(){
            const ref= db.collection("thumbsup").doc("djNavpwojTHvJPwHkoxC");
            const doc=await ref.get();
            await ref.update({
                numThumbsup:doc.get("numThumbsup")+1
            })
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

/* .btn{
    background-color: transparent;
    border: none;
}

.btn:active{
    background-color: transparent;
    color:transparent
} */
button{
    background-color: transparent;
    border: none;
}

.octicon{
    display:inline-block;
    vertical-align: text-top;
    fill: peru;
}
</style>
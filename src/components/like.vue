<template>
    <div>
        <button v-if="liked" @click="toggleLikes" >Unlike</button>
        <button v-if="!liked" @click="toggleLikes" >Like</button>
        <div> Likes : {{likes}}</div>
    </div>
</template>

<script>  
import {mapGetters,mapMutations} from "vuex";
export default {
    computed:{
        ... mapGetters(["likes","liked"])
    },
    methods:{
        toggleLikes(){
            this.$store.dispatch('toggleLikes');
        }
    }
}
</script>


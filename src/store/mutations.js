const mutations = {
    toggleLike(state){
        state.liked = ! state.liked;
    },
    increaseLikes(state){
        state.likes += 1;
    },
    decreaseLikes(state){
        state.likes -= 1;
    }
}

export  default mutations;

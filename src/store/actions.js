const actions = {
 toggleLikes(context){
	    setTimeout(function() {
	        context.commit("toggleLike");
	        if(context.state.liked){
	            context.commit("increaseLikes");
	        } else {
	            context.commit("decreaseLikes");
	        }
	    }, 1000);
	}
}

export default actions;
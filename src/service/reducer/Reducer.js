const initialState={
    cardData:[]
}
export default function cardItems(initalState, action) {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...initialState,
                cardData:action.data
            }
    }
}
    

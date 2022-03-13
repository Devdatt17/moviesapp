export default function reducer(STATE = [],action){
    switch(action.type){
        case "VIEWMOVIES":
            return [...action.payload]
        default:
            return 0
    }
}
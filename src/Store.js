import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';



const dummyData =  [
        {
            "id": 1,
            "slug": "lorem-ipsum",
            "title": "lorem-ipsum",
            "status": "lorem-ipsum",
            "category": "lorem-ipsum"
        },
        {
            "id": 2,
            "slug": "lorem-ipsum",
            "title": "lorem-ipsum",
            "status": "lorem-ipsum",
            "category": "lorem-ipsum"
        },
        {
            "id": 3,
            "slug": "lorem-ipsum",
            "title": "lorem-ipsum",
            "status": "lorem-ipsum",
            "category": "lorem-ipsum"
        },
        {
            "id": 4,
            "slug": "lorem-ipsum",
            "title": "lorem-ipsum",
            "status": "lorem-ipsum",
            "category": "lorem-ipsum"
        },
        {
            "id": 5,
            "slug": "lorem-ipsum",
            "title": "lorem-ipsum",
            "status": "lorem-ipsum",
            "category": "lorem-ipsum"
        },
    ]
function Myapplication(state=dummyData,action){
    if(action.type==="Add"){
        const Final = action.payload.Data.find(each=>each.id===action.payload.Id)
        const Final1 = dummyData.map(each=>{
            if(each.id===action.payload.Id){
                return Final
            }
            return each
        })
        console.log(Final)
        return [...Final1]
    }
    return state

}

const Store = createStore(Myapplication, applyMiddleware(thunk));

export default Store
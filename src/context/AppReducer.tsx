// interface AppState {
//     acc_token: string,
//     animal_type: string,
//     breed: string,
//     size: string,
//     gender: string,
//     age: string,
//     adoption_status: string,
//     pet: object,
//     modal: boolean,
//     page: number,
//     total: number, 
// }

// type AccessToken = { type: 'ADD_ACCESS_TOKEN'; payload: string };
// type ChangeBreed = { type: 'CHANGE_BREED'; string}
// type ChangeStatus = { type: 'CHANGE_ADOPTION_STATUS'; string}

// type AppActions = AccessToken | ChangeBreed | ChangeStatus;

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_ACCESS_TOKEN":
            return {
                ...state,
                acc_token: action.payload
            }
        case "CHANGE_ANIMAL_TYPE":
        return {
            ...state,
            animal_type: action.payload
        }
        case "CHANGE_BREED":
            return {
                ...state,
                breed: action.payload
            }
        case "CHANGE_SIZE":
            return {
                ...state,
                size: action.payload
            }
        case "CHANGE_GENDER":
            return {
                ...state,
                gender: action.payload
            }  
        case "CHANGE_AGE":
            return {
                ...state,
                age: action.payload
            }
        case "CHANGE_ADOPTION_STATUS":
            return {
                ...state,
                adoption_status: action.payload
            }    
        case "CHANGE_TOTAL":
            return {
                ...state,
                total: action.payload
            }        
        case "PREVIOUS_PAGE":
        
            return {
                ...state,
                page: state.page - 1
            } 
        case "NEXT_PAGE":  
            return {
                ...state,
                page: state.page + 1
            }
        case "CHANGE_PET_SELECTED":  
        return {
            ...state,
            pet: action.payload
        }
        case "CHANGE_MODAL_STATE":
        return{
            ...state,
            modal: action.payload
        }
        default:
            return state;
    }
}
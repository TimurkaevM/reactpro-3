const initialState = {
    photos: [],
    users: [],
    photosLoad: false,
    usersLoad: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "photos/load/start" :
            return {
                ...state,
                photosLoad: true
            };
        case "photos/load/success":
            return {
                ...state,
                photos: action.payload,
                photosLoad: false
            }

        case "users/load/start" :
            return {
                ...state,
                usersLoad: true
            };
        case "users/load/success":
            return {
                ...state,
                users: action.payload,
                usersLoad: false
            }

        case "card/delete/start":
            return {
                ...state,
                photos: state.photos.map((photo) => {
                    if(photo.id === action.payload) {
                        return {
                            ...photo,
                            deleting:true,
                        }
                    }
                    return photo;
                })
            }

        case "card/delete/success":
            return {
                ...state,
                photos: state.photos.filter((photo)=> {
                    return action.payload !== photo.id;

                })
            }

        case "card/make/start":
            return {
                ...state,
                photos: state.photos.map(photo => {
                    if(action.payload === photo.id) {
                        return {
                            ...photo,
                            favorite:true,
                        }
                    }
                    return photo;
                })
            };

        case "card/make/success":
            return {
                ...state,
                photos: state.photos.map(photo => {
                    if(action.payload === photo.id) {
                        return {
                            ...photo,
                            title: "selected",
                            favorite: false
                        }
                    }
                    return photo;
                })
            }

        default:
            return state;
    }
}

export default reducer;
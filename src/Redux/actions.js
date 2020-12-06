export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({
            type: "photos/load/start",
        })

        fetch("https://jsonplaceholder.typicode.com/photos/?_limit=20")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "photos/load/success",
                    payload: json
                })
            })
    }
}

export const loadUsers = () => {
    return (dispatch) => {
        dispatch({
            type: "users/load/start",
        })

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "users/load/success",
                    payload: json
                })
            })
    }
}

export const removeCard = (id) => {
    return (dispatch) => {
        dispatch({
            type: "card/delete/start",
            payload: id,
        })

        fetch(`https://jsonplaceholder.typicode.com./photos/?_limit=20/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: "card/delete/success",
                    payload: id
                })
            })
    }
}

export const makeFavorite = (id) => {
    return (dispatch) => {
        dispatch({
            type: "card/make/start",
            payload: id,
        })

        fetch(`https://jsonplaceholder.typicode.com./photos/?_limit=20/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                title: "selected"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(() => {
                dispatch({
                    type: "card/make/success",
                    payload: id
                })
            })
    }
}
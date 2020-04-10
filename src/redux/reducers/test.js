

const todos = (state = 1111, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return action.text
        default:
            return state
    }
}

export default todos
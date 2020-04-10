export const test = text => ({
    type: 'ADD_TODO',
    text
})

export function doPost(text) {
    return function (dispatch) {
        dispatch(test("222"));
        setTimeout(function () {
            dispatch(test(text));
        }, 1000)
    }
}
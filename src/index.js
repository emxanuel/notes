function toggleShowElements(element) {
    element.classList.remove('notShow');
    if (!element.classList.toggle('hidden')) {
        element.style.display = "flex";
    } else {
        setTimeout(() => {
            element.style.display = "none";
        }, 300);
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        default:
            return state;
    }
}

export { toggleShowElements, reducer }
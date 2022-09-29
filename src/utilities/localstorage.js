const addToLS = (selectedBreak) => {
    // console.log(selectedBreak);
    localStorage.setItem('Break-Time', JSON.stringify(selectedBreak));

}

const getStoredBreak = () => {
    let breakTime = 0;
    const storedBreak = localStorage.getItem('Break-Time');
    if (storedBreak) {
        breakTime = JSON.parse(storedBreak);
    }
    return breakTime;

}


export { addToLS, getStoredBreak };
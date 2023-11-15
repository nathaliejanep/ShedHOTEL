export const determineSeason = () => {
    const date = new Date();
    const month = date.getMonth();
    let winter;

    // January - April
    if (month <= 4) {
        winter = true;

        // October - December
    } else if (month >= 10 && month <= 12) {
        winter = true;

        // May - September
    } else if (month >= 5 && month <= 9) {
        //summer
        winter = false;
    }

    return winter;
};

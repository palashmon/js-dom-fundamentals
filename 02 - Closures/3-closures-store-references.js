function getCourseId() {
    let courseId = 999;

    // This inner function will return the UPDATED courseId variable
    // It will return the current value of courseId, even after the changeTheID function changes it
    const getId = function() {
        return courseId;
    };

    // This inner function will change the outer function's variable anytime
    const setId = function(newCourseId) {
        console.log({ courseId, newCourseId });
        courseId = newCourseId;
    };

    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getId,
        setId
    };
}

const courseId = getCourseId(); // At this juncture, the courseId outer function has returned.
courseId.getId(); // 999
courseId.setId(888); // Changes the outer function's variable
courseId.getId(); // 888: It returns the updated courseId variable

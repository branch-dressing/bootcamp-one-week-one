function isYesOrNo(userAnswer) {
    const lowerCaseAnswer = userAnswer.toLowerCase();
    if (lowerCaseAnswer.startsWith('y') === true) {
        return true;
    } else if (lowerCaseAnswer.startsWith('n', 0) === true) {
        return false;
    }
}

export default isYesOrNo;
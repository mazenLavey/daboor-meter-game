
const getResult = ()=>{

    function getScore(triesSum) {
        let score = 1;
        if (triesSum <= 5) {
            score += triesSum;
        } else if (triesSum > 5 && triesSum <= 10) {
            score += ((triesSum * 2) + 10);
        } else if (triesSum > 10 && triesSum <= 15) {
            score += ((triesSum * 2) + 15);
        } else if (triesSum > 15 && triesSum <= 20) {
            score += ((triesSum * 3) + 24);
        } else {
            score += ((triesSum * 5) + triesSum);
        }
        return score;
    }

    function getBarColor(score) {
        let barColor;
        if (score <= 30) {
            barColor = { width: `${score}%`, backgroundImage: 'linear-gradient(to left, #06b306, #045104)' };
        } else if (score > 30 && score < 50) {
            barColor = { width: `${score}%`, backgroundImage: 'linear-gradient(to left, rgb(244 254 0), rgb(0 216 0))' };
        } else if (score > 50 && score < 80) {
            barColor = { width: `${score}%`, backgroundImage: 'linear-gradient(to left, rgb(255 0 0), rgb(245 255 0), rgb(0 221 0)' };
        } else if (score > 80) {
            barColor = { width: `${score}%`, backgroundImage: 'linear-gradient(to left, #bf1111, #ff2a2a)' };
        }
        return barColor;
    }

    return {getScore, getBarColor}
}

export default getResult;
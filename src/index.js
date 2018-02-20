// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    else if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    else {

        var coinsPrices = [50, 25, 10, 5, 1];
        var coinsNames = ['H', 'Q', 'D', 'N', 'P'];
        var result = new Object();

        for (var i = 0; i < coinsPrices.length; i++) {
            if (currency >= coinsPrices[i]) {
                result[coinsNames[i]] = Math.floor(currency / coinsPrices[i]);
                currency = currency % coinsPrices[i];
            }
        }

        return result;
    }

}

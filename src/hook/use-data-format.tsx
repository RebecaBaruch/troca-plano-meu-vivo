import { GetOffers, Offer } from "../types";

function useDataFormat() {

    const pricePeriod = (period: Offer | GetOffers) => {
        const recurringPeriod = 'ownerPlan' in period ? period.ownerPlan.recurringPeriod : period.recurringPeriod;

        switch(recurringPeriod){
            case 'daily':
              return '/dia';
            case 'weekly':
              return '/semana';
            case 'yearly':
              return '/ano';
            default:
              return '/mês';
          }
    }

    const priceFormat = (price: Offer | GetOffers | string) => {
        if (typeof price === 'string') {
            return `R$ ${price.replace('.', ',')}`;
        } 
        const monthlyPrices = 'monthlyPrices' in price ? price.monthlyPrices : price.ownerPlan.price;
        return `R$ ${monthlyPrices.replace('.', ',')}`;
    }

    return{
        pricePeriod,
        priceFormat,
    }
}

export default useDataFormat;
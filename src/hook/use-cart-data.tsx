import { useEffect, useState } from 'react';
import { GetOffers, Offer } from '../types';

function useCartData(){

    const [totalPrice, setTotalPrice] = useState('');

    //send Internet Plan selected to the session storage
    const sendInternetPlanSelected = (planItem: Offer) => {
        window.sessionStorage.setItem('plan-change-INTERNET_PLAN_SELECTED', JSON.stringify(planItem));
    }

    //get this data on offer on new plan page
    const takeInternetPlanSelected = (): Offer => {
        const getStorageData: string | null = window.sessionStorage.getItem('plan-change-INTERNET_PLAN_SELECTED');
        const getPlanValue = getStorageData
            ? JSON.parse(getStorageData)
            : {
                  offerId: '',
                  displayName: '',
                  monthlyPrices: '0,00',
                  description: '',
                  upload: '',
                  download: '',
                  subProducts: [],
              };

        return getPlanValue;
    };

    const sendOffersDetails = (item: Array<Offer>) => {
        window.sessionStorage.setItem('plan-change-OFFERS_DETAILS', JSON.stringify(item));
    };

    const takeOffersDetails = (): Array<Offer> => {
        const getSessionStorage: string | null = window.sessionStorage.getItem('plan-change-OFFERS_DETAILS');
        const getValue = getSessionStorage
            ? JSON.parse(getSessionStorage)
            : {
                  offerId: '',
                  displayName: '',
                  monthlyPrices: '0,00',
                  description: '',
                  upload: '',
                  download: '',
                  subProducts: [],
              };

        return getValue;
    };

    const sendAllOffers = (item: Array<GetOffers>) => {
        window.sessionStorage.setItem('plan-change-ALL_OFFERS', JSON.stringify(item));
    };

    const takeAllOffers = (): Array<GetOffers> => {
        const getStorageData: string | null = window.sessionStorage.getItem('plan-change-ALL_OFFERS');
        const getOfferValue = getStorageData
         ? JSON.parse(getStorageData)
            : [
                  {
                      isAvailable: '',
                      errorCode: '',
                      ownerPlan: {
                          id: '',
                          plan: '',
                          price: '',
                          title: '',
                          recurringPeriod: '',
                      },
                      bestOffer: {
                          offerId: '',
                          displayName: '',
                          monthlyPrices: '',
                          monthlyPricesFormatted: '',
                          description: '',
                          upload: '',
                          download: '',
                          subProducts: [],
                      },
                      otherOffers: [],
                  },
              ];

        return getOfferValue;
    };

    useEffect(() => {
        const getNewInternetPlan = takeInternetPlanSelected();
        const priceNewPlan = parseFloat(getNewInternetPlan.monthlyPrices.replace(',', '.'));

        const total = priceNewPlan;
        setTotalPrice(total.toFixed(2).replace('.', ','));
    }, [totalPrice])

    return {
        sendInternetPlanSelected,
        takeInternetPlanSelected,
        sendOffersDetails,
        takeOffersDetails,
        sendAllOffers,
        takeAllOffers,
        totalPrice,
    };
}

export default useCartData;
export type GetOffers = {
    isAvailable:   boolean;
    errorCode: string;
    ownerPlan: OwnerPlan;
    bestOffer: {
        offerId: string;
        displayName: string;
        monthlyPrices: string;
        description: string;
        recurringPeriod: 'daily' | 'weekly' | 'monthly' | 'yearly';
        upload: string;
        download: string;
        subProducts: Array<SubProducts>;
    };
    otherOffers: Array<Offer>;
}

type OwnerPlan = {
    id: string;
    plan: string;
    price: string;
    title: string;
    recurringPeriod: 'daily' | 'weekly' | 'monthly' | 'yearly';
};

type SubProducts = {
    category: string;
    name: string;
    url: string;
};

export type Offer = {
    offerId: string;
    displayName: string;
    monthlyPrices: string;
    description: string;
    recurringPeriod: 'daily' | 'weekly' | 'monthly' | 'yearly';
    upload: string;
    download: string;
    subProducts: Array<SubProducts>;
};

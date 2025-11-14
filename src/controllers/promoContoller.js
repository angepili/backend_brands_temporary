const { getPromo } = require('../services/promoData');

exports.promo = (req, res) => {
    try {
        
        const items = getPromo( req.params.storeId ) 

        const data = {
            items,
        }

        res.json( data );
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch promos' });
    }
};

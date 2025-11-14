const { getFlyers } = require('./../services/flyersData.js');

exports.flyers = (req, res) => {
    try {
        
        const { pageSize = 10, offset = 0 } = req.query;
        const pageSizeNum = parseInt( pageSize, 10 );
        const offsetNum = parseInt( offset, 0 );

        const flyers = getFlyers( req.params.promoId ) 
        const items = flyers.slice( offsetNum, offsetNum + pageSizeNum )
        const title = items[0].name;

        const data = {
            title,
            items,
            offset: offsetNum,
            totalCount: flyers.length,
            pageSize: items.length
        }

        res.json( data );
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flyers' });
    }
};

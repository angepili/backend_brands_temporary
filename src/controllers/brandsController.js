const { getBrands } = require('./../services/brandsData.js');

exports.brands = (req, res) => {
    try {
        
        const { pageSize = 10, offset = 0 } = req.query;
        const pageSizeNum = parseInt( pageSize, 10 );
        const offsetNum = parseInt( offset, 0 );

        const brands = getBrands() 
        const items = brands.slice( offsetNum, offsetNum + pageSizeNum )
    
        const data = {
            items,
            offset: offsetNum,
            totalCount: brands.length,
            pageSize: items.length
        }

        res.json( data );
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch brands' });
    }
};
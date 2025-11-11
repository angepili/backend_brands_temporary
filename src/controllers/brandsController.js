const { getBrands, getSubBrands } = require('./../services/brandsData.js');

exports.brands = (req, res) => {
    try {
        const brands = getBrands();
        res.json( brands );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flyers' });
    }
};

exports.subbrands = (req, res) => {
    try {
        const subBrands = getSubBrands( req.params.id );
        
        if (!subBrands.items || subBrands.items.length === 0) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        
        res.json( subBrands );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sub-brands' });
    }
};
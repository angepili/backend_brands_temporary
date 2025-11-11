const { getFlyers } = require('./../services/flyersData.js');

exports.flyers = (req, res) => {
    try {
        const flyers = getFlyers( req.params.id );
        
        if (!flyers.items || flyers.items.length === 0) {
            return res.status(404).json({ error: 'Flyers not found' });
        }
        
        res.json( flyers );
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flyers' });
    }
};
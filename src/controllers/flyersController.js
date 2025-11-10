const { getAllFlyers: getFlyers, getFlyerById } = require('./../services/flyersData');

exports.getAllFlyers = (req, res) => {
    try {
        const flyers = getFlyers();
        res.json(flyers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flyers' });
    }
};

exports.getFlyer = (req, res) => {
    try {
        const flyer = getFlyerById(req.params.id);
        if( !flyer)return res.status(404).json({ error: 'Flyer not found'})

        res.json(flyer);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flyer' });
    }
};


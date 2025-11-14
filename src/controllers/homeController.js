const { ENDPOINTS } = require('./../services/homeData')

exports.home = (req, res) => {
    try {

        const fullUrl = req.protocol + '://' + req.get('host');
        const data = ENDPOINTS( fullUrl );

        res.json( data );
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch home' });
    }
};

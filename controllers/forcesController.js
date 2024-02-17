import axios from 'axios'
export const problemsByRatingController = async (req, res) => {
    try {
        const { handle } = req.query;
        const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
        res.json(response.data);
    } catch (error) {
        // console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in grtting problems solved',
            error
        })
    }
}

export const ratingController = async (req, res) => {
    try {
        const { handle } = req.query;
        const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
        res.json(response.data);
    } catch (error) {
        // console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in grtting problems solved',
            error
        })
    }
}

export const userInfoController = async (req, res) => {
    try {
        const { handle } = req.query;
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handle}`);
        res.json(response.data);
    } catch (error) {
        // console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in grtting problems solved',
            error
        })
    }
}
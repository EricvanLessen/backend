const DB_USER = "ericvanlessen"
const DB_PASSWORD = "s8MthQouhWALuOnJ"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0.1qzfncf.mongodb.net"

exports.DB_URI=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_HOST}/${DB_NAME}?retryWrites=true&w=majority`





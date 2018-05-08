import axios from 'axios';

const artsyApiUrl = "https://api.artsy.net:443/api/artworks?";
const clientId = 'ad9bc5d24a228427fbfc';
const clientSecret = '5d90b9ccea4cc0ccfb0224ea46a35054';
const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token'

const initialState = {
    artData: [],
    nextPage: "",
    loading: true,
    errMsg: ""
}
const artworkReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ART":
            return action.state;
        case "GET_NEXT_SET":
            return action.state;
        default:
            return state;
    }
}

export const getToken = () => {
    return (dispatch) => {
        axios.post(apiUrl, { client_id: clientId, client_secret: clientSecret })
            .then(response => {
                const { token } = response.data;
                axios.get(artsyApiUrl + `&xapp_token=${token}`)
                    .then(response => {
                        const { artworks } = response.data._embedded;
                        const { href } = response.data._links.next;
                        dispatch({
                            type: "GET_ART",
                            state: {
                                artData: artworks,
                                nextPage: href,
                                loading: false
                            }
                        })
                    })
            });
    }
}

export const getNextPage = (nextPageURL) => {
    return (dispatch) => {
        axios.get(nextPageURL)
            .then(response => {
                const { artworks } = response.data._embedded;
                const { nextHref } = response.data._links.next;
                dispatch({
                    type: "GET_NEXT_SET",
                    state: {
                        artData: artworks,
                        nextPage: nextHref,
                        loading: false
                    }
                })
            })
            .catch(err => {
                console.error(err.message);
            })
    }
}
export default artworkReducer;

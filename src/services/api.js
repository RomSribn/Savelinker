
const key = '5c265894d43f1d1580ffa62584e53c27d612d3cfaf289';


export const getAllNotes = (link) => {
    return fetch(`https://api.linkpreview.net/`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({key: key, q: link}),
    })
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Error in fetching')
        })
        .catch(err => console.log('АШИБКА',err))
};
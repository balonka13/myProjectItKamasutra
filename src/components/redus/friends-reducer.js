let initialState = {
    friends: [
        {id: 1, name: 'Guts',src:'https://i.kym-cdn.com/photos/images/facebook/000/052/289/1268892379747.jpg'},
        {id: 2, name: 'Kaska',src:'https://image.myanimelist.net/ui/4xANNJZlKL2mFaM3ceJGQ91Q4wN4AlIQD_vbUocvoiu5yopJV6N-jdHQ5oeOeDJL'},
        {id: 3, name: 'Rikert',src:'https://i.imgur.com/UpNNKsN.png'},
        {id: 4, name: 'Griffit',src:'https://i.pinimg.com/originals/61/2b/dd/612bdd1217c94b8ad15cd0db99398bb0.jpg'},
        {id: 5, name: 'Zod',src:'https://i.pinimg.com/originals/a4/e0/3c/a4e03c9a88d2455f663947ed21480541.jpg'}
    ]
};


const friendsReducer = (state=initialState ) => {
    return state;
}

export default friendsReducer;
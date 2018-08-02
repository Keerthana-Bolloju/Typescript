class FaceBook{

    constructor(
        private userName:String,
        private profilePicture: URL,
        private coverPhoto: URL,
        private dateOfBirth:String,
        private gender: String,
        private work:String,
        private education:String,
        private contactInfo:String[],
        private books:String[],
        private likedPages:String[],
    )
    {
        this.userName = userName
        this.profilePicture = profilePicture
        this.coverPhoto = coverPhoto
        this.dateOfBirth = dateOfBirth
        this.gender = gender
        this.work = work
        this.education = education
        this.contactInfo = contactInfo
        this.books = books
        this.likedPages = likedPages
    }

    getUserName =()=>{
        return this.userName
    }

    getProfilePicture =()=>{
        return this.profilePicture
    }

    getCoverPhoto =()=>{
        return this.coverPhoto
    }

    getDateOfBirth =()=>{
        return this.dateOfBirth
    }

    getGender =()=>{
        return this.gender
    }

    getWork =()=>{
        return this.work
    }

    getEducation =()=>{
        return this.education
    }

    getContactInfo =()=>{
        return this.contactInfo
    }

    getBooks =()=>{
        return this.books
    }

    setBooks =(moreBooks:String)=>{
        const newLocal = (this.books).push(moreBooks);
    }

    getLikedPges =()=>{
        return this.likedPages
    }
}

let facebookDetails = new FaceBook("Keerthi Gana",new URL(`https://www.facebook.com`),new URL(`https://www.facebook.com/cover-photo`),"12 March, 1995", "Female","Self Employed","Btech",["Mobile","9999912345","Email","keerthigana@edwisor.com",],["Wings Of Fire"],["Interesting Engineer","Electronics Hub"])
console.log(`Your Facebook Details are : ${JSON.stringify(facebookDetails)}`)

//to display old list of books
console.log(`Hello ${facebookDetails.getUserName()} ! Your old list of liked Books is : ${facebookDetails.getBooks()}`)

//updating list of books by calling setter
facebookDetails.setBooks("The Immortals Of Meluha");
console.log(`Hello ${facebookDetails.getUserName()} ! Your updated list of liked Books is : ${facebookDetails.getBooks()}`)
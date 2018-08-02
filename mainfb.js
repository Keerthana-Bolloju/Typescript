var FaceBook = /** @class */ (function () {
    function FaceBook(userName, profilePicture, coverPhoto, dateOfBirth, gender, work, education, contactInfo, books, likedPages) {
        var _this = this;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.books = books;
        this.likedPages = likedPages;
        this.getUserName = function () {
            return _this.userName;
        };
        this.getProfilePicture = function () {
            return _this.profilePicture;
        };
        this.getCoverPhoto = function () {
            return _this.coverPhoto;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getContactInfo = function () {
            return _this.contactInfo;
        };
        this.getBooks = function () {
            return _this.books;
        };
        this.setBooks = function (moreBooks) {
            var newLocal = (_this.books).push(moreBooks);
        };
        this.getLikedPges = function () {
            return _this.likedPages;
        };
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.books = books;
        this.likedPages = likedPages;
    }
    return FaceBook;
}());
var facebookDetails = new FaceBook("Keerthi Gana", new URL("https://www.facebook.com"), new URL("https://www.facebook.com/cover-photo"), "12 March, 1995", "Female", "Self Employed", "Btech", ["Mobile", "9999912345", "Email", "keerthigana@edwisor.com",], ["Wings Of Fire"], ["Interesting Engineer", "Electronics Hub"]);
console.log("Your Facebook Details are : " + JSON.stringify(facebookDetails));
//to display old list of books
console.log("Hello " + facebookDetails.getUserName() + " ! Your old list of liked Books is : " + facebookDetails.getBooks());
//updating list of books by calling setter
facebookDetails.setBooks("The Immortals Of Meluha");
console.log("Hello " + facebookDetails.getUserName() + " ! Your updated list of liked Books is : " + facebookDetails.getBooks());

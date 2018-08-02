var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Youtube = /** @class */ (function () {
    function Youtube(channelName, videoTitle, views, description, subscribers, likes, dislikes, shares, autoplay) {
        var _this = this;
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.views = views;
        this.description = description;
        this.subscribers = subscribers;
        this.likes = likes;
        this.dislikes = dislikes;
        this.shares = shares;
        this.autoplay = autoplay;
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getShares = function () {
            return _this.shares;
        };
        this.setShares = function (totalshares) {
            _this.shares = totalshares;
        };
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.views = views;
        this.description = description;
        this.subscribers = subscribers;
        this.likes = likes;
        this.dislikes = dislikes;
        this.shares = shares;
        this.autoplay = autoplay;
        this.autoplay = autoplay;
    }
    return Youtube;
}());
var PresentVideo = /** @class */ (function (_super) {
    __extends(PresentVideo, _super);
    function PresentVideo(channelName, videoTitle, videoQuality, favouriteList) {
        var _this = _super.call(this, channelName, videoTitle) || this;
        _this.channelName = channelName;
        _this.videoTitle = videoTitle;
        _this.videoQuality = videoQuality;
        _this.favouriteList = favouriteList;
        _this.getTheFavouriteList = function () {
            _this.favouriteList;
        };
        _this.setTheFavouriteList = function (favourite) {
            _this.favouriteList = favourite;
        };
        _this.videoQuality = videoQuality;
        _this.favouriteList = favouriteList;
        return _this;
    }
    return PresentVideo;
}(Youtube));
var YoutubeList = new Youtube("Some Channel", "Some Title", 440, "Some Description", 44, 400, 40, 50, true);
console.log("Youtube Video Details are : " + JSON.stringify(YoutubeList));
var presentVideo = new PresentVideo(YoutubeList.getChannelName(), YoutubeList.getVideoTitle(), 1024, true);
console.log("Present Video Details are : " + JSON.stringify(presentVideo));
console.log("GETTER VALUES");
console.log(YoutubeList.getChannelName());
console.log(YoutubeList.getVideoTitle());
console.log(YoutubeList.getShares());
console.log("SETTER VALUES");
YoutubeList.setShares(84);
console.log("Total Shares :" + " " + YoutubeList.getShares());
presentVideo.setTheFavouriteList(false);
console.log("Favourite List Status is :" + " " + presentVideo.getTheFavouriteList());
console.log("CURRENT STATUS AFTER CHANGING PARAMETERS");
console.log("Youtube Video Details are : " + JSON.stringify(YoutubeList));
console.log("Present Video Details are : " + JSON.stringify(presentVideo));

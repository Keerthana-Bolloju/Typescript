
class Youtube {

    constructor(public channelName:string, public videoTitle:string, public views?:number,public description?:string, public subscribers?:number, public likes?:number, protected dislikes?:number,private shares?:number,public autoplay?:boolean, ){
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

    getChannelName = () =>{
        return this.channelName
    }
    

    getVideoTitle = () =>{
        return this.videoTitle
    }
    
    getShares = () =>{
        return this.shares
    }
    setShares = (totalshares:number) =>{
        this.shares = totalshares
    }

}

class PresentVideo extends Youtube{
    constructor(public channelName:string,public videoTitle:string,protected videoQuality:number,private favouriteList:boolean){
        super(channelName,videoTitle)
        this.videoQuality = videoQuality;
        this.favouriteList = favouriteList;
    }

    getTheFavouriteList = () =>{
        this.favouriteList;
    }
    setTheFavouriteList = (favourite:boolean) =>{
        this.favouriteList = favourite
    }
}

let YoutubeList = new Youtube("Some Channel","Some Title",440,"Some Description",44,400,40,50,true)

console.log(`Youtube Video Details are : ${JSON.stringify(YoutubeList)}`);

let presentVideo = new PresentVideo(YoutubeList.getChannelName(),YoutubeList.getVideoTitle(),1024,true)
console.log(`Present Video Details are : ${JSON.stringify(presentVideo)}`);

console.log("GETTER VALUES");
console.log(YoutubeList.getChannelName())
console.log(YoutubeList.getVideoTitle())
console.log(YoutubeList.getShares())

console.log("SETTER VALUES");
YoutubeList.setShares(84)
console.log("Total Shares :" +" "+ YoutubeList.getShares());
presentVideo.setTheFavouriteList(false)
console.log("Favourite List Status is :" +" "+ presentVideo.getTheFavouriteList());

console.log("CURRENT STATUS AFTER CHANGING PARAMETERS")

console.log(`Youtube Video Details are : ${JSON.stringify(YoutubeList)}`);

console.log(`Present Video Details are : ${JSON.stringify(presentVideo)}`);

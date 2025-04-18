const VideoCard = ({info}) => {

   if(!info) return;

   const {snippet, statistics} = info;
   const {title, channelTitle, thumbnails} = snippet;

    

    return (

        <div className="p-2 m-2 w-60">
            <img src = {thumbnails.medium.url}/>
            <h1 className="font-bold">{title}</h1>
            <h1>{channelTitle}</h1>
            
            <h1>{statistics.viewCount} views</h1>


        </div>
    )
}

export default VideoCard;

const commentsData = [

    {
        name : "haripriya",
        text : "hello react",
        replies : []
        
    },
    {
        name : "haripriya",
        text : "hello react",
        replies : []
        
    },
    {
        name : "haripriya",
        text : "hello react",
        replies : [
            {
                name : "haripriya",
        text : "hello react",
        replies : [
            {
                name : "haripriya",
        text : "hello react",
        replies : []
            }
        ]
            }
        ]
        
    },
    {
        name : "haripriya",
        text : "hello react",
        replies : []
        
    },
    {
        name : "haripriya",
        text : "hello react",
        replies : []
        
    },
]

const Comment = ({data}) => {

    const {name , text , replies} = data ;

    return(

        <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg ">
<img className="w-8"
alt = "user"
src = " https://moviegalleri.net/wp-content/gallery/kushi-photos/Kushi-hd-photos-2895129.jpg"/>
        
<div className="px-2">
    <p className="font-bold">{name}</p>
    <p>{text}</p>
    {/* <p>{replies}</p> */}


</div>
        
        </div>
    )
}

const CommentsList = ({comments}) => {
    return comments.map((comment, index) => 
        <div key = {index}>
        <Comment  data = {comment}/> 
    <div className="pl-5 border border-black ml-5">
<CommentsList comments={comment.replies}/>
    </div>
    </div>
   
    )
 }

const CommentsContainer = () => {
    return (
        <div className="m-3 p-2 my-2">

<h1 className="font-bold">Comments :</h1>
<CommentsList comments = {commentsData}/>

        </div>

    )
}

export default CommentsContainer;
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[0]th index",
    replies: [],
  },
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[1]st index",
    replies: [
      {
        name: "sakir shaikh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "sakir shaikh",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "sakir shaikh",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "sakir shaikh",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "sakir shaikh",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "sakir shaikh",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "sakir shaikh",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[2]nd index",
    replies: [],
  },
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[3]rd index",
    replies: [],
  },
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[4]th index",
    replies: [],
  },
  {
    name: "sakir shaikh",
    text: "this is comment at CommentsData[5]th index",
    replies: [],
  },
];




const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 mt-8">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
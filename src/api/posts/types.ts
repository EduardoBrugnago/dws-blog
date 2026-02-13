export interface Post {
  id: string;
  title: string;
  content: string;
  thumbnail_url: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  categories: [
    {
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      postId: string;
    },
  ];
  author: {
    id: string;
    name: string;
    profilePicture: string;
    createdAt: string;
    updatedAt: string;
  };
}

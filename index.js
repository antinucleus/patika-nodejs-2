const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

const showPosts = () => posts.map((post) => console.log(post));

const createPost = (title) =>
  new Promise((resolve, reject) => {
    if (title) {
      posts.push({ id: posts.length + 1, title });

      resolve("Post created successfully");
    }

    reject("Please enter a title");
  });

async function createAndRead() {
  showPosts();

  try {
    const result = await createPost("Post 4");
    console.log(result);
    if (result) showPosts();
  } catch (error) {
    console.log(error);
  }
}

createAndRead();

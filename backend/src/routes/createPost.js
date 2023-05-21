export const createPost = (res, req) => {
  const { authorId, title, createdAt, updatedAt, publishedAt, published, content } = req.body;

  const insertQuery = `INSERT INTO post (author_id, title, created_at, updated_at, published_at, published, content) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  connection.query(insertQuery, [authorId, title, createdAt, updatedAt, publishedAt, published, content], (err, result) => {
    if (err) {
      console.error("Error at creating a post", err);
      return res.json({
        success: false,
        error: "Fail to create a post",
      });
    } else {
      if (result) {
        res.json({
          success: true,
          data: {
            message: "Create Successfully.",
          }
        })
      }
    }
  })
}
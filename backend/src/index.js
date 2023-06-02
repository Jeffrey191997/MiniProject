
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const bodyParser = require("body-parser");
const { application } = require("express");
const port = 8000;

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_11tlno",
  password: "CvS1YSyOnM5CGJM5",
  database: "lab_blank01_113sojd",
});

connection.connect();

console.log("Database is connected.")

app.use(bodyParser.json({ type: "application/json" }));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

app.use(express.static('public'))

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

//Detail post
app.get("/post/detail/", (req, res) => {
  const id = req.query.id;
  console.log(id);
  connection.query(`SELECT * from post JOIN category on category.id = post.category_id WHERE post.id = ?`, [id], (err, rows) => {
    if(err){
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.messge}`,
      });
    }else{
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      };
    }
  })
})

//The Latest Article
app.get("/latestpost", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT * FROM post JOIN category on category.id = post.category_id ORDER BY published_at DESC`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})

//Articles by descending
app.get("/latestpost/all", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT * FROM post JOIN category on category.id = post.category_id ORDER BY published_at DESC`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows) {
        res.json({
          success: true,
          data: rows,
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})

//Get Post With author name category name and photo urls
app.get("/posts/allpost", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT post.id as id, author_id, title, published_at, content, image_url, category.id as category_id FROM post JOIN category on category.id = post.category_id`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      res.json({
          success: true,
          data: rows,
          error: null,
        });
    }
  });
})



app.get("/subscriber", (req, res) => {
  const subscriberId = req.query.subscriber_id;

  connection.query(`SELECT * FROM subscriber WHERE id = ${subscriberId}`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})

app.get("/posts", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT * FROM post WHERE id = ${postId}`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})


app.get("/post_category", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT * FROM category WHERE id = ${postId}`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
})

//Category posts
app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  connection.query(`SELECT * FROM post JOIN category on category.id = post.category_id where category.id = ?`, [id], (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      res.json({
          success: true,
          data: rows,
          error: null,
        });
    }
  });
})


//Latest posts by category

app.get("/latest/category/:id", (req, res) => {
  const id = req.params.id;

  connection.query(`SELECT * FROM post JOIN category on category.id = post.category_id WHERE category.id = ?ORDER BY published_at DESC`, [id], (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: `Data not found ${err.message}`,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });

})




//Creating post
app.post("/post/create", (req, res) => {
  const { authorId, title, createdAt, updatedAt, publishedAt, content, url, categoryId } = req.body;

  const insertQuery = `INSERT INTO post (author_id, title, created_at, updated_at, published_at, content, image_url, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(insertQuery, [authorId, title, createdAt, updatedAt, publishedAt, content, url, categoryId], (err, result) => {
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
})

//Update Post
app.patch("/post/update", (req, res) => {
  const { title, updatedAt, published, content, postId } = req.body;

  const updateQuery = "UPDATE post SET title=?, updated_at=?, published=?, content=? WHERE id=?";

  connection.query(updateQuery, [title, updatedAt, published, content, postId], (err, result) => {
    if (err) {
      console.error("Error at updating post", err);
      return res.json({
        success: false,
        error: "Fail to update the post",
      });
    } else {
      if (result) {
        res.json({
          success: true,
          data: {
            message: "Updated Succesfully",
          }
        })
      }
    }
  })
})

//Delete Post
app.delete("/post/delete", (req, res) => {
  // Assign the params as a variable
  const id = req.query.id;
  // const postId = req.query.id;
  const deleteQuery = `DELETE FROM post where id = ?`;
  connection.query(
    deleteQuery, [id],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "delete successfully",
            },
          });
        }
      }
    }
  );
});



//Login
app.post("/login", async (req, res) => {
  const username = req.body.username;
  let password = req.body.password;

  var sql = mysql.format("SELECT * FROM user WHERE first_name = ?", [username]);

  connection.query(sql, [username, password], async (err, rows) => {
    if (err) {
      return res.json({
        success: false,
      });
    }
    numRows = rows.length;
    if (numRows != 0) {
      const hashed_password = rows[0].hashed_password;
      const isVerified = await bcrypt.compare(password, hashed_password);

      if (isVerified) {
          const token = jwt.sign(
            {
              userId: rows[0].id,
              userName: rows[0].first_name,
            },
            "ZJGX1QL7ri6BGJWj3t",
            { expiresIn: "1h" }
          )
        res.cookie("user", token)
          return res.json({
            success: true,
            message: 'Authentication Success',
          })
      } else {
        return res.json({
          success: false,
          message: 'Authentication Failed - Wrong password'
        })
      }
    } else {
      return res.json({
        success: false,
        message: "Authentication Failed - No such user in the database",
      });
    }
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
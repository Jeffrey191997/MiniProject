
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const bodyParser = require("body-parser")
const port = 3000;

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
    origin: ['http://localhost:3001'],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

//Get Post With author name category name and photo urls
app.get("/posts/allpost", (req, res) => {
  const postId = req.query.post_id;

  connection.query(`SELECT * FROM post JOIN category on category.id = post.category_id`, (err, rows) => {
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

app.get("/category", (req, res) => {
  const categoryId = req.query.category_id;

  connection.query(`SELECT * FROM category WHERE id = ${categoryId}`, (err, rows) => {
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

//Creating post
app.post("/post/create", (req, res) => {
  const { authorId, title, createdAt, updatedAt, publishedAt, content } = req.body;

  const insertQuery = `INSERT INTO post (author_id, title, created_at, updated_at, published_at, content) VALUES (?, ?, ?, ?, ?, ?)`;

  connection.query(insertQuery, [authorId, title, createdAt, updatedAt, publishedAt, content], (err, result) => {
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

//login
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
            },
            "ZJGX1QL7ri6BGJWj3t",
            { expiresIn: "1h" }
          )
        res.cookie("user", token)
          return res.json({
            success: true,
            message: 'Authentication Success',
          }).cookie("user", token)
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
    // const username=req.body.username;
    // const password=req.body.password;

    // var sql = mysql.format("SELECT * FROM user WHERE first_name = ? ", [username]);

    // connection.query(sql,(err,rows)=>{
    //     if(err){
    //         return res.json({
		// 		success: false,
		// 		data: null,
		// 		error: err.message,
		// 	});
    //     }
    //     numRows=rows.length;
    //     if(numRows==0){
    //         res.json({
		// 		success: false,
		// 		message: "Username or email is wrong.",
		// 	});
    //     }
    //     else{
    //         const valid = bcrypt.compare(password, rows[0].password);

    //         if(valid){
    //             const token = jwt.sign(
		// 			{
		// 				userId: rows[0].id,
		// 			},
		// 			"ZJGX1QL7ri6BGJWj3t",
		// 			{ expiresIn: "1h" }
		// 		);
    //             // console.log(token);
    //             res.cookie("user", token);
    //             res.json({
    //             success: true,
    //             message: "Login credential is correct",
    //             user: rows[0],
    //         });
    //         }
    //         else{
    //             res.json({
		// 			success: true,
		// 			message: "Incorrect password.",
		// 		});
    //         }
            
    //     }
    // })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
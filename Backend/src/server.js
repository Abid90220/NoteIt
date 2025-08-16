import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

// Route to render the edit page
//   app.get("/new", (req, res) => {
//     res.render("modify.ejs", { heading: "New Post", submit: "Create Post" });
//   });

//   app.get("/edit/:id", async (req, res) => {
//     try {
//       const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
//       console.log(response.data);
//       res.render("modify.ejs", {
//         heading: "Edit Post",
//         submit: "Update Post",
//         post: response.data,
//       });
//     } catch (error) {
//       res.status(500).json({ message: "Error fetching post" });
//     }
//   });

//   // Create a new post
//   app.post("/api/posts", async (req, res) => {
//     try {
//       const response = await axios.post(`${API_URL}/posts`, req.body);
//       console.log(req.body);
//       console.log(response.data);
//       res.redirect("/");
//     } catch (error) {
//       console.log(req.body);
//       res.status(500).json({ message: "Error creating post" });
//     }
//   });

//   // Partially update a post
//   app.post("/api/posts/:id", async (req, res) => {
//     console.log("called");
//     try {
//       const response = await axios.patch(
//         `${API_URL}/posts/${req.params.id}`,
//         req.body
//       );
//       console.log(response.data);
//       res.redirect("/");
//     } catch (error) {
//       res.status(500).json({ message: "Error updating post" });
//     }
//   });

//   // Delete a post
//   app.get("/api/posts/delete/:id", async (req, res) => {
//     try {
//       await axios.delete(`${API_URL}/posts/${req.params.id}`);
//       res.redirect("/");
//     } catch (error) {
//       res.status(500).json({ message: "Error deleting post" });
//     }
//   });

// mongodb+srv://Abid90220:LSP1nYPhDLZU3mJv@cluster0.pq5j9ik.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

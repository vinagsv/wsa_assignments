const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

// Configure CORS correctly for both development and production
app.use(
  cors({
    origin: [
      "https://wsa-assignments.netlify.app",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    credentials: false,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const PORT = process.env.PORT || 5000;

// Basic route for checking if server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Debug route to check directory structure
app.get("/debug", (req, res) => {
  try {
    const rootDir = __dirname;
    const assignmentsDir = path.join(rootDir, "assignments");

    const result = {
      rootDir,
      assignmentsDir,
      assignmentsExists: fs.existsSync(assignmentsDir),
      directories: {},
    };

    if (result.assignmentsExists) {
      const categories = fs.readdirSync(assignmentsDir);
      categories.forEach((category) => {
        const categoryPath = path.join(assignmentsDir, category);
        if (fs.statSync(categoryPath).isDirectory()) {
          result.directories[category] = fs.readdirSync(categoryPath);
        }
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});

// Serve static files with better error handling
app.use("/assignments", express.static(path.join(__dirname, "assignments")));

// API route to fetch folders + description with improved error handling
app.get("/api/assignments/:category", (req, res) => {
  const category = req.params.category;
  const categoryPath = path.join(__dirname, "assignments", category);

  try {
    if (!fs.existsSync(categoryPath)) {
      return res.status(404).json({
        error: `Category directory not found: ${category}`,
        path: categoryPath,
      });
    }

    fs.readdir(categoryPath, async (err, files) => {
      if (err) {
        console.error("Directory reading error:", err);
        return res.status(500).json({ error: err.message, path: categoryPath });
      }

      try {
        const folders = files.filter((file) => {
          const fullPath = path.join(categoryPath, file);
          return fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
        });

        const data = await Promise.all(
          folders.map(async (folder) => {
            const descriptionPath = path.join(
              categoryPath,
              folder,
              "description.txt"
            );
            let description = "";
            try {
              if (fs.existsSync(descriptionPath)) {
                description = fs.readFileSync(descriptionPath, "utf-8");
              } else {
                description = "No description available.";
              }
            } catch (error) {
              console.error(`Error reading description for ${folder}:`, error);
              description = "Error reading description.";
            }
            return { name: folder, description };
          })
        );

        res.json(data);
      } catch (processError) {
        console.error("Processing error:", processError);
        res.status(500).json({ error: processError.message });
      }
    });
  } catch (outerError) {
    console.error("Outer error:", outerError);
    res.status(500).json({ error: outerError.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Assignments directory: ${path.join(__dirname, "assignments")}`);
});

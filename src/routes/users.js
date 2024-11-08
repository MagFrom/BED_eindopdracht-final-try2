import express from "express";
import viewUsers from "../services/users/viewUsers.js";
import getUserByUsername from "../services/users/getUserByUsername.js"; // Assume this function exists
import getUserById from "../services/users/getUserById.js";
import deleteUser from "../services/users/deleteUser.js";
import createUser from "../services/users/createUsers.js";
import updateUserById from "../services/users/updateUsers.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";
import authMiddleware from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { username } = req.query;

    // Check if a username query parameter is provided
    if (username) {
      // Retrieve only the user with the specified username
      const user = await getUserByUsername(username);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user);
      }
    } else {
      // If no username is provided, retrieve all users
      const users = await viewUsers();
      res.status(200).json(users);
    }
  } catch (error) {
    next(error);
    console.log(error);
    res.status(500).send("Something went wrong while getting list of users");
  }
});

router.get("/", async (req, res, next) => {
  const { name } = req.params;
  try {
    const user = await getUserByName(name);

    if (!user) {
      res.status(404).json(user);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);

    if (!user) {
      res.status(404).json(user);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const { username, password, name, email, phoneNumber, profilePicture } =
    req.body;
  try {
    const newUser = await createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    if (!newUser) {
      res.status(400).json(newUser);
    } else {
      res.status(201).json(newUser);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { username, password, name, email, phoneNumber, profilePicture } =
    req.body;
  try {
    const updatedUser = await updateUserById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    if (!updatedUser) {
      res.status(404).json(updatedUser);
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  console.log("Received request to delete user with ID:", id);
  try {
    const deletedUserId = await deleteUser(id);
    console.log("deleteUser result:", deletedUserId);
    if (deletedUserId) {
      console.log(`User with id ${id} successfully deleted`);
      res.status(200).send({
        message: `User with id ${id} successfully deleted`,
      });
    } else {
      console.log(`User with id ${id} not found`);
      res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }
  } catch (error) {
    console.error("Error during deletion:", error);
    if (error.message.includes("not found")) {
      res.status(404).json({ message: error.message });
    } else {
      next(error);
    }
  }
});

router.use(notFoundErrorHandler);
router.use(errorHandler);

export default router;

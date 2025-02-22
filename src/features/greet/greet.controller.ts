import { Request, Response, RequestHandler } from "express";
import { filterNames } from "./greet.service";
import { GreetResponse } from "./greet.types";

export const greetController: RequestHandler = (req, res, next) => {
  try {
    const { name } = req.query;

    if (!name || typeof name !== "string" || name.trim() === "") {
      res.json({ message: "Hello, World!" });
      return;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      res.status(400).json({
        error: {
          type: "BadRequestError",
          message: "Name must contain only letters",
          status: 400,
        },
      });
      return;
    }

    const namesArray = ["Sam", "John", "Max", "Emily"];
    const filteredNames = filterNames(namesArray);
    const response: GreetResponse = {
      message: `Hello, ${name}!`,
      filteredNames,
    };

    res.json(response);
    return;
  } catch (error) {
    console.error("Error in greetController:", error);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
};

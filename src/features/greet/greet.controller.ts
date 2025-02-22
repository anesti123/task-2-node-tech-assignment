import { Request, Response, RequestHandler } from "express";
import { filterNames } from "./greet.service";
import { GreetResponse } from "./greet.types";

export const greetController: RequestHandler = (req, res, next) => {
  const { name } = req.query;

  // If no name is provided, return the default message
  if (!name || typeof name !== "string") {
    const response: GreetResponse = {
      message: "Hello, World!",
      filteredNames: filterNames(["Sam", "John", "Max", "Emily"]),
    };

    res.json(response);
    return; 
  }

  const namesArray = ["Sam", "John", "Max", "Emily"];
  const filteredNames = filterNames(namesArray);

  const response: GreetResponse = {
    message: `Hello, ${name}!`,
    filteredNames,
  };

  res.json(response);
};

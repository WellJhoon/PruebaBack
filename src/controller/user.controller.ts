import { Request, Response } from "express";
import UserModel from "../Models/user.model";
import { User } from "../interfaces";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password, role } = req.body;

    const existingUser = await UserModel.findOne({ email });

    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Este usuario ya esta registrado",
      });
    }
    const newUser = new UserModel<User>({
      email,
      firstName,
      lastName,
      password,
      role,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser,
      message: "Usuario registrado exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Error interno del servidor",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, password, role } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(id);

    console.log(updatedUser);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Usuario no encontrado",
      });
    }

    updatedUser.firstName = firstName || updatedUser.firstName;
    updatedUser.lastName = lastName || updatedUser.lastName;
    updatedUser.password = password || updatedUser.password;
    updatedUser.role = role || updatedUser.role;

    await updatedUser.save();

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Usuario actualizado exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Error interno del servidor",
    });
  }
};

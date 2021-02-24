import { Request, Response } from "express";
import pool from "../database";

class PetController {
  public async createPet(req: Request, res: Response) {
    const Pet = req.body;
    const query = await pool.query("INSERT INTO Pets SET ?", Pet);
    res.json(query);
  }

  public async listAllPets(req: Request, res: Response) {
    const query = await pool.query(
      "SELECT  Pets.name as namePet, Pets.type_pet, Pets.race, Owners.name, Owners.last_name, Owners.rut FROM Pets INNER JOIN Owners on Pets.owner = Owners.id;"
    );
    res.json(query);
  }

  public async listOnePet(req: Request, res: Response) {
    const { id } = req.params;
    const query = await pool.query(
      `SELECT Pets.id, Pets.name as namePet, Pets.type_pet, Pets.race, Owners.name, Owners.last_name, Owners.rut FROM Pets INNER JOIN Owners on Pets.owner = Owners.id WHERE Owners.id = ${id}`
    );
    res.json(query);
  }

  public async searchPet(req: Request, res: Response) {
    const word = req.query.word;
    const query = await pool.query(
      `SELECT * FROM Pets WHERE name LIKE ?`,
      "%" + word + "%"
    );
    res.json(query);
  }

  public async updatePet(req: Request, res: Response) {
    const Pet = req.body;
    const { id } = req.params;
    const query = await pool.query(`UPDATE Pets SET ? WHERE id = ?`, [Pet, id]);
    res.json(query);
  }

  public async deletePet(req: Request, res: Response) {
    const { id } = req.params;
    const query = await pool.query("DELETE FROM Pets WHERE id = ?", id);
    res.json(query);
  }
}

export const petController = new PetController();

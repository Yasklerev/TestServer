import { Request, Response } from "express";
import pool from "../database";

class OwnerController {
  public async createOwner(req: Request, res: Response) {
    const owner = req.body;
    const query = await pool.query("INSERT INTO Owners SET ?", owner);
    res.json(query);
  }

  public async listAllOwners(req: Request, res: Response) {
    const query = await pool.query(
      "SELECT id, name, email, last_name, rut, address, substring(birthday, 1, 10) as birthday FROM Owners"
    );
    res.json(query);
  }

  public async listOneOwner(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id);
    const query = await pool.query(`SELECT * FROM Owners WHERE id = ${id}`);
    res.json(query);
  }

  public async searchOwner(req: Request, res: Response) {
    const word = req.query.word;
    const query = await pool.query(
      `SELECT * FROM Owners WHERE name LIKE ?`,
      "%" + word + "%"
    );
    res.json(query);
  }

  public async updateOwner(req: Request, res: Response) {
    const owner = req.body;
    const { id } = req.body;
    const query = await pool.query(`UPDATE Owners SET ? WHERE id = ?`, [
      owner,
      id,
    ]);
    res.json(query);
  }

  public async deleteOwner(req: Request, res: Response) {
    const { id } = req.params;
    const query = await pool.query("DELETE FROM Owners WHERE id = ?", id);
    res.json(query);
  }
}

export const ownerController = new OwnerController();

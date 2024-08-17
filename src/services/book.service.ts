import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config/base.service";
import { book_bvaDTO } from "../book_bva/DTOs/book.dto";
import { book_bvaEntity } from "../book_bva/entities/book.entity";



export class book_bvaService extends BaseService<book_bvaEntity> {
  constructor() {
    super(book_bvaEntity);
  }

  async findAllbooks(): Promise<book_bvaEntity[]> {
    return (await this.execRepository).find();
  }
  async findbooksById(id: string): Promise<book_bvaEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createbook(body: book_bvaDTO): Promise<book_bvaEntity> {
    return (await this.execRepository).save(body);
  }
  async deletebook(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatebook(
    id: string,
    infoUpdate: book_bvaDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
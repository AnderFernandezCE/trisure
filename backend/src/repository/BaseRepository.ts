export default interface BaseRepository<T> {
  getAll(): Promise<T[]>;
  findByUUID(uuid: string): Promise<T | null>;
  findByID(id: number): Promise<T | null>;
  create(data: T): Promise<T>
}
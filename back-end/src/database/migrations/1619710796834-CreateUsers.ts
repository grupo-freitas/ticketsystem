import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsers1619710796834 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',

        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'login',
            type: 'varchar'
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'sector',
            type: 'varchar'
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}

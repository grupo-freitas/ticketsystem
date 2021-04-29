import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTickets1619725881386 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tickets',

        columns: [
          {
            name: 'id',
            type: 'varchar',
            generationStrategy: 'uuid',
            isPrimary: true
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'files',
            type: 'varchar'
          },
          {
            name: 'sector',
            type: 'varchar'
          },
          {
            name: 'subject',
            type: 'varchar'
          },
          {
            name: 'userId',
            type: 'varchar',
            isNullable: true
          }
        ],

        foreignKeys: [
          {
            name: 'FKUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tickets')
  }
}

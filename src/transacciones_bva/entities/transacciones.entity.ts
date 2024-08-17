
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { TaskEntity } from "../../task/entities/task.entity";


@Entity({ name: "transacciones_bva" })
export class transacciones_bvaEntity extends BaseEntity {

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column()
    editoral!: string;

}
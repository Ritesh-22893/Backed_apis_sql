import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { employe } from "./entity/employe"
import { Student } from "./entity/student"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "ritesh22893",
    database: "training",
    synchronize: true,
    logging: false,
    entities: [User,employe,Student],
    migrations: [],
    subscribers: [],
})

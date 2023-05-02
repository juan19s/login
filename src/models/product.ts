import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50)
    },
    description: {
        type: DataTypes.STRING(100)
    }
})
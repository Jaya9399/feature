module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        project_id: { type: DataTypes.INTEGER, references: { model: "projects", key: "id" } },
        user_id: { type: DataTypes.INTEGER, references: { model: "users", key: "id" } }, // Updated
        created_at: { type: DataTypes.DATE, defaultValue: sequelize.literal("CURRENT_TIMESTAMP") }
    });

    Task.associate = (models) => {
        Task.belongsTo(models.Project, { foreignKey: "project_id" });
        Task.belongsTo(models.User, { foreignKey: "user_id" }); // Updated
    };

    return Task;
};

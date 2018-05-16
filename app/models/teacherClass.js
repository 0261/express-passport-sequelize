module.exports = function (sequelize, Sequelize) {

    const teacherClass = sequelize.define('teacher_class', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        teacher_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        class_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        }
    });
    return teacherClass;

}
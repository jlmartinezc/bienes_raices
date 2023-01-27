const { task, parallel } = require( 'gulp' );

const compile = require("./gulp/tasks/compile");
const img = require("./gulp/tasks/image");

task('watcher', parallel(img.imgTasks, compile.compileTasks));

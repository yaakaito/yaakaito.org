module.exports = function(grunt) {

  grunt.initConfig({
    lint : {
      files : [
        'js/*.js'
      ]
    }
    , min : {
      'js/main.min.js' : [
        'js/main.js'
      ]
    }
  });

}
;

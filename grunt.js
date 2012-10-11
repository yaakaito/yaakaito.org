module.exports = function(grunt) {

  grunt.initConfig({
    lint : {
      files : [
        'js/*.js'
      ]
    }
    , min : {
      'js/main.js' : [
        'js/main.min.js'
      ]
      , tasks : 'lint'
    }
  });

}
;

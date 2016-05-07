var src     = 'src/';      // 元ファイル
var dist    = 'build/';     // コンパイル先
var typeA    = 'typeA/';     // テンプレートタイプ
var typeB    = 'typeB/';     // テンプレートタイプ
var typeC    = 'typeC/';     // テンプレートタイプ

// root path
var root = require('path').join( __dirname, '../' );

module.exports = {
  // root
  'root' : root,

  'src': {
    'root' : src,
    'html' : src,
    'css'  : src + 'stylesheets/',
    'img'  : src + 'images/',
    'js'   : src + 'javascripts/'
  },

  'dist': {
    'root' : dist,
    'html' : dist,
    'css'  : dist + 'stylesheets/',
    'img'  : dist + 'images/',
    'js'   : dist + 'javascripts/'
  },

  'dist_typeA': {
    'root' : dist,
    'html' : dist + typeA,
    'img'  : dist + typeA + 'images/',
  },
  'dist_typeB': {
    'root' : dist,
    'html' : dist + typeB,
    'img'  : dist + typeB + 'images/',
  },
  'dist_typeC': {
    'root' : dist,
    'html' : dist + typeC,
    'img'  : dist + typeC + 'images/',
  },

  // copyするファイル
  'copy': [
    '**/*.ico'
  ],

  // jshintの対象ファイル
   lintfiles:[
      // jsSrc + '/*.js'
  ]
};
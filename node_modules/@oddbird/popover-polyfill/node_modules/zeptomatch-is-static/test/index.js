
/* IMPORT */

import {describe} from 'fava';
import isStatic from '../dist/index.js';

/* MAIN */

describe ( 'Zeptomatch Is Static', it => {

  it ( 'detects special characters', t => {

    t.false ( isStatic ( '*' ) );
    t.false ( isStatic ( '?' ) );
    t.false ( isStatic ( '^' ) );
    t.false ( isStatic ( '!' ) );
    t.false ( isStatic ( '[' ) );
    t.false ( isStatic ( ']' ) );
    t.false ( isStatic ( '{' ) );
    t.false ( isStatic ( '}' ) );

    t.false ( isStatic ( 'foo*' ) );
    t.false ( isStatic ( 'foo?' ) );
    t.false ( isStatic ( 'foo^' ) );
    t.false ( isStatic ( 'foo!' ) );
    t.false ( isStatic ( 'foo[' ) );
    t.false ( isStatic ( 'foo]' ) );
    t.false ( isStatic ( 'foo{' ) );
    t.false ( isStatic ( 'foo}' ) );

    t.false ( isStatic ( '\\\\*' ) );
    t.false ( isStatic ( '\\\\?' ) );

  });

  it ( 'detects static characters', t => {

    t.true ( isStatic ( '' ) );

    t.true ( isStatic ( '+' ) );
    t.true ( isStatic ( '.' ) );
    t.true ( isStatic ( '$' ) );
    t.true ( isStatic ( '|' ) );
    t.true ( isStatic ( '\\' ) );
    t.true ( isStatic ( '\\\\' ) );
    t.true ( isStatic ( 'a' ) );
    t.true ( isStatic ( ' ' ) );

    t.true ( isStatic ( 'foo+' ) );
    t.true ( isStatic ( 'foo.' ) );
    t.true ( isStatic ( 'foo$' ) );
    t.true ( isStatic ( 'foo|' ) );
    t.true ( isStatic ( 'foo\\' ) );
    t.true ( isStatic ( 'foo\\\\' ) );
    t.true ( isStatic ( 'fooa' ) );
    t.true ( isStatic ( 'foo ' ) );

    t.true ( isStatic ( '\\a' ) );
    t.true ( isStatic ( '\\*' ) );
    t.true ( isStatic ( '\\?' ) );

  });

});

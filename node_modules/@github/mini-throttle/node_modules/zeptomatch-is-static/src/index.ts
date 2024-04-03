
/* MAIN */

const isStatic = (() => {

  const re = /^(?:\\$|\\.|[^*?!^{}[\]\\])*$/s;

  return ( glob: string ): boolean => {

    return re.test ( glob );

  };

})();

/* EXPORT */

export default isStatic;

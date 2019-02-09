(function () {
  describe('Scope Exercises', function () {
    var ACTUAL;
    beforeEach(function () {
      ACTUAL = null;
    });

    it('a function has access to its own local scope variables', function () {
      var fn = function () {
        var name = 'inner';
        ACTUAL = name;
      };
      fn();
      expect(ACTUAL === 'inner').to.be.true;
    });

    it('inputs to a function are treated as local scope variables', function () {
      var fn = function () {
        ACTUAL = name;
      };
      fn('inner');
      expect(ACTUAL === 'inner').to.be.true;
    });

    it('block scope can be created with let', function () {
      var fn = function () {
        var where = 'outer'; {
          let where = 'inner';
        }
        ACTUAL = where;
      };
      fn();
      expect(ACTUAL === 'outer').to.be.true;
    });

    it('a function has access to the variables contained within the same sco[e that function was created in', function () {
      var name = 'outer';
      var fn = function () {
        ACTUAL = name;
      };
      fn();
      expect(ACTUAL === 'outer').to.be.true;
    });

    it("a function's local scope variables are not available anywhere outside that function", function () {
      var firstFn = function () {
        var localToFirstFn = 'inner';
      };
      firstFn();
      expect(function () {
        ACTUAL = localToFirstFn;
      }).to.throw();
      expect(ACTUAL === null).to.be.true;
    });

    it("a function's local scope variables are not available anywhere outside that function, regardless of the contect is's called in", function () {
      var firstFn = function () {
        var localToFirstFn = 'first';
        secondFn();
      };
      var secondFn = function () {
        ACTUAL = localToFirstFn;
      };
      expect(function () {
        secondFn();
      }).to.throw();
      expect(function () {
        firstFn();
      }).to.throw();
      expect(ACTUAL === null).to.be.true;
    });

    it('if an inner and an outer variable share the same name, and the name is refernced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. this renders the outer scope variables inaccessible from anywhere within the inner function block', function () {
      var sameName = 'outer';
      var fn = function () {
        var sameName = 'inner';
        ACTUAL = sameName;
      };
      fn();
      expect(ACTUAL === 'inner').to.be.true;
    });

    it('if an inner and an outer variable share the same name, and the name is refernced in the outer scope, the outer value binding will be used', function () {
      var sameName = 'outer';
      var fn = function () {
        var sameName = 'inner';
      };
      fn();
      ACTUAL = sameName;
      expect(ACTUAL === 'outer').to.be.true;
    });

    it('an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names', function () {
      var outerName = 'outer';
      var fn = function () {
        var innerName = 'inner';
        ACTUAL = innerName + outerName;
      };
      fn();
      expect(ACTUAL === 'innerouter').to.be.true;
    });

    it('between calls to an inner function, that inner function retains access to a variable in an outer scope, modifiying those variables has a lasting effect between calls to the inner function.', function () {
      var outerCounter = 10;
      var fn = function () {
        outerCounter = outerCounter + 1;
        ACTUAL = outerCounter;
      }
      fn();
      expect(ACTUAL === 11).to.be.true;
      fn();
      expect(ACTUAL === 12).to.be.true;
    });

    it('the rule about retaining access to variables from an outer scope still applies, even after the otuer function call (that created the outer scope) has returned', function () {
      var outerFn = function () {
        var counterInOuterScope = 10;

        var innerIncremenetingFn = function () {
          counterInOuterScope = counterInOuterScope + 1;
          ACTUAL = counterInOuterScope;
        };
        innerIncremenetingFn();
        expect(ACTUAL === 11).to.be.true;
        innerIncremenetingFn();
        expect(ACTUAL === 12).to.be.true;
        // Here we retain a reference to the newly created inner function for later, by 
        // assigning it to the global scope (window);
        window.retainInnerFn = innerIncremenetingFn;
      }
      // brfore we run outerFn, there will be no innerFn exported to the global scope
      expect(window.retainInnerFn).to.equal.undefined;
      outerFn();
      expect(window.retainInnerFn).to.be.a('function');
      window.retainInnerFn();
      expect(ACTUAL === 13).to.be.true;
    });
  });
})();
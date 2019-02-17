'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let obj = Object.assign({}, arg.obj1);
    obj.firstName = "Ivan";
    return {obj, arg} /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let obj = Object.assign({...arg.obj1}, {...arg.obj2});
    return {obj, arg};
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    let r = {...arg};
    r.obj1.relatives.forEach(i => {
      if (i.lastName === "Ivanova") {
        i.gender = "female";
      } else {
        i.gender = "male";
      }
    });
    return r;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    return {...arg}
        .obj1.relatives.filter(i => i.gender === "female")
        .map(i => `Hello, ${i.firstName} ${i.lastName}`);
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    document.getElementsByClassName(arg.className)[0].style.backgroundColor = arg.color;
    return '';
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    return arg.hostNames.filter(i => i === location.hostname);
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let m = {};
    for (let key in arg) {
      m[arg[key]] = key;
    }
    return m;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    let t = {};
    let buff = null;
    for (let i in arg) {
      if (arg[i].length % 2 === 1) {
        arg[i].push(null);
      }
      for (let j in arg[i]) {
        if (j % 2 === 1) {
          t[buff] = arg[i][j];
        } else {
          buff = arg[i][j];
        }
      }
    }
    return t;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    let t = {};
    let obj = Object.assign({}, arg.users);
    for (let i in obj) {
      t[obj[i].id] = {"firstName":obj[i].firstName, "lastName":obj[i].lastName};
    }
    return t;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    let c = document.getElementsByClassName(arg.className)[0].children;
    for (let i = 0;i <  c.length;i++) {
      arg.childrenInfo.push({"tagName": c[i].tagName, "className": c[i].className});
    }
    return arg;

  }
}

export default OperationExecutor;

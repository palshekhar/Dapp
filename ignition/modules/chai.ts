

module.exports =  buildModule("chai", (m) => {
  const chaicontract = m.contract("chai");



  m.call(chaicontract, "chaibuytransfer", ["shekhar","hello world"], {
    value: 1_000_000_000n, // 1gwei
  });


  return {chaicontract };
});
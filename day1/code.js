/*
divide 3
round down to whole Number
subtract 2
return sum

function myThing2(b) {
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    sum += (Math.floor((b[i]/3)) - 2);
  };
  return sum;
};
*/

modules = [118602,60644,136064,134771,62530,129043,120233,126092,112839,86210,132501,75894,109369,83641,92700,64983,90418,130659,92555,104100,121330,87819,63021,138752,108491,113214,136107,55602,131025,90689,132480,134220,135760,148945,57010,115909,67605,108478,111094,129875,102541,133169,76547,113079,126981,81066,104994,134551,61053,136512,67895,127712,58077,107426,115178,99316,64532,107293,129534,114100,88382,133621,93803,107214,75795,51422,50876,98171,121970,92130,89814,130753,58561,61666,144353,142168,143592,94461,116978,135420,88165,97926,114772,143455,53613,60408,94299,98996,142167,78063,98974,65392,140263,126726,141285,111074,95977,124871,136636,81935]

function myThing(b) {
  let sum = 0;
  b.forEach(function(mod) {
    sum += (Math.floor((mod/3)) - 2);
  });
  console.log(sum);
};

myThing(modules);
import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

//test with email as empty string and log result
console.log(createUser("", onError, onSuccess));

//test with email as string and log result
console.log(createUser("adlomo23@gmail.com", onError, onSuccess));

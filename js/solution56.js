//LC Defanging an IP address
//
const defangIPaddr = function(address) {
    // return address.replace(/\./g, '[.]')
    return address.split('.').join('[.]')
};

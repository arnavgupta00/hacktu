var obj = {
    userName,
    isAuthenticated
}

export function storeObject(name, isAuthenticated) {
    obj = {
        userName: name,
        isAuthenticated: isAuthenticated
    };
    
}

export function exportObject() {
    return obj;
}

var result = 0 ;
var userInfo =0;
export var AuthenticationFunk = async () => {
    try {
        const response = await fetch('http://localhost:5000/authentication', {
            method: 'GET', 
            credentials: 'include', // Include cookies
          });

        if (response.ok) {
            const fullReturn = await response.json();
            result = fullReturn.verificationStatus;
            userInfo = fullReturn.userInfo;
            authenticationCall = true;
            return authenticationCall
        } else {
            console.error("Failed to make request:", response.statusText);
            authenticationCall = false;
            return authenticationCall
        }
    } catch (error) {
        console.error("Failed to make request:", error);
        authenticationCall = false;
        return authenticationCall
    }
}
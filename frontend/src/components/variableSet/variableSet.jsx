var obj = {
    userName:String,
    isAuthenticated:Boolean
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
            storeObject(formData.userName, true);
            return true
        } else {
            console.error("Failed to make request:", response.statusText);
            storeObject(formData.userName, false);
            return false
        }
    } catch (error) {
        console.error("Failed to make request:", error);
        storeObject(formData.userName, false);
        return false
    }
}
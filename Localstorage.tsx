interface User {
    id: number;
    name: string;
}

const userData = localStorage.getItem("user");

if (userData) {
    const user: User = JSON.parse(userData);
    console.log(user.id, user.name); // Access properties of the user object
}

// remove data

localStorage.removeItem("user");

// function to save user to local storage
function saveUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
}

// Function to retrieve a user from local storage
function getUser(): User | null {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
}

// Function to remove a user from local storage
function removeUser(): void {
    localStorage.removeItem("user");
}
    





  
   
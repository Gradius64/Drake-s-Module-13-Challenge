localStorage.getItem("user");
if (userData) {
    const user: { name: string; age: number } = JSON.parse(userData);
    console.log(user.name); // Output: John Doe
}
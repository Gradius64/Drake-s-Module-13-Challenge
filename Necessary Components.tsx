interface User {
    _id: string;
    username: string;
    email: string;
    bookCount: number;
    
}




const fetchCandidates = async () => {

    

    const response = await fetch('API_URL_TO_FETCH_CANDIDATES');
    if (response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      
    }

    const Quiz = () => {

    // Function to save user to local storage
function saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser(): User | null {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
}





    





  
    }
}

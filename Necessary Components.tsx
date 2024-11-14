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

    const Quiz1 = () => {

    // Function to save user to local storage



    





  
    }
}

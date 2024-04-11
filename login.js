function fetchData() {
    return new Promise((resolve, reject) => {
      fetch("./users.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  function login(event) {
    event.preventDefault();

    fetchData()
      .then((data) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const match = data.find(
          (entry) => entry.username === username && entry.password === password
        );
  
        if (match) {
          window.location.href = "home.html";
          localStorage.setItem("token", username);
        } else {
          alert("Not Found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  
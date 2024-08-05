import pg from "pg";

// Create a new PostgreSQL client
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Login_info",
  password: "1234",
  port: 5432,
});

// Connect to the PostgreSQL database
db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database:", err);
  });

// Assuming you have already retrieved the email, name, and password values from the form inputs
const emailInput = document.querySelector('input[type="email"]');
const nameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Event listener for the form submission
document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Getting the values entered by the user
  const email = emailInput.value;
  const name = nameInput.value;
  const password = passwordInput.value;

  try {
    // Execute the SQL query to insert user info into the user_info table
    const sql = "INSERT INTO user_info (email, name, password) VALUES ($1, $2, $3)";
    const result = await db.query(sql, [email, name, password]);

    console.log("User info inserted successfully");
    // Here you can perform further actions like redirecting to another page or showing a success message
  } catch (error) {
    console.error("Error inserting user info:", error);
    // Handle error appropriately, such as displaying an error message to the user
  }
});
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

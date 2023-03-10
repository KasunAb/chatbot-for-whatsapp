function add_data(connection,number,message, response= "No response") {
    connection.connect((error) => {
        if (error) {
          console.error('Error connecting to MySQL database: ', error);
          return;
        }
      
        console.log('Connected to MySQL database!');
      
        const data = { number: number, message:message ,response:response };
        connection.query('INSERT INTO messages SET ?', data, (error, result) => {
          if (error) {
            console.error('Error inserting row into table: ', error);
            return;
          }
        //   console.log('New row inserted with ID: ', result.insertId);
        });
        connection.end();
      });        
}

export default add_data;

const Login = () => {
    const google = () => {
      window.open(api.googleApi, "_self");
      };
   
   return (               
       <div>
          <button onClick={google}>Gmail</button>
       </div>
      )
    }

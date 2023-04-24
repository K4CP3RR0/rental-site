



const Login = () => {
   
    
    return (
        <form>
            <h1>Login to 808 Rent</h1>
            <div className="form-group">
                <label>Email</label> <br />
                <input type="email" className="form-control" placeholder="Enter email" /><br/>
                <label>Password</label><br/>
                <input type="password" className="form-control" placeholder="Enter password" /><br/>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                

            </div>
        </form>
    );
    };

export default Login;
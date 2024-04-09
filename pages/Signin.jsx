function SigninPage() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div className="App">
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default SigninPage;

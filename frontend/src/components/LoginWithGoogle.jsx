function LoginWithGoogle() {
    const handleGoogleLogin = () => {
        window.location.href = "https://back-app-d0epgqe7gmcwhkhs.northeurope-01.azurewebsites.net/auth/google";
    };

    return (
        <button onClick={handleGoogleLogin}>
            Zaloguj przez Google
        </button>
    );
}

export default LoginWithGoogle;

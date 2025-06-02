function LoginWithGithub() {
    const handleGithubLogin = () => {
        window.location.href = "https://back-app-d0epgqe7gmcwhkhs.northeurope-01.azurewebsites.net/auth/github";
    };

    return (
        <button onClick={handleGithubLogin}>
            Zaloguj przez Github
        </button>
    );
}

export default LoginWithGithub;

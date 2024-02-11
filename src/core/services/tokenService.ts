class TokenService {
	getToken(): string | null {
		return localStorage.getItem("Token");
	}

	hasToken(): boolean {
		return localStorage.getItem("Token") != null;
	}
}

export default new TokenService();

// app/services/auth.server.ts
import { Authenticator } from "remix-auth"
import { GitHubStrategy } from "remix-auth-github"
import { sessionStorage } from "~/services/session.server"

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator(sessionStorage)

const gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: process.env.GITHUB_CALLBACK_URL!,
  },
  async ({ accessToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    return {

    }
  }
)


authenticator.use(gitHubStrategy)
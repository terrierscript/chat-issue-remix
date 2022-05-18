import { ActionFunction, LoaderFunction } from "@remix-run/node"
import { authenticator } from "~/services/auth.server"

export let action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" })
}
export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" })
}
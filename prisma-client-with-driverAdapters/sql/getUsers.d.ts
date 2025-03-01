import * as $runtime from "../runtime/library"

/**
 */
export const getUsers: () => $runtime.TypedSql<getUsers.Parameters, getUsers.Result>

export namespace getUsers {
  export type Parameters = []
  export type Result = {
    id: number
    email: string
    name: string | null
  }
}

export interface AuthorizationOptions {
    hasRole: Array<"admin" | "lead" | "developer"| "none">;
    allowSameUser?: boolean;
}
export interface EnvironmentVariables {
    port: number | string;
    database: unknown | undefined;
    integration: IntegrationProps;
    frontend_origin: string;
    frontend_domain: string;
    electron_origin: string;
}

export interface IntegrationProps {
    elastic: {
        node: string;
        auth: {
            username: string;
            password: string;
        }
    }
}
